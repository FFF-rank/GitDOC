$(function(){
	var toDoList=[];
	// 渲染本地存储条目  ok
	load();
	function load(){
		toDoList=readLocalStorage();
		$('ol').empty();
		$.each(toDoList,function(index,domEle){
			var newItem=$('<li><input type="checkbox"><span>'+$(toDoList).eq(index).attr('title')+'</span><a href="javascript:;">-</a></li>');
			$(newItem).css('display','none');
			if($(toDoList).eq(index).attr('value')==false){
				$('.doingList').prepend(newItem);
			}else if($(toDoList).eq(index).attr('value')==true){
				$(newItem).children('input').prop('checked',true);
				$('.doneList').prepend(newItem);
			};
			$('li').slideDown();
		});
	count();
	};
	// 回车添加事项 ok
	$('.add').keydown(function(){
		if(event.keyCode==13){
			var newItem=$('<li><input type="checkbox"><span>'+$('.add').val()+'</span><a href="javascript:;">-</a></li>');
			$(newItem).css('display','none');
			$('.doingList').prepend(newItem);
			$(newItem).slideDown();
			toDoList.push({title:$('.add').val(),value:false});
			updateLocalStorage(toDoList);
			$('.add').val('');
			count();
		};
	});
	// 统计当前待办项 ok
	function count(){
		$('.doing span').html($('.doingList li').length);
		$('.done span').html($('.doneList li').length);
	};
	// 删除当前事项  ok
	$('ol').on('click','li a',function(){
		var tit=$(this).siblings('span').html();
		toDoList=readLocalStorage();
		$.each($(toDoList),function(index,domEle){
			if($(domEle).attr('title')==tit){
				toDoList.splice(index,1);
			};
		});
		updateLocalStorage(toDoList);
		$(this).parent().slideUp(function(){
			$(this).remove();
			count();
		});
	});
	// 完成事项勾选  ok
	$('ol').on('click',' li input',function(){
		var checked=$(this).prop('checked');
		$(this).parent().slideUp(function(){
			$(this).parent().siblings('ol').prepend($(this));
			$(this).slideDown();
			var tit=$(this).children('span').html();
			toDoList=readLocalStorage();
			$.each($(toDoList),function(index,domEle){
				if($(domEle).attr('title')==tit){
					toDoList.splice(index,1,{title:tit,value:checked});
				};
			});
			updateLocalStorage(toDoList);
			count();
		});
	});
	// 清空所有事项 ok
	$('footer a').on('click',function(){
		$('li').slideUp(function(){
			$('li').remove();
			toDoList=[];
			localStorage.clear();
			count();
		});
	});
	// 读取本地存储 ok
	function readLocalStorage(){
		toDoList=JSON.parse(localStorage.getItem('toDoList'));
		if(toDoList==null){
			toDoList=[];
		};
		return toDoList;
	};
	// 更新本地存储 ok
	function updateLocalStorage(storageNode){
		localStorage.setItem('toDoList',JSON.stringify(storageNode));
	};
});