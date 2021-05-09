import ProductsData from './ProductsData';
import Product from './Product';
import React from 'react';

export default function AllProducts(props){
    
    const allMeals = {
        'main_course': ProductsData('main_course', props.qtdMain),
        'drink': ProductsData('drink', props.qtdDrink),
        'desert': ProductsData('desert', props.qtdDesert)
    }
    
    function ProductList(propsChilden){
        const products = allMeals[propsChilden.part]
        return(
            <ul className="product-list">
                {products.map((item, idx)=>{
                    return <Product
                    key={idx}
                    id={idx}
                    name={item.name} 
                    description={item.description}
                    price={item.price}
                    img={item.image}
                    allProd={props.productsQuant}
                    part={propsChilden.part}
                    setAllProd={props.setProductsQuant}
                    qtd={props.productsQuant[propsChilden.part][idx]}
                    />
                })}
            </ul>
        );
    }

    return(
        <div className="products">
            <h2>Primeiro, seu prato</h2>
            <ProductList key="main_course" part="main_course"/>
            <h2>Agora, sua bebida</h2>
            <ProductList key="drink" part="drink"/>
            <h2>Por fim, sua sobremesa</h2>
            <ProductList key="desert" part="desert"/>
        </div>
    );
}



