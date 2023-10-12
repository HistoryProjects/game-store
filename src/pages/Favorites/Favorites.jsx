import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {cleanFavorites} from '../../store/features/Favorites/favoriteSlice';
import BackPage from '../../components/BackPage';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorite.favorites)
    const favoritesLength = favorites.length;

    return(
        <div className="w-full h-auto bg-pageBg pt-5">
            <Header />

            <div className="w-10/12 mx-auto text-white mb-60">
                {favoritesLength === 0 ? (
                    <div className="w-full mx-auto mt-10 pb-10">
                        <BackPage />
                        <h2 className="text-xl font-bold">Избранное (<span>{favoritesLength}</span>)</h2>
                        <div>
                            <div className="mt-28 text-center mx-auto text-3xl font-medium">Список избранного пуст</div>
                            <p className="mt-5 text-center">
                                Для добавления товаров в избранное<br/> 
                                перейдите на главную или в каталог
                            </p>
                        </div>
                        
                    </div>
                  ) : (
                    <div className="w-full mx-auto mt-10 pb-14">
                        <BackPage />
                        <div className="flex items-center gap-6 mb-8">
                        
                            <h2 className="text-white text-xl font-bold">Избранное (<span>{favoritesLength}</span>)</h2>
                            <span 
                                className="text-dopColor text-lg underline cursor-pointer"
                                onClick={()=>  dispatch(cleanFavorites()) }
                            >Очистить</span>
                        </div>
                       
                        <ProductList products={favorites} />
                    </div>
                  )

                }
                
            </div>

            <Footer />
        </div>
    )
}
export default Favorites;