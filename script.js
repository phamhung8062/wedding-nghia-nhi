/*Keyur Scripts starts*/
/*
if (/Edge/.test(navigator.userAgent)) {
   $('.nav > li').css('width','120px');
}
*/
$(document).on('ready', function () {
    'use strict';
    //Vertical icon-menu active script
    $('.horizontal_iconmenu li').on('click', function () {
        $('.page-top').removeClass('display_none');
        $('.wow').attr('style', 'visibility: hidden; animation-name: none; -webkit-transform:translateY(20px); -moz-transform:translateY(20px); -ms-transform:translateY(20px); -o-transform:translateY(20px); transform:translateY(20px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');

        $('.horizontal_iconmenu li').removeClass('hover_active');
        $(this).addClass('hover_active');
        setTimeout(function () {
            $('.wow').each(function () {
                $(this).attr('style', 'visibility: visible; animation-name: ' + $(this).attr('data-class') + '; -webkit-transform:translateY(0px); -moz-transform:translateY(0px); -ms-transform:translateY(0px); -o-transform:translateY(0px); transform:translateY(0px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');
            });
        }, 500);
    });

    setTimeout(function () {
        $('.pagination-button').css({
            'display': 'flex',
            'bottom': $(".bii-player").css('bottom'),
            'right': $(".bii-player").css('left'),
        });

        $(".pagination-button .pa-previous").click(function () {
            let previousMenu = $('ul.dl-menu li.hover_active').prev('li');
            if (previousMenu.length <= 0) { return false };
            previousMenu.click();
            var pageDiv = document.querySelector('.pt-page-current');
            if (pageDiv && pageDiv.classList.contains('pt-page-8')) {
                $.ajax({
                    url: 'https://657499f5b2fbb8f6509c6956.mockapi.io/api/weddings/wedding',
                    method: 'GET',
                    success: function (data) {
                        renderWishBox(data);
                    },
                    error: function (error) {
                        console.log('Failed to fetch data:', error);
                    }
                });
            }
            resetPagination();

        });

        $(".pagination-button .pa-next").click(function () {
            let nextMenu = $('ul.dl-menu li.hover_active').next('li');
            if (nextMenu.length <= 0) { return false };
            nextMenu.click();
            var pageDiv = document.querySelector('.pt-page-current');
            if (pageDiv && pageDiv.classList.contains('pt-page-5')) {
                $.ajax({
                    url: 'https://657499f5b2fbb8f6509c6956.mockapi.io/api/weddings/wedding',
                    method: 'GET',
                    success: function (data) {
                        renderWishBox(data);
                    },
                    error: function (error) {
                        console.log('Failed to fetch data:', error);
                    }
                });
            }
            resetPagination();
        });
    }, 1300);

    //     // Đợi cho toàn bộ trang được tải xong
    // document.addEventListener('DOMContentLoaded', function () {
    //     // Lấy đối tượng div có class "pt-page-8"
    //     var pageDiv = document.querySelector('.pt-page-8 ');

    //     // Kiểm tra xem div có tồn tại hay không
    //     if (pageDiv) {
    //       // Hiển thị thông báo khi div được hiển thị
    //       alert('Đoạn HTML đã được hiển thị!');
    //     }
    //   });

    /*Keyur script ends*/
    $('.hover-menu li, .hover-menu-2 li').on('click', function () {
        // $('.other-menu').addClass('hover_active');
    });

    $('.other-menu').on('mouseenter', function () {
        //$('.hover-menu').attr('style', 'visibility: visible');
        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0, 84px, 0px)', '-webkit-transform': 'translate3d(0, 84px, 0px)', '-ms-transform': 'translate3d(0, 84px, 0px)', '-o-transform': 'translate3d(0, 84px, 0px)', 'transform': 'translate3d(0, 84px, 0px)' }, 'fast');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0, 0px, 0px)').css('-webkit-transform', 'translate3d(0, 84px, 0px)').css('-ms-transform', 'translate3d(0, 84px, 0px)').css('-o-transform', 'translate3d(0, 84px, 0px)').css('transform', 'translate3d(0, 84px, 0px)');
        }, 200);
    });

    $('.other-menu').on('mouseenter', function () {
        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0px, 0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate3d(0px, 0px, 0px)', '-o-transform': 'translate3d(0px, 0px, 0px)', 'transform': 'translate3d(0px, 0px, 0px)', }, 'fast');
        $('.other-menu').addClass('hover_active');
        $('.other-menu a').addClass('hover_active selected');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0px, 0px, 0px)').css('-webkit-transform', 'translate3d(0px, 0px, 0px)').css('-ms-transform', 'translate3d(0px, 0px, 0px)').css('-o-transform', 'translate3d(0px, 0px, 0px)').css('transform', 'translate3d(0px, 0px, 0px)');
        }, 200);


    }).on('mouseleave', function () {

        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0px, -400px, 0px)', '-webkit-transform': 'translate3d(0px, -400px, 0px)', '-ms-transform': 'translate3d(0px, -400px, 0px)', '-o-transform': 'translate3d(0px, -400px, 0px)', 'transform': 'translate3d(0px, -400px, 0px)' }, 'fast');
        $('.other-menu').removeClass('hover_active');
        $('.other-menu a').removeClass('hover_active selected');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0px, -400px, 0px)').css('-webkit-transform', 'translate3d(0px, -400px, 0px)').css('-ms-transform', 'translate3d(0px, -400px, 0px)').css('-o-transform', 'translate3d(0px, -400px, 0px)').css('transform', 'translate3d(0px, -400px, 0px)');
        }, 200);
    });

    $(document).on('click', '.crypto-item', function () {
        let parent = $(this).parents('.donate-card');
        parent.find('.cryptos-box-view').show();
        parent.find('.cryptos-box-view .coin-img').html('<img src="' + $(this).data('img') + '" />');
        parent.find('.cryptos-box-view .coin-id').html($(this).data('id'));
        parent.find('.cryptos-box-view .coin-address').html($(this).data('address'));
        parent.find('.cryptos-box-view .coin-qr-code').html('').qrcode({ width: 160, height: 160, text: $(this).data('address') });
    });

    $(document).on('click', '.cryptos-box-view-close', function () {
        let parent = $(this).parents('.donate-card');
        parent.find('.cryptos-box-view').hide();
    });


    $(window).load(function () {
        if ($.find('.gridlayout').length) {
            $('.gridlayout').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        }
    });

    /*Timer for wedding page*/
    if ($.find('#example').length) {
        $('#example').countdown({
            date: $('.countdown').data('date'), //Enter Target date & time - MM/DD/YYYY hh:mm:ss
            offset: +5.5,
            day: 'Day',
            days: 'Days'
        }, function () {
        });
    }

    $('.hamburger').on('click', function () {
        if ($('.navbar-fixed-top').css('right') == '-150px') {
            $('.navbar-fixed-top').animate({ right: '0px' }, 'slow');
        }
        else {
            if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                $('.navbar-fixed-top').animate({ right: '-150px' }, 'slow');
            }
        }
    });
    $('body').on('click', function (evt) {
        if ($('.navbar-fixed-top').css('z-index') == 9996) {
            if (evt.target.class == 'hamburger') {
                return;
            }
            if ($(evt.target).closest('.hamburger').length) { return; }
            else {
                if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                    $('.navbar-fixed-top').animate({ right: '-150px' }, 'slow');
                }
            }
        }
    });

    //Horizontal Tab
    if ($.find('#parentHorizontalTab').length) {
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }
    // Child Tab

    if ($.find('#ChildVerticalTab_1').length) {
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: null,
            inactive_bg: null,
            active_border_color: null,
            active_content_border_color: null
        });
    }
    //Vertical Tab


    if ($.find('#parentVerticalTab').length) {
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*---------------------*/


    /*------------slick slider-------------------*/



    /*-----photo gallery------------*/

    if ($.find('.fancybox').length) {
        $('.fancybox').fancybox();
    }
    //gallery option 2 

    if ($.find('.fancybox2').length) {
        $('.fancybox2').fancybox();
    }
    /*-----------------------------------people page slider------------------------*/

    $('.the-people-slider').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //arrows: false
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: 'unslick'
            // instead of a settings object
        ]
    });

    $('.ceremony-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: 'unslick'
            // instead of a settings object
        ]
    });



    window.wow = new WOW({
        animateClass: 'animated',
        offset: 0,
        callback: function (box) {
        }
    });

    wow.init();


});



