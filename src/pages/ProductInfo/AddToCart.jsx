import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../store/features/Cart/cartSlice';
import {addFavorite, removeFavorite} from '../../store/features/Favorites/favoriteSlice';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

import s from '../styles/details.module.scss';

const AddToCart = ({id, game, favorite}) => { 
    const dispatch = useDispatch();

    let isFavorite = useSelector((state) => {
        return state.favorite.favorites.some((game) => game.id === id);
    });

    const favoriteToggle = () => {
        if(!isFavorite && !favorite){
          dispatch(addFavorite(game))
        }else {
          dispatch(removeFavorite(game.id))
        }
    };
    return (
        <div className={s.order_wraper}>
            <span className="text-2xl font-bold">{id} w</span>

            <div className="flex items-center mt-3 justify-between w-full">
                    <button 
                        className="mt-4 w-4/5 bg-orng text-xl font-bold text-white p-3"
                        onClick={()=>dispatch(addToCart(game))}
                    >
                        В корзину
                    </button>
                    {isFavorite || favorite ? (
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
export default AddToCart