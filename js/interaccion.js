// Primer carrusel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// Segundo carrusel
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";  
  dots2[slideIndex2 - 1].className += " active";
}

// Tercer carrusel
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3 - 1].style.display = "block";  
  dots3[slideIndex3 - 1].className += " active";
}

// Cuarto carrusel
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";  
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4 - 1].style.display = "block";  
  dots4[slideIndex4 - 1].className += " active";
}

//Quinto carrousel

let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots5 = document.getElementsByClassName("dot5");
  
  if (n > slides5.length) {
    slideIndex5 = 1;
  }
  
  if (n < 1) {
    slideIndex5 = slides5.length;
  }
  
  // Ocultar todas las diapositivas
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";  
  }
  
  // Quitar la clase "active" de todos los puntos
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  
  // Mostrar la diapositiva actual y marcar el punto correspondiente como activo
  slides5[slideIndex5 - 1].style.display = "block";  
  dots5[slideIndex5 - 1].className += " active";
}


//Sexto carrousel

let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  let dots6 = document.getElementsByClassName("dot6");
  
  if (n > slides6.length) {
    slideIndex6 = 1;
  }
  
  if (n < 1) {
    slideIndex6 = slides6.length;
  }
  
  // Ocultar todas las diapositivas
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";  
  }
  
  // Quitar la clase "active" de todos los puntos
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  
  // Mostrar la diapositiva actual y marcar el punto correspondiente como activo
  slides6[slideIndex6 - 1].style.display = "block";  
  dots6[slideIndex6 - 1].className += " active";
}


