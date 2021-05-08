import ReactDOM from 'react-dom';
import TopPage from './components/TopPage';
import BottomButton from './components/BottomButton';

export default function App(){
    return(
        <>
        <TopPage/>
        <BottomButton/>
        </>
    );
}

const app = <App/>;

ReactDOM.render(app, document.querySelector(".root"))