import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Baner from './Carousel/Baner';
import EdgeList from './Edge/EdgeList';
import Upcoming from  './UpcomingReleases/Upcoming';
import Brands from './Carousel/Brands'; 
import Footer from '../../components/Footer';

import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsRating} from '../../store/features/Product/productSlice';



const Home = () =>{
    
  const dispatch = useDispatch();
  const ratingGames = useSelector((state) => state.product.ratingGames)

    useEffect(() => {
      dispatch(getProductsRating())
    }, [dispatch])
    
    return(
        <div className="w-full h-auto bg-pageBg">
            <Header />
            <Baner />
            
            <EdgeList />

            <div className="w-10/12 mx-auto">
                <h2 className="text-white  text-xl font-bold mb-5">Лучшие предложения</h2>
                <ProductList products={ratingGames} />
            </div>

            <Upcoming />
            <Brands />
            <Footer />
        </div>
    )
}
export default Home;