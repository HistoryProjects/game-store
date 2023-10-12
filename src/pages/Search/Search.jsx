import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useSelector} from 'react-redux';
import ProductList from '../../components/ProductList';

const Search = () => {
    
    const searchGames = useSelector((state)=> state.search.searchGames)

    return(
        <div className="w-full bg-pageBg">
             <Header />

             <div className="mt-10 w-10/12 mx-auto">
                  <h1 className="text-white  text-xl font-bold mb-5">Search</h1>

                   <ProductList products={searchGames} />
             </div>
             
             <Footer />
        </div>
    )
}
export default Search;