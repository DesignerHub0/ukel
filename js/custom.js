$(function() {
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerPadding:30,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1
                }
            },
            
          ]
    });
    $('.profile-page .product-list').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        arrows: false,
        centerPadding:30,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll:2,
                infinite:false,
                dots:true,
                centerPadding:0
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:2,
                  infinite:false,
                  dots:true,
                  centerPadding:0
                } 
            }
            
          ]
    });
    $('.home-page .product-list').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        arrows: false,
        centerPadding:30,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll:2,
                infinite:false,
                dots:true,
                centerPadding:0
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:2,
                  infinite:false,
                  dots:true,
                  centerPadding:0
                } 
            }
            
          ]
    });
    // $('.filter-wrapper').slick({        
    //     responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow:7,
    //             slidesToScroll:2,
    //             infinite:false,
    //             arrows:false
    //           }
    //         }
            
    //       ]
    // });



    $('.product-wrapper .product-item').on('click', function(){
        $('.want-to-repair').addClass('open-brand');
    });
    $(".element i").click(function () {
        $("input[type='file']").trigger('click');
      });
      
      $('input[type="file"]').on('change', function() {
        var val = $(this).val();
        $('span.selected-items').text(val).addClass('haveData');
    });
    
});