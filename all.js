$(function() {


    //オープニングアニメーション
    setTimeout(function(){
        $('#opening').find('span').fadeOut(1000);
    },900); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
		$('#opening').fadeOut(1300);
	},1800); //0.5秒後にロゴをフェードイン!

    //サイドバー色制御
    $('#top-contents').scroll(function() {
        var scroll = $(this).scrollTop();
        var home = $('#home').position().top;
        var works = $('#works').position().top;
        var profile = $('#profile').position().top;
        var skill = $('#skill').position().top;
        var contact = $('#contact').position().top;
        var a = $('#contact').offset();
        //console.log(a);
        
        if(home == 0) {
            $('#sidebar').find('li').find('a').removeClass('active');
            $('#home_link').addClass('active');
        } else if(works < 100 && works > -100) {
            $('#sidebar').find('li').find('a').removeClass('active');
            $('#works_link').addClass('active');
        } else if (profile < 100 && profile > -100) {
            $('#sidebar').find('li').find('a').removeClass('active');
            $('#profile_link').addClass('active');
        } else if(skill < 100 && skill > -100) {
            $('#sidebar').find('li').find('a').removeClass('active');
            $('#skill_link').addClass('active');
        } else if(contact < 100 && contact > -100) {
            $('#sidebar').find('li').find('a').removeClass('active');
            $('#contact_link').addClass('active');
        }

    });

    //workモーダル制御

    //クローズ
    $('.modal').on('click', function() {
        $('.modal').fadeOut();
    });

    // work1
    $('.work1').on('click', function() {
        $('.work1-modal').fadeIn();
    });
    $('#work1-link').on('click', function() {	
        const url = 'https://www.oshiire.co.jp/';
        window.open(url, '_blank');
        return false;
    });

    // work2
    $('.work2').on('click', function() {
        $('.work2-modal').fadeIn();
    });
    $('#work2-link').on('click', function() {	
        const url = 'https://logiselect.oshiire.co.jp/';
        window.open(url, '_blank');
        return false;
    });

    //ハンバーガー
    var $checkbox = $('input[type="checkbox"]');

    $('#sidebar').find('a').on('click', function() {
        $checkbox.removeAttr('checked').prop('checked', false).change();
    });

    //スクロールで要素の表示制御
    $('#top-contents').scroll(function () {
        $('.fade').removeClass('view');
        $('.fade').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).addClass('view');
            }
        });
    });

    //profileアコーディオン
    $('.s_01 .accordion_one .accordion_header').click(function(){
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
    });
});