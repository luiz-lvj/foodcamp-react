import mainImage from './assets/prato_principal.png';
import drinkImage from './assets/bebida.png';
import desertImage from './assets/sobremesa.png';

export default function ProductsData(mealPart, numberProducts){
    let partName = "";
    let descpritionPart = "";
    let initialPrice = 0;
    let image;
    if(mealPart === "main-course"){
        partName = "Prato";
        descpritionPart = "Esse é um ótimo prato, muito bom mesmo";
        initialPrice = 15.00;
        image = mainImage;
    }
    else if(mealPart === "drink"){
        partName = "Bebida";
        descpritionPart = "Essa é uma bela de uma bebida gelada";
        initialPrice = 7.80;
        image = drinkImage;
    }
    else if(mealPart === "desert"){
        partName = "Sobremesa";
        descpritionPart = "Essa é uma sobremsa realmente muito boa";
        initialPrice = 5.00;
        image = desertImage;
    }
    else return [];

    let products = [];
    for(let i = 1; i<= numberProducts; i++){
        const obj = {
            name: partName + " " + i,
            description: descpritionPart,
            price: initialPrice*(1 + i*0.06),
            image: image
        };
        products.push(obj);
    }

    return products;
}