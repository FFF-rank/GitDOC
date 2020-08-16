# 2020/8/4(今日完成1.网页结构；2.HTML文本)
## 网页基础
### 结构：html
### 表现：css
### 行为：javascript
## Web开发软件
### Hbuilder
### 快捷键
#### 整理代码格式：Ctrl+Shift+f
#### 穿越Ctrl+上键或者下键
## 标签基础
### 标签的关系
#### 嵌套关系：包含，父子标签，如"<html><head></html></head>"
#### 并列关系：兄弟标签<head></head><body></body>
### XHTML标签要求任何没有结束标签的标签都要在结尾包含一个斜杠
## 常用单标签
### <!DOCTYPE html>：样本代码，声明代码的版本
### <meta>通常用于优化页面被搜索的可能性，定义版权信息
#### 属性：charset（字符集，="UTF-8"）
#### 属性：name="属性"content="对属性具体描述的词汇"
##### name=keywords，向搜索引擎说明页面关键字，后面放关键字（英文，隔开）
##### name=description，向搜索引擎描述页面内容，后面放内容
##### name=generatop，描述生成的软件
##### name=author，描述设计者姓名
##### name=robot，向页面说明限制搜索的方式，后面可输入all、none、index、noindex、follow、nofollow
#### 属性：http-equiv="refresh"content="2;url=http://www...",2秒后跳转至url所示网页
### <link>用于定义外部文件链接，常用于外部CSS样式——???待补充
### <base>——???待补充
### <style>用于定义CSS的样式——???待补充
### <script>用于定义页面内的脚本，如JS——???待补充
### <!--注释内容-->
#### 快捷键：Ctrl+/
### <hr/>水平线标签
#### 属性：align，编辑对齐模式
#### 属性：width，编辑水平线长度
#### 属性：size，编辑水平线宽度
### <br/>换行标签，0倍行距
## 常用双标签
### <html>开始标签，定义页面的开始与结束
### <head>头标签，有6个特殊标签可以放在头标签中使用（title、meta、link、base、style、script）
### <title>标题标签，设置网页的标题名（显示在选项卡）
### <body>主体标签，所有显示在网页中的内容均被其包含
### <h1>/.../<h6>标题标签
### <P>段落，单倍行距
#### 空格符号：&nbsp；
#### 注册商标符号：&reg；等等
#### 属性：align=left（左对齐）/center（居中）/right（右对齐）
### <pre>将其中文本格式化为等宽字体，保留文本中的空格符、分行，尽量少用
### <font>文本标签
#### 属性：color(="red")，字体颜色
### <b>或<strong>加粗，后者有些浏览器不一定准确显示
### <i>或<em>倾斜，后者有些浏览器不一定准确显示
### <u>或<ins>下划线，后者有些浏览器不一定准确显示
### <s>或<del>删除，后者有些浏览器不一定准确显示
### <sup>上标
### <sub>下标
### <acronym title="注释内容">被注释内容</acronym>
### <ul>无序列表
#### <li>为每行无序列表增加句首符号
#### 无序列表可多级嵌套，无序和有序列表可混合嵌套
### <ol>有序列表
#### <li>为每行有序列表增加序号
#### 属性：type="1/A/a/I（大写罗马）/i（小写罗马）"，设置序号格式
#### 有序列表可多级嵌套，无序和有序列表可混合嵌套
### 自定义列表，被一组dl管理，dt是主题，dd是列表项

