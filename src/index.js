import ReactDOM from 'react-dom';
import TopPage from './components/TopPage';
import BottomButton from './components/BottomButton';
import AllProducts from './components/AllProducts';
import React from 'react';
import './reset.css';
import './styles.css';

export default function App(){
    const qtdMain = 8;
    const qtdDrink = 5;
    const qtdDesert = 6;
    const quantities = {
        'main_course': new Array(qtdMain).fill(0),
        'drink': new Array(qtdDrink).fill(0),
        'desert': new Array(qtdDesert).fill(0)
    }
    const [productsQuant, setProductsQuant] = React.useState(quantities);
    return(
        <>
        <TopPage/>
        <AllProducts
        productsQuant={productsQuant}
        setProductsQuant={setProductsQuant}
        qtdMain={qtdMain}
        qtdDrink={qtdDrink}
        qtdDesert={qtdDesert}
        />
        <BottomButton products={productsQuant}/>
        </>
    );
}

const app = <App/>;

ReactDOM.render(app, document.querySelector(".root"))