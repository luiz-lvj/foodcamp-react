export default function Product(props){
    return(
        <li className="card active">
            <img src={props.img}></img>
            <h2>{props.name}</h2>
            <p className="description">{props.description}</p>
            <div className="last-line">
                <p className="price">R${props.price.toFixed(2).replace(/\./g, ',')}</p>
                <div className="control-qtd">
                    <p className="remove">-</p>
                    <p className="number">1</p>
                    <p className="add">+</p>
                </div>
            </div>
        </li>
    );
}