# 2020/8/5（今日完成1.HTML图片；2.HTML表格；3.HTML表单；4.CSS文本基本样式）
## <img src="相对路径"/>图片标签
### 属性：width="800"，宽度，单位是px
### 属性：height="800"，高度，单位是px
### 属性：title="提示信息"，提示信息，鼠标指向时显示
### 属性：alt="替换文本"，图挂了时显示
### 属性：border="5"，边框宽度，单位是px
### 属性：src，如果图片在同一文件夹，相对路径=文件名
#### 如果图片在同文件夹的下级文件夹，先打开文件夹，如DOC/**.jpg
#### 如果图片在上级文件夹中，先返回上级，如../**.jpg
#### 如果图片路径是上级和下级混合，按照从左到右顺序依次描述路径
### 属性：align="left/right/top/bottom/middle"，居左/居右/与文本上对齐/与文本下对齐/与文本中对齐
#### 居中命令center在<img/>标签内不起作用，只能添加在标签外，如<p>中
### 属性：hspace="30"/vspace="30",将图片左右/上下与其他内容的间距设为30px
## <body background="高频词.jpg">，使用图片作为页面背景，自动平铺
## <body bgcolor="#FF0000">，使用红色作为背景
## <a href="">点击内容</a>，跳转至链接
### href后可添加相对路径（内部文件）或绝对路径（外部网址），点击内容可以是文字也可以是图片
### 锚点链接，先用<a name="标记">标记锚点（标记不要用数字开头），再用<a href="#标记">跳转至锚点
### 属性：target="_blank"，在新窗口中打开链接
### href="#"，回到网页顶部，##为空链接
## 表格，被<table>管理，
### 属性：border="1"，表格边框宽度1，默认为0px
### 属性：cellspacing="0"，将边框间距设为0，默认为2px
### 属性：width——表格宽度，height——表格高度
### <caption>为表格标题，<tr>为行，<td>为单元格，<th>为表头（默认加粗居中）
#### 属性：align="left/center/right"，单元格内位置
## 表单，
### <form>,表单域
#### 属性：action="地址"，表单提交地址
#### 属性：method="get/post",表单提交方式——???待补充
### <label>,标题
#### 属性：for="txt1"，关联输入框的id属性,点击标题即可输入
### <input>,输入框
#### 属性：type="text"，输入为文本类型
#### 属性：id="txt1"
#### 属性：type="password",输入信息显示为**
#### 属性：type="radio"，可用于从多个选项中选择一个，如加name="相同的名称"，则使多个按钮形成单选的效果
#### 属性：checked=""在点选中，代表默认选中
#### 属性：type="checkbox"，复选框，yes or no
#### 属性：name="表单名字"，用于后台或JS识别
#### 属性：size="字段长度"，文本框的长度
#### 属性：maxlength="最长字符"，可输入的最长字符数量
#### 属性：value="预设信息"，预先设置好的信息
### <select>，下拉框 
#### <option>，下拉框选项
##### 属性：selected=""，默认选中
#### <optgroup label="组名">，为下拉框的option分组
### <textarea>，文本域
### <button>按钮名称</button>
#### 属性：type="submit"，提交按钮
#### 属性：type="reset"，重置按钮
#### 属性：type="button"，可点击按钮
## 可通过chrome浏览器页面右键的检查，进行调试

