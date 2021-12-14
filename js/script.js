//dichiaro array dei titoli
const title = [
    'Notizie del giorno',
    'Calcio',
    'Motori',
    'Basket',
    'Pallavolo',
    'altri sport'
]
//dichiaro array dei miei paragrafi
const paragraphs = [
    'Notizia giorno1 Notizia giorno1 Notizia giorno1 Notizia giorno1 Notizia giorno1',
    'Calcio CalcioCalcio Calcio Calcio Calcio Calcio Calcio Calcio Calcio Calcio Calcio',
    'Motori MotoriMotori Motori Motori Motori MotoriMotori Motori Motori Motori Motori',
    'Basket Basket Basket BasketBasket Basket BasketBasket Basket Basket Basket Basket',
    'Pallavolo Pallavolo PallavoloPallavolo Pallavolo Pallavolo PallavoloPallavolo Pallavolo',
    'altri sport altri sport altri sport altri sport altri sport altri sport altri sport altri sport'
]
//inizializzo un indice a 0
//indice in questo caso è uguale per entrambi gli  array
let currentIndex = 0;
//dichiaro due variabili costanti una per  titoli e una per paragrafi
//imporre che le variabili.innerHtml sono uguali all indice corrente del mio array
const titleBox = document.querySelector('.title-box>h1');
const textBox = document.querySelector('.text-box>p');
titleBox.innerHTML = title[currentIndex];
textBox.innerHTML = paragraphs[currentIndex];
//dichiaro altre due variabili per i due bottoni di back e next
const nextButton = document.querySelector('.next');
const backButton = document.querySelector('.back');
//azione bottone next ad ogni click
//con index++
//variabile.innerhtml = indice corrente
nextButton.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex > title.length - 1){
        currentIndex = 0
    }
    titleBox.innerHTML = title[currentIndex];
    textBox.innerHTML = paragraphs[currentIndex];
})
//azione bottone back ad ogni click
//con index--
//variabile.innerhtml = indice corrente
backButton.addEventListener('click',function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = title.length - 1;
    }
    titleBox.innerHTML = title[currentIndex];
    textBox.innerHTML = paragraphs[currentIndex];
})