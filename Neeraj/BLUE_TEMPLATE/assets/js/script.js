$("#slider").on("input",function () {
    $('a, p, span, label, h1, h2, h3, h4, h6').css("font-size", $(this).val() + "px");
});


(function() {
  
  'use strict';
  

  // const mySwiper2 = new Swiper ('#swiper2', {
    
  //   loop: true, 
    
	//   slidesPerView: 'auto',
	//   centeredSlides: true,
    
  //   a11y: true,
  //   keyboardControl: true,
  //   grabCursor: true,
    

  //   observer: true,
  //           observeParents: true,
  //           parallax:true,
  //   // pagination
  //   pagination: '.swiper-pagination',
  //   paginationClickable: true,
  //   // autoplay: 5000,
  //   // speed: 800,
  //   // autoplayDisableOnInteraction: false,
    
  //   // navigation arrows
  //   nextButton: '#js-prev2',
  //   prevButton: '#js-next2',
    
  // });

  

})(); /* IIFE end */




// tab section start
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function(){
  
})
// tab section end


var dropdown = document.querySelectorAll('.dropdown');
console.log(dropdown);

dropdown.forEach(e=>{
console.log(e);

 e.addEventListener("click", ()=>{
  // alert("you clicked");
 })
})




// animation

function reveal() {
  var reveals = document.querySelectorAll(".scroll-animation-left, .scroll-animation-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("parralex-animation");
    } else {
      reveals[i].classList.remove("parralex-animation");
    }
  }
}

window.addEventListener("scroll", reveal);


function increaseFontSize() {
  const elements = document.querySelectorAll('p, span, li, button, a, h1, h2, h3, h4, h5, h6');
  
  elements.forEach((element) => {
    // Get the current font size and convert it to a number
    let currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    
    // Check if the current font size is less than the maximum size (25px)
    if (currentFontSize < 13) {
      // Increase the font size by 1px
      currentFontSize += 0.5;
      // Set the new font size
      element.style.fontSize = currentFontSize + 'px';
    }
  });
}


function decreaseFontSize() {
  const elements = document.querySelectorAll('p, span, li, button, a');
  
  elements.forEach((element) => {
    // Get the current font size and convert it to a number
    let currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    
    // Check if the current font size is less than the maximum size (25px)
    if (currentFontSize > 10) {
      // Increase the font size by 1px
      currentFontSize -= 1;
      // Set the new font size
      element.style.fontSize = currentFontSize + 'px';
    }
  });
}





// ========================================================================================
// enable dark mode and
function setTheme(theme) {
  const linkElement = document.getElementById('theme-style');
  linkElement.href = `${theme}.css`;

  // Store the theme preference in local storage
  localStorage.setItem('theme', theme);
}


// Add event listeners to the buttons


// Set the initial theme based on local storage or default to 'light'
const initialTheme = localStorage.getItem('theme') ;
setTheme(initialTheme);


$(document).ready(function(){
  $('#main-slider').owlCarousel({
    dots: false,
    autoWidth: true,
    stagePadding: 0,
    margin: 15, 
    
    loop:true,
    smartSpeed :900,
    autoplay:true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
        autoWidth: false,
      },
      992: {
        items: 1,
        autoWidth: false,
      },
      1310: {
        items: 1,
        autoWidth: false,
        margin: 0,
      }
    }
  });


  $('#logo-slider').owlCarousel({
    dots: false,
    autoWidth: true,
    stagePadding: 0,
    margin: 15, 
    
    loop:true,
    smartSpeed :900,
    autoplay:true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    
    responsive: {
      0: {
        items: 5,
      },
      768: {
        items: 3,
        autoWidth: false,
      },
      992: {
        items: 5,
        autoWidth: false,
      },
      1310: {
        items: 6,
        autoWidth: false,
        margin: 30,
      }
    }
  });

  AOS.init({
    duration: 3000,
  })
});