#2020/8/6(今日完成1.三种CSS写法；2.显示模式转换；3.各种选择器使用及优先级；4.伪类标签使用；5.文本属性继承；6.各类基本样式)
## 内嵌式CSS（页联），<style type="text/CSS"><style>,将CSS样式写在网页<head>中，和html代码相对分离，便于维护
## 标签选择器：<style>标签内，定义h1、p等标签，格式为h1{}，大括号内放置样式，每句以“；”结尾
## 块级显示模式：自己单独占一行，设置宽高起作用，默认宽度和父元素一样
### 块元素包含：div、h1-h6、p、ul、li、ol、dl、dt、dd、hr、form
## 行内显示元素：设置宽高不起作用，自身大小靠文本撑开，一行可以有多个
### 行内元素包括：span、b、strong、i、em、u、ins、s、del、a
## 行内块显示模式：设置宽高起作用，一行可以有多个
### 行内块元素包括：img、表单元素
## 显示模式转换：可在标签选择器中用display：block/inline-block，切换块模式和行内块模式
## h1或p等文本标签
### 样式：color：red/rgb（255,0,0）/#FF0000，三种表示方法（英文/十进制/十六进制）均表示红色
### 样式：font-size：60px，将字体大小设置为60px，默认16px
### 样式：font-family："宋体"，将字体设置为宋体，当字体为汉字或多个单词时，必须加双引号，默认微软雅黑
### 样式：text-algin：center/left/right，文本居中/居左/居右，默认为居左
### 样式：font-weight：400，字体粗细,400（normal）为正常粗细，700（bold）为加粗
### 样式：text-indent：2em，首行缩进两个字体大小，也可用2px来缩进两个像素
## div，无语义元素（大盒子），可借助实体化三属性（宽、高、背景色）呈现
### 样式：width：200px
### 样式：height：200px
### 样式：background：blue，将背景色设为蓝色
## 类选择器
### 定义类名用“.”开头，标签中用class属性调用，不加点
### 命名规范：定义类名时不能用数字开头，对大小写敏感
### 建议用驼峰命名法，如greenBigStudent，第一个单词小写，之后每个单词首字母大写
### class在调用类时可同时调用多个，中间用空格隔开
## id选择器
### 用#加id名称定义，用标签中的id属性调用，不加#
### 类选择器可以重复使用，id选择器不行——???待补充
## 行内式CSS（内联），将CSS作为标签的style属性书写，例如<div style="width:100px;height=100px">
### 将CSS样式写在网页的标签中，和html代码掺杂，难以维护
## 外链式CSS（外联），单独创建CSS文件，如<link rel="stylesheet" type="text/css" href="one.css"/>
### 在html中用link进行关联，代码绝对分离，便于维护，工作中通常使用此方式进行开发
## CSS层叠性，对同一标签多次设计不同属性时，可以同时实现
## CSS对同一属性的CSS优先级：!important＞行内样式（内联）＞id选择器＞类选择器＞标签选择器，后定义＞先定义
### 加了!important的优先级最高，如color：red !important；
### 外链的CSS按照本身优先级及<link>标签所处的先后位置决定优先级
## 后代选择器,在选择器后再加选择器，只有多级选择器都满足，才使用样式，用空格隔开，如.lei1 .lei2{}或div h1{}
## 继承，父元素被选择器定义文本属性后，后代元素继承最近的父元素文本属性（包括居中、行高）
### 前提：后代元素自身未被定义，否则使用自身文本属性
### h和a标签继承的文本属性，会被标签自带的属性覆盖，如需改变需要单独定义
## 伪类，为a标签的文本定义的多种状态下的样式
### a：link{}/a：visited{}/a：hover{}/a：active{}，对应默认/访问后/鼠标移入/鼠标按下四种状态
### 四种状态顺序不能颠倒
### 除了用标签选择器之外，还可以用类选择器加class引用，如.a：link{}
## 行高，line-height
### 每行文本从上到下有四条线，分别是顶线、中线、基线（字母主体下沿，如q的封闭区域下沿）、底线
### 行高即相邻两行基线之间的距离
### 单行文本默认垂直居中于盒子（如span），行高等于盒子的高度
### 要使单行文本在块元素中垂直居中，将行高设为块元素的高度即可
### 当只设置了行高时，没设置高度时，高度默认为行高

