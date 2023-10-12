import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Order from './Order/Order';
import FinishPopUp from './Order/FinishPopUp';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import BackPage from '../../components/BackPage';

import s from '../styles/cart.module.scss';

const Cart = () => {
    const [isFinish, setIsFinish] = useState(false);

    const cart = useSelector((state) => state.cart.cart)
    const cartLength = cart.length;
   
     //общеее количество товаров
     const getTotalQuantity = () =>{
        return cart.reduce((x, y) => x + y.quantity, 0)
    } 
 
     //общая стоимость товаров
     const getTotalPrice = () =>{
         return cart.reduce((x, y) => x + y.id * y.quantity, 0)
    } 

    const openFinishOrder = () => setIsFinish(true);
    const closeFinishOrder = () => setIsFinish(false);
     

    return(
        <div className="w-full h-auto bg-pageBg pt-5">
            <Header />

            <div className={s.container}>
                

                {cartLength === 0 ? (
                    <div className="w-full mx-auto mt-10 pb-10">
                        <BackPage />
                        <h2 className="text-xl font-bold">Корзина</h2>
                        <div>
                            <div className="mt-28 text-center mx-auto text-3xl font-medium">Корзина пуста</div>
                            <Link to="/">
                                <p className="mt-5 text-center underline">Вернуться к покупкам</p>
                            </Link>
                            
                        </div>
                    </div>
                  ) : (

                    <div className={s.cart_wrapper}> 
                        <BackPage />
                        <h2 className="text-white text-xl font-bold">Корзина</h2>

                        <div className={s.cart}> 
                            <div className={s.products}> 
                                {cart.map((game) => (
                                        <div key={game.id}>
                                            <Order
                                                img={game.background_image} 
                                                name={game.name} 
                                                price={game.id}
                                                quantity={game.quantity}
                                            />
                                        </div>
                                            
                                ))}
                            </div>
                            
                            <div className={s.transaction_info}>
                                <p className="text-2xl font-bold">Итого: {getTotalPrice()} W</p>
                                <p className="text-lg font-medium">В корзине: {getTotalQuantity()} товаров</p>

                                <button 
                                    className="bg-orng w-full py-5 rounded-xl mt-10 text-center text-md font-bold text-white"
                                    onClick={openFinishOrder}
                                >
                                     Оформить заказ
                                </button>
                            </div>
                        </div>
                         { isFinish ?
                            <FinishPopUp isOpen={openFinishOrder} onClose={closeFinishOrder} />
                            :
                            ""
                         }               
                        
                    </div>
                    
                  )

                }
                
            </div>

            <Footer />
        </div>
    )
}
export default Cart;