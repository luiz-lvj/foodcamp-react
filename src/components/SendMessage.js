import ProductsData from './ProductsData';

export default function SendMessage(products){
    const allMeals = {
        'main_course': ProductsData('main_course', products['main_course'].length),
        'drink': ProductsData('drink', products['drink'].length),
        'desert': ProductsData('desert', products['desert'].length)
    }
    let totalPrice = 0;
    let mainCoursesToSell = [];
    for(let i = 0; i< products['main_course'].length; i++){
        if(products['main_course'][i] > 0){
            const obj = {
                name: allMeals['main_course'][i].name,
                qtd: products['main_course'][i]
            }
            totalPrice += allMeals['main_course'][i].price * products['main_course'][i];
            mainCoursesToSell.push(obj);
        }
    }

    let drinksToSell = [];
    for(let i = 0; i< products['drink'].length; i++){
        if(products['drink'][i] > 0){
            const obj = {
                name: allMeals['drink'][i].name,
                qtd: products['drink'][i]
            }
            totalPrice += allMeals['drink'][i].price * products['drink'][i];
            drinksToSell.push(obj);
        }
    }

    let desertsToSell = [];
    for(let i = 0; i< products['desert'].length; i++){
        if(products['desert'][i] > 0){
            const obj = {
                name: allMeals['desert'][i].name,
                qtd: products['desert'][i]
            }
            totalPrice += allMeals['desert'][i].price * products['desert'][i];
            desertsToSell.push(obj);
        }
    }

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