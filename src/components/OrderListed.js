import { Link } from 'react-router-dom';
export default function OrderListed(props){
    function sendMessage(){
        let mainCoursesToSell = props.mainCourses;
        let drinksToSell = props.drinks;
        let desertsToSell = props.deserts;
        let totalPrice = props.total;

        let strToSend = "Olá, gostaria de fazer o pedido:\n";
        strToSend += "-Pratos:\n";
        for(let i = 0; i< mainCoursesToSell.length; i++){
            strToSend += mainCoursesToSell[i].name;
            if(mainCoursesToSell[i].qtd > 1){
                strToSend += ` (${mainCoursesToSell[i].qtd}X)`;
            }
            strToSend += "\n";
        }
        strToSend += "-Bebidas:\n";
        for(let i = 0; i< drinksToSell.length; i++){
            strToSend += drinksToSell[i].name;
            if(drinksToSell[i].qtd > 1){
                strToSend += ` (${drinksToSell[i].qtd}X)`;
            }
            strToSend += "\n";
        }
        strToSend += "-Sobremesas:\n";
        for(let i = 0; i< desertsToSell.length; i++){
            strToSend += desertsToSell[i].name;
            if(desertsToSell[i].qtd > 1){
                strToSend += ` (${desertsToSell[i].qtd}X)`;
            }
            strToSend += "\n";
        }
        strToSend += "Total: R$ "+totalPrice.toFixed(2);
        const urlWpp = "https://wa.me/";
        const strWpp = urlWpp + "?text=" + encodeURIComponent(strToSend);

        window.open(strWpp);
    }

    return(
        <div className="products check">
            <h2>Revise seu pedido</h2>
            <ul className="check-card">
                {props.mainCourses.map((item)=>{
                    return <ItemToSell name={item.name} price={item.price} qtd={item.qtd}/>
                })}
                {props.drinks.map((item)=>{
                    return <ItemToSell name={item.name} price={item.price} qtd={item.qtd}/>
                })}
                {props.deserts.map((item)=>{
                    return <ItemToSell name={item.name} price={item.price} qtd={item.qtd}/>
                })}
                
                <li>
                    <p className="total">TOTAL</p>
                    <p className="total">R${props.total.toFixed(2).replace(/\./g, ',')}</p>
                </li>
            </ul>
            <button onClick={sendMessage}>Tudo certo, pode pedir!</button>
            <Link to='/'>Cancelar</Link>
        </div>
    );

}

function ItemToSell(props){
    return(
        <li>
            <p>{props.name}{props.qtd > 1 ? ` (${props.qtd}X)`: ``}</p>
            <p>R${(props.price*props.qtd).toFixed(2).replace(/\./g, ',')}</p>
        </li>
    );
}