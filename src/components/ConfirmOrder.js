import ProductsData from './ProductsData';
import TopPage from './TopPage';
import OrderListed from './OrderListed';

export default function ConfirmOrder(props){
    let totalPrice = 0;
    let mainCoursesToSell = [];
    let desertsToSell = [];
    let drinksToSell = [];
    setProductsToSell();
    function setProductsToSell(){
        const allMeals = {
            'main_course': ProductsData('main_course', props.products['main_course'].length),
            'drink': ProductsData('drink', props.products['drink'].length),
            'desert': ProductsData('desert', props.products['desert'].length)
        }
        totalPrice = 0;
        mainCoursesToSell = [];
        desertsToSell = [];
        drinksToSell = [];
        
        for(let i = 0; i< props.products['main_course'].length; i++){
            if(props.products['main_course'][i] > 0){
                const obj = {
                    name: allMeals['main_course'][i].name,
                    price: allMeals['main_course'][i].price,
                    qtd: props.products['main_course'][i]
                }
                totalPrice += allMeals['main_course'][i].price * props.products['main_course'][i];
                mainCoursesToSell.push(obj);
            }
        }

        for(let i = 0; i< props.products['drink'].length; i++){
            if(props.products['drink'][i] > 0){
                const obj = {
                    name: allMeals['drink'][i].name,
                    price: allMeals['drink'][i].price,
                    qtd: props.products['drink'][i]
                }
                totalPrice += allMeals['drink'][i].price * props.products['drink'][i];
                drinksToSell.push(obj);
            }
        }

        for(let i = 0; i< props.products['desert'].length; i++){
            if(props.products['desert'][i] > 0){
                const obj = {
                    name: allMeals['desert'][i].name,
                    price: allMeals['desert'][i].price,
                    qtd: props.products['desert'][i]
                }
                totalPrice += allMeals['desert'][i].price * props.products['desert'][i];
                desertsToSell.push(obj);
            }
        }
    }
    return(
        <>
        <TopPage/>
        <OrderListed 
        mainCourses={mainCoursesToSell}
        deserts={desertsToSell}
        drinks={drinksToSell}
        total={totalPrice}
        />
        </>
        
    );
}