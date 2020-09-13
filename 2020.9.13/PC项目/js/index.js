(function(){
	// 开场动画
	var bootMask=document.querySelector('.boot-mask');
	var bootMaskUp=document.querySelector('.boot-mask-up');
	var bootMaskDown=document.querySelector('.boot-mask-down');
	var bootProgress=document.querySelector('.boot-progress');
	var imgArr=['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
	var loaded=0;
	imgArr.forEach(function(imgSrc){
		var imgNode=document.createElement('img');
		imgNode.src='img/'+imgSrc;
		imgNode.addEventListener('load',function(){
			loaded++;
			var scale=loaded/imgArr.length;
			bootProgress.style.width=scale*window.innerWidth+'px';
			if(scale==1){
				bootProgress.addEventListener('transitionend',function(){
					bootProgress.style.display='none';
					bootMaskUp.style.height=0;
					bootMaskDown.style.height=0;
				});
				bootMaskUp.addEventListener('transitionend',function(){
					var wrapperNode=document.querySelector('.wrapper');
					wrapperNode.removeChild(bootMask);
					flow();
				});
			};
		});
	});
	
	
	
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
	var index=0;
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
		for(var i=0;i<animationList.length;i++){
			animationList[i].outAnimation();
		};
		animationList[index].inAnimation();
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
	
	// 过场动画
	var animationList=[
		{
			inAnimation:function(){
				var playList=document.querySelector('.play-list');
				var iconList=document.querySelector('.icon-list');
				playList.style.transform="translateY(0)";
				iconList.style.transform="translateY(0)";
			},
			outAnimation:function(){
				var playList=document.querySelector('.play-list');
				var iconList=document.querySelector('.icon-list');
				playList.style.transform="translateY(-200px)";
				iconList.style.transform="translateY(200px)";
			}
		},
		{
			inAnimation:function(){
				var plane1=document.querySelector('.plane1');
				var plane2=document.querySelector('.plane2');
				var plane3=document.querySelector('.plane3');
				plane1.style.transform="translateX(0) translateY(0)";
				plane2.style.transform="translateX(0) translateY(0)";
				plane3.style.transform="translateX(0) translateY(0)";
			},
			outAnimation:function(){
				var plane1=document.querySelector('.plane1');
				var plane2=document.querySelector('.plane2');
				var plane3=document.querySelector('.plane3');
				plane1.style.transform="translateX(-200px) translateY(-200px)";
				plane2.style.transform="translateX(-200px) translateY(200px)";
				plane3.style.transform="translateX(200px) translateY(-200px)";
			}
		},
		{
			inAnimation:function(){
				var pencil1=document.querySelector('.pencil1');
				var pencil2=document.querySelector('.pencil2');
				var pencil3=document.querySelector('.pencil3');
				pencil1.style.transform="translateX(0) translateY(0)";
				pencil2.style.transform="translateX(0) translateY(0)";
				pencil3.style.transform="translateX(0) translateY(0)";
			},
			outAnimation:function(){
				var pencil1=document.querySelector('.pencil1');
				var pencil2=document.querySelector('.pencil2');
				var pencil3=document.querySelector('.pencil3');
				pencil1.style.transform="translateY(-200px)";
				pencil2.style.transform="translateY(200px)";
				pencil3.style.transform="translateX(200px) translateY(200px)";
			}
		},
		{
			inAnimation:function(){
				var about3Items=document.querySelectorAll('.about3-item');
				about3Items[0].style.transform="rotate(0)";
				about3Items[1].style.transform="rotate(0)";
			},
			outAnimation:function(){
				var about3Items=document.querySelectorAll('.about3-item');
				about3Items[0].style.transform="rotate(30deg)";
				about3Items[1].style.transform="rotate(-30deg)";
			}
		},
		{
			inAnimation:function(){
				var team1=document.querySelector('.team1');
				var team2=document.querySelector('.team2');
				team1.style.transform="translateX(0)";
				team2.style.transform="translateX(0)";
			},
			outAnimation:function(){
				var team1=document.querySelector('.team1');
				var team2=document.querySelector('.team2');
				team1.style.transform="translateX(-200px)";
				team2.style.transform="translateX(200px)";
			}
		}
	];
	
	
	
	
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
	
	
	// 背景音乐控制
	var musicNode=document.querySelector('.music');
	var musicControl=document.querySelector('.music-control');
	musicNode.volume=0.5;
	musicControl.addEventListener('click',function(){
		this.classList.toggle('active');
		if(musicNode.paused==true){
			musicNode.play();
		}else if(musicNode.paused==false){
			musicNode.pause();
		};
	});
	
	// 第一屏轮播图
	// 定义变量，轮播图状态
	var count=0;
	var flowId;
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
	// 去除图1始终显示的样式
	playItems[0].addEventListener('animationend',function(){
		playItems[0].classList.remove('active'); 
	});
	
	
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
	
	
	// 第五屏气泡运动
	var team3Items=document.querySelectorAll('.team3-item');
	var canvas=createCanvas();
	team3Items.forEach(function(team3Item){
		team3Item.addEventListener('mouseenter',function(){
				this.appendChild(canvas);
		});
		team3Item.addEventListener('mouseleave',function(){
				this.removeChild(canvas);
		});
	});
		
		
		

	// 创建canvas函数
	function createCanvas(){
		var canNode= document.createElement('canvas');
		canNode.className='can';
		canNode.width=team3Items[0].offsetWidth;
		canNode.height=team3Items[0].offsetHeight;
		ctx=canNode.getContext('2d');
		// 生成气泡数据
		var circleArr=[];
		setInterval(function(){
			var circle={};
			circle.r=5+Math.floor(Math.random()*10);
			circle.x=Math.floor(Math.random()*canNode.width);
			circle.y=canNode.height+circle.r;
			circle.red=128+Math.floor(Math.random()*128);
			circle.green=128+Math.floor(Math.random()*128);
			circle.blue=128+Math.floor(Math.random()*128);
			circle.opacity=1;
			circle.X=circle.x;
			circleArr.push(circle);
		},100);
		// 绘制气泡
		setInterval(function(){
			ctx.clearRect(0,0,canNode.width,canNode.height);
			for(var i=0;i<circleArr.length;i++){
				if(circleArr[i].y>0-circleArr[i].r){
					ctx.beginPath();
					ctx.arc(circleArr[i].x,circleArr[i].y,circleArr[i].r,0,2*Math.PI);
					ctx.fillStyle="rgba("+circleArr[i].red+","+circleArr[i].green+","+circleArr[i].blue+","+circleArr[i].opacity+")";
					ctx.fill();
					circleArr[i].x=circleArr[i].X+Math.sin(circleArr[i].y/180*Math.PI)*circleArr[i].r*5;
					circleArr[i].y-=5;
					circleArr[i].r+=0.05;
					circleArr[i].opacity-=0.01;
				};
			};
		},17);
		return canNode;
	};
	
	
	
	
	
})();
