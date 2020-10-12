var man="小明";
var woman="小红";
function sum(num1,num2){
	return num1+num2
};
export{
	man,
	sum
}
export var child="小刚";
// 匿名导出（只能有一个）
// var address="北京市";
// export default address;
export default "北京市";