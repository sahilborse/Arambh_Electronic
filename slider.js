// var slideIndex =1;
// showSlides(slideIndex);
// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex=n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots=document.getElementsByClassName("dot");
//     if(n>slides.length){
//         slideIndex=1;
//     }
//     if(n<1){
//         slideIndex=slides.length;
//     }
//     for(i=0;i<slides.length; i++){
//         slides[i].style.display="none";
//     }
//     for(i=0; i<dots.length; i++){
//         dots[i].classList=dots[i].className.replace("active","");
//     }

//     slideIndex++;
//     if(slideIndex>slides.length){
//                 slideIndex=1;
//             }

//     slides[slideIndex -1].style.display="block";
//     dots[slideIndex -1].className += " active";
//     setTimeout(showSlides,2000);
// }

//auto slides
slideIndex=0;
showSlides();
function showSlides(){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");

    for(i=0;i<slides.length; i++){
        slides[i].style.display="none";
        dots[i].classList=dots[i].className.replace("active","");
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex -1].style.display="block";
    dots[slideIndex -1].className += " active";
    // setTimeout(showSlides,3000);
}

