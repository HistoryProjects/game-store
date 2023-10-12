import {AiOutlineCloseCircle} from 'react-icons/ai';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import Counter from '../../../components/Counter';
import {removeItem} from '../../../store/features/Cart/cartSlice';
import {addFavorite, removeFavorite} from '../../../store/features/Favorites/favoriteSlice';
import {useDispatch, useSelector} from 'react-redux';

import s from '../../styles/cartOrder.module.scss';

const Order = ({img, name, price, quantity}) =>{
    
    const ID = price;
    const dispatch = useDispatch();
  
    const isFavorite = useSelector((state) => {
        return state.favorite.favorites.some((game) => game.id === ID);
    });

    const game = {
        id: ID,
        name: name,
        background_image: img
    }

    const favoriteToggle = () => {
        if(!isFavorite){
          dispatch(addFavorite(game))
        }else {
          dispatch(removeFavorite(game.id))
        }
    };

   

    return (
        <div className={s.container}> 
            
            <img src={img} alt="" width={150} />
            <div className={s.order_wrapper}> 
                <div className={s.product_info}>
                    <p>{name}</p>
                    <div className={s.order_controls}> 
                        <Counter id={ID} quantity={quantity} />
                        
                        <AiOutlineCloseCircle 
                            size={35} className="text-dopColor cursor-pointer hover:text-red-600" 
                            onClick={()=>dispatch(removeItem(ID))}
                        />
                    </div>
                </div>
                
                <div className={s.favoriteIcon_wrap}>
                    <span>{price} W</span>
                    {isFavorite ? (
                        <AiFillHeart
                            size={30}
                            className="text-orng cursor-pointer"
                            onClick={favoriteToggle}
                        />
                        ) : (
                        <AiOutlineHeart
                            size={30}
                            className="text-orng cursor-pointer"
                            onClick={favoriteToggle}
                        />
                    )}
                    
                </div>
            </div>

        </div>
        
    )
}
export default Order;

