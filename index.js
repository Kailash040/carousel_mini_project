document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth: 100,
          gap       : 10,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );
//   
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth : 100,
      fixedHeight: 60,
          gap        : 10,
          rewind     : true,
          pagination : false,
    } ).mount();
  } );
//   

new Splide( '#thumbnail-carousel', {
    fixedWidth : 100,
    fixedHeight: 60,
    gap        : 10,
    rewind     : true,
    pagination : false,
    focus      : 'center',
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
        isNavigation: true,
      },
    },
  } ).mount();
  
//   main carousel

document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
      
    } );
  
  
    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth  : 100,
      fixedHeight : 60,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
    } );
  
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );
//   
// 
// 
// 
// 
// second carousel

// 
