let app=new Vue({
	el:"#app",
	data:{
		books:[
			{name:"《算法导论》",
			date:"2006-9",
			price:85.00,
			count:1},
			{name:"《UNIX编程艺术》",
			date:"2006-2",
			price:59.00,
			count:1},
			{name:"《编程珠玑》",
			date:"2008-10",
			price:39.00,
			count:1},
			{name:"《代码大全》",
			date:"2006-3",
			price:128.00,
			count:1}
		]
	},
	computed:{
		totalPrice:function(){
			let sum=0;
			for(let i=0;i<this.books.length;i++){
				sum+=this.books[i].price*this.books[i].count;
			};
			return sum;
		}
	},
	methods:{
		decrease:function(book){
			if(book.count>1){
				book.count--;
			};
		},
		increase:function(book){
			book.count++;
		},
		deleteTr:function(index){
			this.books.splice(index,1);
		}
	},
	filters:{
		tofixed:function(price){
			return price.toFixed(2);
		}
	}
});
// app.books.push({
// 	name:"《海贼王》",
// 	date:"1999-12",
// 	price:10.00,
// 	count:1
// });