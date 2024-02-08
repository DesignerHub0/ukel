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
        arrows: false,
        dots: false,
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
                  dots: true,
                  slidesToShow: 1.2,
                  slidesToScroll:1,
                }
            },
            
          ]
    });
    $('.offer-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        
        dots: false,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2.3,
              slidesToScroll:1
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2,
                dots: true,
                infinite: false,
              }
          },          
          {
              breakpoint: 482,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                dots: true,
                autoplay:true,
                autoplaySpeed:3000,
                fade: true,
                speed: 1000,
                infinite: true,
                cssEase: 'ease-in-out',
                touchThreshold: 100,
              }
          },          
        ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target
      e.relatedTarget
      $('.offer-wrapper').slick('setPosition');
    })
    // $('.filter-wrapper').slick({
    //     infinite: false,
    //     dots: false,
    //     arrows: false,
    //     variableWidth: true,
    // });
    $('.profile-page .product-list').slick({
        infinite: true,
        dots: true,
        arrows: false,
        centerPadding:30,
        variableWidth: true,
    });
    $('#desktopScreen').slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        // rows: 2,
    });
    $('#desktopScreenBrand').slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        // rows: 2,
    });
    $('#mobileScreen').slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        rows: 2,
    });
    $('#mobileScreenBrand').slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        rows: 2,
    });



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
