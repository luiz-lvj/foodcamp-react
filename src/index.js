import ReactDOM from 'react-dom';
import TopPage from './components/TopPage';
import BottomButton from './components/BottomButton';
import AllProducts from './components/AllProducts';
import './reset.css';
import './styles.css';

export default function App(){
    return(
        <>
        <TopPage/>
        <AllProducts/>
        <BottomButton/>
        </>
    );
}

const app = <App/>;

ReactDOM.render(app, document.querySelector(".root"))