// ---------- 一、全局变量 ----------

let navIndex = 0; //当前导航索引
let mask = document.querySelector('.mask');
let navItems = document.querySelectorAll('.nav-item');
let mainItems = document.querySelectorAll('.main-item');

// ---------- 一、全局事件 ----------

// 底部导航栏点击切换
for(let i = 0, max = navItems.length; i < max; i++){
	navItems[i].addEventListener('click',function(){
		navJump(i);
	});
	navItems[i].addEventListener('mousedown',function(){
		event.preventDefault();
	});
};

// ---------- 一、全局函数 ----------

// 底部导航栏点击切换
function navJump(index){
	// 导航栏切换
	navItems[navIndex].classList.remove('active');
	navItems[index].classList.add('active');
	// 主体内容切换
	mainItems[navIndex].classList.remove('active');
	mainItems[index].classList.add('active');
	navIndex = index;
};

// ---------- 二、首页变量 ----------

let homepagePhotoBox = document.querySelector('.homepage-photo-box');
let homepagePhotos = document.querySelectorAll('.homepage-photo');
let photoIndex = 0;

// ---------- 二、首页事件 ----------

// 照片点击全屏
for(let i = 0, max = homepagePhotos.length; i < max; i++){
	homepagePhotos[i].addEventListener('click',function(){
		event.cancelBubble=true;
		photoClick(i);
	})
}
homepagePhotoBox.addEventListener('click',function(){
	photoClick();
})
// 照片轮播图
activePhoto(photoIndex);
// setTimeout(function(){
// 	homepagePhotos[photoIndex].classList.add('left-hide');
// 	homepagePhotos[photoIndex + 1].classList.add('right-show');
	
// },1000)

// ---------- 二、首页函数 ----------

// 照片点击全屏
function photoClick(i){
	if(i != null){
		homepagePhotos[i].classList.toggle('click');
	}else{
		for(let i = 0, max = homepagePhotos.length; i < max; i++){
			homepagePhotos[i].classList.remove('click');
		}
	};
	homepagePhotoBox.classList.toggle('click');
}
// 照片轮播图
function activePhoto(index){
	homepagePhotos[index].classList.toggle('active');
}