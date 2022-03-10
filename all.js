//スライドショー
window.onload = function() {
	var mySwiper = new Swiper ('.swiper-container', {
		slidesPerView:1.5,//画像を何枚表示するか
		spaceBetween: 10,//何ピクセル画像の間隔をあけるか
		centeredSlides : true,//見切らせたい場合メイン画像をセンターにもってくるか
		//自動再生する場合
		autoplay: {
		delay: 3000, //3秒後に次の画像に代わる
		},
		loop: true,//最後の画像までいったらループする
		//ページネーションをつける場合
		pagination: {
		 el: '.swiper-pagination',
		 type: 'bullets',
		 clickable: true,
		},
		//左右のナビゲーションをつける場合
		navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
		}
	});
}
