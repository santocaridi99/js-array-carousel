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
    'Motori MotoriMotori Motori Motori Motori MotoriMotori Motori Motori Motori',
    'Basket Basket Basket BasketBasket Basket BasketBasket Basket Basket Basket Basket',
    'Pallavolo Pallavolo PallavoloPallavolo Pallavolo Pallavolo PallavoloPallavolo Pallavolo',
    'altri sport altri sport altri sport altri sport altri sport altri sport altri sport altri sport'
]
//bonus(1)
const images = [
    'https://www.salute.gov.it/portale/nuovocoronavirus/img/3_FakeNews.jpg',
    'https://img.huffingtonpost.com/asset/607d548f260000c21cb40ef0.jpeg?ops=scalefit_630_noupscale',
    'https://www.f1world.it/news/wp-content/uploads/2017/05/f1-e-motogp-assieme-no-grazie.jpg',
    'https://static.sky.it/images/skysport/it/olimpiadi/2021/08/03/olimpiadi-basket-italia-francia-risultato-diretta/gallinari_italia.jpg.transform/hero-mobile-2x/ae934c8ac21583a4fa59c3f2c11722be88f07386/img.jpg',
    'https://www.repstatic.it/content/nazionale/img/2021/09/17/212800796-499ef86a-7c59-4fdd-8180-5a07d4536a73.jpg',
    'https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg'
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
//bonus(2)
const imgBox = document.querySelector('.image-box>img');
imgBox.src = images[currentIndex];
//azione bottone next ad ogni click
//con index++
//variabile.innerhtml = indice corrente
//quando l'indice avrà superato la lunghezza dell' array allora ritorna a 0 con la condizione
nextButton.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex > title.length - 1){
        currentIndex = 0
    }
    titleBox.innerHTML = title[currentIndex];
    textBox.innerHTML = paragraphs[currentIndex];
    //bonus(3)
    imgBox.src = images[currentIndex];
})
//azione bottone back ad ogni click
//con index--
//variabile.innerhtml = indice corrente
//quando l'indice sarà sotto lo zero allora si posizionerà alla lunghezza massima dell'array
backButton.addEventListener('click',function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = title.length - 1;
    }
    titleBox.innerHTML = title[currentIndex];
    textBox.innerHTML = paragraphs[currentIndex];
    //bonus(3)
    imgBox.src = images[currentIndex];
})
//BONUS------------------------------------------------
//dichiaro array di immagini(1)
//dichiaro variabile boximmagine(2)
//mettere che  durante i click  ai bottoni cambia anche l'immagine(3)