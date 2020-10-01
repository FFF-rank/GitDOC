function $ajax({method="get",url,data,success,error}){
				// 创建ajax对象
				// var xhr = new XMLHttpRequest();
				// 所谓的兼容IE8以下，试了一下IE的调试模式，并不管用，不知道真的ie8以下有没有用，我觉得没啥用
				var xhr=null;
				try{
					xhr=new XMLHttpRequest();
				}catch(error){
					xhr=new ActiveXObject("Microsoft.XMLHTTP");
				}
				// 将输入的对象转化为查询字符串
				if(data){
					var data=querystring(data);
				};
				// 判断是否添加get模式数据
				if(method=="get" && data){
					url+= "?"+data;
				};
				// 调用open
				xhr.open(method,url,true);
				// 判断是否添加post模式数据
				if(method=="get"){
					xhr.send();
				}else{
					xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
					xhr.send(data);
				};
				// 等待数据响应
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							if(success){
								success(xhr.responseText);
							}
						}else{
							if(error){
								error('Error:'+xhr.status);
							}
						};
					};
				};
			};
			// 拼接查询字符串
			function querystring(obj){
				var str="";
				for(var attr in obj){
					str+=attr+"="+obj[attr]+"&";
				};
				return str.substring(0,str.length-1);
			};