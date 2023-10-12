import React,{useEffect,useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setMoreInfo, getMoreInfo} from '../../store/features/Details/detailSlice';
import BackPage from '../../components/BackPage';
import s from '../styles/details.module.scss';
import AddToCart from './AddToCart';
import Characters from './Characters';

const ProductInfo = () => {
    const {name, id} = useParams();

    const location = useLocation();
    const prevUrl = location.state?.prevUrl;
    let genre = prevUrl.split('/'); // genre in url


   
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorite.favorites)

    const moreInfo = useSelector((state)=> state.details.moreInfo); // Подробности об игре
    const games = useSelector((state) =>{
        if (prevUrl === '/') {
            return state.product.ratingGames;
        } 
        else if(prevUrl === '/search'){
            return state.search.searchGames;
        }
        else if(prevUrl === `/products/${genre[2]}`){
            return state.product.genreGames
        }else if(prevUrl === `/favorites`){
            return state.product.ratingGames;
        }

        
    })
    //Выбранная игра
    let selectedGame = games.find((games) => games.id === Number(id)); 
    

    const game = {
        id: Number(id),
        name: name,
        background_image: selectedGame.background_image
    }

  useEffect(() => {
        dispatch(getMoreInfo(id))
     
        favorites.map(f =>{
            f.id === Number(id) ? setFavorite(true) : setFavorite(false)
        })
      
  },[])

    
    return (
        <div className="w-full h-auto bg-pageBg pt-1">
             <Header />
             <div className={s.container}>
                <BackPage />
                <div className={s.this_game}> 
                    <img src={selectedGame.background_image} alt="" className="block w-350 h-510" />

                    <div className={s.game_wrapper}>
                        <Characters 
                            name={name} 
                            selectedGame={selectedGame} 
                            moreInfo={moreInfo}
                        />
                        
                        <AddToCart id={id} game={game} favorite={favorite} />
                    </div>
                </div>
                
                <div className={s.screens}>
                    {
                        selectedGame.short_screenshots.map((i, index) => (
                            <div key={index} >
                                <img src={i.image} alt="" className="" />
                            </div>
                        ))
                    }
                </div>
                    
                <div className={s.description}>
                    <h2 className="font-bold text-xl mb-5">Описание</h2>

                    <p>
                        {moreInfo.description_raw}
                    </p>

                </div>

             </div>
            
            <Footer />
        </div>
    )
}
export default ProductInfo;
