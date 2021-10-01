//
//     console.log("Jippie, maar hij werkt nog niet echt:( Wacht:wat is anders? Yay!!! :)");
//
// console.log("hoe gaat het?");
// console.log("123456789");
// console.log("Ik heb eigelijk niks beters te doen");


//
// let greeter = "Hoihoi!";
//
// greeter = "Goeiemorgen!";
// greeter = "Hallo allemaal!";
//
// console.log(greeter); // geeft “Hallo allemaal!”


    //
    //
    //
    // const greeter = "Hoihoi!";
    //
    // greeter = "Hallo allemaal!";
    //
    // console.log(greeter); // geeft “TypeError: Assignment to constant variable.”
    //


const school = "Novi School!!!!";
console.log(school);

let counter = 0;
// voer wat dingen uit
counter = 1;
console.log(counter);

counter = 2;
console.log(counter);

counter = 3;
console.log(counter);



const ruleSetOptions = 4;
console.log(ruleSetOptions);

const ruleSetOptions5 = 5;
console.log(ruleSetOptions5);

const capital = "H";
console.log(capital);


let counter2 = 6;
console.log(counter2);

counter2 = 7;
console.log(counter2);

counter2 = 8;
console.log(counter2);

counter2 = 9;
console.log(counter2);

const numberOfLamps = 4;
console.log(numberOfLamps);

const isLightOn = false;
console.log(isLightOn);

const question = "Heb ik het licht wel uit gedaan?"
console.log(question);

let shoppingCart = null;
console.log(shoppingCart);

let banana = 42;
console.log(banana);

let banana1 = "yellow";
console.log(banana1);

let banana3 = "true";
console.log(banana3);

let banana4 = "I dont know";
console.log(banana4);

let count = 2 + 2;
console.log(count);

let count1 = "2" + 2;
console.log(count1);

let count2 = "2" + "2" - 6;
console.log(count2);

const houseNumber = 12;
const street = "prinseslaan";
const address = street + houseNumber;
console.log(address);

const score1 ="seven";
const score2 ="four";
const total = score1 + score2;
console.log(total);

console.log(address);
console.log(total);

const grade = 1.1;

if (grade >= 5.5) {
    console.log("je hebt gehaald");
}

else {
    console.log("je hebt niet gehaald");
}


const recipe = "spinazie lasagne"

if (recipe !== undefined)

console.log("vandaag maken we het recept: " + recipe);

else {
    recipe == 's l';
}


const gradeX =4;
const isPassed = gradeX >= 5.5;
console.log("student passed:" + " -> " + isPassed);

//
// const ingredients = boodschappen;
//
// if ((ingredients != undefined)) && (ingredients.length > 3)) {
//     console.log("we kunnen boodschappen doen!");
// }


const gradeY = 4;

if (gradeY < 5.5) {
    console.log('Onvoldoende');
}

if ((gradeY >= 5.5 && gradeY < 8)) {
    console.log('Voldoende');
}

if (gradeY >= 8){
    console.log("excellent");
}


const gr = 6;

if (gr < 5.5){
    console.log("fail");
}

if ((gr >=5.5 & gr < 8)){
    console.log("pass")

}

if (gr >= 8){
    console.log("passed with distinction");
}

//liever niet gebruiken want de optie voor is veel beter
const gradez = 8.7;

if (gradez < 5.5) {
    console.log('Onvoldoende');
} else if ((gradez >= 5.5 && gradez < 8)) {
    console.log('Voldoende');
} else {
    console.log('Goed');
} // geeft “Goed” want geen van bovenstaande condities is waar op dit moment


const fruit = 'sinasapple';

switch (fruit) {
    case 'Bananen':
        console.log('Het zijn bananen!');
        break;
    case 'Appels':
        console.log('Het zijn appels!');
        break;
    case 'Citroenen':
        console.log('Het zijn citroenen!');
        break;
    case 'Apricots':
    console.log('Het zijn aprikozen');
    break;
    case 'Mango':
        console.log('Het zijn mangoes');
        break;

    default:
        console.log('Er is geen vrucht gekozen');
}



const vegetables = 'spinach';

switch (vegetables){
    case 'pumpkin':
        console.log('its pumpkin time');
        break;
    case 'tomato':
        console.log('its tomato time');
        break;
    case 'potato':
        console.log('its potato time');
        break;

    default:
        console.log('sorry we dont have it, not in season');
}


const browser = 'Chrome';

switch (browser) {
    case 'Edge':
        console.log('Gelukkig gebruik je geen Internet Explorer meer!');
        break;

    case 'Chrome':
        console.log('Deze browser wordt ondersteund!');
        break;
    case 'Firefox':
        console.log('Deze browser wordt ondersteund!');
        break;
    case 'Safari':
        console.log('Deze browser wordt ondersteund!');
        break;
    case 'Opera':
        console.log('Deze browser wordt ondersteund!');
        break;

    default:
        console.log('Hmmm... Hopelijk ziet de pagina er nog ok uit.');
}

//dit is veel beter leesbaar en netjes - goed werk Nova
const browser1 = 'Edge';

switch (browser1) {
    case 'Edge':
        console.log('Gelukkig gebruik je geen Internet Explorer meer!');
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Deze browser wordt ondersteund!');
        break;

    default:
        console.log('Hmmm... Hopelijk ziet de pagina er nog ok uit.');
}



const alcoholicDrinks = "wine";

switch (alcoholicDrinks){
    case "wine":
        console.log("white, red, rose or are we celebrating with some bubbles?");
        break;

    case "beer":
        console.log("what for beer you after mate?")
        break;

    case "gin&tonic":
        console.log("what is your favourite gin?");
        break;

    case "cocktail":
        console.log("what do you fancy today?");
        break;


    case "softdrink":
    case "juice":
    case "coffee":
        console.log("kids are back in town");
        break;


    default:
        console.log("sorry fussy pants, we dont have it!");

}



const bakeryProdcuts = "tomato";

switch (bakeryProdcuts){
    case "croissant":
        console.log("natural or special criossant?");
        break;

    case "muffin":
        console.log("sweet or savory?");
        break;

    case "sourdough":
        console.log("natural or with flavors?");
        break;

    case "sandwich":
    case "soup":
        console.log("we are going to prepare this for you!");
        break;

    default:
        console.log("sorry fusst pants, we dont have it!");

}



const gra = 9;

if (gra < 5.5){
    console.log("fail");
}

if (gra >= 5.5 && gra < 8){
    console.log("pass");
}

if (gra >= 8 && gra <= 9){
    console.log("distinction");
}

if (gra >= 9){
    console.log("ulitmate");
}