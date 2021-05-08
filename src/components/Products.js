export default function Products(){
    return(
        <div className="products">
            <h2>Primeiro, seu prato</h2>
            <ProductList key="main-course" part="main-course" />
        </div>
    );
}

function ProductList(props){
    return(
        <div className="product-list">
            <div className="card active">
                <img src></img>
                <h2>Frango Yin Yang</h2>
                <p className="description">Um pouco de batata, um pouco de salada</p>
                <div className="last-line">
                    <p className="price">R$14,90</p>
                    <div className="control-qtd">
                        <p className="remove">-</p>
                        <p className="number">1</p>
                        <p className="add">+</p>
                    </div>
                </div>
            </div>
        </div>
    );
}