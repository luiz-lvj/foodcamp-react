import React from 'react';

export default function Product(props){
    const classActive = "card active";
    const classInactive = "card";
    const initialClass = props.qtd === 0 ? classInactive : classActive;
    const [selectionCard, setSelectionCard] = React.useState(initialClass);
    const [qtdProducts, setQtdProducts] = React.useState(props.qtd);

    function selectCard(){
        if(selectionCard === classActive){
            return;
        }
        setSelectionCard(classActive);
        addItem();
    }
    
    function addItem(){
        setQtdProducts(qtdProducts + 1);
        setProductsToSell(qtdProducts + 1);
    }

    function removeItem(){
        if(qtdProducts <= 0){
            return;
        }
        if(qtdProducts === 1){
            setSelectionCard(classInactive);
        }
        setQtdProducts(qtdProducts - 1);
        setProductsToSell(qtdProducts - 1);
    }

    function setProductsToSell(qtd){
        let products = {...props.allProd};
        let productsToSell = [...props.allProd[props.part]];
        productsToSell[props.id] = qtd;
        products[props.part] = productsToSell;
        console.log(products);
        props.setAllProd(products);
    }
    return(
        <li className={selectionCard} onClick={selectCard}>
            <img src={props.img} alt=""></img>
            <h2>{props.name}</h2>
            <p className="description">{props.description}</p>
            <div className="last-line">
                <p className="price">R${props.price.toFixed(2).replace(/\./g, ',')}</p>
                <div className="control-qtd">
                    <p className="remove" onClick={removeItem}>-</p>
                    <p className="number">{qtdProducts}</p>
                    <p className="add" onClick={addItem}>+</p>
                </div>
            </div>
        </li>
    );
}