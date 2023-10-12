import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import React, { useEffect} from 'react';
import { useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    getProductsGenre, setNextPage, 
    setCurrentPage, cleanGenreGames
} from '../../store/features/Product/productSlice';
import BackPage from '../../components/BackPage';


const Products = () =>{
    const {genre} = useParams();
    const dispatch = useDispatch();
    const genreGames = useSelector((state) => state.product.genreGames)
    const currentPage = useSelector((state) => state.product.currentPage);

   useEffect(() => {
       dispatch(setCurrentPage(1))
       dispatch(cleanGenreGames());

       dispatch(getProductsGenre({ genre: genre.toLowerCase(), page: currentPage })); 
    },[dispatch, genre, currentPage])

    const nextPage = ()=>{
        dispatch(setNextPage())
    }

    return(
        <div className="bg-pageBg pt-5">
            <Header />

            <div className="mt-10 w-10/12 mx-auto">
                
                <BackPage />
                <div className="flex items center justify-start">
                    <h1 className="text-white  text-xl font-bold mb-5">Каталог</h1>
                </div>

                <ProductList products={genreGames} />

                <button 
                    className="mx-auto block border-4 border-orng rounded-[40px] px-7 py-4 text-orng mt-8"
                    onClick={nextPage}
                >
                    Показать еще
                </button>
            </div>
            
            <Footer />
        </div>
    )
}
export default Products;


