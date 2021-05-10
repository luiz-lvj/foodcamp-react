
import TopPage from './TopPage';
import BottomButton from './BottomButton';
import AllProducts from './AllProducts';

export default function HomeScreen(props){
    return(
        <>
            <TopPage/>
            <AllProducts
            productsQuant={props.productsQuant}
            setProductsQuant={props.setProductsQuant}
            qtdMain={props.qtdMain}
            qtdDrink={props.qtdDrink}
            qtdDesert={props.qtdDesert}
            />
            <BottomButton products={props.productsQuant}/>
        </>
    );
}