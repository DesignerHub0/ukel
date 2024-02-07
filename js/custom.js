$(function() {
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $('.testimonial-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll:1
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1.2,
                  slidesToScroll:1
                }
            },
            
          ]
    });
    $('.offer-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2.3,
              slidesToScroll:1
            }
          },
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll:1
              }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll:1
              }
          },
          
        ]
    });
    $('.filter-wrapper').slick({
        infinite: false,
        dots: false,
        arrows: false,
        variableWidth: true,
    });
    $('.profile-page .product-list').slick({
        infinite: true,
        dots: true,
        arrows: false,
        centerPadding:30,
        variableWidth: true,
    });
    $('.home-page .product-list').slick({
        infinite: true,
        dots: true,
        arrows: false,
        centerPadding:30,
        variableWidth: true,
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