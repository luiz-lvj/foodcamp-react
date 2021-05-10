import { Link } from 'react-router-dom';

export default function BottomButton(props){
    function isThereMainCourse(){
        console.log(props.products['main_course']);
        let isThere = false;
        for(let i = 0; i< props.products['main_course'].length; i++){
            if(props.products['main_course'][i] > 0){
                isThere = true;
                break;
            }
        }
        return isThere;
    }

    function isThereDrink(){
        console.log(props.products['drink']);
        let isThere = false;
        for(let i = 0; i< props.products['drink'].length; i++){
            if(props.products['drink'][i] > 0){
                isThere = true;
                break;
            }
        }
        return isThere;
    }

    function isThereDesert(){
        console.log(props.products['desert']);
        let isThere = false;
        for(let i = 0; i< props.products['desert'].length; i++){
            if(props.products['desert'][i] > 0){
                isThere = true;
                break;
            }
        }
        return isThere;
    }
    
    const isActiveSell = isThereMainCourse() && isThereDrink() && isThereDesert();
    const classButton = isActiveSell ? "active" : "";
    const textActive = "Fechar Pedido";
    const textInactive = "Selecione os 3 itens para fechar o pedido";
    const textButton = isActiveSell ? textActive : textInactive;
    const linkButton = isActiveSell ? '/revisar' : '/';
    return(
        <div className="bottom-button" >
            <Link to={linkButton} className={classButton}>{textButton}</Link>
        </div>
    );
}