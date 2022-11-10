"use strict";

// Creo lista di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// Dichiaro variabile relativa al contenitore del carousel
const carousel = document.querySelector('.container');
// Variabile per la clonazione del template creato
const carouselTemplate = document.getElementById('carousel-template').content.cloneNode(true);
carousel.append(carouselTemplate);

/* --------------------
    MAIN CREATION
-------------------- */
for ( let i = 0; i < images.length; i++ ){
    const image = images[i];
    const imageContainer = document.querySelector('.image-container');

    // Creo Contenitore di immagini di copertina
    let carouselImage = document.createElement('div');
    carouselImage.classList.add('col__image');
    if(i === 0) {
        carouselImage.classList.add("show");
    }
    let imgCarousel = document.createElement('img');
    imgCarousel.setAttribute('src', image.image);
    carouselImage.append(imgCarousel);
    let description = document.createElement('div');
    description.classList.add('description');
    let imageTitle = document.createElement('div');
    imageTitle.classList.add('image__title');
    imageTitle.innerHTML = `<h3>${image.title}</h3>`;
    description.append(imageTitle);
    let imageSubtitle = document.createElement('div');
    imageSubtitle.classList.add('image__subtitle');
    imageSubtitle.innerHTML = `<p>${image.text}</p>`;
    description.append(imageSubtitle);
    carouselImage.append(description);
    imageContainer.append(carouselImage);
    // Creo Contenitore di immagini di copertina
    
    // Creo contenitore immagini di anteprima
    const previewImage = document.querySelector('.col__preview__image');
    let div = document.createElement('div');
    div.classList.add('preview');
    if ( i === 0 ){
        div.classList.add('border-white');
    }
    div.id = `preview-${i}`;
    let img = document.createElement('img');
    img.setAttribute('src', image.image);
    div.append(img);
    previewImage.append(div);
    // Creo contenitore immagini di anteprima
}

/* --------------------
FUNCTIONS
-------------------- */
//  Mi conservo una variabile con valore di active = 0;
let active = 0;

function changeSlide(direction){
    document.querySelectorAll(".col__image")[active].classList.remove("show");
    document.querySelectorAll(".preview")[active].classList.remove("border-white");
    if ( direction === 'next' ){
        if ( active === images.length -1 ) {
            active = 0;
        } else {
            active++;
        }
    } else if ( direction === 'prev' ){
        if (active === 0) {
            active = images.length - 1;
        } else {
            active--;
        }
    }
    document.querySelectorAll(".col__image")[active].classList.add("show");
    document.querySelectorAll(".preview")[active].classList.add("border-white");
};

/* --------------------
CLICK EVENT
-------------------- */
// Creo 2 variabili per gestire lo stop e la ripresa dell'intervallo
let click = true;
// let buttonClicked = true;

// Creo evento Click
// Evento bottone per elemento successivo
const next = document.querySelector(".next-btn");
next.addEventListener('click', function() {     
    click = false;
    // buttonClicked = true;
    clearInterval(automaticPlay); 
    clearInterval(automaticPlayReverse);
    changeSlide('next');
})

// Evento bottone per elemento precedente
const prev = document.querySelector(".prev-btn");
prev.addEventListener('click', function() {
    click = false;
    // buttonClicked = true;
    clearInterval(automaticPlay); 
    clearInterval(automaticPlayReverse); 
    changeSlide('prev');
})
// Creo evento Click

/* --------------------
    AUTOPLAY
-------------------- */
// Creo evento cambio automatico autoplay
// Dichiaro una variabileper il set intervall
const automaticPlay = setInterval(function(){
    clearInterval(automaticPlayReverse); 
    changeSlide('next');
},3000);
// Creo evento cambio automatico autoplay

// Creo evento cambio automatico autoplay-reverse
const automaticPlayReverse = setInterval(function(){
    changeSlide('prev');
},3000);
// Creo evento cambio automatico autoplay-reverse

// Creo evento click con autoplay al click del bottone
// Dichiaro la variabile associata al borttone autoplay
const autoplay = document.getElementById('autoplay');
// Aggiungo evento al bottone
autoplay.addEventListener('click', function(){
    clearInterval(automaticPlay);
    clearInterval(automaticPlayReverse);
    // buttonClicked = false;
    if ( click === false ){
        setInterval(function(){
            changeSlide('next');
        },3000);
        click = true;
    }
})
// Creo evento click con autoplay al click del bottone

// Creo evento click con autoplay-reverse al click del bottone
// Dichiaro la variabile associata al borttone autoplay
const autoplayReverse = document.getElementById('autoplay-reverse');
// Aggiungo evento al bottone
autoplayReverse.addEventListener('click', function(){
    clearInterval(automaticPlay);
    clearInterval(automaticPlayReverse);
    // buttonClicked = false;
    if ( click === false ){
        setInterval(function(){
            changeSlide('prev');
        },3000);
        click = true;
    }
});
// Creo evento click con autoplay-reverse al click del bottone

const preview0 = document.getElementById(`preview-0`);
const preview1 = document.getElementById(`preview-1`);
const preview2 = document.getElementById(`preview-2`);
const preview3 = document.getElementById(`preview-3`);
const preview4 = document.getElementById(`preview-4`);
images.forEach((element, index) => {
    let ind = index + 1;
    let preview = document.getElementById(`preview-${index}`);
    preview.addEventListener('click', function(){
        clearInterval(automaticPlay); 
        clearInterval(automaticPlayReverse); 
        if ( !this.classList.contains('border-white') ){
            preview0.classList.remove('border-white');
            preview1.classList.remove('border-white');
            preview2.classList.remove('border-white');
            preview3.classList.remove('border-white');
            preview4.classList.remove('border-white');
            this.classList.add('border-white');
            document.querySelector(`.col__image:nth-child(1)`).classList.remove('show');
            document.querySelector(`.col__image:nth-child(2)`).classList.remove('show');
            document.querySelector(`.col__image:nth-child(3)`).classList.remove('show');
            document.querySelector(`.col__image:nth-child(4)`).classList.remove('show');
            document.querySelector(`.col__image:nth-child(5)`).classList.remove('show');
            document.querySelector(`.col__image:nth-child(${ind})`).classList.add('show');
        }
    })
});