import ReactDOM from 'react-dom';
import './reset.css';
import './styles.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ConfirmOrder from './components/ConfirmOrder';
import React from 'react';

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
        <Switch>
            <Route path='/' exact component = {() => <HomeScreen 
            qtdMain={qtdMain}
            qtdDrink={qtdDrink}
            qtdDesert={qtdDesert}
            productsQuant={productsQuant}
            setProductsQuant={setProductsQuant}
            />}/>
            <Route path='/revisar' component={()=> <ConfirmOrder products={productsQuant}/>}/>
        </Switch>
        
        </>
    );
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector(".root"))