# 2020/8/7(今日完成1.字体样式；2.强制英文换行；3.块元素边框、内外边距；4.块元素水平居中)
## 下划线样式：text-decoration：underline（下划线，同<u>，a标签默认），如是none则无下划线
## 删除线样式：text-decoration：line-through，同<s>
## 鼠标样式：cursor：pointer（鼠标显示为小手），链接a标签下默认为小手
## 斜体样式：font-style：italic，normal为正常，同<i>
## 粗体样式：font-weight：bold，同<b>
## 综上，所有的行内样式标签都可以自己写，但为了代码可读性，需要标签语义化
## word-break：break-all，强制英文换行，如未添加的一连串英文字母，会被认为是一个单词而不换行
## 复合属性：如font-打头的样式，可以合并为font：40px “宋体”，空格隔开，至少写两个（大小、字体），如需写行高，写为40px/60px（后面是行高，也可写1.5，即1.5倍）
### 当出现font复合属性时，会覆盖上方单独的font属性，因此要使单独属性生效需写在下方
## 块元素边框：border-width:5px;  border-color:black;  border-style:solid/dashed/dotted/double（实线/虚线/点状线/双实线）;
### 同样可使用复合属性，粗细（默认3）、颜色（默认黑）和样式最好都写
### 可使用left/right/top/bottom，单独画某一条边框
### 可在复合属性下方加border-bottom：none，去掉下方边框
### 边框会使得块元素尺寸变大
## 背景图：background-image：url（图片.jpg），默认平铺
 ### background-repeat：no-repeat，取消平铺
 ### background-repeat：repeat-x/y，横向/纵向平铺
 ### 如在背景图上方已设置了背景色，重叠部分，背景图会覆盖背景色
 ### background-position：left top，图片左上显示，如果图片大于盒子（div）范围，默认只显示左上角
 ### 图片位置也可用0px 0px（左上），坐标的形式设置
 ### background也可使用复合元素
## PS基本使用
### 切片为保存web格式
### 吸取颜色
### Ctrl+左键可切换切片
### del可删除切片
## 内边距padding，块元素加了内边距后，会与内容有间距，但此时的间距是通过块元素变大实现的（固定宽度的情况下）
### 如padding-left：10px，左边内边距为10px
### 块元素尺寸=自身尺寸+内边距+边框
### 如果未给块元素设定宽度，则块元素宽度始终与父元素相同，内容尺寸将被压缩
### 复合元素排序为上右下左，顺时针，只写2个即第一个为上下，第二个为左右
## 外边距margin，盒子（块元素）与盒子之间的距离
### margin的属性写法可参考padding，但不会影响块元素尺寸
### 相邻两个块元素外边距会合并，取值为较大的值
### 外边距塌陷问题，嵌套的两个块元素，当给子元素（第一个）设置向上的外边距时，父元素也会掉下来
### 解决外边距塌陷方案1：给父盒子设置overflow：hidden属性
### 解决外边距塌陷方案2：改为给父盒子设置内边距
## 快捷键
### 在body中输入div.box，按下Tab键，自动生成<div class="box"></div>
### 在body中输入a*5，按下Tab键，自动生成5个<a href=""></a>
### 在body中输入ul>li*5>a，按下Tab键，自动生成5行带a的列表
## 清除标签默认属性
### *{margin：0；padding：0；}，*代表所有的标签，工作中不要这么用
### 工作中用h1,p,li{margin：0；padding：0；}
### h1-6,ul,li,ol,p等标签都有默认内外边距
## 并集选择器：h1,p{margin:0;padding:0;},用逗号相连，对多个标签同时定义样式 
## 块元素水平居中
### margin:0px auto;
### 行内和行内块元素水平居中：给父元素设置text-align：center

