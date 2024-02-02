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
        centerPadding:30
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
    })
});