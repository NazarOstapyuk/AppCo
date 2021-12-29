// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

// MENUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU;
const menuContainer = document.querySelector("#mobile-menu-container")
document.addEventListener('click', e => {
  // e.preventDefault();
  const target = e.target.closest('#menu-button');
  if (!target) {
    return;
  }
  target.classList.toggle('active')
  menuContainer.classList.toggle('active')
})

// MENUUUUUUUUUUUUUUUUUUU SCROOLLLLLLLLLLLLLLLLL;

$(window).on('scroll', function () {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if ($(this).scrollTop() > 60) {
    $('.menu').addClass('rgba');
    $('.menu').removeClass('bg');
  } else {
    $('.menu').removeClass('rgba');
    $('.menu').addClass('bg');
  }
});

// PRICEEEEEE OPENEEDDDDDDD;

// price.click(function () {
//   const $this = $(this)
//   const price = $this.toggleClass("minus")
//   // $(this).toggleClass("minus");
//   // $(this).closest(body).toggleClass("open");

// })

const price = $(".price-list__header")
const body = $('.price-list__body')

$(document).on('click',".price-list__header", function(){
const $this = $(this)
$this.toggleClass("minus")
.siblings(body).toggleClass("open")

})
// REVIEWSSSSSSSSSSSSSSSSSSSSSSSSS;
$('.reviews-owl').slick({
  appendArrows:'.mybuttons',
  prevArrow:'<button type="button" class="reviews-btn__custome reviews-btn_prev"><span class="reviews-btn-prev_arria fas fa-angle-left"></span></button>',
  nextArrow:'<button type="button" class="reviews-btn__custome reviews-btn_next"><span class="reviews-btn-prev_arria fas fa-angle-right"></span></button>'
});
 // SCREEEEEEEEEEEENNNNNNNNNNNNNNNNN;
//  $(".screen-slider").slick({
//    arrows:false,
//    autoplay:true,
//    dots:true,
//    appendDots:'.mydotts',
//    dotsClass:'dot-box',
//   //  adaptiveHeight: true
//  });
const settings = {
  arrows:false,
     autoplay:true,
     speed:1000,
  autoplaySpeed: 2500,
     dots:true,
     appendDots:'.mydotts',
     dotsClass:'dot-box', 
     mobileFirst:true,
     slidesToShow: 3,
     responsive:[
       {
         breakpoint:400,
         settings:{
          centerPadding: '40px',
          slidesToShow: 1
         }
       },
       {
        breakpoint:768,
        settings:{
          dots:true,
          slidesToShow: 3,
          slideToScroll:1,
        centerMode:true,
        centerPadding: '0',
        }
      },
      {
        breakpoint:1000,
        settings:{
          dots:false,
          slidesToShow: 3,
          slideToScroll:1,
        centerMode:true,
        }
      },
      
     ]
}
$(window).on('resize', function(){
  if( $(window).width() > 399 && !sl.hasClass('slick-initialized')){
    $('.slider').slick(settings);
  }
})
const sl =$('.screen-slider').slick(settings);
 //COMPANYYYYYYYYYYYYYYYYYYYYYYYY;
 $('.company-slider').slick({
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay:true,
  speed:2000,
  autoplaySpeed: 300,
  dots:true,
  appendDots:'.companydotts',
  dotsClass:'dot-box',
 })
 //CONTAAAAACCCTTTTTTTTTTTTTTTT;
$('#myform').validate({
  
  rules:{
    email:{
      required:true,
      email:true
    },
    name:{
      required:true,
      minlength:4,
    },
    number:{
      required:true,
      number: true,
      minlength:8,
    },
    company:{
      required:true,
    },
    message:{
      required:true,
      minlength:20, 
    }

  },
  errorClass: 'invalid'
});
//VIDEOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO;
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