document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
    } else if (state == 'complete') {
        setTimeout(function () {
            $('#load').animate({ 'opacity': '0' }, 'fast');

        }, 1000);
    }
}


$(document).ready(function () {
    $(".wish-box-1").click(function () {
        $.ajax({
            url: 'https://657499f5b2fbb8f6509c6956.mockapi.io/api/weddings/wedding',
            method: 'GET',
            success: function (data) {
                renderWishBox(data);
            },
            error: function (error) {
                console.log('Failed to fetch data:', error);
            }
        });
    })
});

function renderWishBox(data) {
    data.forEach(item => {
        const elment = document.getElementById(`wish-box-item-${item.id}`);
        if (!elment) {
            const isEvenId = item.id % 2 === 0;
            const backgroundStyle = isEvenId ? 'background: #D9EDFF;' : '';
            $('.wish-box').prepend('<div class="wish-box-item bg" id= "wish-box-item-' + item.id + '" style="' + backgroundStyle + '"><strong>' + (item.name).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + '</strong><p>' + (item.comment).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + '</p></div>');
        }
    });
}

if ($("#wish-form").length) {
    $("#wish-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            comment: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            name: {
                required: 'Vui lòng nhập tên của bạn ',
                minlength: 'Tên phải lớn hơn 5 ký tự nhé ',
            },
            comment: {
                required: 'Vui lòng nhập lời chúc.',
                minlength: 'Lời chúc phải lớn hơn 10 kí tự',
            }
        },

        submitHandler: function (form) {
            $("#loader").css("display", "inline-block");
            $.ajax({
                type: "POST",
                url: "https://657499f5b2fbb8f6509c6956.mockapi.io/api/weddings/wedding",
                data: $(form).serialize(),
                success: function (res) {
                    $("#loader").hide();
                    if (res.id) {
                        const isEvenId = res.id % 2 === 0;
                        const backgroundStyle = isEvenId ? 'background: #D9EDFF;' : '';
                        $('.wish-box').scrollTop(0);
                        $('.wish-box').prepend('<div class="wish-box-item bg" id= "wish-box-item-' + res.id + '" style="' + backgroundStyle + '" ><strong>' + $(form).find("input[name='name']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + '</strong><p>' + $(form).find("textarea[name='comment']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + '</p></div>');
                        $("#success").html(res.id).slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 5000);
                    } else {
                        $("#error").html(res.id).slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 5000);
                    }
                    form.reset();
                },
                error: function () {
                    $("#loader").hide();
                    $("#error").slideDown("slow");
                    setTimeout(function () {
                        $("#error").slideUp("slow");
                    }, 5000);
                }
            });
            return false;
        }
    });
}

