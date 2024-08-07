import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount, getTotalCartItems, removeCartItems } = useContext(ShopContext);

  const handleCheckout = () => {
    const totalItems = getTotalCartAmount();
    alert(`Thankyou for puchasing in our website 
           Your total payment amount is ₱${totalItems}
           The item will arrive 2-3 days depends on your location.`);
    removeCartItems()
  };

  return (
    <section className='max_padd_container pt-28'>
      <table className='w-full mx-auto'>
        <thead className='bg-slate-900/10 regular-18 sm:reguular-22 text-start py-12'>
          <tr>
            <th className='p-1 py-2'>Products</th>
            <th className='p-1 py-2'>Title</th>
            <th className='p-1 py-2'>Price</th>
            <th className='p-1 py-2'>Quantity</th>
            <th className='p-1 py-2'>Total</th>
            <th className='p-1 py-2'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr key={e.id} className='text-gray-30 border-b border-slate-900/20 p-6 font-medium-14 text-center'>
                  <td className='flexCenter'><img className='rounded-lg ring-1 ring-slate-900/5 my-1' src={e.image} alt="imageProd" height={43} width={43} /></td>
                  <td><div className='line-clamp-3'>{e.name}</div></td>
                  <td>{e.new_price}</td>
                  <td className='w-16 h-16 bg-white'>{cartItems[e.id]}</td>
                  <td>{e.new_price * cartItems[e.id]}</td>
                  <td>
                    <div className='bold-22 pl-14 cursor-pointer'><TbTrash onClick={() => removeFromCart(e.id)} /></div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <div className='flex flex-col gap-20 my-16 p-8 md:fkex-row rounded-md bg-white w-full max-w-[666px]'>
        <div className='flex flex-col gap-10'>
          <h4 className='bold-20'>Summary</h4>
          <div>
            <div className='flexBetween py-4'>
              <h4 className='medium-16'>Subtotal:</h4>
              <h4 className='text-gray-30 font-semibold'>₱{getTotalCartAmount()}</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4 className='medium-16'>Shipping Fee:</h4>
              <h4 className='text-gray-30 font-semibold'>₱{0}</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4 className='bold-18'>Total:</h4>
              <h4 className='bold-18'>₱{getTotalCartAmount()}</h4>
            </div>
            <button className='btn_dark_rounded' onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