# 2020/8/8（今天开始仿淘宝首页，未完成）
## 常规三种显示模式（块、行内、行内块）叫做标准流
## 浮动：是一个属性float，是半脱离标准流，相当于漂浮至上一层，不参与标准流层从上至下的排列
### 浮动元素间会根据从上往下的顺序，实现横向布局
### float：left/right，靠左浮动/靠右浮动
### 为了实现横向排列，行内元素和行内块元素会使得同行元素的上下位置随之变化，浮动则不会（优点）
### 浮动不会对上方的标准流产生影响，但下方的标准流会上移，因此需要为浮动创造一个占位的标准流
### 为浮动元素创造一个高度可随之变化的标准流，并包含浮动元素，需为标准流调用clearfix：after伪类，否则标准流无法随浮动变化占位
### 行内元素加了浮动后，也可设置宽高
### 当标准流内有文本时，即便文本位置被浮动元素覆盖，文字也会自动移开，环绕上方的浮动元素
## seo，search engine optimization，搜索引擎优化
### 从seo角度，导航的a标签连续排列，会被se认为关键词堆砌作弊，所以可用列表隔开
### ul/ol属性：list-style:none，取消列表样式(通常用于取消每行前面的标识符)
### 在块元素中插入img（行内块元素），会造成图片下方留白，此时需将img转化为块显示模式
## chrome默认字号1em=16px
## font-size：100%：字号为父级的100%
## 页、外联CSS表格单元格间距：border-spacing：0px
## 页、外联CSS表格单元格边框重叠：border-collapse：collapse
## CSS中字体可以设置多个，浏览器按顺序识别，能识别就直接使用,用逗号隔开
### 字体可以有3种表示方式，中文、英文、Unicode,当设置多个时，要用引号包裹
## 实际项目CSS模块
### 为了消除浏览器之间的呈现差异，需要对CSS进行初始化，清除一些CSS样式
### 为了让整个网站的各个网页形成一样的风格，需要对一些CSS进行统一的设置
## 网页的版心：页面固定显示宽度，即内容呈现范围的宽度，通常根据设备屏幕分辨率设计
### 早期电脑分辨率较低，版心宽度通常是960px，以现在的淘宝网为例，版心是1190px
### 版心水平居中于浏览器
### 通栏的盒子（通常在上方）无固定宽度，根据浏览器宽度决定

# 2020/8/9（今天继续仿淘宝，顺便按进度把京东也仿了）
## h1在网页中只出现一次，用于logo
## overflow，溢出属性，为父元素设置当子元素内容溢出父元素范围时的设置
### overflow:hidden，溢出部分隐藏
### overflow:scroll，转化为滚轮窗口
### overflow：auto，未溢出时正常，溢出时转化为滚轮窗口
## 根据选择器的权重累加可实现层叠优先级，通常3种，id/类/标签，权重分别设为100/10/1，计算（多次出现应多次相加）
### 因此当需要控制优先级时，可控制后代选择器书写的具体程度（即是否把每一级选择器都写出）
### 或者通过！important强行提权
## input元素属性：placeholder="提示信息"，生成提示信息（CSS3中的文本提示属性）
## border-radius:13px,将元素边框设置为圆角，数值为圆角半径

# 2020/8/10(今日完成1.相对定位；2.绝对定位；3.CSS sprite)
## 定位：改变元素位置
### 相对定位：position：relative；基于自身在网页（父元素）中的位置进行调整,移动后不会影响其他元素，并且仍然在原先标准留位置占位
#### left、top、right、bottom，选择参考点，根据参考点：1px，向基线相反方向平移1px
### 绝对定位：完全脱离标准流的状态，无法占位，可以将元素设置在网页中一个具体的坐标位置
#### left、top为将网页(父元素)的左上作为元素（子元素）的起始参考点,right、bottom将元素在网页（父元素）第一屏（根据窗口大小决定）的右下作为起始参考点
### 当4个参考点都有时，以left和top为准
### 当有多个父元素时，需在想放置的父元素中使用相对定位，确定默认参考点
## 层级（z-index），层级大的元素，显示时在上方，可通过z-index：1属性设置元素层级
### 当元素设置定位后，层级默认为0，层级相同时，后写的标签会压在后写的上面
## 垂直水平居中：用一对定位的父子元素来做
### 为父元素添加相对定位，确定默认参考点
### 为子元素添加绝对定位，将坐标设为50%width，50%height，用margin回撤自身的50%width和50%height
## 透明度：opacity：0.5（取值为0~1），越小透明度越高，也可在rgba（0,0,0,0.5）处设置
## CSS精灵：也叫CSS sprite，是背景图的技术
### 目前网速较快，但服务器的连接数是有限的
### 一次性下载大的背景图，按需要显示其中的一小部分
### 将父元素设置成需要的尺寸，用background-position：0px 0px；控制露出的部分