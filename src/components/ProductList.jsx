import ProductCard from "./ProductCard"; 
import s from './styles/productList.module.scss';


const ProductList = ({products}) =>{
    return (
        <div className={s.wrapper}>
              {products.map((game, index) => (
                    <div key={game.id}>
                        <ProductCard 
                            background_image={game.background_image} name={game.name} cost={game.id}
                        />
                    </div>
                        
              ))}
        </div>
    );

}
export default ProductList;

