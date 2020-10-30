// ---------- 个人信息填写 ----------

// 首页信息
// 照片1
updateImage('.homepage-photo1','https://img.bosszhipin.com/boss/avatar/avatar_16.png')
// 照片2
updateImage('.homepage-photo2','https://img.bosszhipin.com/boss/avatar/avatar_15.png')
// 照片3
updateImage('.homepage-photo3','https://img.bosszhipin.com/boss/avatar/avatar_13.png')
// 照片4
updateImage('.homepage-photo4','https://img.bosszhipin.com/boss/avatar/avatar_14.png')
// 姓名
updateText('.homepage-name','***');
// 年龄
updateText('.homepage-age','26');
// 联系电话
updateText('.homepage-tel','13459****68');
// 邮箱
updateText('.homepage-email','5****2379@qq.com');
// 学历
updateText('.homepage-qualification','本科');
// 毕业院校
updateText('.homepage-school','哈尔滨工程大学');
// 专业
updateText('.homepage-major','电子信息工程');








// ---------- 信息填写函数 ----------
// 图片路径填写
function updateImage(selector,path){
	document.querySelector(selector).src=path;
}
// 文本填写
function updateText(selector,message){
	document.querySelector(selector).innerText = message;
}
