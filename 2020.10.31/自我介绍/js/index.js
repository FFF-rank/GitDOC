// ---------- 一、全局变量 ----------

let navIndex = 2; //当前导航索引
let isFullScreen = false; //当前是否处于全屏
let navItems = document.querySelectorAll('.nav-item');
let mainItems = document.querySelectorAll('.main-item');
let headerLeftImage = document.querySelector('.header-left-image');
let pageNumberItem = document.querySelectorAll('.page-number-item');

// ---------- 一、全局事件 ----------

// 进入首页
navJump(navIndex);
// 底部导航栏点击切换
for(let i = 0, max = navItems.length; i < max; i++){
	navItems[i].addEventListener('click',function(){
		navJump(i);
	});
	navItems[i].addEventListener('mousedown',function(){
		event.preventDefault();
	});
};
// 音乐播放
let music = document.querySelector('.music');

// ---------- 一、全局函数 ----------

// 底部导航栏点击切换
function navJump(index){
	// 导航栏切换
	navItems[navIndex].classList.remove('active');
	navItems[index].classList.add('active');
	// 主体内容切换
	mainItems[navIndex].classList.remove('active');
	mainItems[index].classList.add('active');
	// 页码切换
	pageNumberItem[navIndex].classList.remove('active');
	pageNumberItem[index].classList.add('active');
	navIndex = index;
	// 标题栏信息显示
	if(index == 0){
		headerLeftImage.style.display = 'none';
	}else{
		headerLeftImage.style.display = 'block';
	};
};

// ---------- 二、首页变量 ----------

let homepagePhotoBox = document.querySelector('.homepage-photo-box');
let homepagePhotos = document.querySelectorAll('.homepage-photo');


// ---------- 二、首页事件 ----------

// 照片全屏查看
photoFullScreen(homepagePhotos);

// ---------- 二、首页函数 ----------

// 照片全屏查看
// @param：arr，需要添加全屏查看功能的图片数组
function photoFullScreen(arr){
	for(let i = 0, max = arr.length; i < max; i++){
		arr[i].addEventListener('click',function(){
			event.cancelBubble=true;
			photoClick(arr[i]);
		});
	}
	function photoClick(img){
		if(!isFullScreen){
			img.parentNode.classList.add('full-screen');
			img.classList.add('full-screen');
			isFullScreen = true;
			img.parentNode.addEventListener('click',function(){
				img.parentNode.classList.remove('full-screen');
				img.classList.remove('full-screen');
				isFullScreen = false;
			});
		}else{
			img.parentNode.classList.remove('full-screen');
			img.classList.remove('full-screen');
			isFullScreen = false;
		}
	}
}




// // 照片轮播图
// let photoIndex = {
// 	currentIndex:0
// };
// homepageSwiper = setInterval(function(){
// 	swiper(homepagePhotos,photoIndex);
// },3000);
// // @param：arr，需要轮播的图片数组
// // @param：index，外部的轮播计数对象，以属性currentIndex存放当前轮播计数
// function swiper(arr,index){
// 	if(index.currentIndex < arr.length - 1){
// 		clearAll();
// 		arr[index.currentIndex].classList.add('left-hide');
// 		arr[index.currentIndex + 1].classList.add('right-show');
// 		index.currentIndex ++;
// 	}else if(index.currentIndex == arr.length - 1){
// 		clearAll();
// 		arr[index.currentIndex].classList.add('left-hide');
// 		arr[0].classList.add('right-show');
// 		index.currentIndex = 0;
// 	};
// 	function clearAll(){
// 		for(let i = 0, max = arr.length; i < max; i++){
// 			arr[i].classList.remove('show');
// 			arr[i].classList.remove('left-hide');
// 			arr[i].classList.remove('right-show');
// 		}
// 	}
// }
// css代码
// .homepage-photo.show {
// 	visibility: visible;
// }
// .homepage-photo.left-hide {
// 	animation: leftHide 1s linear;
// }
// @keyframes leftHide {
// 	0% {
// 		visibility: visible;
// 	}
// 	100% {
// 		transform: translateX(-100%);
// 	}
// }
// .homepage-photo.right-show {
// 	visibility: visible;
// 	animation: rightShow 1s linear;
// }
// @keyframes rightShow {
// 	0% {
// 		transform: translateX(100%)
// 	}
// 	100% {
		
// 	}
// }