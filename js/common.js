$(document).ready(function () {
    win_w = $(window).width();
    $('#all_review').click(function () {
        $(this).css('display', 'none');
        $('.rev_h320').slideDown(200);
    });

$('.device').click(function () {
    $('.device').removeClass('active');
    $(this).addClass('active');
    var id = $(this).data('id');
    device_mod(id);
    switch (id) {
        case 1:
            set = 'iPhone 7';
            break;
        case 2:
            set = 'iPad 2';
            break;
        case 3:
            set = 'MacBook';
            break;
        case 4:
            set = 'iPod touch';
            break;
        default:
            set = 'iPhone 7';
    }
    set_mod(set);
});
device_mod(1);
set_mod('iPhone 7');
    $(document).on('click','.btn_item',function(e){
        $('.btn_item').removeClass('active');
        $(this).addClass('active');
        var dmodel = $(this).data('model');
       set_mod(dmodel);
    });


    function device_mod(id) {
        var a=7;
        if (win_w <= 1199){a = 4};
        $.ajax({
            url: 'device_mod.php',
            data: {id:id, a:a},
            type: 'GET',
            success: function(res){
                // console.log(res);
                $('.model_wrapper').html(res);
            },
            error: function(){
                alert('Error!');
            }
        });
        return false;
    }
    function device_mod320(id) {
        $.ajax({
            url: 'device320.php',
            data: {id:id},
            type: 'GET',
            success: function(res){
                // console.log(res);
                $('#slider3').html(res);
                slider3.reloadSlider();
            },
            error: function(){
                alert('Error!');
            }
        });
        return false;
    }
    device_mod320(1);

    function set_mod(set) {
        $.ajax({
            url: 'set_mod.php',
            data: {set:set},
            type: 'GET',
            success: function(res){
                console.log(res);
                $('#table_wr').html(res);
            },
            error: function(){
                alert('Error!');
            }
        });
        return false;
    }
    function set_mod320(set) {
        $.ajax({
            url: 'set_mod320.php',
            data: {set:set},
            type: 'GET',
            success: function(res){
                // console.log(res);
                $('#table320_wrapper').html(res);
            },
            error: function(){
                alert('Error!');
            }
        });
        return false;
    }
    set_mod320('iPhone 7');
//     $('.open-modal').click(function (event) {
//         var txt = '#txt' + $(this).data('txt');
//         var text = $(txt).html();
//         var text2 = $(txt).find('h2').text();
//         $('#modal_txt').html(text);
//         $('#mod_id').val(text2);
//         $('#modal_form').modal({
//             fadeDuration: 250
//         });
//         $('body').css('overflow-y', 'scroll');
//         $('#modal_form').css('display', 'inline-block');
//         setTimeout(function () {
//             $('.close').css('opacity', 1);
//         }, 2000);
//         return false;
//     });
//
//     $('.open-modal2').click(function (event) {
//         $('#modal_form2').modal({
//             fadeDuration: 250
//         });
//         $('body').css('overflow-y', 'scroll');
//         $('#modal_form2').css('display', 'inline-block');
//         setTimeout(function () {
//             $('.close').css('opacity', 1);
//         }, 2000);
//         return false;
//     });
//     $('.open-modal4').click(function (event) {
//         $('#modal_form4').modal({
//             fadeDuration: 250
//         });
//         $('body').css('overflow-y', 'scroll');
//         $('#modal_form4').css('display', 'inline-block');
//         setTimeout(function () {
//             $('.close').css('opacity', 1);
//         }, 2000);
//         return false;
//     });
//     $('.open-modal5').click(function (event) {
//         $('#modal_form5').modal({
//             fadeDuration: 250
//         });
//         $('body').css('overflow-y', 'scroll');
//         $('#modal_form5').css('display', 'inline-block');
//         setTimeout(function () {
//             $('.close').css('opacity', 1);
//         }, 2000);
//         return false;
//     });
//     $('.open-modal6').click(function (event) {
//         var txt = $(this).data('id');
//         var value = 'Задать вопрос '+txt;
//         $('#mod6').val(value);
//         $('#modal_txt6').html(txt);
//         $('#modal_form6').modal({
//             fadeDuration: 250
//         });
//         $('body').css('overflow-y', 'scroll');
//         $('#modal_form6').css('display', 'inline-block');
//         setTimeout(function () {
//             $('.close').css('opacity', 1);
//         }, 2000);
//         return false;
//     });
//     $('.close').click(function () {
//         $.modal.close();
//         return false;
//     });
//
//     //-----------------scroll---------------
    $(".linked").click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - 53;

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
        e.preventDefault();
    });


    var scr = $(window).scrollTop();
    var prices = $('#prices').offset().top;
    var advantages = $('#advantages').offset().top;
    var works = $('#works').offset().top;
    var review = $('#review').offset().top;
    var map = $('#map').offset().top;
    scroll_menu(scr, prices, advantages, works, review, map);
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        scroll_menu(scroll, prices, advantages, works, review, map);
    });
    
    $('#menu ul li').click(function (){
    $('#menu ul li').removeClass('active');
    $(this).addClass('active');
});
function scroll_menu(scroll, prices, advantages, works, review, map) {
    if ((scroll <= prices)) {
        $('#menu ul li').removeClass('active');
    }
    if ((scroll >= prices -57) && (scroll <= advantages)) {
        $('#menu ul li').removeClass('active');
        $('#menu ul li').eq(0).addClass('active');
    }
    if ((scroll >= advantages - 55) && (scroll <= works)) {
        $('#menu ul li').removeClass('active');
        $('#menu ul li').eq(1).addClass('active');
    }
    if ((scroll >= works - 55) && (scroll <= review)) {
        $('#menu ul li').removeClass('active');
        $('#menu ul li').eq(2).addClass('active');
    }
    if ((scroll >= review -1165) && (scroll <= map)) {
        $('#menu ul li').removeClass('active');
        $('#menu ul li').eq(3).addClass('active');
    }
    if (scroll >= map -1165) {
        $('#menu ul li').removeClass('active');
        $('#menu ul li').eq(4).addClass('active');
    }
}
//
//     //------------------------slider---------------
//     $('#slider1').bxSlider({
//         mode: 'horizontal',
//         auto: false,
//         responsive: false,
//         minSlides: 1,
//         maxSlides: 1,
//         controls: true,
//         pager: true,
//         nextText: '',
//         prevText: '',
//         onSlideAfter: function ($slideElement, oldIndex, newIndex) {
//             newIndex++;
//             $('#number_active').text(newIndex);
//         },
//         pagerType: 'full'
//     });
//     count_pager();
//     function count_pager() {
//         var a = $('.bx-pager-item').length;
//         var b = 1;
//         $('#number').text(a);
//         $('#number_active').text(b);
//     }
if (win_w >= 1199) {
    slideMargin = 80;
    slideWidth = 778
} else {
    slideMargin = 30;
    slideWidth = 589;
}
if (win_w <= 768) {
    slideMargin = 10;
    slideWidth = 280
}
slider = $('#slider').bxSlider({
    mode: 'horizontal',
    slideWidth: 231,
    auto: false,
    responsive: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    controls: true,
    pager: false,
    nextText: '',
    prevText: '',
    captions: true,
    infiniteLoop: true,
    slideMargin: slideMargin,
    onSlideBefore: function () {
        var current = slider.getCurrentSlide();
        $('.slid').removeClass('active');
        $('.slid').eq(current + 4).addClass('active');
    }
});
$('#slider320').bxSlider({
    mode: 'horizontal',
    auto: false,
    responsive: false,
    slideWidth: 320,
    minSlides: 1,
    maxSlides: 1,
    controls: false,
    pager: true,
    nextText: '',
    prevText: '',
    pagerType: 'full'
});

