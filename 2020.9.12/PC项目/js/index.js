(function(){
	// 头部导航区域
	// 获取所有的导航项目元素
	var navItems=document.querySelectorAll('.nav-item');
	var arrow=document.querySelector('.arrow');
	// 获取滚动条元素
	var scroll=document.querySelector('.scroll');
	var scrCircles=document.querySelectorAll('.scr-circle');
	// 设置内容主体高度
	var header=document.querySelector('.header');
	var main=document.querySelector('.main');
	var contentListNode=document.querySelector('.content-list');
	var contentItems=document.querySelectorAll('.content-item');
	setPageHeight();
	// 设置初始导航位置
	var index=4;
	window.addEventListener('DOMContentLoaded',function(){
		setCurrent(index);
	});
	// 给每个导航项目绑定单击事件
	for(var i=0;i<navItems.length;i++){
		navItems[i].index=i;//将i的值添加为每个元素的属性
		navItems[i].addEventListener('click',function(){
			// 激活导航
			setCurrent(this.index);
		});
	};
	// 导航操作
	function setCurrent(index){
		var contentHeight=window.innerHeight-header.offsetHeight;
		// 其他的导航取消激活
		navItems.forEach(function(navItem){
			navItem.classList.remove('active');
		});
		scrCircles.forEach(function(scrCircle){
			scrCircle.classList.remove('active');
		});
		// 当前导航激活
		navItems[index].classList.add('active');
		scrCircles[index].classList.add('active');
		// 设置三角位置
		arrow.style.left=navItems[index].offsetLeft+(navItems[index].offsetWidth-arrow.offsetWidth)/2+'px';
		// 设置页面切换
		contentListNode.style.top=-index*contentHeight+'px';
	};
	// 滚轮操作
	// chrome/ie
	document.addEventListener('mousewheel',scrollFn);
	// firefox
	document.addEventListener('DOMMouseScroll',scrollFn);
	function scrollFn(event){
		var contentItems=document.querySelectorAll('.content-item');
		// 滚轮方向变量
		var tag;
		// chrome/ie滚轮方向判定
		if(event.wheelDelta){
			if(event.wheelDelta==120){
				tag="up";
			}else if(event.wheelDelta==-120){
				tag="down";
			};
		}
		// firefox滚轮方向判定
		if(event.detail){
			if(event.detail==-3){
				tag="up";
			}else if(event.detail==3){
				tag="down";
			};
		};
		// 根据滚轮方向进行导航
		if(tag=="up"){
			if(index>0){
				index--;
			};
		}else if(tag=="down"){
			if(index<contentItems.length-1){
				index++;
			};
		};
		setCurrent(index);
	};
	// 监听窗口大小改变
	window.addEventListener('resize',function(){
		setPageHeight();
		setCurrent(index);
	});
	
	
	
	// 主体内容区域
	// 设置主体内容高度函数
	function setPageHeight(){
		var contentHeight=window.innerHeight-header.offsetHeight;
		main.style.height=contentHeight+'px';
		contentItems.forEach(function(contentItem){
			contentItem.style.height=contentHeight+'px';
		});
		scroll.style.top=0.5*contentHeight-0.5*scroll.offsetHeight+'px';
	};
	
	
	// 第一屏轮播图
	// 定义变量，轮播图状态
	var count=0;
	var flowId
	var playItems=document.querySelectorAll('.play-item');
	var iconItems=document.querySelectorAll('.icon-item');
	// 自动轮播函数
	function flow(){
		flowId=setInterval(function(){
			if(count<playItems.length-1){
				clearPlay();
				playItems[count].classList.add('left-hide');
				playItems[count+1].classList.add('right-show');
				iconItems[count+1].classList.add('active');
				count++;
			}else if(count==playItems.length-1){
				clearPlay();
				playItems[count].classList.add('left-hide');
				playItems[0].classList.add('right-show');
				iconItems[0].classList.add('active');
				count=0;
			};
		},3000);
	};
	flow();
	// 去除图1始终显示的样式
	setTimeout(function(){
		playItems[0].classList.remove('active');
	},3000);
	// 点击改变轮播图
	for(var i=0;i<iconItems.length;i++){
		iconItems[i].count=i;
		iconItems[i].addEventListener('click',function(){
			flowId=clearInterval(flowId);
			if(this.count>count){
				clearPlay();
				playItems[count].classList.add('left-hide');
				playItems[this.count].classList.add('right-show');
				iconItems[this.count].classList.add('active');
				count=this.count;
			}else if(this.count<count){
				clearPlay();
				playItems[count].classList.add('right-hide');
				playItems[this.count].classList.add('left-show');
				iconItems[this.count].classList.add('active');
				count=this.count;
			}
			flow();
		})
	};
	function clearPlay(){
		for(var j=0;j<iconItems.length;j++){
			playItems[j].classList.remove('right-show');
			playItems[j].classList.remove('left-show');
			playItems[j].classList.remove('right-hide');
			playItems[j].classList.remove('left-hide');
			iconItems[j].classList.remove('active');
		};
	};
	
	
	
	
})();
