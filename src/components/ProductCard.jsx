import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/features/Favorites/favoriteSlice';
import {addToCart} from '../store/features/Cart/cartSlice';
import { Link } from 'react-router-dom';

import s from './styles/productCard.module.scss';

const ProductCard = ({background_image, name, cost}) =>{
    const game = {
        id: cost,
        name: name,
        background_image: background_image
    }

    const dispatch = useDispatch();
    const isFavorite = useSelector((state) => {
        return state.favorite.favorites.some((game) => game.id === cost);
    });
    

    const favoriteToggle = () => {
      if(!isFavorite){
        dispatch(addFavorite(game))
      }else {
        dispatch(removeFavorite(game.id))
      }
    };


    return (
        <div className={s.container}> 

           <Link 
                to={`/product_info/${name}/${cost}`}
                state={{ prevUrl: window.location.pathname }}
           >
                
                <img src={background_image} alt="" className={s.product_image} />
           </Link>
            
            <p className={s.product_name}>{name}</p>
            <span className={s.product_price}>{cost} W</span>

            
            <div className={s.control_wrapper}>
                <button 
                    onClick={()=>dispatch(addToCart(game))}
                    type='button'
                    className="w-160 bg-orng text-white text-lg font-medium text-center p-4"
                >В корзину</button>
                {isFavorite ? (
                    <AiFillHeart
                        size={40}
                        className="text-orng cursor-pointer"
                        onClick={favoriteToggle}
                    />
                  ) : (
                    <AiOutlineHeart
                        size={40}
                        className="text-orng cursor-pointer"
                        onClick={favoriteToggle}
                    />
                )}
            </div>
        </div>
    )
}
export default ProductCard;