$('#slider_office').bxSlider({
    mode: 'horizontal',
    auto: false,
    responsive: true,
    slideWidth: slideWidth,
    minSlides: 1,
    maxSlides: 1,
    controls: true,
    pager: true,
    nextText: '',
    prevText: '',
    pagerType: 'full'
});
slider2 = $('#slider2').bxSlider({
    mode: 'horizontal',
    auto: false,
    responsive: false,
    slideWidth: 280,
    minSlides: 1,
    maxSlides: 1,
    controls: false,
    pager: false,
    nextText: '',
    prevText: '',
    pagerType: 'full',
    slideMargin: 5,
    infiniteLoop: true,
    onSlideBefore: function () {
        var current = slider2.getCurrentSlide();
        device_mod320(current+1);
        $('.wrapper').removeClass('active');
        $('.wrapper').eq(current + 5).addClass('active');
        if (current == 0){set_mod320('iPhone 7')}
        if (current == 1){set_mod320('iPad 2')}
        if (current == 2){set_mod320('MacBook')}
        if (current == 3){set_mod320('iPod touch')}
    }
});

slider3 = $('#slider3').bxSlider({
    mode: 'horizontal',
    auto: false,
    responsive: false,
    slideWidth: 142,
    minSlides: 2,
    maxSlides: 2,
    controls: false,
    pager: false,
    nextText: '',
    prevText: '',
    pagerType: 'full',
    slideMargin: 5,
    moveSlides: 1,
    infiniteLoop: true,
    onSlideBefore: function () {
        var current = slider3.getCurrentSlide();
        var mod = $('#slider3 .btn_item').eq(current + 2).data('model');
        $('.btn_item').removeClass('active');
        $('#slider3 .btn_item').eq(current + 2).addClass('active');
        set_mod320(mod);
    }
});

    $('.open-modal').click(function (event) {
        $('#modal_form1').modal({
            fadeDuration: 250
        });
        $('body').css('overflow-y', 'scroll');
        $('#modal_form1').css('display', 'inline-block');
        setTimeout(function () {
            $('.close').css('opacity', 1);
        }, 2000);
        return false;
    });
