import ReactDOM from 'react-dom';
import TopPage from './components/TopPage';
import BottomButton from './components/BottomButton';
import Products from './components/Products';
import './reset.css';
import './styles.css';

export default function App(){
    return(
        <>
        <TopPage/>
        <Products/>
        <BottomButton/>
        </>
    );
}

const app = <App/>;

ReactDOM.render(app, document.querySelector(".root"))