$(document).ready(function () {
    var imgs = document.querySelectorAll('#carouselContainer img');
    var i = imgs.length;
    var imageWidth;

    $('.arrow_left').click(() => {
        $('.arrow_left').attr("disabled", true);
        $('.arrow_right').attr("disabled", true);
        if (i == imgs.length) {
            i = 0;
        }
        imageWidth = imgs[i].width + 10;

        $('#carouselContainer1').animate({ right: `-=` + imageWidth }, 600);
        $('#carouselContainer1').animate({ right: `+=` + imageWidth }, 0);

        $('#carouselContainer').animate({ right: `-=` + imageWidth }, 0);
        $('#carouselContainer img:first-child').appendTo('#carouselContainer');
        $('#carouselContainer').animate({ right: `+=` + imageWidth }, 600);
        setTimeout(() => {
            $('#carouselContainer1 img:first-child').appendTo('#carouselContainer1');
        }, 600);

        console.log(i);
        i++;
        setTimeout(() => {
            $('.arrow_left').attr("disabled", false);
            $('.arrow_right').attr("disabled", false);
        }, 700);
    });

    $('.arrow_right').click(() => {
        $('.arrow_left').attr("disabled", true);
        $('.arrow_right').attr("disabled", true);

        i--;
        console.log(i);
        imageWidth = imgs[i].width + 10;
        if (i <= 0) {
            i = imgs.length;
        }

        $('#carouselContainer').animate({ right: `-=` + imageWidth }, 600);
        $('#carouselContainer').animate({ right: `+=` + imageWidth }, 0);

        $('#carouselContainer1').animate({ right: `-=` + imageWidth }, 0);
        $('#carouselContainer1 img:last-child').prependTo('#carouselContainer1');
        $('#carouselContainer1').animate({ right: `+=` + imageWidth }, 600);

        setTimeout(() => {
            $('#carouselContainer img:last-child').prependTo('#carouselContainer');
        }, 600);

        setTimeout(() => {
            $('.arrow_left').attr("disabled", false);
            $('.arrow_right').attr("disabled", false);
        }, 700);
    });

    /*arrows hover */
    $('.arrow_left').mouseover(() => {
        $('.arrow_left').find("img").attr('src', '../img/arrow-blue-left.png');
    });
    $('.arrow_left').mouseout(() => {
        $('.arrow_left').find("img").attr('src', '../img/arrow-gray-left.png');
    });
    $('.arrow_right').mouseover(() => {
        $('.arrow_right').find("img").attr('src', '../img/arrow-blue-right.png');
    });
    $('.arrow_right').mouseout(() => {
        $('.arrow_right').find("img").attr('src', '../img/arrow-gray-right.png');
    });
});
