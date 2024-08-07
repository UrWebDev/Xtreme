const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const port = 3000
const { type } = require('os')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://ecommercePimints:charlizepanget@cluster0.ttjnk4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

//api
app.get('/', (req,res) => {
    res.send("express app is running")
})


//schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    includes: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        defaiult: Date.now,
    },
    availability: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req,res) => {
    let products = await Product.find({})
    let id
    if(products.length > 0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id +1
    }else{
        id = 1
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        desc: req.body.desc,
        includes: req.body.includes,
    })
    console.log(product)
    await product.save()
    console.log('saved')
    res.json({
        success: true,
        name: req.body.name,
    })
})

//creating api for remove products
app.post('/removeproduct', async(req,res) => {
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed")
    res.json({
        success: true,
        name: req.body.name,
    })
})

//create api for all products
app.get('/allproductsS', async(req,res) => {
    let products = await Product.find({})
    console.log('all products fetched')
    res.send(products)
})

//image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})
//createing upload endpoint for img's
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'),(req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:3000/images/${req.file.filename}`
    })
})

//schema for user model
const User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

//crearing enpoint for registering the user
app.post('/signup', async(req,res) => {
    let check = await User.findOne({email: req.body.email})
    if(check){
        return res.status(400).json({
            success: false,
            errors: "existing user found with the same emailadd"
        })
    }
    let cart = {}
    for (let i = 0; i < 300; i++){
        cart[i] = 0
    }
    
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save()

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom')
    res.json({
        success: true,
        token
    })
})

//creating end point for user login
app.post('/login', async(req,res) => {
    let user = await User.findOne({email: req.body.email})
    if(user){
        const passMatch = req.body.password === user.password
        if(passMatch){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom')
            res.json({success: true, token})
        }else{
            res.json({success:false, errors: "wrong pass"})
        }
    }else{
        res.json({success: false,  errors: 'wrong email add'})
    }
})

//craeting endpoint for popularpprudcts
app.get('/newcollections', async(req,res) => {
    console.log("wew");
    let products = await Product.find({})
    let newcollection = products.slice(1).slice(-8)
    console.log('new colle fethced')
    res.send(newcollection)
})



app.get('/newcollectionsAllRandom', async (req, res) => {
    try {
        let products = await Product.find({});
        if (products.length === 0) {
            return res.status(404).send('No products found');
        }

        let randomIndex = Math.floor(Math.random() * products.length);
        let randomProduct = products[randomIndex];

        console.log('Random product fetched:', randomProduct);
        res.send([randomProduct]);  // Ensure this sends an array
    } catch (error) {
        console.error('Error fetching random product:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Dynamic endpoint to fetch products by category erfcin
app.get('/collections/:category', async (req, res) => {
    const category = req.params.category.replace(":", "");   

    console.log(category);
    try {
        let products = await Product.find({ category: category });
        console.log(`${category} collection fetched`);
        console.log(products);
        res.send(products);
    } catch (error) {
        console.error(`Error fetching ${category} collection:`, error);
        res.status(500).send('Internal Server Error');
    }
});


//craeting endpoint for latestpprudcts
app.get('/popularproducts', async(req,res) => {
    // pwede ko dito math.random para shuffle yung categories
    let products = await Product.find({category: "women"})
    let popularproducts = products.slice(0,4)
    console.log('popular prod fethced')
    res.send(popularproducts)
})

//createing middlewar to fectch user
const fetchUser = async(req,res , next) => {
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({errors: 'pkease authenticate using valid login'})
    }else{
        try{
            const data = jwt.verify(token,'secret-ecom')
            req.user = data.user
            next()
        }catch(error){
            res.status(401).send({errors: 'pkease authenticate using valid token'})
        }
    }
}

//craeting endpoint for adding product in cartdata
app.post('/addtocart', fetchUser, async(req,res) => {
    let userData = await User.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] += 1
    await User.findByIdAndUpdate({_id: req.body.id},{cartData: userData.cartData})
    res.send("Added")
})

//craeting endpoint for removing product in cartdata
app.post('/removefromcart', fetchUser, async(req,res) => {
    let userData = await User.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] -= 1
    if(userData.cartData[req.body.itemId] > 0){
        await User.findByIdAndUpdate({_id: req.body.id},{cartData: userData.cartData})
    }
    res.send("removed")
})

//creatingg endpoint to gert cart data
app.post('/getcart', fetchUser , async(req,res)=> {
    let userData = await User.findOne({_id: req.body.id})
    res.json(userData.cartData)
})

app.listen(port, (er) => {
    if(!er){
        console.log('running' + port)
    }else{
        console.log('err' + er)
    }
})