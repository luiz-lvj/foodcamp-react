import ProductsData from './ProductsData';
import Product from './Product';

export default function AllProducts(){
    const qtdMain = 8;
    const qtdDrink = 5;
    const qtdDesert = 6;

    function ProductList(props){
        const products = ProductsData(props.part, props.qtd);
        return(
            <ul className="product-list">
                {products.map((item)=>{
                    return <Product name={item.name} description={item.description} price={item.price} img={item.image}/>
                })}
            </ul>
        );
    }

    return(
        <div className="products">
            <h2>Primeiro, seu prato</h2>
            <ProductList key="main-course" part="main-course" qtd={qtdMain}/>
            <h2>Agora, sua bebida</h2>
            <ProductList key="drink" part="drink" qtd={qtdDrink}/>
            <h2>Por fim, sua sobremesa</h2>
            <ProductList key="desert" part="desert" qtd={qtdDesert}/>
        </div>
    );
}



