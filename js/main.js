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
for ( let i = 0; i < images.length; i++ ){
    const image = images[i];
    const imageContainer = document.querySelector('.image-container');
    // Creo Contenitore di immagini di copertina
    let carouselImage = document.createElement('div');
    carouselImage.classList.add('col__image', 'hide');
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
    // /Creo Contenitore di immagini di copertina
    
    // Creo contenitore immagini di anteprima
    const previewImage = document.querySelector('.col__preview__image');
    let div = document.createElement('div');
    div.classList.add('preview');
    div.id = `preview-${i}`;
    let img = document.createElement('img');
    img.setAttribute('src', image.image);
    div.append(img);
    previewImage.append(div);
    // /Creo contenitore immagini di anteprima
}
const carouselImage = document.querySelector('.col__image');
carouselImage.classList.add('show');

