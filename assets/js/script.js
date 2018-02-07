$(document).ready(function() {

    // THUMBNAIL HIDE ON CLICK
    $('.thumb').not('#img1,#img2').hide();


    // PRODUCT DISPLAY ON CLICK
    $('#image1,#img1').click(function() {

        $('#img1').show();
        $('#img2').show();
        $('#img1').addClass('border');
        $('.liveimage').not('#liveimage1').hide();
        $('#liveimage1').show();

        $('#img2').click(function() {
            $('#img1').removeClass('border');
            $('#img2').addClass('border');

            $('#liveimage2').show();
            $('.liveimage').not('#liveimage2').hide();

        });
        $('.thumb').not('#img1,#img2').hide();

    });

    $('#image2,#img3').click(function() {

        $('#img3').show();
        $('#img4').show();
        $('#img4').addClass('border');
        $('.liveimage').not('#liveimage3').hide();
        $('#liveimage3').show();

        $('#img4').click(function() {
            $('#img5').removeClass('border');
            $('#img4').addClass('border');
            $('#liveimage4').show();
            $('.liveimage').not('#liveimage4').hide();

        });
        $('.thumb').not('#img3,#img4').hide();

    });
    $('#image3,#img5').click(function() {

        $('#img5').show();
        $('#img6').show();
        $('#img5').addClass('border');
        $('.liveimage').not('#liveimage5').hide();
        $('#liveimage5').show();

        $('#img6').click(function() {
            $('#img5').removeClass('border');
            $('#img6').addClass('border');
            $('#liveimage6').show();
            $('.liveimage').not('#liveimage6').hide();

        });
        $('.thumb').not('#img5,#img6').hide();

    });
    $('#image4,#img7').click(function() {

        $('#img7').show();
        $('#img8').show();
        $('#img7').addClass('border');
        $('.liveimage').not('#liveimage7').hide();
        $('#liveimage7').show();

        $('#img8').click(function() {
            $('#img7').removeClass('border');
            $('#img8').addClass('border');

            $('#liveimage8').show();
            $('.liveimage').not('#liveimage8').hide();

        });
        $('.thumb').not('#img7,#img8').hide();

    });

    $('#image5,#img9').click(function() {

        $('#img9').show();
        $('#img10').show();
        $('#img9').addClass('border');
        $('.liveimage').not('#liveimage9').hide();
        $('#liveimage9').show();

        $('#img10').click(function() {
            $('#img9').removeClass('border');
            $('#img10').addClass('border');

            $('#liveimage10').show();
            $('.liveimage').not('#liveimage10').hide();

        });
        $('.thumb').not('#img9,#img10').hide();

    });

    $('#image6,#img11').click(function() {

        $('#img11').show();
        $('#img12').show();
        $('#img11').addClass('border');
        $('.liveimage').not('#liveimage11').hide();
        $('#liveimage11').show();

        $('#img12').click(function() {
            $('#img11').removeClass('border');
            $('#img12').addClass('border');

            $('#liveimage12').show();
            $('.liveimage').not('#liveimage12').hide();

        });
        $('.thumb').not('#img11,#img12').hide();

    });



    //SLIDER FOR PRODUCTS
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');
    // LEFT AND RIGHT CONTROLS
    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_next').click(function() {
        moveRight();
    });

    $('a.control_prev').click(function() {
        moveLeft();
    });

});