// //---------------------slider_team------------
//     $('#slider_team320').bxSlider({
//         mode: 'horizontal',
//         auto: false,
//         responsive: false,
//         minSlides: 1,
//         maxSlides: 1,
//         controls: true,
//         pager: true,
//         nextText: '1',
//         prevText: '1',
//         onSlideAfter: function ($slideElement, oldIndex, newIndex) {
//             newIndex++;
//             $('#number_active2').text(newIndex);
//         },
//         pagerType: 'full'
//     });
//     count_pager2();
//     function count_pager2() {
//         var a = $('#form_center .bx-pager-item').length;
//         var b = 1;
//         $('#number2').text(a);
//         $('#number_active2').text(b);
//     }
//     //---------------------slider_team------------
//     $('#slider_gallery').bxSlider({
//         mode: 'horizontal',
//         slideWidth: 229,
//         auto: false,
//         responsive: false,
//         minSlides: 1,
//         maxSlides: 1,
//         controls: true,
//         pager: true,
//         nextText: '1',
//         prevText: '1',
//         onSlideAfter: function ($slideElement, oldIndex, newIndex) {
//             newIndex++;
//             $('#number_active3').text(newIndex);
//         },
//         pagerType: 'full'
//     });
//     $('#slider_gallery2').bxSlider({
//         mode: 'horizontal',
//         slideWidth: 229,
//         auto: false,
//         responsive: false,
//         minSlides: 1,
//         maxSlides: 1,
//         controls: true,
//         pager: true,
//         nextText: '1',
//         prevText: '1',
//         onSlideAfter: function ($slideElement, oldIndex, newIndex) {
//             newIndex++;
//             $('#number_active3').text(newIndex);
//         },
//         pagerType: 'full'
//     });
//     count_pager3();
//     function count_pager3() {
//         var a = $('#gallery .bx-pager-item').length;
//         var b = 1;
//         $('#number3').text(a);
//         $('#number_active3').text(b);
//     }
//     //---------------------slider_review320------------
//     $('#slider_review320').bxSlider({
//         mode: 'horizontal',
//         auto: false,
//         responsive: false,
//         minSlides: 1,
//         maxSlides: 1,
//         controls: true,
//         pager: true,
//         nextText: '1',
//         prevText: '1',
//         onSlideAfter: function ($slideElement, oldIndex, newIndex) {
//             newIndex++;
//             $('#number_active4').text(newIndex);
//         },
//         pagerType: 'full'
//     });
//     count_pager4();
//     function count_pager4() {
//         var a = $('.slider_wrapper .bx-pager-item').length;
//         var b = 1;
//         $('#number4').text(a);
//         $('#number_active4').text(b);
//     }
// //    -----------------romb-----------------
//     $('.romb').on('click', function () {
//         // var val_romb = $(this).closest(".section");
//         // var id_romb = val_romb.attr('id');
//         // if (id_romb == 'main') {
//         //     id_romb = '#prices'
//         // }
//         // if (id_romb == 'prices') {
//         //     id_romb = '#advantages'
//         // }
//         // if (id_romb == 'advantages') {
//         //     id_romb = '#form_center'
//         // }
//         // if (id_romb == 'form_center') {
//         //     id_romb = '#works'
//         // }
//         // if (id_romb == 'works') {
//         //     id_romb = '#review'
//         // }
//         // if (id_romb == 'review') {
//         //     id_romb = '#map'
//         // }
//         // $('.section').removeClass('active');
//         // if (id_romb != '#map') {
//         //     $(id_romb).addClass('active');
//         // } else {
//         //     $('#main').addClass('active')
//         // }
//
//         var offset = $('#prices').offset().top - 53;
//         $('html, body').stop().animate({
//             scrollTop: offset
//         }, 500);
//     });
//
//     $('.menu_h').slideUp(0);
//     $('.menu_hidden').on('click', function () {
//         if (!$(this).hasClass('active')){
//             $(this).addClass('active');
//             $('.menu_h').slideDown(200)
//         } else {
//             $(this).removeClass('active');
//             $('.menu_h').slideUp(200)
//         }
//     });
//     $('.menu_h li').on('click', function () {
//         if (!$('.menu_hidden').hasClass('active')){
//             $('.menu_hidden').addClass('active');
//             $('.menu_h').slideDown(200)
//         } else {
//             $('.menu_hidden').removeClass('active');
//             $('.menu_h').slideUp(200)
//         }
//     });
//     jQuery(function($){
//         $(document).mouseup(function (e){ // событие клика по веб-документу
//             var div = $(".menu_h"); // тут указываем ID элемента
//             if (!div.is(e.target) // если клик был не по нашему блоку
//                 && div.has(e.target).length === 0) { // и не по его дочерним элементам
//                 div.hide(200); // скрываем его
//             }
//         });
//     });
//     if ($('#shop').length > 0){
//         oneHeight('.m1');
//         oneHeight('.m2');
//         oneHeight('.m3');
//         oneHeight('.m4');
//         oneHeight('.m5');
//     }
//     $('h1').addClass('active');
//
//     function oneHeight(cl) {
//         $(cl).matchHeight();
//         var a = ($(cl).height()+50);
//         var b = '.left'+cl+' > .img_wrapper';
//         $(b).css('height', a);
//
//     }
//     $(window).resize(function() {
// video1();
//     });
//
// function video1() {
//     var c = $('video').width();
//     var b = $(window).width();
//     var a = (c-b)/2;
//     $('video').css('left', -a);
//     $('video').css('opacity', 1);
// }
//     var videoEl = document.getElementsByTagName('video')[0];
//     if (videoEl.paused) {  // если видео остановлено, запускаем
//     } else {
//         setTimeout(video1, 4000);
//     }
})
;