/*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
if ($("#clock").length) {
    function timeElapse(date) {
        var current = Date();
        var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
        var days = Math.floor(seconds / (3600 * 24));
        if (days < 10) {
            days = "0" + days;
        }
        seconds = seconds % (3600 * 24);
        var hours = Math.floor(seconds / 3600);
        if (hours < 10) {
            hours = "0" + hours;
        }
        seconds = seconds % 3600;
        var minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds = seconds % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var html = '<div class="box"><div>' + days + '</div> <span>' + $('#clock').data('text-day') + '</span></div><div class="box"><div>' + hours + '</div> <span>' + $('#clock').data('text-hour') + '</span> </div><div class="box"><div>' + minutes + '</div> <span>' + $('#clock').data('text-minute') + '</span> </div><div class="box"><div>' + seconds + '</div> <span>' + $('#clock').data('text-second') + '</span></div>';
        $('#clock').html(html);
    }
    var time = $('#clock').data('date');
    $('#clock').countdown(time.replace(/-/g, '/'), function (event) {
        if (event.type == 'stoped') {
            var together = new Date($('#clock').data('date'));
            together.setHours(0);
            together.setMinutes(0);
            together.setSeconds(0);
            together.setMilliseconds(0);
            setInterval(function () {
                timeElapse(together);
            }, 1000);
        } else {
            var $this = $(this).html(event.strftime(''
                + '<div class="box"><div>%D</div> <span>' + $('#clock').data('text-day') + '</span> </div>'
                + '<div class="box"><div>%H</div> <span>' + $('#clock').data('text-hour') + '</span> </div>'
                + '<div class="box"><div>%M</div> <span>' + $('#clock').data('text-minute') + '</span> </div>'
                + '<div class="box"><div>%S</div> <span>' + $('#clock').data('text-second') + '</span> </div>'));
        }
    });
}

$(document).on('click', '.calendar-button-custom-click', function () {
    $(this).parent().parent().find('.calendar-button .atcb-click').click();
});


/*------------------------------------------
    = POPUP VIDEO
-------------------------------------------*/
if ($(".video-play-btn").length) {
    $(".video-play-btn").on("click", function () {
        $.fancybox({
            href: this.href,
            type: $(this).data("type"),
            'title': this.title,
            helpers: {
                title: { type: 'inside' },
                media: {}
            },
            youtube: {
                autoplay: 1,
            },

            beforeShow: function () {
                $(".fancybox-wrap").addClass("gallery-fancybox");
            }
        });
        return false
    });
}

$(document).on('click', '.theme-btn', function () {
    var dataAnimation = $(this).attr("data-animation") - 1;
    $('ul.dl-menu li')[dataAnimation].click();
    resetPagination();
});
