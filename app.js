//movimiento
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.imagen');
const purchase = document.querySelector('.btn-purchase');
const descripcion = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//evento de animacion
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// animacion in
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    //pop out
    title.style.transform = 'translateZ(100px)';
    sneaker.style.transform = 'translateZ(100px) rotateZ(-45deg)';
    descripcion.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(100px)';


});

//animacion out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    descripcion.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});