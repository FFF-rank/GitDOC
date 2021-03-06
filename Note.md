### 薄弱点：原型、原型链、DOM、CSS预处理器

# 2020/8/4(今日完成1.网页结构；2.HTML文本)
### 网页基础
+ 结构：html
+ 表现：css
+ 行为：javascript

### Web开发软件
+ Hbuilder
+ 快捷键
    - 整理代码格式：Ctrl+Shift+f
    - 穿越Ctrl+上键或者下键

### 标签基础
+ 标签的关系
    - 嵌套关系：包含，父子标签，如"《html》《head》《/html》《/head》"
    - 并列关系：兄弟标签《head》《/head》《body》《/body》
+ XHTML标签要求任何没有结束标签的标签都要在结尾包含一个斜杠

### 常用单标签
+ 《!DOCTYPE html》：样本代码，声明代码的版本
+ 《meta》标签，主要用于设置网页中的一些元数据，通常用于优化页面被搜索的可能性，定义版权信息
    - 属性：charset（字符集，="UTF-8"）
    - 属性：name="属性"content="对属性具体描述的词汇"
        * name=keywords，向搜索引擎说明页面关键字，后面放关键字（英文，用 , 隔开）
        * name=description，向搜索引擎描述页面内容，后面放内容
        * name=generatop，描述生成的软件
        * name=author，描述设计者姓名
        * name=robot，向页面说明限制搜索的方式，后面可输入all、none、index、noindex、follow、nofollow
    - 属性：http-equiv="refresh"content="2;url=http://www...",2秒后跳转至url所示网页
+ 《link》用于定义外部文件链接，常用于外部CSS样式——???待补充
+ 《base》——???待补充
+ 《style》用于定义CSS的样式——???待补充
+ 《script》用于定义页面内的脚本，如JS——???待补充
+ 《!--注释内容--》
    - 快捷键：Ctrl+/
+ 《hr/》水平线标签
    - 属性：align，编辑对齐模式
    - 属性：width，编辑水平线长度
    - 属性：size，编辑水平线宽度
+ 《br/》换行标签，0倍行距

### 常用双标签
+ 《html》开始标签，定义页面的开始与结束
+ 《head》头标签，有6个特殊标签可以放在头标签中使用（title、meta、link、base、style、script）
+ 《title》标题标签，设置网页的标题名（显示在选项卡）
+ 《body》主体标签，所有显示在网页中的内容均被其包含
+ 《h1》/.../《h6》标题标签
+ 《P》段落，单倍行距
    - 空格符号：&nbsp；
    - 注册商标符号：&reg；等等
    - 属性：align=left（左对齐）/center（居中）/right（右对齐）
+ 《pre》将其中文本格式化为等宽字体，保留文本中的空格符、分行，尽量少用
+ 《font》文本标签
    - 属性：color(="red")，字体颜色
+ 《b》或《strong》加粗，后者有些浏览器不一定准确显示
+ 《i》或《em》倾斜，后者有些浏览器不一定准确显示
+ 《u》或《ins》下划线，后者有些浏览器不一定准确显示
+ 《s》或《del》删除，后者有些浏览器不一定准确显示
+ 《sup》上标
+ 《sub》下标
+ 《acronym title="注释内容"》被注释内容《/acronym》
+ 《ul》无序列表
    - 《li》为每行无序列表增加句首符号
    - 无序列表可多级嵌套，无序和有序列表可混合嵌套
+ 《ol》有序列表
    - 《li》为每行有序列表增加序号
    - 属性：type="1/A/a/I（大写罗马）/i（小写罗马）"，设置序号格式
    - 有序列表可多级嵌套，无序和有序列表可混合嵌套
+ 自定义列表，被一组dl管理，dt是主题，dd是列表项

# 2020/8/5（今日完成1.HTML图片；2.HTML表格；3.HTML表单；4.CSS文本基本样式）
### 《img src="相对路径"/》图片标签
+ 属性：width="800"，宽度，单位是px
+ 属性：height="800"，高度，单位是px
+ 属性：title="提示信息"，提示信息，鼠标指向时显示
+ 属性：alt="替换文本"，图挂了时显示
+ 属性：border="5"，边框宽度，单位是px
+ 属性：src，如果图片在同一文件夹，相对路径=文件名
    - 如果图片在同文件夹的下级文件夹，先打开文件夹，如DOC/**.jpg
    - 如果图片在上级文件夹中，先返回上级，如../**.jpg
    - 如果图片路径是上级和下级混合，按照从左到右顺序依次描述路径
+ 属性：align="left/right/top/bottom/middle"，居左/居右/与文本上对齐/与文本下对齐/与文本中对齐
    - 居中命令center在《img/》标签内不起作用，只能添加在标签外，如《p》中
+ 属性：hspace="30"/vspace="30",将图片左右/上下与其他内容的间距设为30px

### 《body background="高频词.jpg"》，使用图片作为页面背景，自动平铺

### 《body bgcolor="#FF0000"》，使用红色作为背景

### 《a href=""》点击内容《/a》，跳转至链接
+ href后可添加相对路径（内部文件）或绝对路径（外部网址），点击内容可以是文字也可以是图片
+ 锚点链接，先用《a name="标记"》标记锚点（标记不要用数字开头），再用《a href="#标记"》跳转至锚点
+ 属性：target="_blank"，在新窗口中打开链接
+ href="#"，回到网页顶部，##为空链接

### 表格，被《table》管理，
+ 属性：border="1"，表格边框宽度1，默认为0px
+ 属性：cellspacing="0"，将边框间距设为0，默认为2px
+ 属性：width——表格宽度，height——表格高度
+ 《caption》为表格标题，《tr》为行，《td》为单元格，《th》为表头（默认加粗居中）
    - 属性：align="left/center/right"，单元格内位置

### 表单
+ 《form》,表单域
    - 属性：action="地址"，表单提交地址
    - 属性：method="get/post",表单提交方式——???待补充
+ 《label》,标题
    - 属性：for="txt1"，关联输入框的id属性,点击标题即可输入
+ 《input》,输入框
    - 属性：type="text"，输入为文本类型
    - 属性：id="txt1"
    - 属性：type="password",输入信息显示为**
    - 属性：type="radio"，可用于从多个选项中选择一个，如加name="相同的名称"，则使多个按钮形成单选的效果
    - 属性：checked=""在点选中，代表默认选中
    - 属性：type="checkbox"，复选框，yes or no
    - 属性：name="表单名字"，用于后台或JS识别
    - 属性：size="字段长度"，文本框的长度
    - 属性：maxlength="最长字符"，可输入的最长字符数量
    - 属性：value="预设信息"，预先设置好的信息
+ 《select》，下拉框 
    - 《option》，下拉框选项
        * 属性：selected=""，默认选中
    - 《optgroup label="组名"》，为下拉框的option分组
+ 《textarea》，文本域
+ 《button》按钮名称《/button》
    - 属性：type="submit"，提交按钮
    - 属性：type="reset"，重置按钮
    - 属性：type="button"，可点击按钮

### 可通过chrome浏览器页面右键的检查，进行调试

# 2020/8/6(今日完成1.三种CSS写法；2.显示模式转换；3.各种选择器使用及优先级；4.伪类标签使用；5.文本属性继承；6.各类基本样式)
### 内嵌式CSS（页联），《style type="text/CSS"》《style》,将CSS样式写在网页《head》中，和html代码相对分离，便于维护

### 标签选择器：《style》标签内，定义h1、p等标签，格式为h1{}，大括号内放置样式，每句以“；”结尾

### 块级显示模式：自己单独占一行，设置宽高起作用，默认宽度和父元素一样
+ 块元素包含：div、h1-h6、p、ul、li、ol、dl、dt、dd、hr、form

### 行内显示元素：设置宽高不起作用，自身大小靠文本撑开，一行可以有多个
+ 行内元素包括：span、b、strong、i、em、u、ins、s、del、a

### 行内块显示模式：设置宽高起作用，一行可以有多个
+ 行内块元素包括：img、表单元素

### 显示模式转换：可在标签选择器中用display：block/inline-block，切换块模式和行内块模式

### h1或p等文本标签
+ 样式：color：red/rgb（255,0,0）/#FF0000，三种表示方法（英文/十进制/十六进制）均表示红色
+ 样式：font-size：60px，将字体大小设置为60px，默认16px
+ 样式：font-family："宋体"，将字体设置为宋体，当字体为汉字或多个单词时，必须加双引号，默认微软雅黑
+ 样式：text-algin：center/left/right，文本居中/居左/居右，默认为居左
+ 样式：font-weight：400，字体粗细,400（normal）为正常粗细，700（bold）为加粗
+ 样式：text-indent：2em，首行缩进两个字体大小，也可用2px来缩进两个像素

### div，无语义元素（大盒子），可借助实体化三属性（宽、高、背景色）呈现
+ 样式：width：200px
+ 样式：height：200px
+ 样式：background：blue，将背景色设为蓝色

### 类选择器
+ 定义类名用“.”开头，标签中用class属性调用，不加点
+ 命名规范：定义类名时不能用数字开头，对大小写敏感
+ 建议用驼峰命名法，如greenBigStudent，第一个单词小写，之后每个单词首字母大写
+ class在调用类时可同时调用多个，中间用空格隔开

### id选择器
+ 用#加id名称定义，用标签中的id属性调用，不加#
+ 类选择器可以重复使用，id选择器不行——???待补充

### 行内式CSS（内联），将CSS作为标签的style属性书写，例如《div style="width:100px;height=100px"》
+ 将CSS样式写在网页的标签中，和html代码掺杂，难以维护

### 外链式CSS（外联），单独创建CSS文件，如《link rel="stylesheet" type="text/css" href="one.css"/》
+ 在html中用link进行关联，代码绝对分离，便于维护，工作中通常使用此方式进行开发

### CSS层叠性，对同一标签多次设计不同属性时，可以同时实现

### CSS对同一属性的CSS优先级：!important＞行内样式（内联）＞id选择器＞类选择器＞标签选择器，后定义＞先定义
+ 加了!important的优先级最高，如color：red !important；
+ 外链的CSS按照本身优先级及《link》标签所处的先后位置决定优先级

### 后代选择器,在选择器后再加选择器，只有多级选择器都满足，才使用样式，用空格隔开，如.lei1 .lei2{}或div h1{}

### 继承，父元素被选择器定义文本属性后，后代元素继承最近的父元素文本属性（包括居中、行高）
+ 前提：后代元素自身未被定义，否则使用自身文本属性
+ h和a标签继承的文本属性，会被标签自带的属性覆盖，如需改变需要单独定义

### 伪类，为a标签的文本定义的多种状态下的样式
+ a：link{}/a：visited{}/a：hover{}/a：active{}，对应默认/访问后/鼠标移入/鼠标按下四种状态
+ 四种状态顺序不能颠倒
+ 除了用标签选择器之外，还可以用类选择器加class引用，如.a：link{}

### 行高，line-height
+ 每行文本从上到下有四条线，分别是顶线、中线、基线（字母主体下沿，如q的封闭区域下沿）、底线
+ 行高即相邻两行基线之间的距离
+ 单行文本默认垂直居中于盒子（如span），行高等于盒子的高度
+ 要使单行文本在块元素中垂直居中，将行高设为块元素的高度即可
+ 当只设置了行高时，没设置高度时，高度默认为行高

# 2020/8/7(今日完成1.字体样式；2.强制英文换行；3.块元素边框、内外边距；4.块元素水平居中)
### 字体样式
+ 下划线样式：text-decoration：underline（下划线，同《u》，a标签默认），如是none则无下划线
+ 删除线样式：text-decoration：line-through，同《s》
+ 鼠标样式：cursor：pointer（鼠标显示为小手），链接a标签下默认为小手
+ 斜体样式：font-style：italic，normal为正常，同《i》
+ 粗体样式：font-weight：bold，同《b》
+ 综上，所有的行内样式标签都可以自己写，但为了代码可读性，需要标签语义化

### word-break：break-all，强制英文换行，如未添加的一连串英文字母，会被认为是一个单词而不换行

### 复合属性：如font-打头的样式，可以合并为font：40px “宋体”，空格隔开，至少写两个（大小、字体），如需写行高，写为40px/60px（后面是行高，也可写1.5，即1.5倍）
+ 当出现font复合属性时，会覆盖上方单独的font属性，因此要使单独属性生效需写在下方

### 块元素边框：border-width:5px;  border-color:black;  border-style:solid/dashed/dotted/double（实线/虚线/点状线/双实线）;
+ 同样可使用复合属性，粗细（默认3）、颜色（默认黑）和样式最好都写
+ 可使用left/right/top/bottom，单独画某一条边框
+ 可在复合属性下方加border-bottom：none，去掉下方边框
+ 边框会使得块元素尺寸变大

### 背景图：background-image：url（图片.jpg），默认平铺
 + background-repeat：no-repeat，取消平铺
 + background-repeat：repeat-x/y，横向/纵向平铺
 + 如在背景图上方已设置了背景色，重叠部分，背景图会覆盖背景色
 + background-position：left top，图片左上显示，如果图片大于盒子（div）范围，默认只显示左上角
 + 图片位置也可用0px 0px（左上），坐标的形式设置
 + 可使用center center，显示中间部分
 + background也可使用复合元素
 + background-size:cover,铺满元素，可能进行裁切
 
### PS基本使用
+ 切片为保存web格式
+ 吸取颜色
+ Ctrl+左键可切换切片
+ del可删除切片

### 内边距padding，块元素加了内边距后，会与内容有间距，但此时的间距是通过块元素变大实现的（固定宽度的情况下）
+ 如padding-left：10px，左边内边距为10px
+ 块元素尺寸=自身尺寸+内边距+边框
+ 如果未给块元素设定宽度，则块元素宽度始终与父元素相同，内容尺寸将被压缩
+ 复合元素排序为上右下左，顺时针，只写2个即第一个为上下，第二个为左右

### 外边距margin，盒子（块元素）与盒子之间的距离
+ margin的属性写法可参考padding，但不会影响块元素尺寸
+ 相邻两个块元素外边距会合并，取值为较大的值
+ 外边距塌陷问题，嵌套的两个块元素，当给子元素（第一个）设置向上的外边距时，父元素也会掉下来
+ 解决外边距塌陷方案1：给父盒子设置overflow：hidden属性
+ 解决外边距塌陷方案2：改为给父盒子设置内边距

### 快捷键
+ 在body中输入div.box，按下Tab键，自动生成《div class="box"》《/div》
+ 在body中输入a*5，按下Tab键，自动生成5个《a href=""》《/a》
+ 在body中输入ul》li*5》a，按下Tab键，自动生成5行带a的列表

### 清除标签默认属性
+ *{margin：0；padding：0；}，*代表所有的标签，工作中不要这么用
+ 工作中用h1,p,li{margin：0；padding：0；}
+ h1-6,ul,li,ol,p等标签都有默认内外边距

### 并集选择器：h1,p{margin:0;padding:0;},用逗号相连，对多个标签同时定义样式 

### 块元素水平居中
+ margin:0px auto;
+ 行内和行内块元素水平居中：给父元素设置text-align：center

# 2020/8/8（今天开始仿淘宝首页，未完成）
### 常规三种显示模式（块、行内、行内块）叫做标准流

### 浮动：是一个属性float，是半脱离标准流，相当于漂浮至上一层，不参与标准流层从上至下的排列
+ 浮动元素间会根据从上往下的顺序，实现横向布局
+ float：left/right，靠左浮动/靠右浮动
+ 为了实现横向排列，行内元素和行内块元素会使得同行元素的上下位置随之变化，浮动则不会（优点）
+ 浮动不会对上方的标准流产生影响，但下方的标准流会上移，因此需要为浮动创造一个占位的标准流
+ 为浮动元素创造一个高度可随之变化的标准流，并包含浮动元素，需为标准流调用clearfix：after伪类，否则标准流无法随浮动变化占位
+ 行内元素加了浮动后，也可设置宽高
+ 当标准流内有文本时，即便文本位置被浮动元素覆盖，文字也会自动移开，环绕上方的浮动元素

### seo，search engine optimization，搜索引擎优化
+ 从seo角度，导航的a标签连续排列，会被se认为关键词堆砌作弊，所以可用列表隔开
+ ul/ol属性：list-style:none，取消列表样式(通常用于取消每行前面的标识符)
+ 在块元素中插入img（行内块元素），会造成图片下方留白，此时需将img转化为块显示模式

### chrome默认字号1em=16px

### font-size：100%：字号为父级的100%

### 页、外联CSS表格单元格间距：border-spacing：0px

### 页、外联CSS表格单元格边框重叠：border-collapse：collapse

### CSS中字体可以设置多个，浏览器按顺序识别，能识别就直接使用,用逗号隔开
+ 字体可以有3种表示方式，中文、英文、Unicode,当设置多个时，要用引号包裹

### 实际项目CSS模块
+ 为了消除浏览器之间的呈现差异，需要对CSS进行初始化，清除一些CSS样式
+ 为了让整个网站的各个网页形成一样的风格，需要对一些CSS进行统一的设置

### 网页的版心：页面固定显示宽度，即内容呈现范围的宽度，通常根据设备屏幕分辨率设计
+ 早期电脑分辨率较低，版心宽度通常是960px，以现在的淘宝网为例，版心是1190px
+ 版心水平居中于浏览器
+ 通栏的盒子（通常在上方）无固定宽度，根据浏览器宽度决定

# 2020/8/9（今天继续仿淘宝，顺便按进度把京东也仿了）
### h1在网页中只出现一次，用于logo

### overflow，溢出属性，为父元素设置当子元素内容溢出父元素范围时的设置
+ overflow:hidden，溢出部分隐藏
+ overflow:scroll，转化为滚轮窗口
	- overflow-y:scroll可谓纵向设置滚动
+ overflow：auto，未溢出时正常，溢出时转化为滚轮窗口

### 根据选择器的权重累加可实现层叠优先级，通常3种，id/类/标签，权重分别设为100/10/1，计算（多次出现应多次相加）
+ 因此当需要控制优先级时，可控制后代选择器书写的具体程度（即是否把每一级选择器都写出）
+ 或者通过！important强行提权

### input元素属性：placeholder="提示信息"，生成提示信息（CSS3中的文本提示属性）

### border-radius:13px,将元素边框设置为圆角，数值为圆角半径

# 2020/8/10(今日完成1.相对定位；2.绝对定位；3.CSS sprite)
### 定位：改变元素位置
+ 相对定位：position：relative；基于自身在网页（父元素）中的位置进行调整,移动后不会影响其他元素，并且仍然在原先标准留位置占位
    - left、top、right、bottom，选择参考点，根据参考点：1px，向基线相反方向平移1px
+ 绝对定位：position：absolute；完全脱离标准流的状态，无法占位，可以将元素设置在网页中一个具体的坐标位置
    - left、top为将网页(父元素)的左上作为元素（子元素）的起始参考点,right、bottom将元素在网页（父元素）第一屏（根据窗口大小决定）的右下作为起始参考点
+ 当4个参考点都有时，以left和top为准
+ 当有多个父元素时，需在想放置的父元素中使用相对定位，确定默认参考点

### 层级（z-index），层级大的元素，显示时在上方，可通过z-index：1属性设置元素层级
+ 当元素设置定位后，层级默认为0，层级相同时，后写的标签会压在后写的上面

### 垂直水平居中：用一对定位的父子元素来做
+ 为父元素添加相对定位，确定默认参考点
+ 为子元素添加绝对定位，将坐标设为50%width，50%height，用margin回撤自身的50%width和50%height

### 透明度：opacity：0.5（取值为0~1），越小透明度越高，也可在rgba（0,0,0,0.5）处设置

### CSS精灵：也叫CSS sprite，是背景图的技术
+ 目前网速较快，但服务器的连接数是有限的
+ 一次性下载大的背景图，按需要显示其中的一小部分
+ 将父元素设置成需要的尺寸，用background-position：0px 0px；控制露出的部分

# 2020/8/11(今天完成1.图标字体；2.固定定位；3.跨行元素排布；4.画圆形；5。快进切图视频，确认掌握了静态淘宝需要的CSS技巧。今天开始JS)
### 圆形可以通过正方形元素的border-radius：50%边长实现，即通过圆角边框产生，内外还可呈现不同颜色

### 图标字体：一种字体，可以展现图形，加载速度更快，放大后更清晰
+ 下载网站：http://www.iconfont.cn/
+ 图标字体三种用法
    - 1.unicode引用（可兼容最老ie6，图标用代码引用，语义化差），在元素中直接输入
    - 2.fontclass引用（可兼容最老xp的ie8，语义化好，），在元素样式中输入
    - 3.symbol引用（可兼容最老ie9，语义化好，可彩色，渲染性能一般），在专用标签输入

### 固定定位：将元素固定到浏览器界面的某个坐标位置,position:fixed
+ 同样是用left、top、right、bottom设置位置
+ 不需要父元素有起始定位，因为坐标基于浏览器界面
+ 但需要为子元素设置宽度高度，如需跟随父元素宽度，则width：100%
+ 固定定位的元素压在其他元素上方

# 2020/8/12（今日完成：JS基础的一部分，基本语法和部分函数）
### javascript，JS简介
+ js如今能做交互（表单验证）、网页动态效果、服务器端开发（Node.js）、游戏等
+ js是一门脚本语言
    - 弱类型语言，变量数据类型较灵活
    - 解释型语言，不需经过编译成二进制，可直接在浏览器中运行
    - 动态语言，可以动态添加属性和方法
    - 基于对象语言，有类（class）的概念，但缺少很多面向对象语言的特征
    - 大小写敏感

### 学习js的三部分
+ 1.ECMAScript（欧洲计算协会）：语法
+ 2.DOM，document object model：文档对象模型
+ 3.BOM，browser object model：浏览器对象模型

### 三种js写法
+ 内嵌式（页联）js：body标签下《script type="text/javascript"》《/script》标签
    - 快捷键，《script》中Ctrl+Shift+/，多行注释
    - 默认由上往下
    - 每句代码用分号结束
    - 每句代码最好换行，好看
    - 页面加载后执行
+ 行内式（内联）js：例如button标签下《button onclick="alert('行内式')"》按钮《button》
    - 需要执行父标签的属性才执行
+ 外链式（外联）js：body标签下《script src="one.js" type="text/javascript" charset="utf-8"》这里别写内嵌式代码《/script》
+ 内嵌式和外链式执行的先后顺序取决于代码的先后顺序

### 计算机的执行过程：cpu将硬盘中的数据调度到内存中运行
+ cpu，中央处理器
+ 内存：暂时对数据的存储
+ 硬盘：永久性存储

### 变量：暂时对不同数据类型的数据进行存储
+ 定义变量：var 变量名称 =‘变量值’；
+ 也可拆为2句：var 变量名称；变量名称=‘变量值’
+ 命名规范：可以字母、数字、下划线、$，不能用数字开头，

### js不同数据类型
+ 数值类型(number)：1 5 3.14 -9
+ 字符串类型(string)：‘哈哈’ ‘13888’ ‘abc’
    - 纯数字字符串在进行减乘除运算时会先隐式转换为数值类型
    - 字符串和任何数据类型进行相加操作，都会产生拼接效果
    - 非纯数字字符串进行减乘除运算时，会显示NaN（not a number）
    - 让两个纯数字字符串用加号拼接方法：1.中间加一个空字符串；2.其中一个变量后加.tostring（）
+ 布尔类型(boolean)：true和false
    - 隐式转换后对应1和0
+ 未定义类型(undefined)：当变量只声明，但未赋值时，就是undefined
+ 对象类型（object）：复杂的数据类型——？？？待补充
+ 空类型（object）：只有一个值null 

### 数据类型转换
+ 其他类型转换成数值类型
    - 函数parseInt():转换成数值，并向下取整（从左开始遇到字母或其他字符则转换终止，布尔不能转，null不能转）
    - 函数parseFloat（）：转换成可带小数的数值（特性同上括号内）
    - 函数Number（）：转换成数值（严格型转换，只能转换纯数字，布尔可以转，null转0）
+ 其他类型转换成字符串类型
    - 函数.toString（）：数字和布尔都可以转（布尔会转成true或false）,当括号内传底数参数时，会将输入的数值转成相应进制
    - 函数String（）：undefined和null可以转
+ 其他类型转换成布尔类型
    - 函数Boolean():将不为0的数据或0转换成true或false（undefined、空字符、null也为false）

### 函数alert（），在浏览器弹出对话框，括号中放显示内容，没有返回值
+ 字符串最好用单引号，复制带双引号的字符串不容易出错？

### 函数console.log（）:在浏览器控制台输出

### typeof 数据：获取数据类型
+ 当数据位置放置的是变量时，获取的时变量值的数据类型

### 字符串.length：获取字符串字符的个数

### 前++和后++
+ ++a和a++都是+1再赋值给a自身
+ a=1；c=++a；计算结果a=2，c=2（前++是先加1再计算）
+ a=1；c=a++；计算结果a=2，c=1（后++是先计算再加1，必须在右侧出现第二个a时。才会在第二个a上体现加1的效果）

### 运算符
+ 算术运算符：+ - * / %（取余） =（赋值） **(次方，前为底数，后为指数)
+ 一元运算符：++ --，一个操作数
+ 二元运算符：两个操作数以上
+ 三元运算符：三元表达式，表达式？true的结果：false的结果
+ 复合运算符：+=（a=a+5可写成a+=5） -= *= /=
+ 关系运算符：》 《 ==（值相等） ===（全等，数值和数据类型都相等） ！=（值不等于） ！==（数值和数据类型全不等），所得结果为true或false
+ 逻辑运算符：&&（且） ||（或），两侧条件的真假，结果为布尔；！（非），将布尔的结果取反

### 流程控制语句
+ 顺序结构语句：默认由上至下执行
+ 分支结构语句：根据条件的真假决定是否执行某段代码（注意：等于要用==）
    - 单项判断：if（条件）{操作}，小括号中的条件为true时，执行大括号中的操作，false时不执行
    - 双向判断：if（条件）{操作1}else{操作2}，当条件为false，执行else后面大括号中的操作
    - 多向判断：if（条件）{操作1}else if（条件）{操作2}else{操作3}，叠加多重条件
    - switch-case判断：switch（要比较的值）{case 预设值1：操作1；break；case 预设值2：操作2；break；...default：操作n；break；}
        * 根据要比较的值是否等于预设值判断，break为一次等于后结束，default类似于else，代表都不符合时的操作
        * 默认用法是判断是否相等，如需判断是否符合某个区间，可将要比较的值设为true，则可在预设值处用 变量》=预设值 ,来设置一个区间条件
+ 循环结构语句：重复地执行某段代码
    - for循环：for(var i=0;i《100;i++){操作}
    - while循环：var i=1；while(i《=10){document.write(i);i++;}
        * 由于对循环数的定义在循环外，适用于循环数初始值未知的场景
    - do-while循环：var i=1；do{document.write(i);i++;}while(i《1)
        * 先执行，再判断是否循环，因此至少会执行一次

### 函数prompt（‘字符串’）：在浏览器中弹出一个带输入框的对话框，引号内字符串将在对话框中显示，可返回输入值
+ 函数是有返回值的，可以通过赋值将返回值赋予某个变量

### 在网页中输出：document.write（输出内容）
+ 如果要在JS中使用html标签，需要像输出字符串一样用引号包裹

# 2020/8/13（今天有事，明日补上。今日完成：继续学习昨日循环语句）
### js语句和html标签穿插，产生效果
+ 写在script标签内的html标签，要以字符串形式，用document.write（）输出

### 关系运算符的运算优先级高于逻辑运算符，！可以看成一元运算符，（）优先级最高

# 2020/8/14（今日主要针对一些基本的算法和函数的使用，做了一些练习，知识点不多）
### 当循环中出现break，立刻结束当前最近的循环体

### 当循环中出现continue，结束“当次”循环，即本次循环剩下的操作不执行

### 数组：一组有序数据的集合
+ 创建数组的第一种方式：字面量，如var arr01=[1,2,3],此方式用得最多
    - 数组可通过 数组名.length 获取数组的长度
    - 可通过 数组名[第几个] 访问数组各个元素，从0开始
+ 创建数组的第二种方式：new Array，如var arr02=new Array（1,2,3）
+ 第三种，如果new Array（）的括号中只有一个数值，会直接设置成数组长度，元素都为空
+ 遍历数组，for(i=0;i《arr01.length;i++)，无论数组多长都能实现访问
+ 动态添加数组元素：利用数组长度始终比数组最大序号大1的特点，进行赋值

### 函数：将一段代码进行封装，可以进行重复使用，避免代码冗余
+ 定义形式：function 函数名(){函数内容}
+ 调用形式：函数名（）；
+ 小括号中可放置一个参数，代表输入，即可根据输入内容，进行函数内容中的计算
+ 当小括号中为空时，不需输入也可执行函数
+ 当有多个输入值时，用逗号隔开
+ 函数定义中的参数叫形式参数，函数调用中的参数叫实际参数，两者个数要一一对应
+ 定义和调用的先后顺序可以调换

### 函数的返回值
+ 自定义函数默认的返回值是underfined
+ 可以用 return 返回值；自定义函数的返回值，但必须放在函数最后，因为return将强制结束函数
+ 注意，函数的输出要么要有返回值，要么就要用打印弹框等，总之不要忘了输出，不然就undefined

### 面向对象与面向过程（我觉得讲得很模糊，以下为我现在的理解，待更新）
+ 面向过程，完整描述程序的过程
    - 由于不需要调用对象（少了对象名称的判断、过程代码的调用），理论上响应应该更快，资源占用更少
+ 面向对象，将具有规律的过程，归纳成对象，用对象代替复杂的过程
    - 因为调用节省了重复代码的书写，提升了开发效率；因为定义位置集成，便于维护
+ 基于对象：这里就理解不了了，应该还需要后面的js知识——???待补充

### 函数的其他定义方式
+ 有名函数
    - 定义函数名的方式：function 函数名（）{}，会将函数整个提升到作用域顶部
    - 函数表达式的方式：var 变量=function（）{}，调用方法同上
        * 这种定义方式，只能提升声明，不能提升赋值，因此在定义之前不能作为函数调用

# 2020.8.15（今日完成1.作用域及作用域链；2.对象及原型，原型这块还是不大懂，后面再继续加深理解）
### 匿名函数：没有名字的函数，不能直接定义使用
+ 使用方式：
    - 作为函数表达式
    - 作为参数传递
    - 作为事件处理函数
    - 作为自调用函数：（function(){})(),当次定义即调用，只能用一次
    - 作为返回值

### 对象既有属性，也有方法，方法即是一段函数，或者若干个动作

### new Object方式创建对象
+ var 对象名=new Object();对象名.属性名；
    - 通过以上方式，可以定义对象及多个属性名（属性名可以是表达式函数，如对象名.属性名=function（）{}）

### 工厂方式创建对象
+ 用函数包裹对象，实现对象的输入，如function creatPerson(name,age){var person=new Object();person.name=name;}

### 构造函数方式创建对象
+ 直接抛弃Object，表述为一个函数
+ function person(name,age){this.name=name;this.age=age;}var dxy=new person('龙傲天',23);
    - 在调用时，需要用new在内存中开辟一个新的空间
    - this指代的是当前的实例对象
    - 可以将person理解为一个函数，但是通过new之后，与输入值结合，生成了一个独立的对象
+ 不需要return

### 作用域：变量的访问区域，JS中访问的区域分为两块
+ 全局作用域，在script标签中的就是全局作用域，全局作用域下的对象都是全局对象
+ 全局对象：浏览器顶级对象Window，所有对象都是window下的属性或方法，但这些对象的属性或方法则不是
+ 全局变量
    - 带var定义变量的方式，会将声明提升到作用域顶端，但赋值不会
    - 不带var定义变量的方式，必须是声明加赋值，如a=1； ，声明不会提升，会污染数据——???待补充
+ 函数作用域：函数中var定义的变量无法在外部作用域中访问，是局部私有变量
    - 函数中不带var，就不是定义变量，而是访问外部的变量，会影响全局变量
    - 如果函数（变量）中已经定义的变量，就相当于在函数内var定义了变量
	
### js预解析：js会优先将用var声明的变量提前解析，将声明提升

### 函数也是一种数据类型

### 作用域链：当函数体中访问变量时，优先级：自身私有变量》上层作用域》上上层作用域...

### 构造函数&实例对象&原型对象三者间的关系
+ 构造函数通过赋值，实例化对象
+ 实例对象的属性隐式原型（__proto__），指向原型对象，
+ 原型对象的constructor（构造器），指向构造函数
+ 构造函数中的prototype指向原型对象

### console.dir：可展开显示构造函数

### 实例对象 instanceof 构造函数，可用于判断某一实例是否是由该构造函数构造出来的（Object是所有对象的构造函数）

### 原型对象作用之一：是一个公共存储空间，可以把公共的属性和方法存储在原型对象中，当创建实例对象时，可以直接访问，实现资源共享
+ 可以直接添加原型对象的方法或属性，使用函数名.prototype.方法名（或属性名）定义

### 原型链：如果实例对象调用某个属性或方法，先从自己的构造函数寻找，如果没有则去构造函数中的原型对象寻找，如果还没有则去上一层构造函数中的原型对象中寻找，以此类推，直到找到Object原型对象（类似于Window）中，还没有则报错，这个过程就是原型链

### 值类型和引用类型的存储方式
+ 简单数据类型：
    - 值类型：number string boolean，b=a，修改b不会影响到a，因为a和b的值存储在内存中的两个位置
    - 空类型：underfined null
+ 复杂数据类型：
    - 引用类型：object，b=a，修改b会影响到a，因为此赋值过程只是将a的地址赋予b，一旦修改b，将会使得a所引用地址的内容改变

### js垃圾回收机制：浏览器会将长时间不再被指向的对象自动清理掉
+ 如果需要取消一个变量的指向，又不想指向其他对象，可以=null

### 通常对象名首字母要大写，函数名首字母小写

### this的指向：在构造函数中，this指向当前实例对象；在普通函数中，this指向的是window

### 另一种访问对象属性和方法的方式：通过p["name"]，可以访问对象p中的name属性，类似于p.name

### 对象与数组
+ 对象：一组无序数据的集合(用语义化属性放置值，调用的时候较方便)
+ 数组：一组有序数据的集合

### 第三种创建对象的方式：字面量
+ var jay={name:'周杰伦',age:41,gender:true};

# 2020/8/16（今日完成1.json、math、date对象；2.字符串常用方法；3.数组常用方法）
### json对象：是一种网络传输数据的格式,用在前后台交互
+ 在传输数据时不能直接传对象，要将对象转换成字符串，即在大括号外加引号
+ JSON是一个JS提供的工具
	- 可用JSON.stringify(对象名)将对象转换成字符串
	- 可用JSON.parse（字符串化的对象名）将字符串化的对象转换成对象

### 遍历对象的属性名与属性值
+ for(var i in json01){console.log(i+':'+json01[i]);}
    - 注意，打印i时打印的是属性名，json01[i]才是属性值，并且不能写成json01.i，否则会变成为json添加一个i属性
+ 若只是要访问其中一个属性，可以使用json01["其中某个属性名"]的方式

### call和apply函数：可以改变this的指向
+ 通过对 父级对象（或属性、方法）.call（新的指向）的方式改变父级对象下this的指向，apply可替代call
+ 当父级对象本身有实参时，需要用父级对象.call（新的指向，实参1，实参2）来改变
+ 而用apply时，需要用父级对象.apply（新的指向，[实参1，实参2]）来改变
+ 二者的差别体现在对实参的表达形式上

### Math对象
+ Math.PI：圆周率
+ Math.abs（实参）：绝对值
+ Math.ceil（实参）：向上取整
+ Math.floor（实参）：向下取整，和parseInt一样
+ Math.round（实参）：四舍五入为最接近的整数
+ Math.random（）：返回0~1之间的随机数（不包含1）

### arguments对象：输入的实际参数形成的数组（长度由输入决定），是函数的默认对象实例

### Date对象：
+ var time=new Date(),将当前的计算机时间赋予对象time
    - time.getFullYear(),返回年份
    - time.getMonth()，返回月份，注意，是从0开始，因为月份通常表示为英文字符，因此数字实际上是数组的序号
    - time.getDate()，返回一个月中的某一天
    - time.getDay()，返回一周中的某一天，注意，是从0开始(而周日就是0)，原因同月份
    - time.getHours(),返回当前小时
    - time.getMinutes(),返回当前分钟
    - time.getSeconds(),返回当前秒
    - time.getMilliseconds(),返回当前毫秒
    - time.toLocaleString(),把Date对象转换成字符串
    - time.toLocaleDateString(),把Date对象的日期转换成字符串
    - time.toLocaleTimeString(),把Date对象的时间转换成字符串

### Number、String、Boolean三种值类型，在需要调用对应类型的方法时，会临时创建一个对象以调用方法，结束之后会自动删除临时对象

### 字符串的不可变性：字符串一旦存储后，就不能再改变，即便重新赋值，也只是重新开辟了一个空间存储新值
+ 字符串也是以数组方式进行存储，因此也可以用访问数组中元素的方式访问字符串中的每一个字符，但不能修改

### 字符串常用方法
+ 字符串名.charAt（9），返回位置为9的字符
+ 字符串名.charCodeAt（5），返回位置为5的字符的Unicode编码
+ 字符串名.concat（'啦啦啦'），在字符串后拼接 啦啦啦
+ 字符串名.indexOf（'下',3),从位置为3开始，从前往后索引并返回 下 的位置,如果没找到，则返回-1
+ 字符串名.lastIndexOf（'下'，8），从位置为8开始，从后往前索引并返回 下 的位置
+ 字符串名.replace（'今天','明天'），将远字符串中的今天替换为明天
+ 字符串名.slice（2，5），从位置为2开始，返回5之前的字符（不包括5）
    - 字符串名.substring（2,5）功能同上
+ 字符串名.substr（2,3），从位置为2开始，返回3个字符
+ 字符串名.split（要切割字符），将原字符串根据要切割的字符切割成几段，放在一个数组中
+ 字符串名.toLocaleLowerCase(),转小写
+ 字符串名.toLocaleUpperCase（），转大写
+ 字符串名.trim（），去掉字符串前后的空格
    - 可用在处理输入信息中前后无用的空格

### 数组常用方法
+ 栈方法，后进先出
	- 数组名.pop（），从数组尾部弹出一个元素，并返回弹出的元素（即删除）
	- 数组名.push（6），在数组尾部加入一个元素6,并返回数组长度
+ 队列方法，push配合shift可实现先进先出
	-数组名.shift()，从数组头部弹出一个元素，并返回弹出的元素
	- 数组名.unshift(9)，从数组头部加入一个元素9，并返回数组长度
+ 数组名.concat（数组），在原数组后拼接一个数组，并返回新数组
    - 不会影响原来的数组
+ 数组名.join（连接符号），将数组用连接符号连成字符串
    - 若未输入连接符号，默认用逗号
    - 不会影响原来的数组
+ 数组名.slice（2），从位置为2开始，截取后面的数组
    - 若数组名.slice（2，4），从位置为2开始，截取到4之前的数组（不含4），并返回
    - 不会影响原来的数组
+ 数组名.splice（2）,从位置为2开始，删除后面的数组，并返回被删除的数组
    - 会影响原来的数组
    - 若数组名.splice（2，1），从位置为2开始，删除1个元素，并返回被删除的数组，也会影响原数组
    - 若数组名.splice（2,1，'haha'),则删除完成后，在原来位置2出插入字符串haha，返回的还是删除的数组，也会影响原数组
    - 若数组名.splice（2,0,666），则直接在2的位置插入666，原来2的位置及以后依次延后1位
+ 数组名.reverse()，逆序，并返回逆序后的数组，影响原数组
+ 数组名.sort（），对数组根据首字母排序，数字排在字母前，按照第一位数排序，返回排序后数组，影响原数组
    - 如果要按其他标准进行比较，就需要在括号中提供比较函数如 数组名.sort（fn）；function fn（a，b）{标准}，如果返回值为-1（小于0的值即可），则a排在b前面，如果两个排序不分先后则返回0，如返回值为1（大于0的值即可），则b排在a的前面

# 2020/8/17（关于DOM这块，视频质量太差了，这块只能后面再看书自学.今日完成flex伸缩盒布局）
### 规范制定者
+ ECMAscript——ECMA
	- ECMA-262：javascript规范
	- ECMA-404：json规范
+ DOM——W3C
	- 用JS对HTML进行增删改查（CRUD）操作
	- 用JS进行样式控制

### DOM：文档对象模型
+ 它是一种跨平台、独立于编程语言的API
+ 它把HTML、XML文档当作一个树结构，每个节点视为一个对象，这些对象可以被编程语言操作，进而改变文档的结构，映射到文档的显示
+ 简单来说，DOM就是为了方便编程语言对HTML等文档进行操作
+ 对象层级关系形成的树就叫 DOM树

### 节点
+ DOM把HTML文档中的每个成分都定义成一个节点
	- 整篇文章是一个文档节点，是根节点，
	- 每个HTML标签是一个元素节点
	- 包含在HTML标签中的文本（内容）是文本节点
	- HTML标签的每一个属性是一个属性节点
	- 注释属于注释节点——？？？待补充

### API：应用程序编程接口

### div垂直水平居中
+ position：absolute ;
+ left=0;top=0;right=0;bottom=0;
+ margin:auto;

### 获取元素
+ 通过id获取元素
	- var 元素名=document.getElementById('id名')
+ 通过class获取元素列表
	- var 元素列表名=document.getElementsByClassName('class名')
+ 通过标签名获取元素列表
	- var 元素列表名=document.getElementsByTagName('标签名')
+ 通过class、标签名获取的元素列表，是伪数组

### 伪数组VS真数组
+ 共同点：都有length属性，属性名都以数字表示
+ 不同点：伪数组不能使用数组的api（属性、方法）

### 数组也是对象

### 数组的api
+ 数组名.forEach（回调函数），对数组中的每个元素执行回调函数
	- 回调函数：只需要定义，由浏览器调用执行

### 将伪数组转化为真数组
+ Array.prototype.slice.call(伪数组名)，此方法的返回值为对应的真数组

### 子元素节点
+ 通过id获取元素后，可通过元素名.childNodes获取子节点列表（不剔除文本节点）
+ 通过id获取元素后，可通过元素名.children获取子元素节点列表（剔除文本节点）
+ 只有元素节点才可以有子节点
+ 可以用元素名.childNodes[0]（或.children[0]）的方式，访问子节点列表中的某一个节点
+ 通过id获取元素后，可通过元素名.firstChild获取其第一个子节点
+ 通过id获取元素后，可通过元素名.lastChild获取其最后一个子节点

### 父元素节点
+ 通过id获取元素后，可通过元素名.parentNode获取父元素节点

### 兄弟节点
+ 同一父元素下的其他子节点 
+ 通过id获取元素后，可通过元素名.previousSibling获取前一个兄弟节点
+ 通过id获取元素后，可通过元素名.nextSibling获取后一个兄弟节点

### 操作节点——？？？待补充

### H5课程阶段
+ flex布局
+ h5新增的标签
+ 响应式布局
+ less CSS预处理器
+ canvas画布
+ 自定义滚动条
+ 自定义视频播放器

### 有个看上去还不错的个人学习网站：learn.fuming.site

### 页面布局方式
+ 表格布局
+ 浮动布局
+ 定位布局
+ flex布局（伸缩盒布局）

### flex布局
+ 基本术语
	- 伸缩容器：一个元素设置display:flex或者display：inline-flex就变成了伸缩容器
	- 伸缩项目：伸缩容器的子元素就是伸缩项目，所有伸缩项目是BFC（块格式化上下文）
	- 主轴：伸缩项目排列方向的轴
	- 侧轴：与主轴垂直的轴

### 伸缩容器属性
+ 属性：主轴方向：'flex-direction：',以下为四种排布方向
	- row（默认值）：主轴为水平方向，起点在左端
	- row-reverse：主轴为水平方向，起点在右端
	- column：主轴为垂直方向，起点在上沿
	- column-reverse：主轴为垂直方向，起点在下沿
+ 属性：换行：'flex-wrap：'，以下为3种换行方式
	- nowrap（默认值）：伸缩容器为单行。该情况下伸缩项目可能会溢出容器
	- wrap：伸缩容器为多行。该情况下伸缩项目溢出的部分会被放置到新行，伸缩项目会发生断行
	- wrap-reverse：反转 wrap 排列（以行为单位反转）
+ 复合属性：主轴方向复合换行：'flex-flow：'，主轴方向和换行方式间用空格隔开
+ 属性：伸缩项目在主轴方向上对齐：'justify-content:',以下为六种对齐方式
	- flex-start（默认值）：左对齐
	- flex-end：右对齐
	- center：居中
	- space-between：两端对齐，项目之间的间隔都相等（常用）
	- space-around：每个伸缩项目两侧的间隔相等。所以，伸缩项目之间的间隔比伸缩项目与边框的间隔大一倍
	- space-evenly: 伸缩项目之间的间隔以及缩项目与伸缩容器边框的间隔相等 （新增属性值，兼容性稍差）
+ 属性：伸缩项目在侧轴方向上对齐：'align-items:':以下为五种对齐方式
	- flex-start：侧轴的起点对齐
	- flex-end：侧轴的终点对齐
	- center：侧轴的中点对齐
	- baseline: 伸缩项目的第一行文字的基线对齐(如果没字就是项目下边沿)
	- stretch（默认值）：如果伸缩项目未设置高度或设为auto，将占满整个容器的高度
+ 属性：主轴方向上有多行时，侧轴方向对齐:'align-content',以下为六种对齐方式
	- flex-start：与侧轴的起点对齐
	- flex-end：与侧轴的终点对齐
	- center：与侧轴的中点对齐
	- space-between：与侧轴两端对齐，轴线之间的间隔平均分布
	- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
	- stretch（默认值）：轴线占满整个侧轴
	- space-evenly: 轴线的间隔以及轴线与伸缩容器边框的间隔相等（新增属性值，兼容性稍差）

### flex实现水平居中方式 1
+ 在父元素有宽度、高度的前提下
+ 对父元素设置display：flex
+ 对父元素使用 主轴方向居中+侧轴方向居中

### flex实现水平居中方式 2
+ 在父元素有宽度、高度的前提下
+ 对父元素设置display：flex
+ 对子元素设置margin：auto

### 伸缩项目属性
+ 属性：伸缩项目的放大比例：'flex-grow：'，默认0为不放大，根据各元素数字，占所有元素数字之和的比例，分配多余空间
	- 只取决于剩余空间和flex-grow数字
+ 属性：伸缩项目的缩小比例：'flex-shrink'，默认为1，如果空间不足，将按各元素权重各自缩小，缩小空间=总溢出空间*（元素大小*元素数字/各元素加权总和），各元素加权总和为每个元素大小和元素数字相乘后的和
	- 取决于溢出空间、各元素大小和flex-shrink数字
+ 属性：在分配多余空间之前，伸缩项目在主轴方向上的长度：'flex-basis：'，默认为auto即原始尺寸,如果主轴方向是水平的，则代替width，垂直则代替height
	- 决定剩余或溢出空间
+ 复合属性：grow、shrink和basis三个属性的复合：'flex：',以下为几种
	- 如果缩写为 flex: 1 , 则其计算值为 1 1 0（本身宽度变为0，伸缩等分）
	- 如果缩写 flex: auto , 则其计算值为 1 1 auto
	- 如果flex: none , 则其计算值为0 0 auto（不伸不缩）
	- 如果flex: 0 1 auto 或者 flex: initial , 其计算值为0 1 auto，即 flex的默认值（不伸只缩）

### 伸缩项目排序
+ 属性：伸缩项目排列顺序，'order：'，默认为0，数值越大，排列越靠后

### 伸缩项目侧轴单独对齐
+ 属性：单个伸缩项目侧轴对齐方式：'align-self:'，可覆盖父元素的align-items 属性
	- auto(默认值): 表示继承父元素的 align-items 属性
	- flex-start：侧轴的起点对齐
	- flex-end：侧轴的终点对齐
	- center：侧轴的中点对齐
	- baseline: 伸缩项目的第一行文字的基线对齐
	- stretch：如果伸缩项目未设置高度或设为auto，将占满整个容器的高度。

# 2020/8/18(今天做了两个flex布局网页，又花了一天的时间改来改去，算是把讲的新版flex这部分给吃透了吧哈哈哈[不要脸],今天进度太慢了，明天加速)
### flex旧版语法
+ 私有前缀：
	- -webkit-  chrome内核
	- -moz-  火狐内核
+ 伸缩容器
	- 设置伸缩容器：box/inline-box
	- 设置主轴水平或垂直：box-orient
	- 设置主轴方向上的排序：box-direction
	- 主轴对齐：box-pack
	- 侧轴对齐：box-align
+ 伸缩项目
	- 伸缩项目伸缩：box-flex
	- 伸缩项目排序：box-ordinal-group

### flex过渡版语法（为IE10量身定制）
+ 前缀：-ms-
+ 伸缩容器
	- 设置伸缩容器：flexbox/inline-flexbox
	- 主轴方向：flex-direction
	- 换行：flex-wrap
	- 主轴方向复合换行：flex-flow
	- 主轴对齐：flex-pack
	- 侧轴对齐：flex-align
	- 多行侧轴对齐：flex-line-pack
+ 伸缩项目
	- 伸缩项目伸缩：flex
	- 伸缩项目排序：flex-order

### 后期可使用前端工程化工具对代码进行兼容化处理

### background-size:cover,将背景图自动拉伸至覆盖元素

### 使用 lorem数字+Tab键，可生成'数字'个英文单词

# 2020/8/19（今日完成1.多列布局；2.H5新增标签及表单属性）
### 多列布局
+ columns:     ；            c-width和c-count的复合属性
	- column-width：100px；  每列宽度100px
	- column-count：3；      分为3列
	- 两者冲突按列数少的
+ column-gap:16px;   列间宽度16px，默认与font-size相同
+ column-rule：   ；  列边框复合属性
	- column-rule-width:1px;     列边框宽度1px
	- column-rule-style：solid；  列边框为实线
	- column-rule-color：#000；   列边框黑色
+ column-span:all;    横跨所有列，none为默认不跨
+ column-fill:auto;   优先填满父元素高度，balance为默认列等高，此样式前提是父元素有高度
+ 换列：兼容性不佳，需带私有前缀，值：auto/always/avoid
	- column-break-before:   元素前是否换列
	- column-break-after:    元素后是否换列
	- column-break-inside:   元素内是否允许换列

### 标签语义化有利于seo

### H5新增语义化结构标签
+ 《header》《/header》    定义页面或 section 的页眉
+ 《footer》《/footer》    定义页面或 section 的页脚
+ 《nav》《/nav》          定义页面的主要导航
+ 《main》《/main》        定义文档的主要内容 (whatwg 没有语义， IE不支持)
+ 《section》《/section》  定义页面中的一节或文章中的一段，里面通常带有标题
+ 《article》《/article》  定义文章、博客、论坛帖子、用户评论等
+ 《aside》《/aside》      定义侧边栏
+ 《hgroup》《/hgroup》    包裹连续的标题，如文章主标题和副标题的组合 （w3c将其删除）

### H5新增状态标签（自带样式）
+ 《meter》状态度量
	- 属性value：默认总量为1
	- 属性min/max：最小最大值
	- 属性low/high：警戒线
	- 属性optimum：最优值，决定警戒线功能，默认总量中值
	- 样式的改变兼容性不佳，要用再查吧
+ 《progress》进度
	- 属性value：默认总体为1
	- 属性max：总体
	- 样式的改变兼容性不佳，要用再查吧

### H5新增列表标签
+ 《datalist》输入提示
	- 包含一组option元素,属性value为显示值
	- 要与input连接，需让datalise的id属性值与input的list属性值相等
+ 《details》展开列表
	- 包含《summary》标签,为展开前显示内容
	- summary后可跟多组其他标签,为展开内容
	- 属性open,无属性值,意味默认展开

### H5新增注释标签
+ 《ruby》注释标签，内包裹需注释的内容
	- 标签下包含《rt》标签，包裹注释的内容
	- 可用于给汉族标注拼音或英文，注释内容出现在上方

### H5新增标记标签
+ 《mark》标记标签，包裹的文本底色变黄

### H5新增图像标签
+ 《figure》插图标签，包裹图片
	- 《figcaption》标签，包裹图片标题，出现在图片下方

### 属性box-sizing:border-box    在给定的宽高内放置边框和内边距
+ 实际体验，能让一组不同类型的元素看上去比较整齐

### 表单控件新增属性
+ placeholder，文本输入位置显示灰色提示信息
+ required，必填项，无需赋值
+ autofocus,自动获取焦点，即一载入页面就开始输入，无需赋值
+ autocomplete,自动提示历史记录,如配合name="username"可提示账户名
	- 有on/off两个值，默认为on
+ pattern，在提交时验证输入是否符合规则,赋值为输入规则表达式

### input type属性旧值
+ text、password、checkbox、radio、submit、reset、button、file、image

### input type属性新增值
+ email，验证输入的邮箱格式
+ url，验证输入的网址格式
+ number,验证输入的数字格式，并且可以上下调节，在移动端会弹出数字键盘
	- 附带的属性min，允许输入的最小值
	- 附带的属性max，允许输入的最大值
	- 附带的属性step，允许输入数值的步长
+ search，搜索框，效果同text
+ tel，在pc端同text，但在移动端点击会弹出数字键盘
+ range，范围选择框
	- 附带的属性min，允许输入的最小值
	- 附带的属性max，允许输入的最大值
	- 附带的属性step，允许输入数值的步长
+ color，颜色选择框
+ 日期时间选择
	- date，日期
	- month，月份
	- week，周
	- time，时间
	- datetime-local，日期+时间

### form元素新增属性
+ novalidate，表单不进行验证，不需赋值

# 2020/8/20（今日完成响应式布局，根据页面或设备屏幕宽度调整自动调整布局，感觉最近关于html和css的篇幅有点多了，这个老师讲的有点啰嗦，而且穿插了一些js的交互，听得一头雾水）
### H5兼容性处理
+ 《meta http-equiv="X-UA-Compatible" content="IE=Edge"》
	- 设置IE总是使用最新的文档模式进行渲染
+ 《meta name="renderer" content="webkit"》
	- 优先使用webkit（Chromium）内核进行渲染，针对360等浏览器
+ 在script标签下创建新元素：document.creatElement('header');
	- 或footer、nav、article、aside、section等
	- 将新元素设为块状元素
	- 或引用外部js《script src="js/html5shiv.js"》
	- 要写在head标签内，在页面加载前执行

### 响应式布局
+ 为了适配PC和移动端，要么制作两套网站，要么使用响应式布局
+ 媒体查询：在CSS中使用@media为特定条件的媒体设置样式
	- 媒体类型：all、screen、print（打印机及预览）
		* 设置方式如@media screen
	- 媒体特性：width页面可见宽度
		* min-width，大于等于，设置方式如@media (min-width:640px)
		* max-width，小于等于
		* 可同时设置多个大于等于，或多个小于等于，形成梯度，语句数序靠后的满足时优先执行（即设置断点、阈值）
	- 媒体特性：device-width设备宽度
		* min-device-width，大于等于，设置方式如@media (min-width:640px)
		* max-device-width，小于等于
	- 媒体特性：aspect-ratio，页面可见区域的宽高比
		* min-aspect-ratio:1/1，宽高比大于等于1
		* max-aspect-ratio:1/1，宽高比小于等于1
	- 媒体查询运算符
		* and，并且，需两个条件均满足，如@media screen and (min-width:640px)
		* ',',逗号，或者，只需一个满足即可
		* not，否定，除了后面内容以外，都执行
		* only，放在最前，让选中的样式在老式浏览器中不被应用
+ 移动优先：默认样式是小屏幕样式，使用媒体查询设置更大屏幕的样式
+ PC优先：默认样式是大屏幕样式，使用媒体查询设置更小屏幕的样式，对旧版本IE兼容性好
### span:last-child     同一个父元素下最后一个span
### transparent，颜色属性值：透明
### height:auto      自动被子元素撑开，为默认值
### clear:both;      清除浮动，用在浮动元素后的元素中

# 2020/8/21(今日完成1.对dom基础部分进行回顾；2.Canvas基本图形画法)
### JS补缺
+ script标签位置：
	- 放于head中，较为简洁，但由于要先解析js代码，页面内容呈现较晚
		* 外部脚本可以通过script的defer="defer"属性让脚本延迟到页面解析完毕后再运行，当有多个脚本时，按顺序执行
	- 放于body中页面内容的后面，可以较早呈现页面内容，有些浏览器会忽略defer，因此将script放于body尾部仍是最好选择
+ script标签属性：src="外部js文件.js"

### DOM补缺
+ 看了一下红宝书关于DOM较为基础的部分，加深了“现阶段（在HTML5及CSS3中的应用）”对DOM作为API的理解，可通过js修改页面初始的CSS样式，使之能对用户的操作做出响应。在页面第一次加载完成后，需要由js利用DOM提供的——标签属性或标签方法接口，建立起触发条件和对应响应的逻辑关系。
+ 这部分需要补的，应该就是记各种接口了，可以在后续写网页中根据需要学习，我感觉很大一部分是用不上的，一开始硬记有点吃力

### CSS预处理器：Less，暂时先不学，后面再补上

### document.querySelector('选择器')：获取CSS选择器指向的第一个元素

### Canvas：是HTML5新增组件，可用js在上面绘制图表、动画等
+ 具体应用：可视化图表、网页效果、游戏、大型浏览器应用
+ 本质是一个HTML标签，会生成一个图片
+ 自身只有width="400"和height="300"两个属性
	- CSS设置的宽高只是浏览器显示效果，并不是canvas的真实属性，可能会造成图片变形，不要在css设置，可在js中为canvas对象设置
+ 在JS中使用步骤
	- 第一步，获取canvas元素，如var canvasNode=document.querySelector('#myCanvas')，或var canvasNode=document.getElementById('myCanvas')
	- 第二步，设置画布大小，如canvasNode.width=800；
	- 第三步，创建绘图绘图环境(上下文)，2d或webgl，如var ctx=canvasNode.getContext('2d');
	- 第四步，开始绘制
+ canvas坐标系，从左上角0,0开始，x向右增大，y向下增大
+ 路径开启：绘图环境名.beginPath（），用来隔离不同路径
+ 路径绘制：见下文
+ 路径闭合：绘图环境名.closePath（），将路径终点和起点连接起来
+ 路径描边：绘图环境名.stroke（），对绘制的路径描边
	- 描边宽度：绘图环境名.lineWidth=10，将宽度设为10
	- 描边颜色：绘图环境名.strokeStyle="#000"，将秒边颜色设为黑色
	- 这里的样式和值用 = 连接，不是 ：
	- 先设样式，后执行描边
	- 样式可在不同路径间独立，但默认继承上一个路径
	- 描边宽度沿路径往两边描
+ 路径区域填充：绘图环境名.fill（），对绘制环绕的取余进行填充
	- 填充颜色：绘图环境名.fillStyle="red"，将填充颜色设为红色
+ 绘制线段路径：
	- 绘制环境名.moveTo（x，y），绘制线段起点
	- 绘制环境名.lineTo（x，y），绘制线段连接点，即转折点
+ 绘制矩形路径：绘图环境名.rect（左上角横坐标，左上角纵坐标，宽，高）
	- 快速描边矩形：绘图环境名.strokeRect（x，y，宽，高），已封装，无需开启路径
	- 快速填充矩形：绘图环境名.fillRect（x，y，宽，高）
	- 清除矩形（橡皮擦）：绘图环境名.clearRect（x，y，宽，高），可用于清除整个画布
+ 绘制圆弧路径：绘图环境名.arc(圆心横坐标,圆心纵坐标，半径，起点弧度，终点弧度，是否按逆时针绘制)
	- 起点弧度及终点弧度，为0~2*Math.PI，对应0~360°，0为3点钟位置
	- 默认为顺时针，false
+ 绘制切线圆弧路径：arcTo（x1,y1,x2,y2,圆弧半径）
	- 首先想好两段线段路径，绘制第一段线段与切线圆弧的连接点
	- 在第一段线段连接点后绘制切线圆弧路径
	- 两段线段路径延长线的交点为x1，y1
	- 第二段线段与圆弧的相接的端点为x2，y2
	- 产生的圆弧为第一段线段最后一个连接点到第二段线段的起点

# 2020/8/22（今日完成：1.较复杂图形的绘制函数封装；2.实现根据鼠标点击绘制Canvas；3.利用变换操作实现简单的动画效果）
### 路径样式设置
+ 设置线段末端：ctx.lineCap="butt/round/square",方形（默认）/圆形/外扩方形
+ 设置线段连接处:ctx.lineJoin="round/bevel/miter"，圆角/斜角/直角（默认）

### DOM 事件对象
+ onclick事件：元素被点击
+ onmousedown事件：鼠标被按下
+ onmousemove事件：鼠标每移动1px，执行一次
+ onmouseup事件：鼠标抬起
+ 获取鼠标位置坐标
	- 在视口上位置：clientX clientY
	- 在元素上位置：offsetX offsetY
	- 在视口上位置，包括滚动条滚动区域：pageX pageY
	- 在屏幕上位置：screenX screenY

### 变换操作：都是通过变换画布实现
+ 位移：绘图环境名.translate（x，y），x和y为新的画布原点，即将坐标系整体平移
	- 位移操作后的图形将在新画布坐标系绘制，缩放、旋转同理
+ 缩放：绘图环境名.scale（宽度缩放比例，高度缩放比例）
	- 缩放比例1=100%
+ 旋转：绘图环境名.rotate（angle），angle为旋转弧度值，旋转方向为顺时针
	- 原地旋转：现将画布原点位移至原图形中心，旋转画布，以原图形中心重新绘制原图形

### DOM Window方法：setInterval（函数，毫秒周期），定时调用函数，以若干毫秒为周期
+ 通过将上述方法赋值给变量a，再执行a=clearInterval(a)，可以结束调用
+ 若设置了定时调用的按钮，则要在调用函数的开始先清除已有的计时，否则重复摁计时调用按钮会导致计时错乱！
+ 这个应该就是轮播图的原理了，后面再加上循环应该就可以实现了
+ 把步进调小，频率调高，动画更为流畅
+ 此函数有返回值，为一个数字，即定时器的编号

# 2020/8/23（今日继续完成canvas，效率下降很多，明天加油）
### 绘图环境的保存和还原：将坐标系和样式保存和还原，不影响已绘制的图形
+ 绘图环境名.save（），保存
+ 绘图环境名.restore（），还原
+ 可以多层嵌套

### 文字操作
+ 绘图环境名.fillText（"内容",x,y）:填充文字,指定坐标
+ 绘图环境名.fillText（"内容",x,y）：镂空文字
+ 绘图环境名.font="bold 40px 微软雅黑"：设置文字样式
+ 水平对齐方式：绘图环境名.textAlign="start（默认）/center/end/left/right",在指定位置开始/中心在指定位置/在指定位置结束/文本左对齐/文本右对齐
+ 垂直对齐方式：绘图环境名.textBaseline="top/middle/alphabetic（默认）/bottom",顶部对齐/中部对齐/基线对齐/底部对齐

### 渐变
+ var 对象名=绘图环境名.creatLinearGradient（x1，y1，x2，y2），线性渐变起点到终点，以及渐变方向
	- 对象名.addColorStop(0,"red")，添加起点渐变色
	- 对象名.addColorStop(1,"blue")，添加终点渐变色
	- 通过将对象赋值给颜色样式，取得颜色的渐变效果
+ var 对象名=绘图环境名.createRadialGradient（x1,y1,r1,x2,y2,r2），径向渐变内圆到外圆

### 插入图片
```
var imgNode=document.createElement("img");   <!-- 必须为图片创建对象-->
imgNode.src="banner.jpg";
imgNode.onload=function(){        <!-- 页面一加载即运行-->
var pat=ctx.createPattern(imgNode,"repeat");
ctx.fillStyle=pat;
ctx.fillRect(0,0,800,800);
```
+ 图片平铺方式
	- repeat ： 默认。该模式在水平和垂直方向重复
	- repeat-x ： 该模式只在水平方向重复
	- repeat-y ： 该模式只在垂直方向重复
	- no-repeat： 该模式只显示一次（不重复）

### 阴影
```
ctx.shadowOffsetX=5;     <!-- 设置水平方向偏移量（默认往右） -->
ctx.shadowOffsetY=5;     <!-- 设置垂直方向偏移量（默认往下） -->
ctx.shadowColor="blue";  <!-- 设置阴影颜色 -->
ctx.shadowBlur=20;       <!-- 设置阴影模糊程度（数值越大，程度越深）-->
```

### 透明度
+ 绘图环境名.globalAlpha=数字，数字在0-1之间，0位完全透明，1为不透明

### 将画布尺寸设为视口宽高
+ canvasNode.width=window.innerWidth；
+ canvasNode.width=window.innerHeight；

# 2020/9/7(今天终于完成了canvas，又复习了一些拖拽的交互)
### 绘制图片：ctx.drawImage(img, 100, 100, 200, 400); 
+ 参数1：图片的 dom 对象
+ 参数2，参数3：图片在画布中显示的初始位置
+ 参数4，参数5：图片在画布中的宽度与高度
+ 操作步骤
	- 首先，需要使用图片就得有 img 元素
	- 其次，引入图片路径
	- 然后，等图片加载完成后再去设置图片显示
	- 最后，图片显示

### 图片合成：绘图环境名.globalCompositeOperation="合成方式"
+ 源图像：打算放置到画布上的绘图,在定义此属性之后的图像
+ 目标图像：已经放置在画布上的绘图,在定义此属性之前的图像
+ 合成方式：略

### 读取图像信息：ctx.getImageData(100,100,100,100)
+ 第一个参数，第二个参数：矩形的起始位置；第三个参数，第四个参数：矩形的大小
+ 返回值
	- width : 该区域横向上像素点的个数
	- height : 该区域纵向上像素点的个数
	- data : 该区域所有像素点的rgba信息，数组，4个元素代表一个像素的rgba信息

### 写入像素：ctx.putImageData(填入的对象,填充区域水平坐标点,填充区域垂直坐标点)

### 创建像素对象：ctx.createImageData(宽度,高度);

### 画布剪裁：ctx.clip()
+ 根据之前的路径进行剪裁，所有之后的绘图只会在剪裁的区域内显示

### 画布编码：canvas.toDataURL(type, encoderOptions);将画布格式转换
+ type，设置输出的类型，比如 image/png image/jpeg等
+ encoderOptions： 0-1之间的数字，用于标识输出图片的质量，1表示无损压缩，类型为： image/jpeg 或者image/webp才起作用
+ 如不填实参，则输出base64编码

### 画布渲染画布：ctx2=drawImage(imgNode1,0,0)
+ 可先在隐藏的画布1上进行绘制，再将绘制完成的画布1一次性渲染到画布2上，是一种优化手段，减少渲染次数

### 对body使用overflow：hidden会导致滚动条消失，页面无法滚动

# 2020/9/8(今天完成了滚动条设置，学习了音视频标签，明天做一个播放器)
### 移除dom中的对象：对象名.remove()，如boxNode.remove（）

### 阻止浏览器默认行为：event.preventDefault();
+ 在鼠标按下事件中设置，使得该次事件中，鼠标不会被用作其他浏览器默认功能
+ 可防止鼠标移动过程中拖拽滑块元素至不可到达处，或选中页面内内容

### 滚轮事件
+ chrome/IE：对象名.onmousewheel=方法名
	- 滚轮值（判断是上还是下，event为方法的形参）：event.wheelDelta
	- 上滚：120
	- 下滚：-120
	- 注意：chrome由于会跟随系统放大倍数，因此最好用正负来判断
+ firefox：对象名.addEventListener('DOMMouseScroll',方法名)
	- 滚轮值（判断是上还是下，event为方法的形参）：event.detail
	- 上滚：-3
	- 下滚：3

### 音视频：mp4和mp3分别为全浏览器兼容的视频和音频格式

### 视频标签《video》
+ 属性：src，地址
+ 属性：width，height，播放尺寸
+ 属性：controls，显示播放控件，无需赋值
+ 属性：muted，默认静音，无需赋值
+ 属性：autoplay，自动播放，无需赋值，有时需要配合静音才能自动播放
+ 属性：loop，循环播放，无需赋值
+ 属性：poster，视频未播放前的图片封面，autoplay则无效
+ 属性：preload，设置预加载，autoplay则无效

### 音频标签《audio》
+ 属性：src，地址
+ 属性：controls，显示播放控件，无需赋值
+ 属性：muted，默认静音，无需赋值
+ 属性：autoplay，自动播放，无需赋值
+ 属性：loop，循环播放，无需赋值
+ 属性：preload，预加载

### 《source》单标签，为video和audio标签的子标签，用于定义资源
+ 可以同时提供多个资源，供浏览器从上到下根据格式支持与否选择播放，只会播放支持的第一个

### 音视频DOM
+ 方法：.play(),播放
+ 方法：.pause(),暂停
+ 属性：.playbackRate，播放倍速，默认为1
+ 属性：.currentTime，当前播放时间，单位为秒，可设置也可获取
+ 事件：.pause，暂停的时候
+ 事件：.ended，播放结束的时候

# 2020/9/9（今天做了一个播放器，但音量和全屏的api还没用过，不过想来应该不难，明天按课程要开始做一个比较复杂的网页项目了）
### 切换、增减类名
+ 对象名.classList.add('active'),为元素增加active的类名
+ 对象名.classList.remove('active'),为元素移除active的类名
+ 对象名.classList.toggle('active'),为元素切换是否有active的类名（如有则移除，如无则增加）
+ 在类选择器中可用".原类名.新类名"的方式定义CSS
+ 同理，在id选择器中可用".原id.新类名"

### 增加监听事件：对象名.addEventListener('事件名'，方法名/方法，是否在捕获阶段触发事件【布尔值，一般传false，可不传】)

### 移除监听事件：对象名.removeEventListener('事件名'，方法名)

### 当使用如onmouseup的方法时，会覆盖之前的操作，而使用监听时如果不移除，则会新建重复的监听事件

### 项目准备工作
+ 简单的兼容性设置
```
<!--使用最高级标准模式渲染页面, 用于IE浏览器-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<!--采用webkit内核渲染， 用于国产双内核浏览器-->
<meta name="renderer" content="webkit"> 
```
+ cssreset:清空所有的默认样式，保证个浏览器表现一致；最早来自于雅虎的 YUI 框架
```
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
body { font:14px "Microsoft YaHei","Arial","黑体",sans-serif; color:#333}
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#333; text-decoration:none; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px "Microsoft YaHei","Arial","黑体",sans-serif; }
table { border-collapse:collapse; }
```
+ 清除浮动
```
.clearfix{*zoom: 1;}
.clearfix:after{content: "";display: block;clear: both;}
```
+ 公共类
```
.fl { float:left}
.fr {float:right}
.al {text-align:left}
.ac {text-align:center}
.ar {text-align:right}
```
+ 书写规范
	- class命名规范，使用有意义的英文单词命名，多个单词建议使用 kebab-case 命名方式，如 page-header、list-group-item 等。
	- id命名规范，使用有意义的英文单词命名，多个单词建议使用小驼峰命名法，如 currentNav、myModalContent 等。
	- 不随意使用id，id在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外id的优先级优先与class，所以id应该按需使用，而不能滥用。
	- 使用CSS复合属性，如 padding、margin、font、background等，这样精简代码同时又能提高用户的阅读体验。
	- 去掉小数点前的 0 ，0.8em 可以写成 .8em
	- 用16进制代码表示颜色
	- CSS选择器层级不过过深 像 .nav ul li a ul li p这样的选择器是不建议的
+ CSS样式书写顺序
	- 位置属性(position, top, right, z-index, display, float等)
	- 大小(width, height, padding, margin)
	- 文字系列(font, line-height, letter-spacing, color, text-align等)
	- 背景(background, border等)
	- 其他(animation, transition等)

# 2020/9/10（今天做了PC网页项目的一部分，主要是导航等交互，稍微试用了一下css3的动画，视频顺序应该是有问题，又出现了之前没讲过的内容，比如动画，再接着做下去看看）
### 字体
+ 衬线字体：serif：横竖不一样粗，宋体、仿宋体、楷体
+ 非衬线字体：sans-serif：横竖一样粗，微软雅黑、黑体、思源黑体、兰亭黑

### reset.css：清除所有元素默认样式，统一各浏览器样式

### normalize.css：统一各浏览器的样式，对h5新增的标签进行了设置

###常用命名单词：中文	英文
+ 容器	container
+ 包裹	wrapper
+ 头	header
+ 页脚	footer
+ 导航	nav
+ 子导航	subnav
+ 菜单	menu
+ 子菜单	submenu 
+ 侧边栏	sidebar
+ 栏目	column
+ 登陆条	loginbar
+ 标志	logo
+ 广告	banner
+ 主体	main
+ 内容	content
+ 热点	hot
+ 新闻	news
+ 下载	download
+ 搜索	search
+ 友情链接	friendlink
+ 版权	copyright
+ 滚动	scroll
+ 标签	tags
+ 列表	list
+ 信息	msg
+ 小提示	tips
+ 标题	title
+ 加入我们	joinus
+ 指南	guide
+ 服务	service
+ 注册	register
+ 状态	status
+ 投票	vote
+ 合作伙伴	partner

### CSS过渡时间样式：transition:1s;

### CSS不换行样式：white-space:nowrap;

### 关于load事件
+ load事件：等到页面中一切（页面中的dom、外部图片、各种文件）都加载完毕才触发
+ DOMContentLoaded：等到页面中的dom元素加载完毕（jQuery的ready事件就是对其的封装）

### 选择多个选择器，并将之放到一个数组元素中，document.querySelectorAll（）

### 同时操作数组元素内的每个元素：数组元素名.forEach(function(子元素代称){})

### 可监听窗口尺寸变化事件：resize

### 事件防抖
+ 应用场景：事件触发频繁，如滚轮事件、input事件
```
function debounce(func,delay){
	let timer=null;
	return function(){
		if(timer){
			clearTimeout(timer);
		};
		timer=setTimeout(func,delay);
	}
}
```

### setTimeout(方法,延迟时间)，延迟一定时间后执行方法，时间以毫秒计
+ 可以用 定时句柄=setTimeout 的方法监控定时状态，当处于定时时返回值为1，定时结束后返回值为null
+ 可以用 clearTimeout（定时句柄） 的方式取消定时
+ 可以为定时句柄赋初始值null，当其！==null时，即处于定时状态

### CSS样式：transform:对元素进行变换

### CSS样式：animation，将动画与div元素绑定

### 创建动画规则：@keyframes 动画名称{0%{css样式} ... 100%{css样式}}，将多套css样式通过变化转换

# 2020/9/11（今天做了3个页面，明天收尾完成这个项目，完成之后把用到的css3样式总结一下）
### .子元素类名:first-child ，选择子元素对应的父元素下第一个子元素
+ last-child同理

### .子元素名:nth-child(n)，选择子元素对应的父元素下第n个子元素,从1开始计数

### css样式：transform-style:preserve-3d，为父元素建立3d样式，对其子元素设置的转换即可呈现3d效果
+ backface-visibility:hidden,为子元素设置，3d翻转时可隐藏背面

### css样式：perspective:2000px，为父元素设置景深为2000px

### css样式：letter-spacing:10px,字符间距设为10px，默认为0

### css样式：box-shadow:1px 2px 3px #000,元素阴影，水平位置为3，垂直位置为2,模糊距离为3，颜色为黑

### css样式：visibility:hidden,元素不可见，但仍然占据位置当值为visible时可见
+ display:none,不占据位置
+ 隐藏元素的多种方法
	- display: none;
	- visibility: hidden;
	- opacity:0;
	- width: 0;
	- height: 0;
	- transform: scale(0);
	- transform: translate(-10000px)

# 2020/9/12(今天进度比想象中慢，完成了轮播图，和气泡运动的原理部分，明天应该可以完成)
### 通常显示器刷新率为60Hz，因此定时动画中将时间周期设置为小于1/60秒，显示器无法显示出每一帧的变化，会导致动画不连贯，且浪费性能
+ 所以通常为了照顾60hz频率屏幕，动画的计时器周期通常设为16.67ms以上
+ setTimeout函数最小值可以是4
+ setInterval函数最小值可以是10

# 2020/9/13(完成PC项目)
### 父元素名.appendChild(子元素名)，为父元素添加子元素
+ 父元素名.removeChild(子元素名)，为父元素移除子元素

### var 元素名= document.createElement('元素标签')，创建元素

### 元素名.className='can'，为元素创建类名

### 元素事件：mouseenter，鼠标移入元素区域
+ mouseleave，鼠标移出元素区域

# 2020/9/14（今天休息一哈，明天开始啃js）
### 元素名.remove()，即可从dom中移除元素

### 对象的分类
+ 内建对象
	- 由ES标准中定义的对象，在任何的ES的实现中都可以使用
	- 比如：Math String Number Boolean Function Object
+ 宿主对象
	- 由js的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
	- 比如：BOM（浏览器对象模型） DOM（文档对象模型）
+ 自定义对象
	- 由开发人员自己创建的对象

# 2020/9/15(今天算是定下了接下来的学习方式了，还是以视频课程的路线为主，并复习了js的部分基础知识，因为中间插了100集html5，有不少知识都忘记了，接下来快速地回顾一下)
### 删除对象属性：delete 对象名.属性名

### 可以用 对象名['属性名'] 的方式操作对象的属性，此时'属性名'可以用变量来表示

### 检查对象中是否有某属性： "属性名" in 对象名，根据返回的布尔数判断

### 原型 prototype：创建的每一个函数，解析器都会向函数中添加一个prototype属性
+ 此属性对应着的就是原型对象
+ 通过这个函数构造的每一个对象，都有一个属性指向同一个原型对象

### 转义字符：\

# 2020/9/16（今天算是复习到dom的元素增删改查了，这段有够枯燥，难熬，坚持！）
### DOM原本是为了用js对html进行增删改查（CRUD）操作
+ 后来也发展出了用js对样式进行控制

### 节点分为12种，常用的4种：
+ 元素节点 Element
+ 属性节点 Attr
+ 文本节点 Text
+ 文档节点 Document

### name属性只在输入元素中有作用

### 属性节点R操作
+ 元素节点名.getAttributeNode（‘属性节点名’），获取元素的属性节点
+ 元素节点名.getAttribute（‘属性节点名’），获取元素属性节点的属性值
+ 元素节点名.getAttributes，返回该元素所有属性节点的实时集合（伪数组）
+ 元素节点名.getAttributeNames，返回该元素所有属性节点名的实时集合（真数组）
+ 元素节点名.属性节点名，此方式只能获取元素的预设属性值
+ 元素节点名.className，元素类名，用空格隔开
+ 元素节点名.classList，元素类组成的伪数组
	- 可对齐进行add、remove、toggle、contains（‘类名’）【此方法为返回是否含有该类】等方法操作

### 文本节点操作：
+ 元素节点名.innerText,获取该元素节点中的文本值
+ 元素节点名.innerContent,获取元素节点中的文本值，包括子元素中的文本，带缩进
+ 元素节点名.innerHTML,获取元素节点中的文本值，元素下所有文本，包括子元素的标签，带缩进

### 异步回调函数：window.onload=function（）{}，当页面渲染完成后执行

# 2020/9/17（不知道说啥了，明天努力吧）
### 插入元素节点
+ 从父元素进行操作：document.父元素.insertBefore(要插入的元素，锚定的子元素)，在某子元素前插入
	- 如果要插入的元素本身已在dom树中，则会执行移动操作
+ 通过当前元素进行操作：当前元素.insertAdjacentElement('beforebegin',要插入的元素),在当前元素前插入一个新的元素
	- 替换为afterend，为在后方插入
	- 替换为afterbegin，为在第一个子元素前插入
	- 替换为beforeend，为在最后一个子元素后插入

# 2020/9/18(今天好一点了，正则表达式好歹学进去一点，明天加油，明晚还得参加个婚礼)
### 正则表达式：用于定义一些自复产的规则，计算机可以根据正则表达式，检查字符串是否符合规则，并将字符串中符合规则的内容提取出来
+ 创建正则表达式的对象： var 变量=new RegExp（“正则表达式”，“匹配模式（可不输入）”）,输出为 /a/
	- 也可用 reg=/a/i的方式来代替（字面量方式），/ /是必须的，i可以没有
	- 正则表达式的方式可以穿参数，更为灵活
+ 匹配模式：i，忽略大小写
+ 匹配模式：g，全局匹配，不仅只针对复合条件的第一个
+ 匹配模式：gi，兼具以上两种模式
+ 正则对象.test(字符串):可用来测试一个字符串是否符合正则表达式，返回布尔值
+ 当有多个字符连写时，如ab，则必须都有且顺序不可变
	- a|b代表a或b，[ab]也代表a或b
	- a[bde]c，代表以a开头，以c结尾，中间为b或d或e
+ [a-z]代表任意小写字母
+ [A-z]代表任意字母
+ [^ab]代表除了ab以外
+ [0-9]代表任意数字
	- [^0-9]代表不能全为数字
+ 字符串.split(字符),根据字符拆分字符串，将拆分后的各部分，存到一个数组中
	- 字符也可替换为正则表达式，如/[A-z]/,即根据任意字母拆分
	- 此方法默认为全局匹配
+ 字符串.search(字符)，检索字符串中是否含有相关字符
	- 如果搜索到，则返回第一次出现的索引值，如果没有搜索到，则返回-1
	- 括号中的字符同样可以替换为正则表达式
	- 只会返回第一个值，即使设置全局匹配也没用
+ 字符串.match（字符/正则表达式），从字符串中检索符合条件的字符
	- 默认会返回一个数组，只包含符合条件的第一个字符片段
	- 当在/[A-z]/后加上g后，即可设置正则表达式为全局匹配模式，匹配所有内容
+ 字符串.replace（被替换的内容,新的内容），替换字符串中的内容
	- 默认仍然只会替换第一个，可将被替换的内容用正则表达式进行全局匹配
	- 新内容为""即是删除
+ /ab{3}/，即代表1个a和3个b，/（ab）{3}/代表3个ab
+ /a{1,3}/代表1到3个a，/a{3，}/代表3个a以上
+ /ab+c/代表至少1个b与a和与c相连(规范为至少1个b)
+ /ab*c/代表任意个b均可（规范为任意个b）
+ /ab?c/代表0个或1个b，与a和c相连（规范为至多1个b）
+ /^a/代表以a开头
+ /a$/代表以a结尾
+ /^a$/代表只能有1个a，当^和$同时出现时，代表必须与正则表达式完全一致
+ /./表示任意字符,因为.作为特殊字符代表任意字符
+ 如要使用特殊字符的本体进行正则判断，需在前加转义字符\

# 2020/9/19(今天出门了，后半夜才回来)
### 正则表达式
+ \w，字母、数字、下划线均可
+ \W，除了字母、数字、下划线均可
+ \d，任意数字
+ \D，除了数字
+ \s，空格
+ \S，除了空格
+ \b，单词边界，如/\bchild\b/，即必须是独立的单词child才符合，children不行
+ \B，除了单词边界

# 2020/9/20(这两天在看这个，https://www.bilibili.com/video/BV1YW411T7GX?p=94)
### 正则表达式中不能加无谓的空格

# 2020/9/21（增删改查，大概知道接下来要学啥了，状态好了一些）
### 每个节点都有的三个属性：nodeName、nodeType、nodeValue

### getElementsByName,根据name属性获取元素，并放在一个数组中

### input的checkbox类型中，属性checked=true/false 对应是否被选中

### document中有一个属性body，保存的是body的引用

### document.documentElement保存的是html根标签

### document.all代表页面中所有元素
+ 等同于document.getElementByTagName('*')

### 替换父元素下的某元素：父元素.replaceChild（新元素，旧元素）

### 用innerHTML也可以完成一些dom增删改的操作，将代码作为字符串添加

# 2020/9/22（加油）
### 在响应函数末尾添加return false，可以取消默认行为，如a标签的跳转
+ 点击超链接后会跳转页面，这是超链接标签的默认行为

### confirm(提示信息)，跳出选择框，选择确定或取消，确定返回true，取消返回false

### input标签节点.value的值为输入框当前输入的内容

### table标签下会自动生成一个tbody标签，tr放在tbody标签中

### 在用js修改css样式时，如background-color这种带-的样式是不合法的，需改成驼峰命名法的backgroundColor才可进行修改
+ 通过js读取修改css样式，使用元素.style.样式名时，读取修改的是内联样式，因此优先级高于页联
+ 通过元素.currentStyle.样式名 可以读取当前正在显示的样式（仅ie支持）,如果未设置，会获取默认值
+ 在其他浏览器中可以使用getComputedStyle(要获取样式的元素，可传递的伪类元素【当不需要的时候传null即可】).样式名的方式返回一个元素，其属性即各个样式，如果未设置，会获取真实值（不支持ie8及以下浏览器）

### 元素属性：clientWidth、clientHeight包括可见区域内元素的内容和padding

### 元素属性：offsetWidth、offsetHeight包括元素的内容、padding和边框

### 元素属性：offsetParent可以获取当前元素的定位父元素

### 元素属性：offsetLeft，当前元素对应其定位元素的左侧偏移量

### 元素属性：scrollWidth、scrollHeight,可以获取包含滚动区域在内的全部宽高

### 元素属性：scrollLeft，水平滚动条滚动距离，top同理

### input属性：disabled=“true/false”，不可输入/可输入

### 元素事件：onscroll，滚动条滚动时触发

### 当p标签中的文本超出标签大小范围时，使用overflow：auto可以生成垂直方向的滚动条

### 事件的冒泡：事件的向上传导，当后代元素的事件被触发时，其祖先的相同事件（如onclick）也会被触发，例如当鼠标拖着元素移动到别的元素中时，仍然适用document时绑定的方法
+ 当为事件设置 event.cancelBubble=true后，可取消冒泡

### 事件的委派：将事件统一绑定给元素共同的祖先元素，当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件，可以减少事件绑定的次数
+ event.target可返回触发事件的对象，借此可以在冒泡时确定最初触发的对象

### addEventListener可同时为一个元素的相同事件绑定多个响应函数，当触发时按绑定顺序执行

### IE8中可用attachEvent绑定事件，只有带on的事件名和方法两个参数,其中的this指代的是windows

# 2020/9/23（今天对js的基础学习基本结束了【差一个json】，明天开始进行cookie、ajax）
### 事件的捕获阶段，从最外层（祖先辈）往里（后代）捕获，此时默认不会触发事件，触发时则相反，因此冒泡是从里向外
+ 如果希望在捕获阶段触发事件，则可以将addEventListener的第三个参数设为true

### 键盘事件：一般绑定给一些可以获取焦点的对象（如输入框，有输入光标即是获取了焦点）或document
+ onkeydown/onkeyup，按键被按下/按键被松开
	- 当长按连续触发onkeydown时，第一次和第二次之间会有一段时间的硬直
	- onkeydown.keyCode可以返回按键的unicode字符码
	- altKey、ctrlKey、shiftKey可返回相应键是否被按下（true/false），event.keyCode==89 && event.ctrlKey可判断是否同时按下ctrl+y

### 对input。onkeydown设置return false，则输入的内容不会出现在文本框中

### BOM为我们提供了一组对象，用来对浏览器进行操作
+ window，代表整个浏览器窗口，也是网页的全局对象
+ navigator，代表当前浏览器的信息，可识别不同浏览器
	- 由于历史原因，大部分属性已经无法用来识别
	- 一般只会使用userAgent来判断浏览器信息
		* /chrome/i.test(navigator.userAgent),判断是否为chrome
		* /firefox/i.test(navigator.userAgent),判断是否为firefox
		* /msie/i.test(navigator.userAgent),判断是否为ie10及以下的浏览器
	- 如要判断浏览器是否为ie，可用“ActiveXObject” in window 来判断是否为ie，只有ie有这个方法（edge不行，已用chrome内核）
+ location，代表当前浏览器的地址栏信息，可获取地址信息，跳转页面
	- 直接打印location可获取当前路径
	- 修改即跳转到新的路径，并会生成历史记录
	- location.assign（“地址”），跟直接修改一样
	- location.reload（），重新加载页面
		* 如果在（）中传递参数true，将强制清空缓存刷新页面
	- location.replace(“地址”),替换成一个新的页面，无历史记录
+ history，代表浏览器的历史记录，可以操作浏览器的历史记录
	- 由于隐私原因，不能获取历史记录，只能操作浏览器向前或向后翻页
	- history.length,可以获取当前访问的链接数量
	- history.back（），可以返回上一个页面
	- history.forward（），可以返回下一个页面
	- history.go（n），表示跳转n个页面，正数向前，负数向后，0为刷新当前页面
+ screen，代表用户的屏幕信息，可获取显示器的相关信息

# 2020.9.24（今天尝试了下先学ajax，感觉不太对，应该从jQuery学起）
### json分为对象和数组两类，用{}、[]包裹
+ json中允许的值（对象或数组中）：
	- 字符串
	- 数字
	- 布尔值
	- null
	- 对象
	- 数组
+ json中的属性名必须加双引号

### eval（），此函数可以执行一段字符串形式的js代码，并将执行结果返回（用于兼容ie7以下版本）
+ 如果eval执行的字符串中含有{}，他会将{}当成是代码块，如不希望将其当成代码块解析，则需要在字符串前后加（）

### cookie，是指缓存在本地客户端的数据，用来保存用户数据信息，在浏览器与服务器之间传递信息，以保存状态、识别身份（如是否登录、购物车信息、是否已下载、是否已点赞、视频播放进度等）
+ 最大可以存储4kb，每一个域名最多可以存储50条cookie（不同浏览器有差异）
+ 只能存储字符串
+ 可以用document.cookie访问cookie
+ 记录数据的格式为name=value，用分号和一个空格隔开，同名的数据会被覆盖
+ 可以设置过期时间，未设置会默认为会话cookie，当浏览器关闭时，cookie消失
	- expires=时间对象，可用new Date（）获取当前时间，再用getDate和setDate更改日期
	- 当expires=-1时，会立即删除该cookie(利用此实现删除cookie)

### AJAX，就是异步的js和XML，通过AJAX可以再浏览器中向服务器发送异步请求，在不刷新网页的情况下获取数据，其不是一种编程语言，而是将现有的标准组合在一起使用的新方式
+ 典型场景：搜索框备选项、注册页面格式审查、下滑加载新数据等，可提高网页初次加载速度，按需加载，并可与后台交换数据
+ 优点：无需刷新页面即可与服务端通信；允许根据事件更新部分页面内容
+ 缺点：没有浏览历史，不能回退；存在跨域问题；对seo不友好

### XML，可拓展标记语言，被设计用来传输和存储数据，与HTML类似，不同的是HTML都是预定义标签，二XML中没有预定义标签，都是自定义标签，曾被用于ajax

### HTTP，超文本传输协议，规定了浏览器和万维网服务器之间互相通信的规则
+ 请求报文：
```
行（3个部分）   POST     /url路径    HTTP/1.1
头(名字：空格+值)    Host: atguigu.com
                    Cookie: name=guigu
					Content-type: application/x-www-form-urlencoded
					User-Agent: chrome 83
空行
体（GET为空，POST可以不为空）   username=admin&password=admin
```
+ 响应报文
```
行      HTTP/1.1    200    OK
头      Content-type: text/html;charset=utf-8
        Content-length: 2048
		Content-encoding: gzip
空行
体      <html>
			<head></head>
			<body></body>
		</html>
```

### jQuery是一款javascript库，主要用途是用来做查询，对html文档遍历和操作、事件处理、动画以及ajax变得更加简单（还能跨浏览器兼容）
+ 本质上就是封装了常用功能的代码的js文件，对其的学习就是学习调用这些函数（方法）
+ 版本1.x，兼容ie678，不再更新
+ 版本2.x，不兼容ie678，不再更新
+ 版本3.x，不兼容ie678

### jQuery地址
+ 百度：http://libs.baidu.com/jquery/1.9.1/jquery.min.js
+ 字节跳动：https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js

### $是jQuery的别称，两者可以互相代替，作为代码开头

### jquery方法：$('选择器').hide()，隐藏某元素，等同display：none

### jquery方法：$(function(){...})，jqury代码的入口函数，待页面加载完成后运行

# 2020/9/25(今天学了一天jQuery，感觉还可以，明天估计能结束这部分)
### DOM对象与jQuery对象
+ DOM对象：用原生JS获取的对象，不能使用jQuery方法
+ jQuery对象：用jQuery方式获取的对象（如$('div'))，本质是通过$把DOM元素进行了包装，以伪数组形式存储，只能使用jQuery方法
+ DOM对象转换为jQuery对象：$(DOM对象)
+ jQuery转换为DOM对象：$('对象名')[index(在伪数组中的序号)]或$('对象名').get（index）

### jQuery选择器使用方法与css一致

### css选择器 父节点>子节点，限定了层级关系必须是父子关系

### jQuery样式设置方法$('对象').css('样式名','样式值')
+ $('对象').css({样式名1：'样式值1'，样式名2：'样式值2'})可以同时修改多个样式
+ 但带 - 的都要改为驼峰命名法
+ 当不传样式值时，会返回当前的样式值

### 隐式迭代：为匹配到的所有元素进行遍历执行,不需手动遍历循环

### jQuery筛选选择器
+ $('li:first'),获取第一个li
+ $('li:last'),获取最后一个li
+ $('li.eq(index)'),获取索引为index的元素，从0开始
+ $('li.odd'),获取到的元素中，选择索引为奇数的元素
+ $('li.even'),获取到的元素中，选择索引为偶数的元素

### jQuery筛选方法
+ $('选择器').parent(),返回最近一级父元素
	- parents（），返回所有祖先元素，顺序从近到远
		* 可在括号中指定选择器
+ $('选择器').children('选择器'),返回最近一级子元素
+ $('选择器').find('选择器'),返回后代元素（不光是最近一级）
+ $('选择器').siblings('选择器'),返回兄弟元素（不包含自己）
	- 此方法可以配合隐式迭代，进行排他处理，完成特定样式在兄弟元素之间的切换
+ $('选择器').nextAll('选择器'),返回当前元素之后的同辈元素
+ $('选择器').prevAll('选择器'),返回当前元素之前的同辈元素
+ $('选择器').eq(index),返回当前选择器对应索引值的元素
+ $('选择器').hasClass('类名'),检查当前元素是否含有某个特定的类，有则返回true，没有则返回false

### 使用jQuery中的this不需要加引号

### jQuery方法：show（[speed,[easing],[fn]]），显示元素
+ 三个参数都可以不传，则无动画直接显示
+ speed有三种预设速度：slow、normal、fast，或直接给毫秒数值
+ easing：指定切换效果，默认是swing（先快后慢），可用linear（匀速）
+ fn:动画完成时执行的函数
+ 动画为从左上角开始放大
+ hide（）、toggle（）方法的参数相同

### jQuery方法：toggle（[speed,[easing],[fn]]），切换是否显示元素

### jQuery事件：mouseover（），鼠标经过

### jQuery事件：mouseout（），鼠标离开

### jQuery方法：index(),得到当前元素索引号

### jQuery方法：addClass('类名')，添加类，等同于classList操作
+ removeClass，删除类
+ toggleClass，切换类

### jQuery方法：上下滑动出现收起
+ slideDown，下滑出现
+ slideUp，上滑收起
+ slideToggle，切换
+ 参数同show（）

### jQuery事件：hover（[over,]out），鼠标经过离开事件切换的复合写法
+ over:鼠标移到元素上触发的函数，相当于mouseenter
+ out：鼠标移出元素触发的函数，相当于mouseleave
+ 如果只写一个方法，则经过和离开都会触发，此时就可以放toggle类的方法

### 当动画事件触发得过于频繁时，会有动画滞后效果，可以用stop（）停止上一次动画

### 这个视频里的老师说官方网站都是用双引号，我们最好也用双引号

### jQuery方法：淡入淡出效果
+ fadeIn，淡入
+ fadeOut，淡出
+ fadeToggle，切换
+ fadeTo，修改透明度，参数除了show（）的3个之外，还有一个透明度的参数opacity,取值范围0~1之间,设置此方法时需设置动画时间，否则容易被误认为动画时间

### jQuery方法：animate（params,[speed],[easing],[fn]），自定义动画
+ params：想要更改的样式属性，必须写,如{left:100,top:100}

### jQuery方法：prop（‘属性名’），可返回元素的属性值
+ prop('属性名','属性值')可以设置属性值
+ 只能获取元素固有属性值

### jQuery方法：attr（‘属性名’），可以返回元素自定义的属性值
+ attr('属性名','属性值')可以设置属性值

### jQuery事件：input/select元素.change（fn），当元素属性值发生改变时

### jQuery方法：data（'key'，'value'），将数据存放在元素的缓存里
+ data（'key'）可以返回对应的值
+ 此方法可以获取h5自定义属性，前提是自定义属性以data-key命名，获取时不用加data-

### jQuery选择器：checkbox元素：checked，返回所有被勾选的checkbox元素伪数组，可用于判断被勾选复选框的个数

### jQuery方法：html（）,获取元素的内容
+ 括号内传值，则会变更元素的内容

### jQuery方法：text（），获取元素的文本内容
+ 括号内传值，则会变更元素的内容

### jQuery方法：val（），获取表单中的value值，如input标签的value值
+ 括号内传值，则会变更元素的内容

### js方法：substr（n），从索引为n的位开始截取字符串，索引从0开始

### js方法：数值.toFixed（n），四舍五入保留n位小数，但会将数值类型转换为字符型

# 2020/9/26（周末事比较多，今天进度不及预期）
### jQuery方法：each（fn（index，domEle）），遍历匹配的每一个元素,可以对同一类元素中的个体进行不同的操作
+ 回调函数中有2个参数，index是每个元素的索引，domEle是dom元素
+ 弱项使用jQuery方法，需要将dom元素转换为jQuery对象$(domEle)
+ 第二种写法：$.each($('选择器'/变量),function(index,domEle){})，此方法可以遍历数组、对象，用于处理数据
	- 若遍历的时对象，则index输出属性名，domEle输出属性值

### jQuery方法：如$('<li></li>'),可创建一个li元素
+ 添加元素：
	- 内部添加：
		* $('选择器').append(创建的元素)，可放到选择器对应元素内部的后面
		* $('选择器').prepend(创建的元素)，可放到选择器对应元素内部的前面
	- 外部添加：
		* $('选择器').after(创建的元素)，可放到选择器对应元素的后面
		* $('选择器').before(创建的元素)，可放到选择器对应元素的前面
+ 删除元素：$('选择器').remove()，删除选择器对应元素
	- $('选择器').empty()，删除选择器对应元素的所有子元素
	- $('选择器').html('')，将元素内容改为空的字符串，变相删除

### jQuery方法：on（'事件名',方法），绑定事件
+ 一次绑定多个事件:
```
$('选择器').on({
	事件1：function(){},
	事件2：function(){}
})
```
+ 为多个事件绑定同一个方法：
```
$('选择器').on({'事件1 事件2'，function(){
	【如toggle类方法】
}})
```
+ 实现事件委托：
```
$('ul').on('click','li',function(){
	【为ul绑定事件，当点击li时，会冒泡至li的父元素ul，触发事件】
})
```
	- 此方法可以为未来创建的元素绑定事件

### 为a标签添加属性：href="javascript:;"  ，将不执行a标签的点击事件

### jQuery方法：off('事件名'),解绑on绑定的事件
+ 当不传事件名时将解绑所有事件
+ 如要解除事件委托，则$('父元素').off('事件名','子元素')

### jQuery方法：one（）,此方法绑定的事件只能触发一次，绑定方法与on（）类似

# 2020/9/27(今天又出门了，明天完成)
### jQuery方法：自动触发事件：元素.事件（） 
+ 第二种方式： 元素.trigger('事件')
+ 第三种方式：元素.triggerHandler('事件')，此方法不会触发元素的默认行为

### jQuery事件：focus（），获得焦点，如文本框

### jQuery事件对象：element.on('事件名',function(event){}),其中的event指代的就是事件触发时产生的事件对象
+ 可对事件对象阻止默认行为：event.preventDefault()或return false
+ 也可阻止冒泡：event.stopPropagation()

### jQuery方法：$.extend([deep],target,object1,[objectN])
+ deep:如果设为true为深拷贝，默认为false,浅拷贝
	- 浅拷贝在拷贝复杂数据类型(对象)时，只会拷贝对象地址，修改拷贝对象，会影响被拷贝对象，深拷贝则不然
	- 浅拷贝时，当拷贝到对象型数据时，会直接覆盖同名的对象
	- 深拷贝时，当拷贝到对象型数据时，可以保留原先同名的对象中的属性
+ target：要拷贝的对象
+ objectN：要被拷贝的第N个对象
+ 当对象的属性名重复时，会覆盖原来的属性

### 当作为标识符的$与自建函数或别的库冲突时，可以用jQuery代替，实现多库共存
+ 也可以使用 var 新标识符=$.noConflict() 的方式，自己更改标识符

### jQuery插件：先引入jQuery文件，再调用插件
+ jQuery插件常用网站：
	- jQuery插件库 http://www.jq22.com/
	- jQuery之家：http://www.htmleaf.com/
+ jQuery插件使用步骤：
	- 引入相关文件。（jQuery文件和插件文件）
	- 复制相关html、css、js（调用插件）
+ 调用代码要写在引入的下方

### 一些jQuery插件：
+ 瀑布流，这个应该就是列布局
+ 图片懒加载（跟随页面滑动加载），代码看不懂
	- 比较有名的：https://www.jq22.com/jquery-info11629
+ 全屏滚动，这个之前做的PC项目已经实现过了，就是不用滚动条，只用滚轮和按钮，实现网页不同屏之间的切换
	- 比较有名的：https://github.com/alvarotrigo/fullPage.js
	- 中文版：https://www.dowebok.com/demo/2014/77/

### bootstrap框架，依赖于jQuery开发的插件

### 字符实体：&copy； ，版权符号

# 2020/9/28（jQuery基础搞定，现在应该还剩这几块：es6，构造继承，ajax，明天捋一捋）
### localStorage，浏览器中的本地存储，以名值对的形式存储
+ localStorage.setItem('key','value'),增加或修改本地存储
+ localStorage.getItem('key'),返回对应名的值
+ localStorage.removeItem('key'),删除对应名的数据
+ localStorage.clear(),清除所有本地存储
+ 只能存储字符串数据，因此存储时要先经过JSON.stringify（需存储数据）转换，取出后也要用JSON.parse（字符串）转回
+ sessionStorage为临时存储，会话结束时会被清空
+ 只支持IE8以上版本

### 要删除数组中的元素，没法用remove，只能splice，花了我几个小时才得到的血的教训

### jQuery尺寸方法：
+ width()/height(),元素宽高（纯）
+ innerWidth()/innerHeight(),元素宽高（含padding）
+ outerWidth()/outerHeight(),元素宽高（含padding、border）
+ outerWidth(true)/outerHeight(true),元素宽高（含padding、border、margin）
+ 以上参数为空，则获取相应数值，返回数值型
+ 如果参数为数字，则是修改相应值
+ 参数可不必写单位

### jQuery位置方法：
+ offset（），相对文档的位置
	- 参数为空，返回一个带有top和left属性的对象
	- offset（）.left/top可获得相应属性值
	- offset（{top：y，left：x），可修改相应属性值
+ position（），相对父元素的位置，如无父元素，则以文档为准
	- 参数与offset相同，只能查询不能设置
+ scrollTop()/scrollLeft(),已滚动过的距离
	- 传参数即可设置距离
	- 此方法可为document操作
	- animate函数也有scrollTop属性，可设置动画效果
		* 此方法不能为document操作，只能为html或body等元素做动画，如$('html,body')

### jQuery链式编程：可以将同一对象的不同操作连在同一行里书写，如$(this).css('color','red').siblings().css('color','')

### 节流阀/互斥锁：当两种事件会互相影响时，可以立一个flag，判断flag的true/false，在执行其中一件事件时，锁死另一种

# 2020/9/29（今天发现一个问题，学ajax需要先搭建网站环境，所以前面又有些东西要先学，找了个视频里面好像是用php搭建）
### Ajax技术需要运行在网站环境中才能生效

### 面向过程与面向对象编程思想，例子：有一辆车时速36km/h，360km路程多久可以跑完
+ 面向过程：只关心数学逻辑
```
var hours=360/36;
```
+ 面向对象：找出实体，分析实体属性和功能，让实体间相互作用
```
var car={
	speed:36,
	run:function(load){
		return load.length/this.speed；
	}
};
var load={
	length:360
};
var hours=car.run(load);
```

### 类：一类具有相同特征的抽象概念

### 对象：具体的某一个实例，唯一的某一个个体

### 数据类型：普通数据（单个）==>数组（多个）==>对象（还可存储函数等）

### 构造函数创建对象时，使用new，会自动在函数内完成创建新对象和返回新对象的步骤，并会将函数内的this指向新创建对象
+ 构造函数一般首字母大写
+ 原型继承：当为构造函数的原型prototype对象添加方法，则构造函数构造出来的对象将共享同一个方法，如 构造函数.prototype.方法=...
+ 原型链，访问一个对象的属性时，会先从该对象上搜寻，再通过该对象的__proto__搜寻该对象的原型prototype，以及该对象的原型的原型，直到找到一个名字匹配的属性或到达原型链的末尾（即Object.prototype）

### 面向对象，就是封装、继承、多态

### 属性的继承：
```
function Son(parameterFromFather,newParameterOfSon){
	<!-- 继承原对象的属性 -->
	Father.call(this,parameterFromFather);
	<!-- 新增属性 -->
	this.newParameterOfSon=newParameterOfSon;
}
```
### 方法的继承：
```
<!-- 继承原对象的方法，需新创建一个对象作为prototype -->
<!-- 因为对象的赋值会变成引用，后续可能对原对象产生影响 -->
Son.prototype=Object.create(Father.prototype);
<!-- 改变对象继承来的的构造器指向 -->
Son.prototype.constructor=Son;
<!-- 新增方法 -->
Son.prototype.newMethod=function(){...};
```

### 如上条，虽然子级对象继承了父级对象的属性及方法，但其仍然可以新增属性与方法，并且不会影响父级对象，这就叫做多态

### 支撑面向对象编程思想的语法是类（ECMA6之前没有类这个概念，构造函数充当类的角色）和对象

# 2020/9/30（今天开始ajax了，先用php学一下）
### ECMA6 class语法，封装class类
```
class Father{
	<!-- class属性添加 -->
	constructor(name,gender,age){
		this.name=name;
		this.gender=gender;
		this.age=age;
	}
	<!-- class方法添加 -->
	showSelf(){
		alert('My name is'+this.name+',my gender is'+this.gender+',my age is'+this.age+'.');
	}
}
```

### 遍历继承父级对象方法：
```
for(var funcName in Father.prototype){
	Son.prototype[funcName]=Father.prototype[funcName];
}
```

### 调用构造函数继承父级对象方法
```
Son.prototype=new Father();
```

### ECMA6 继承
```
class Son extends Father{
	constructor(name,gender,age,job){
		super(name,gender,age);
		this.job=job;
	}
	showJob(){
		alert('My name is'+this.name+',my gender is'+this.gender+',my age is'+this.age+',my job is'+this.job+'.');
	}
}
```

### 服务器：资源提供方，别人可以通过IP或者域名访问到，运行apache软件的服务器电脑上的某一个磁盘

### 服务器安装（集成开发环境）：
+ WAMP：windows+apache+mysql+php
+ LAMP：Linux+apache+mysql+php
+ PHPnow：apache+mysql+php（视频里用这个）

### PHPnow/htdocs 服务器的根目录
+ localhost（或127.0.0.1或本电脑IP）/网页地址/网页文件 直接访问本地电脑服务器
+ 上条的前提是将网页文件或文件夹放入根目录下

### 默认访问的是 htdocs下index开头的文件
+ index.php
+ index.html
+ index.jsp

### php代码兼容html和css所有的代码
+ 后端开发工程师：php + mysql
+ 前端开发工程师：html + css + javascript

### php语法
+ php语法较严格，每条语句后必须加分号
+ php是弱数据类型
+ php的数值类型分为integer和float
+ php输出：
```
<?php
	header('content-type:text/html;charset="utf-8"');
	// php的输出函数,如果含有标签会自动解析
	echo "<h1>hello world</h1>";//空格输出
	echo("<h1>hello world</h1>");//括号输出
	print_r("<h1>hello world</h1>");//括号输出
	var_dump(100);//不光输出数据本身，还能输出数据类型
	var_dump('hello');//还能输出字符串长度
?>
```
+ php声明变量通过$符号，并且每次使用变量时都要带上$符号
+ php进行字符串拼接时，用的不是加号，而是 .
+ 字符串拼接也可用{}包裹变量/表达式
+ 分支语句及函数的语法与js相同
+ 数组
	- 索引数组：下标是数字
		* 必须通过array(1,2,...)的方法生成数组
	- 关联数组：下标是字符串（类似于ecma6的map类型）
		* 必须通过array('王五'=>'打鱼的','李四'=>'种地的','张三'=>'打猎的')的方式生成
		* 关联数组遍历方式：
```
foreach($arr as $key=>$value){
		echo "<br>下标:{$key},数据:{$value}";
	};
```
	- 全局关联数组（以键值对的形式存放数据）：
		* $_GET 接收通过GET提交的数据
		* $_POST 接收通过POST提交的数据
	- 索引数组和关联数组可以相互结合成多维数组
		* 二级数组的访问用 $数组名[一级下标][二级下标] 的方式
	- count(数组) 可返回数组长度

### 数据传输格式
+ xml（大型门户网站）
	- 优点
		* 1.种类丰富
		* 2.传输量非常大
	- 缺点
		* 1.解析麻烦
		* 2.不太适合轻量级数据
+ json（字符串，覆盖95%的移动端应用）
	- 优点
		* 1.轻量级数据
		* 2.解析比较轻松
	- 缺点
		* 1.数据种类比较少
		* 2.传输数据量比较小

### 同步与异步
+ 任何一个程序都是由多个小程序组成的
+ 同步：阻塞，下一个程序，必须等当前程序运行完毕以后，才能运行
+ 异步：非阻塞，当前程序运行，和前面程序的运行没有任何关系
+ Ajax是前后端数据交互的搬运工，可以异步执行

### Ajax下载数据
```
// 1.创建ajax对象
// XMLHttpRequest在IE8以下不兼容
var xhr=new XMLHttpRequest();
// 2.调用open
/* 
	第一个参数：请求方式 get post
	第二个参数：url
	第三个参数：是否异步
*/
xhr.open("get","1.txt",true);
// 3.调用send
xhr.send();
// 4.等待数据响应
xhr.onreadystatechange=function(){
	if(xhr.readyState==4){
		if(xhr.status==200){
			alert(xhr.responseText);
		}else{
			alert('Error:'+xhr.status);
		};
	};
};
```

### HTTP状态码 ajax.status，ajax对象的属性
+ 200 交易成功
+ 400 错误请求，如语法错误
+ 404 没有发现文件、查询或URL

### responseText/responseXML，ajax的属性
+ responseText，如果来自服务器的响应并非XML，则由此属性返回字符串形式的响应
+ responseXML，如果来自服务器的响应是XML，且需要作为XML对象进行解析，需要使用此属性

### onreadystatechange事件，用于请求状态监控
+ 属性：ajax对象.readyState，请求状态
+ 属性值：
	- 0 （初始化）调用open方法之前
	- 1 （载入）已调用send（）方法，正在发送请求
	- 2 （载入完成）send（）方法完成，已收到全部相应内容
	- 3 （解析）正在解析响应内容
	- 4 （完成）相应内容解析完成，可以在客户端调用了

### echo后要跟双引号，单引号会出现问题，会将引号内的变量作为字符串输出

### form表单的get和post
```
action 点击submit以后跳转到的url
method 表单的提交数据方式
	get（默认）:
		http://localhost/phpLearn/2020.9.30/1.get.php?username=xxx&age=26&password=123
		提交方式：直接将数据拼接在url后面进行提交，通过？进行拼接，查询字符串
		好处：简单
		缺点：
			1.不安全
			2.地址栏数据最大只能是2kb
			3.没法实现上传
	post:
		提交方式：post提交通过浏览器内部进行提交
		好处：
			1.安全
			2.数据量理论上没有上线
			3.可以上传
		缺点：比get复杂
```
+ get提交中的html代码
```
<form action="1.get.php" method="get">
<input type="text" name='username' placeholder='用户名'/>
```
+ post提交中的html代码
```
<form action="1.post.php" method="post" enctype="application/x-www-form-urlencoded">
<input type="text" name='username' placeholder='用户名'/>
```
+ get/post提交中的php代码，将GET替换为POST即可
```
$username=$_GET['username'];
	$age=$_GET['age'];
	$password=$_GET['password'];
	echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";
```
+ get/post在ajax提交中的数据传输方式，详见今日html文件
	- get在open的url中传输数据
	- post在send中传输数据，并且要在send前设置数据格式

# 2020/10/1（今天学得有点少，划一天水，把ajax交换数据的函数封装好了，又尝试了一下用服务器获取的json字符串更新页面）
### 查询字符串：key=value&key=value...

### PHP中的json转换
+ json_encode() 将其他数据结构转为字符串
+ json_decode() 将字符串转成对应的数据结构

### 前端与后端传输数据使用字符串，效率最高
+ json是一种数据传输格式，也就是一种特定格式的字符串

### 前后端交互的流程
+ 1.通过ajax下载数据
+ 2.分析数据，转成对应的数据结构
+ 3.操作数据结构

### 反引号 ` ，在ecma6中，反引号可以当作普通字符串使用，也可以用来定义模板字面量，可以实现字符串中的换行，或者在字符串中嵌入变量
+ 可在字符串中用 ${变量} 的方式嵌入变量，不需要再 '+变量+' 了

# 2020/10/2(今天家里出了点事，接下来打算一边学vue，一边翻红宝书)
### 闭包的特点：
+ 1.函数嵌套函数
+ 2.内部函数使用外部函数的形参或变量
+ 3.被引用的形参和变量不会被垃圾回收机制所回收
+ 闭包的好处：
	- 1.希望一个变量常驻在内存当中
	- 2.避免全局变量污染
	- 3.可以声明私有成员
+ 所以尽量把变量和函数声明在函数体内
```
function aaa(){
	var a=2;
	function bbb(){
		a++;
	}
	return bbb;
}

var ccc=aaa();
ccc();
ccc();
alert(a)
```
+ 如上例所示，即在全局作用域下a已被回收，但每次调用aaa函数时，a的值又能完成叠加
+ 使用闭包后，相同名字的变量在不同的函数之间，可以各自进行累加，不会互相干扰
+ 闭包尽量只用于普通变量，如果用于对象，会占用过多空间，会导致内存泄露（在ie浏览器中尤为严重）
	- 这里的解决方法是在内部函数中只引用某个存放了对象属性值的变量（这样闭包的就只是存放了属性值的变量），然后在外部函数中将内部函数用到的的对象赋值为null，代码如下：
```
var oDiv=document.querySelector('div');
var id=oDiv.id;
oDiv.onclick=function(){
	alert(id);
}
oDiv=null;
```

### vue
+ vue是一个渐进式的框架，可以将vue作为应用的一部分嵌入其中
+ vue全家桶：core + Vue-router + Vuex
+ 安装Vue方式：
	- 方式一：CDN引入(2.6.12)，正式工作中都是用本地文件或部署在服务器上的文件导入
```
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

# 2020/10/3（今天在看红宝书，看了30页）
### javascript
+ script标签属性：async="async"，立即开始下载脚本，但不阻止其他页面动作
+ {}内包裹的代码，被称为一个代码块
+ let可以声明一个只在代码块内生效的变量，不会对代码块外的同名变量产生影响
	- let并不会让被声明的变量提升,在声明之前的执行被称为 暂时性死区
	- let在同一个代码块内，不能重复声明同名变量(正是因为无法提升合并)
	- 使用let在全局作用域中声明的变量不会成为window对象的属性（var则会）
	- 在for循环中var的迭代变量i会泄漏到循环外部，let则不会

# 2020/10/4（今天看了70页，看完了第4章：变量、作用域与内存，事情有点多）
### const声明，行为与let基本相同，唯一的重要区别时用它声明变量时，必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误（即声明了一个常量）
+ 但如果const声明的是一个对象，则修改该对象的属性并不违反const的限制
+ 应该优先用const声明变量，只有在提前知道未来会有修改时，再用var

### 当要定义一个空对象时，可以先赋值null（空的对象型数据），后续可以通过判断是否等于null判断对象的状态，如setTimeout函数

### javascript中可以使用科学计数法数值，格式如 3.125e-7，等于3.125乘以10的-7次方
+ 当数值大于1.7976931348623157e308时，会显示为正无穷Infinity，负数则为-Infinity
+ 当数值小于5e-324时，会显示为0，负数则为-0
+ 而0==-0
+ 0/0=NaN，NaN即“不是数值”
	- 任何涉及NaN的操作返回的都是NaN，并且NaN不等于包括NaN在内的任何值，如NaN!=NaN
	- 为此，ECMAScript提供了isNaN()函数,用于判断一个参数是否“不是数值”,当这个参数无法被转换为数值时，返回true
+ 非零数/0=Infinity

### 位操作符，用于处理二进制数据（输出为十进制格式）
+ 按位非：~n，对二进制数n按位取反（即0-1互换），表现在十进制上即是对数值正负取反后再减一
+ 按位与：n&m，对二进制数n和m的每一位，进行与操作，只有都为1时结果才为1，否则该位为0
+ 按位或：n|m，对二进制数n和m的每一位，进行或操作，只有都为0时结果才为0，否则该位为1
+ 按位异或：n^m，对二进制数n和m的每一位，进行异或操作，只有两个数不同时结果才为1，否则该位为0
+ 左移：
```
n<<m，将二进制数n左移m位，如 1011变为101100，即是左移2位
```
+ 右移类似，但只会得到整数，即移到小数点右边后就被舍弃了

### 使用!!n可以把任意的n转化为布尔值

### 指数操作符：n**m，即n的m次方
```
n **= m，等同于n=n**m
```

### 条件操作符：  表达式？x：y  ，判断表达式结果是否为true，为true则整个大表达式的结果为x，false则为y

### for(const a in b){},对b的每个属性/方法名称遍历，并赋值给a

### for(const a of b){},对数组b进行遍历，并将数组中的每一个元素赋值给a，元素可以是值、函数、对象等

### 标签语句，当使用 'break/continue 标签语句；' 中断循环时，会中断到 '标签语句：' 出现的位置，如下所示：
```
var num=0;
start:
for(let i=0;i<10;i++){
	for(let j=0;j<10;j++){
		um++;
		if(i==5&&j==5){
			break start;
		}
	}
}
```

### 原始值与引用值
+ 原始值就是简单的数据，如number、string等
	- 将原始值变量a赋值给变量b时，a与b的值互相独立
+ 引用值则是由多个值构成的复杂数据，如对象、数组
	- 将引用值变量a赋值给变量b时，只是将变量a存放在内存中的引用值地址赋值给了b，a与b任意一方对引用值的改变都会影响另一方

### 内存管理，对于不需要的变量，可以手动解除其引用（如 变量=null，或变量.引用属性=null），这样其引用的相关内存会在javascript的下次垃圾回收中被回收
+ 通过const和let声明的变量都以块为作用域，相比于var，可能不会更早让垃圾回收程序介入，尽早回收内存
+ 未使用关键字声明变量会导致变量变成全局变量，成为window的属性，无法被回收
+ 隐藏类，通过同一个构造函数创建的对象，最初共享相同的隐藏类（V8引擎用于跟踪对象属性），若单独对某一实例新增或删除属性，会产生新的隐藏类，影响性能，因此对实例对象的属性需求最好在创建构造函数时就写好
+ 定时器中的函数等闭包将导致内存泄露（再记一遍），由于引用了外部的变量，导致引用的变量无法被回收
+ 静态分配：在函数中不要动态创建对象（只是作为属性的媒介，最终又输出），尽量传入并使用外部已有的对象
+ 对象池思想，可以集中创建一组可回收的对象，并在使用完后集中解除变量的引用

# 2020/10/5（今天看了50多页红宝书，又看了一会vue）
### new Date(),当括号中不传参数时，此操作可用构造函数Date创建一个保存当前日期和时间的对象(存储格式为UTC)
+ 若要基于其他时间或日期创造函数，则可以下列格式在括号中传入参数 '年，月-1，日，24小时制小时，分，秒'

### 访问对象属性
+ 点语法：对象名.属性名，用此方式访问对象的属性
+ 中括号法：对象名['属性名']，其中属性名必须以字符串形式
	- 此方法可以在中括号中使用变量（除此情况外，通常首选还是点语法）

### 通过修改数组的length属性，可以从末尾删除或添加元素
+ 数组最多可以包含4 294 967 295个元素

### Array.from(n),此方法可以将一个可迭代的结构n转化为数组
+ 可代替Array.prototype.slice.call(伪数组名)

### 迭代器，Array的原型提供了3个用于检索数组内容的方法
+ 数组名.keys()，返回数组索引的迭代器
+ 数组名.values()，返回数组元素的迭代器
+ 数组名.entries()，返回数组索引/值对的迭代器
+ 迭代器是以对象的形式返回，因此若要输出可用Array.from()，转换为数组

### 填充数组，数组名.fill(n)，用n填充数组中的每一个元素（根据当前数组长度）
+ 数组名.fill(n,a),用n填充索引大于等于a的元素
+ 数组名.fill(n,a,b),用n填充索引大于等于a，且小于b的元素
	- 当a、b取负值时即代表从后开始数
+ 当传入的索引超出数组索引范围时，只会填充可用的部分
+ 当传入的索引a>b时，称为索引反向，此时填充失效

### 复制数组：数组名.copyWithin(n,a,b),将[a,b)之间的元素，复制到从n开始的位置
+ 索引值的规则同fill

### 数组转换为字符串：数组名.toString(),将数组转换为一个用逗号连接每个值的字符串
+ 如想使用其他分隔符，可使用 数组名.join('其他分隔符')

### 数组搜索（严格相等）
+ 数组名.indexOf(a[,b])，从索引b开始往后搜索，返回第一个值为a的索引
+ 数组名.lastIndexOf(a[,b])，从索引b开始往前搜索，返回第一个值为a的索引
+ 如搜索不到，贼返回-1
+ 数组名.includes(a[,b])，从索引b开始往后搜索，返回是否搜索到与a全等的结果（布尔值），此方法为ECMAScript7新增

### 数组搜索（断言函数）
+ 数组名.find(判定函数)，返回数组中符合判定函数要求的元素，如下例：
```
var ages=[14,16,18,20,22];
//判定函数
function checkAdult(age){
	return age>=18;
}
//其中age指代的是数组中的元素，此外还能接受另外2个参数，第二个为索引值，第三个为数组本身
console.log(ages.find(checkAdult));
//返回了从前往后符合条件的第一个元素18
```
+ 数组名.findIndex(判定函数)，基本同find()，但返回的是符合要求的索引

### 迭代方法，以下迭代方法中的断言函数一样能接收数组的3个参数
+ 数组名.every(断言函数)，对数组每一项运行传入的函数，如果每一项元素都执行成功，则返回true
+ 数组名.filter(断言函数)，对数组每一项运行传入的函数，将执行成功的元素组成一个新数组返回
+ 数组名.forEach(断言函数)，对数组每一项运行传入的函数，没有返回值
+ 数组名.map(断言函数)，对数组每一项运行传入的函数，返回由每次函数调用的结果构成的数组（执行成功为true，执行失败为false）
+ 数组名.some(断言函数)，对数组每一项运行传入的函数，只要有一项元素执行成功，则返回true

### vue.js是一种MVVM库
+ MVVM模式，是对MVC模式的改进
	- Model：负责数据存储
	- View：负责页面展示
	- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
+ MVC模式（设计模式，前后端都有此模式存在）
	- M->model->模型->数据（JS变量）
	- V->view->用户所见界面（HTML，CSS）
	- C->control->控制器->事件交互->如何根据视图与用户交互后改变数据（通过DOM对象绑定事件，将变量进行修改）

### vue一个核心的概念就是：数据驱动，避免手动操作DOM元素（适合大型项目）
+ 相对的，中小型项目中使用的jQuery就需要大量手动操作DOM元素
+ 利用虚拟DOM实现快速渲染
	- 虚拟DOM，就是在js的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到HTML里
+ 轻量级
+ 响应式组件
+ 支持服务端渲染
+ 易于集成路由工具、打包工具以及状态管理工具

### 框架和库的区别
+ 框架：框架是一套完整的解决方案，功能完善，但项目如果要更换框架，则需要重构整个项目
+ 库（插件）：只提供某一个小功能，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求

# 2020/10/6(今天晚上有事，进度有点慢)
### 归并方法，迭代数组的所有相，并在此基础上构建一个最终返回值
+ 数组名.reduce(function(prev,cur,index,array){},ini)，四个参数分别为：上一个归并值、当前项、当前项的索引、数组本身，当没有传入可选的第二个参数时（ini,作为归并起点值），则第一次迭代将从数组的第二项开始，传给归并函数的第一个参数是数组的第一项，第二个参数是数组的第二项
+ 数组名.reduceRight(function(prev,cur,index,array){})，与reduce类似，不过顺序是从后往前

### 对象的数据属性有4个特征描述他们的行为
+ configurable：表示属性是否可以通过delete删除并重新定义，是否可以修改他的特性们以及是否可以把它改为访问器属性，默认为true
+ enumberable：表示属性是否可以通过for-in循环返回，默认为true
+ writable：表示属性的值是否可以被修改，默认为true
+ value：属性实际的值，默认值为underfined
+ 要修改属性的默认特征，就必须使用Object.defineProperty()方法，此方法接收3个参数：要给其添加属性的对象、属性的名称和一个描述符对象（对象的属性可以包含上述4个特征），如下例：
```
let person={};
Object.defineProperty(person,"name",{
	writable:false,
	value:"Nicholas"
});
console.log(person.name);//输出Nicholas
person.name="Greg";
console.log(person.name);//仍然输出Nicholas，因为writable被设为false
```

### 数据的访问器属性有4个特征描述他们的行为
+ configurable：表示属性是否可以通过delete删除并重新定义，是否可以修改他的特性们以及是否可以把它改为数据属性，默认为true
+ enumberable：表示属性是否可以通过for-in循环返回，默认为true
+ get：获取函数，在读取属性时调用，默认为undefined
+ set：设置函数，在写入属性时调用，默认为undefined
+ 实例如下,可通过year的访问器属性，记录内部数据属性year_被获取和设置的次数：
```
let book={
	// 数据属性 year_，不希望被外部访问到
	year_:2017,
	// 数据属性：版本号，根据设置次数变化
	dition:1,
	//数据属性：访问次数，根据获取次数变化
	count:0
};
// 访问器属性 year，为其设置获取函数和设置函数
Object.defineProperty(book,"year",{
	get(){
		his.count++;
		return this.year_;
	},
	set(newValue){
		if(newValue!=this.year_){
			this.year_=newValue;
			this.edition++;
		};
	}
});
```
+ 定义多个属性，格式如下：
```
let book={};
Object.defineProperties(book,{
	year_:{
		value:2017
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if(newValue!=this.year_){
				this.year_=newValue;
			};
		}
	}
});
```
+ 使用Object.getOwnPropertyDescriptor(对象名，属性名)可以取得指定属性的属性描述符，返回值是一个对象，对于访问器属性包含configurable、enumerable、get和set属性，对于数据属性包含configurable、enumerable、writable和value属性
+ 使用Object.getOwnPropertyDescriptor(对象名)可以取得所有属性的特征值，并以对象的形式返回

### Vue.js可在DOM中用双花括号{{变量名}}的方式，声明一个变量（Mustache语法）

### 每个Vue应用都是通过Vue函数创建一个新的Vue实例开始的，如下例：
```
<div id="app">
	{{message}}
</div>
<script>
	var app=new Vue({
		el:"#app",//用于挂载要管理的el（元素）
		data:{//定义Vue实例对象的属性
			message:"Hello Vue!"
		}
	});
</script>
```
+ 通过创建Vue实例对象后，可以通过app.message的方式访问DOM中的message变量
+ 还可以通过 v-bind:元素属性 来绑定元素的属性
```
<div id="app-2">
	//此处绑定了这个span元素的title属性，其值被绑定为message
	<span v-bind:title="message">
	鼠标悬停几秒钟查看此处动态绑定的提示信息
	</span>
</div>
<script>
	var app2=new Vue({
		el:"#app-2",
		data:{
			message:"页面加载于"+new Date().toLocaleString()
		}
	});
</script>
```
+ 还可以通过 v-if 来绑定DOM结构，如下例
```
<div id="app">
	<h1>用户名：{{username}}</h1>
	<h3 v-if="isVIP">用户类型：VIP</h3>
	<h3 v-else-if="isGM" >用户类型：管理员</h3>
	<h3 v-else >用户类型：普通用户</h3>
</div>
<script type="text/javascript">
	var app=new Vue({
		el:"#app",
		data:{
			username:"小明",
			isVIP:true，
			isGM:false
		}
	});
</script>
```
+ 当变量isVIP的值为true时，DOM结构中显示v-if所在的元素，当isVIP的值为false，且isGM的值为false时，DOM结构中显示v-else所在的元素(前提是这三个元素中间不能有其他元素，不显示的内容直接从DOM中去除了)
	- 还可为isVIP或isGM赋值一个表达式，通过表达式返回布尔值结果
	- 若只是想实现隐藏(display:none)，可用v-show，尤其是需要频繁切换的使用v-show更为合适
+ 还可以通过 v-for 来遍历数组创建DOM元素，如下例
```
<div id="app-4">
	<ol>
		<li v-for="todo in todos">
			{{todo}}
		</li>
	</ol>
</div>
<script>
	var app4=new Vue({
		el:"#app-4",
		data:{
			todos:[
				"学习JavaScript",
				"学习Vue",
				"整个牛项目"
			]
		}
	});
	<!-- 可以通过对todos数组的操作，改变DOM的结构 -->
	app4.todos.push("项目失败了");
</script>
```
+ 在v-for遍历的过程中，可将todo替换为（todo，index），当获取两个参数时，第二个参数就是遍历到的元素对应的索引值
+ 在v-for遍历对象时，如果只获取1个值，则只能获取value，第2个值为key，格式为（value，key）
	- 非要获取对象的index的话，在第3个值

### vue实例对象的方法
```
<div id="app">
	//@click即为元素添加点击事件
	<button @click="方法名"></button>
</div>
<script>
	var app=new Vue({
		el:"#app",
		methods:{//定义vue实例对象的方法
			方法名：function(){
				...
			}
		}
	})

```

# 2020/10/7(今天主要是看vue了，红宝书里面很多内容感觉要后面边做项目边学才容易理解)
### ECMAScript 6 新增特性：Map对象，实现了真正的键值存储机制，各种类型的值都可以是Map的key，不局限于字符串
+ 用Map构造函数的方法创建Map对象，new Map([[key1,value1],[key2,value2]])
+ 可用Map对象名.set(key,value)的方式新增键值对（按插入顺序排序，无法新增重复值）
+ 可用Map对象名.has(key)的方式返回是否有此key
+ 可用Map对象名.get(key)的方式返回此key对应的value
+ 可用Map对象名.delete(key)的方式删除此key对应的键值对
+ 可用Map对象名.forEach(function(value形参，key形参){...})的方式对Map对象中的每一对键值对进行遍历操作
+ 可用Map对象名.clear()的方式删除所有的键值对
+ 可用Map对象名.size返回键值对的数量
+ 可用Map对象名.entries()返回所有键值对的迭代器
+ 可用Map对象名.keys()返回所有key的迭代器
+ 可用Map对象名.values()返回所有value的迭代器

### ECMAScript 6 新增特性：Set对象是一种类似于数组的数据结构，不同点在于其没有重复值
+ 用Set构造函数的方法创建Set对象，new Set([a,b,c])，括号中也可以放迭代器等任何可迭代的对象
+ 可用Set对象名.add(value)的方式新增值（按插入顺序排序，无法新增重复值）
+ 可用Set对象名.has(value)的方式返回是否有此value
+ 可用Set对象名.size返回值的数量
+ 可用Set对象名.delete(value)的方式删除此value，返回集合中是否存在要删除的值
+ 可用Set对象名.clear()的方式删除所有值
+ 由于Set对象以类似数组方式存放数据，因此键名即是值，keys()==values(),entries()同理
+ 可用扩展运算符（...），以[...Set对象名]的方式，返回由Set对象转换的数组
+ 可用for(let i of Set对象名)的方式，遍历Set对象内的值

### vue监听指令：'v-on：'，如 v-on：click="方法" 即监听点击事件
+ 'v-on：'可替换为'@'，这是一个语法糖
+ 当事件监听的方法没有传入参数的时候，可以不写括号
	- 如果方法要求传参数，却没有传，Vue会把事件对象传入
	- 当既需要传参数又需要事件对象时，事件对象可以用 $event 传入
+ 事件修饰符 @事件名.stop="函数"，可以阻止事件向父级冒泡
+ 事件修饰符 @事件名.prevent="函数"，可以阻止默认事件
+ 事件修饰符 @keyUp/keyDown.按键的keyCode或keyAlias（按键别名）="函数"，可以监听特定的按键事件
+ 事件修饰符 @事件名.native，监听组件根元素的原生事件（后面讲到组件再补充）(组件标签本身是没有点击等事件的)
+ 事件修饰符 @事件名.once="函数"，只触发一次函数
+ 一个题外话，需要依附于具体的对象的称为方法（mnethod），不需要依附于具体对象的称为函数（function），如这个指令中的方法需要依附于设置v-on的DOM对象

### Vue的生命周期概念：Vue对象本身的进程，在不同的时间节点会回调不同的生命周期函数：beforeCreate、created、beforeMount、mounted、beforeDestroy、destroyed，在data更新时还会回调beforeUpdate和updated
+ 因此我们想在特定的生命周期阶段时执行特定的代码，只需要在这些回调函数中放入我们想执行的代码，到点儿就会执行

### Mustache语法中，不仅可以写变量，也可以写一些简单的表达式，如：{{msg1 + " " + msg2}}
+ 当在DOM结构中使用了{{}}，但又不想使用Mustache语法时，可以为其父元素设置v-pre指令，即可原封不动地显示双花括号及其内容

### vue的响应式：当挂载了DOM中的元素之后，vue对象的属性变化，会立即响应到DOM中的元素上
+ 当为元素设定v-once指令之后，就只会显示初始数值，不会进行响应

### vue指令：v-html="想要放到元素内的代码"，此方法类似于.innerHTML()，可以在其中增加或修改DOM结构

### vue指令：v-text="想要放到元素内的代码"，可以以文本的形式将内容放入元素中
+ 此方式不够灵活，不能配合元素内的常量使用，因此主要还是使用Mustache语法

### vue指令：v-cloak，为元素添加，可以让vue在解析该元素内的{{}}之前，呈现特定的样式
+ 如在style中设置[v-cloak]{display:none;}，可让vue解析前该元素不可见
+ 当vue解析后，将会抹去v-cloak，此样式即失效，解析的内容才会呈现，避免了由于解析不及时，看到{{}}
+ 未来使用虚拟DOM之后此指令就没用了，不会看到{{}}

### vue指令：v-bind：，绑定元素的属性用法为v-bind:src="url"，即为src属性的值绑定了一个变量url
+ v-bind：的语法糖为 ":" ，仅一个冒号
+ 绑定类名时，可以通过 ：class="{key1:value1,key2:value2}" 的方式，在vue对象中操作变量value1和value2的布尔值，设置是否有类名key1或key2
	- 注意，一定要用花括号包裹键值对
	- 在需要绑定的类名以外，还可以用常规的class=""再定义一些固定的类名，两者不会冲突
	- 也可以将class=""的引号中放入一个函数调用的代码如getClass()，然后在methods中对此函数返回原先 带花括号的代码
	- 也可以用数组的形式放置类名，如： ：class="[key1,key2]",放置两个类名的变量，再在data中对类名进行设置，同样数组也可以用函数的形式在methods中返回

# 2020/10/8（今天学习了一下ES6，然后继续Vue）
### ECMA5语法：严格模式，用字符串"use strict"进入，写在哪个作用域下，这个作用域下所有代码就遵循严格模式

### ECMA6语法：let解构赋值(简化赋值方式，我觉得好像没啥用)
+ let [a,b,c]=[1,2,3]
+ let {a,b}={a:"111",b:"222"}
	- (过了一段时间回来补充)这个语法可以把对象中的属性有选择性地抽出，可以乱序，可以抽一部分，只要key对得上
+ let {a,b=5}={a:1}

### ECMA6语法：箭头函数
+ let foo=(a) =>a,等同于创建了一个输入参数为a，return a的函数foo，可以实现简单的返回操作
+ 当要实现复杂的函数体时，可用 let foo=(a) =>{let b=10; return a+b}的形式
+ 常规函数中的this指向，是在执行时绑定的（谁调用指谁）
	- 全局函数中的this指向window
	- 函数作为一个对象的方法被调用，函数中的的this，指向该对象
+ 箭头函数的this指向，是在定义时绑定的（箭头函数本身没有this，其内的this指向继承自函数外上下文的this（有this指向的最近外层上下文，注意，非函数的简单对象也是没有this的，也就是说只有非箭头函数的函数才有this，否则只能找到最外层的window），如果箭头函数为全局对象的方法，this的指向即是window）

### vue设置元素样式 :style="{样式名：样式值字符串或变量}"，或直接调用函数返回样式内容
+ 也可用 :style="[变量1,变量2,...]"的方式，引入data中以对象形式保存的键值对

### vue对象计算属性 computed，在DOM中调用计算属性中的函数时，不需要添加()，如下例：
```
<h2>{{fullName}}</h2>
...
computed:{
	fullName:function(){
		return this.firstName+''+this.lastName;
	}
}
```
+ 以上方法，只是计算属性的语法糖，完整写法如下：
```
computed:{
	fullName:{
		set:function(newValue){
			return newValue;
		},
		get:function(){
			return this.firstName+''+this.lastName;
		}
	}
}
```
+ 通常在计算属性（如fullName，以对象的格式作为元素的属性）中，是没有set方法的，是一种只读属性，因此为了书写方便，才采用类似函数的写法
+ 使用computed和methods的区别，computed自带缓存，当多次调用一样的计算属性（公式、参数完全一样）时，可以省去重复的计算过程，提升性能，而methods则每次调用都会进行计算

### ES6 对象字面量增强写法
+ 属性增强写法
```
const name="小明";
const age=18;
const obj={
	//由于上面已经定义了变量name,因此下方的name会直接为对象obj创造一个属性name，其值也为name，即上面的变量name，age同理
	name,
	age
}
```
+ 函数增强写法
```
const obj={
	run(){
		...
	},
	eat(){
		...
	}
	//如上直接定义了两个函数run和eat，可以省去 ：function
}
```

### TypeScripe带类型检测，可以检测输入值的数据类型

### Vue在把 虚拟DOM 渲染到DOM中时，diff算法会优先对同类元素进行修改后复用，此时可能会保留一些原来元素的属性，例如input的输入值value
+ 若想阻止Vue的复用，可以把同类元素的标识属性（key="..."）设为不同值
+ 由于这种复用特性，当往一堆元素中间插入一个同类元素，会把之后的每一个元素进行修改，使其变为上一个元素，进而实现插入，这样效率极低，因此官方建议为每一个元素建立一个 :key="能与每个元素一一对应的标识"，让每一个元素不可被复用，这样就可以直接生成一个新元素，效率提高

# 2020/10/9(继续vue，这内容感觉好多，估计得两周才能把知识点学完)
### 可变参数 function sum(...num){}，代表可以输入多个参数，将以数组的形式存放在变量num中

### vue中通过数组索引直接修改数组中元素，无法做到响应式
+ push、pop、shift、unshift、splice等可以实现响应式
+ vue对象方法： Vur.set（this.数组名，索引值，修改后的值），此方法可以实现响应式

### 过滤器filters，类似于methods，是Vue元素的方法，在DOM中以{{变量名 | 过滤器名}}的方式放置，在filters中会自动为过滤器函数传入一个参数，即DOM中过滤器前的变量

### for循环的in和of
+ for(let i in arr)，遍历的是数组arr的索引值
+ for(let i of arr)，遍历的是数组arr的元素值

### 视频里老师强调了：filter、map、reduce三个函数的好处，代码简洁、可读性强

### vue指令：v-model，实现和表单信息的双向绑定，不管是变更输入框还是js代码的值，另一方都会随之改变
```
<div id="app">
	<input type="text" v-model="message">
	{{message}}
</div>
<script type="text/javascript">
	let app=new Vue({
		el:"#app",
		data:{
			message:"初始值"
		}
	});
</script>
```
+ 利用v-model可以实现不同radio的互斥
+ 利用v-model可以将checkbox的多选项添加到一个数组中
+ 利用v-model可以将select的选项双向绑定到Vue对象中
+ v-model.lazy，为v-model添加修饰符lazy，可以实现懒加载，只有在用户按下回车或输入框失去焦点时，才会将输入框的value同步到Vue对象中
+ v-model.number，在type="number"的input输入框中，默认会将输入的value转化为字符串类型，此时就需要通过修饰符number将其转为数值类型
+ v-model.trim，修饰符trim可以去除输入的字符串前后的空格

### input元素的input事件，用于监听用户输入

### 事件对象有一个属性target,可以返回触发事件的元素对象

### Vue组件化思想，将页面拆分成一个个小的、可复用的组件，让代码方便组织和管理，拓展性也更强
+ 组件的使用分成三个步骤
	- 创建组件构造器，调用Vue.extend()
	- 注册组件，调用Vue.component()
	- 使用组件，在Vue实例的作用范围内使用组件
+ 通过以下方式创建组件(全局或局部选其一)
```
<div id="app">
	<!-- 3.使用组件（需在Vue实例对象绑定的元素下） -->
	<my-cpn></my-cpn>
</div>
<script type="text/javascript">
	// 1.创建组件构造器对象
	const cpnC=Vue.extend({
		// 模板
		template:`
		<div>
			<h2>标题</h2>
			<p>哈哈哈</p>
		</div>`
	});
	// 2.注册组件
	//此处注册的组件是全局组件，可以在多个Vue的实例下使用
	Vue.component('my-cpn',cpnC)
	// 创建Vue实例对象
	const app=new Vue({
		el:"#app",
		//此处注册的组件是局部组件，只能在该Vue实例下使用
		components:{
			"my-cpn":cpnC
		}
	});
</script>
```
+ 还可以在父组件的组件构造器中，用components属性的方式，注册子组件，就可以在父组件构造器的模板中使用子组件
+ new Vue({...})也可以看成最顶层的根组件
+ 组件的语法糖：可将传入extend的对象直接传入注册属性component/components中，即可省去创建组件构造器对象的步骤，如Vue.component('标签名',{template:"<**>...<**>"})
+ 模板可以和组件抽离，有以下两种方法
```
//第一种写法
<script type="text/x-template" id="cpn">
	<div>
		<h2>标题</h2>
		<p>正文</p>
	</div>
</script>
//第二种写法
<template id="cpn">
	<div>
		<h2>标题</h2>
		<p>正文</p>
	</div>
</template>
//注册时调用模板方式
Vue.component('cpn',{
	template:"#cpn"
});
```
+ 组件模板不可以访问vue实例的信息，但可以访问组件对象内部的data属性，如下例：
```
<template id="cpn">
	<div>
		<h1>哈哈哈</h1>
		<p>呵呵呵</p>
		<p>{{content}}</p>
	</div>
</template>
//组件中的data必须是一个函数，并且返回一个对象，信息作为该对象的属性保存
Vue.component('cpn',{
	template:"#cpn",
	data:function(){
		return {
			content:"组件内部信息"
		};
	}
});
```

# 2020/10/10（今天人有点不舒服，休息一天）
### 组件也可以有methods，因此也可以把一些小的程序封装为一个组件，如计数器等

# 2020/10/11（今天看完了组件化，并给模块化开了个头）
### 在一个页面中，一些数据需要从上层传递到下层，因此会由父组件发送一个网络请求后，将数据传递给子组件
+ vue通过props向子组件传递数据，详见文件"vue-父子组件props通信"
	- 在props中定义的变量不能用驼峰写法（因为html标签不能区分大小写字母）
+ vue通过事件向父组件发送信息,子组件在methods中，通过this.$emit(事件名,要传递的内容)发射自定义事件，然后为组件标签绑定自定义事件(v-on:)，最后在父组件的methods中接收自定义事件，详见"vue-组件通信-子传父（自定义事件）"

### vue模板的代码较多时，需要有一个根元素包裹模板的内容，如用一个div包裹（实测只要有两个及以上兄弟标签时，就必须有根元素包裹了，否则只能显示第一个标签）

### vue对象的watch属性（其实是个函数），用于监听其他属性的改变，格式为：要监听的属性名（newValue，oldValue）{...}
+ 如要监听路由的相关属性，要用引号包裹，如 '$route.path'

### vue父子组件的互相访问
+ 父组件访问子组件，使用 父组件.$children或.$refs
	- $children的子组件将作为对象放在一个数组中
	- $ref可以返回一个对象，其属性由键值对组成，如{ref1:obj1,ref2:obj2}，ref1为某一子组件的ref属性值，obj1为该子组件对象，返回的对象包含所有有ref属性的子组件
		* $refs.key可以返回一个带ref="key"属性的子组件
+ 子组件访问父组件，使用子组件.$parent，用法显而易见
+ 父子组件之间的访问会降低组件的复用性，慎用
+ 使用$root，可以直接访问根组件]

### vue插槽，在组件模板中预留插槽，可根据需求拓展，如下：
```
<template>
<slot></slot>
</template>
```
+ 使用插槽方式如下：
```
<组件名>此部分内容即被放置到插槽位置</组件名>
```
+ 插槽中也可以放置默认值，当未传入值时，则默认值生效
+ 具名插槽，为slot标签增加name属性值，在使用插槽时，为相应标签的slot属性赋予上述name的值

### 编译作用域：vue子组件标签的属性及标签内容，作用域为父组件
+ 但是，子组件的模板内的东西，其作用域只在子组件的作用域内，父组件同理
+ 综上可以总结，组件标签属性及标签内容的作用域为上一级组件，组件模板内的属性作用域为当前组件

### 作用域插槽：父组件替换插槽的标签，但是内容由子组件来提供（此方法过于繁琐，知道有这个概念就好，最新版本的Vue已经引入了v-slot指令，后面再学习）,老方法的例子可见"vue-作用域插槽"

### 模块化思想，将js代码分为多个模块，共同开发，为了让不同模块的代码不冲突，又能够按需要相互引用，传统做法如下：
+ 匿名函数解决方法：将每个模块的代码放入一个匿名（自调用）函数，最后return出一个对象，将需要引用的内容作为属性和方法添加到该对象上，并将该匿名函数赋值给一个模块对象（全局变量），后续当其他模块需要引用该模块内容时，就可对该模块对象进行操作

### 常见的模块化规范：CommonJS、AMD、CMD，也有ES6的Modules

# 2020/10/12（今天尝试了一下学习webpack的配置，也学了一些基本的js文件、css文件、图片的打包，配置了半天实在是太繁琐了，这东西工作的时候应该不会这么用，先往后看一下；今天配置完webpack之后项目文件太大了，就不上传了）
### 模块化有两个核心：导出和导入
+ CommonJS的导出
```
module.exports={
	flag:true,
	test(a,b){
		return a+b
	},
	demo(a,b){
		return a*b
	}
}
```
+ CommonJS的导入
```
let {test,demo,flag}=require('模块文件url')
```
+ ES6的导入和导出，export（导出）和import（导入）
	- 在用script标签引用模块化js文件时，要将标签属性type的值设为module，表示模块化引用，这样各模块文件内的变量就不会冲突了，但也无法互相引用
	- 详见"ES6的模块化实现"

### webpack，从本质上来说，是一个现代的JacaScript应用的静态模块打包工具
+ webpack其中一个核心场景就是进行模块化开发，并且帮助处理模块间的依赖关系（不仅是js文件，css、图片、json文件等都可以当做模块来使用）
+ webpack为了正常运行，必须依赖node环境
	- node环境为了正常执行代码，必须依赖各种包，而npm（node packages manager）工具被用来管理各种包

### webpack安装
+ 查看node版本：打开cmd，输入 node -v
+ 全局安装webpack（视频中使用版本3.6.0，因为vue cli2.0依赖该版本）：打开cmd，输入 npm install webpack@3.6.0 -g （-g代表全局安装，可以在所有软件使用）
+ 局部安装webpack：打开cmd，输入 cd 对应目录（回车）npm install webpack@3.6.0 --save-dev （具体用法后续补充）

### webpack项目下
+ src文件夹放置开发源码等
+ dist文件夹放置打包的东西

### 使用webpack打包存在依赖的文件
+ 在IDE终端（或系统cmd）项目路径下，输入 webpack ./src/主js文件.js ./dist/打包js文件.js ，即可在dist文件夹下创建一个打包过的js文件，其已经处理完了主js文件对其他js模块的引用(不管是CommonJS还是ES6的模块化都可以)
+ 在html文件中只需 引用打包后的js文件即可
+ 当开发的主js文件变更之后需要重新打包

### 将打包的输入和输出地址放在配置文件webpack.config.js中
+ npm init 和 npm install，安装一些项目需要的包

### webpack中的loader，用于扩展一些功能，如加载css、图片，也包括将ES6转成ES5，将TypeScript转成ES5，将scss、less转成css，将.jsx、.vue文件转成js文件等
+ 使用步骤一：通过npm安装需要使用的loader（webpack官方网站可以查询到所有的loader）
+ 使用步骤二：在webpack.config.js中的modules关键字下进行配置
+ loader和webpack存在兼容问题，4.3.0的css-loader无法兼容3.6.0的webpack，退回2.0.2的css-loader后才能成功打包

### css文件依赖：css-loader和style-loader

### less文件依赖：less之前跳过了没学，这里记录一下webpack的这个功能

### 图片文件依赖：url-loader，使用base64编译limit以下大小的文件；file-loader，直接引用limit以上的文件（图片路径可能有问题，如有需要要手动配置；webpack会自动在dist文件夹下创建一个以32位hash值命名的图片，防止图片名字重复）

### babel-loader，将ES6语法转成ES5

### 实在看不下去webpack了，再加上看到弹幕提到后面的Vue CLI也可以实现webpack的配置，直接跳到Vue CLI

### CLI是Command-Line Interface，翻译为命令行界面，俗称脚手架
+ Vue CLI是一个官方发布的vue.js项目脚手架
+ 使用vue-cli可以快速搭建vue开发环境以及对应的webpack配置

# 2020/10/13(今天都在讲概念，终于结束vue CLI了，视频和现在有2年的时间差，版本问题有点烦，今天文件同样过大，就不上传了)
### 安装vue cli：npm install -g @vue/cli

### Vue CLI2
+ 要在Vue CLI3使用CLI2，需要安装旧版本的模板：npm install -g @vue/cli-init
+ vue CLI2初始化项目：vue init webpack 项目名称（其实是项目文件夹名称），之后需要输入以下信息：
	- Project name：（敲回车就默认使用项目文件夹名称）
	- Project description：
	- Author：（默认读取了全局的gitconfig）
	- vue build：
	- install vue-router：
	- use ESlint to lint your code：
	- set up unit test：
	- setup e2e tests with Nightwatch：
	- should we run npm install for you after the project has been created(recommended):

### Vue CLI3+
+ vue CLI3+初始化项目：vue create 项目名称
+ cli3有一个隐藏配置的理念
+ 可以在终端任意路径键入 vue ui，进入图形化界面，查看插件、依赖、配置，也可从node_modules/@vue/cli-service/webpack.config.js查找配置信息
+ 也可以自定义配置文件，在目录下创建vue.config.js文件，通过module.exports输出要修改的配置

### 以前要执行js代码，只能在浏览器上，node为js提供了可以脱离浏览器的运行环境
+ node是使用c++开发的，核心是V8引擎
+ v8引擎，原始js代码需要转换为字节码后再经浏览器运行，v8则是直接将js代码翻译为二进制代码运行
+ 运行方式：直接在终端该文件夹下输入node js文件名.js

### 路由，决定数据端到端运送的路径

### 后端渲染阶段
+ 后端渲染：页面是在服务器端进行渲染，用jsp/php等，不是javascript
+ 后端路由：在服务器端处理url和页面之间的映射关系

### 前后端分离阶段，后端只负责提供数据，不负责任何阶段的内容渲染
+ 浏览器从静态资源服务器获得html+css+js代码，再通过Ajax向提供API接口的服务器请求动态数据，再由浏览器渲染出页面

### 单页面富应用（SPA）阶段，在前后端分离的基础上，增加了一层前端路由
+ 整个网页只有一个html页面（前后端分离中每一个html页面都对应一套html+css+js）
+ 前端路由通过识别url，从js中抽取相应的组件渲染不同的页面（其实就是把原先不同页面的代码，变成了一个个组件，放在一份js代码中）
+ 前端路由的核心：改变url，但是页面不进行整体的刷新

# 2020/10/14（在懵逼之中算是度过了艰难的配置阶段吧，今天还是用的昨天的项目，不上传；今天抽时间补一下移动端适配的一些东西，这两天再把less稍微了解一下）
### 修改页面url，但不刷新页面的方法
+ 为location.hash赋值，但前面会加个#
+ 用history.pushState({},'','值')也可以，原理类似栈结构（实测chrome不行，firefox可以，在将路由实例的mode改为history后，chrome才可以）
	- 用history.back（）可以回退
	- 用history.forward（）可以前进
	- 用history.go（-1）等价于history.back（）
	- 用history.go（1）等价于history.forward（）
+ 用history.replaceState({},'','值')就可以了，因为原理是替换，所以不能回退

### vue-router是vue.js官方的路由插件，和vue.js深度集成，适用于构建单页面应用
+ 安装vue-router：npm install vue-router --save
+ 在模块化工程中使用：
	- 导入路由对象，并且调用Vue.use(VueRouter)
	- 创建路由实例，并且传入路由映射配置
	- 在Vue实例中挂载创建的路由实例
+ 使用vue-router的步骤
	- 创建路由组件
	- 配置路由映射：组件和路径映射关系
	- 使用路由：通过《router-link to=''》(改变url的标签,默认会被渲染成a标签)和《router-view》（组件显示的位置）
		* router-link标签属性tag，用于指定渲染成什么标签，如tag="button"，最终就将渲染成button标签
		* router-link标签属性replace，让修改页面的方式变为replaceState，默认是pushState
		* router-link标签属性active-class，为其赋值，则可改变选中时的类名，如果要修改全部标签的选中类名，则需要在路由实例中设置linkActiveClass的值

### --save 和 -dev
+ --save：将保存配置信息到package.json的dependencies节点中
+ --save-dev：将保存配置信息到package.json的devDependencies节点中
+ dependencies：运行时的依赖，发布后，生产环境下还需要用的模块
+ devDependencies：开发时的依赖，里面的模块是开发时用的，发布时用不到它

### 动态路由，根据动态数据，改变url，在routes中，可在path末尾用 :值/变量 的方式为url绑定，再为vue对象绑定相应的data属性，最后在router-link标签中绑定to属性使用值/变量
+ 为空的path设置redirect，指向某一路由，可设置初始路由

### Vue对象的$router属性，指向其挂载的router（路由器）
+ $router.push(地址)，修改路由地址，可回退
+ $router.replace(地址)，修改路由地址，不可回退
+ $router.back(),回退
	- $router.go(-1),也是回退
	- back、forward、go应该都类似history的用法
+ $route，则指向routes[]中当前活跃的路由（route）
	- $route.path，当前活跃路由的url

### 路由的懒加载，当打包构建应用时，js包会变得很大，影响页面加载，因此可以把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，提升效率
+ 懒加载方式： const 路由名 = () => import('../components/路由名.vue')

### 嵌套路由，在某一路由中如果还需要嵌套其他路由，需要在父级路由的模板中插入子级路由的router-link和router-view，同时在父级路由映射下，创建children属性，以数组形式存放所有子级路由的映射

### 像素
+ 在前端开发中，像素分为两种：CSS像素 和 物理像素
+ 物理像素即系统的像素
+ CSS像素为网页代码的像素
+ 浏览器在显示网页时，需要将css像素转换为物理像素然后再呈现
	- 1个css像素转换为几个物理像素，由浏览器决定，默认是1:1
	- 当浏览器放大倍数设为200%时，就是将1个css像素放大为2个物理像素，也称dppx（dots per pixel）为2
+ 视口（viewport）：屏幕中用来显示网页的区域
	- 对于桌面浏览器来说，视口就是浏览器的窗口
	- 布局视口，手机浏览器特有概念，根据设备横向像素和dppx确定
+ 默认情况下，移动端的网页都会将视口设置为980像素（css像素），以确保PC端网页可以在移动端正常访问，如果网页宽度超过了980，移动端浏览器会自动对网页进行缩放
	- 移动端网站缩放后的体验并不好，所以大部分网站都会专门为移动端设计网页
	- 通过调整视口大小，来让css像素和物理像素的比例较为合适，
	- 改变视口宽度，可以在meta标签中设置，name='viewport'，content='width=device-width,initial-scale=1.0'，能够将移动端视口设为设备的完美视口（比例为1:1、1:2等等，视频里说硬背就是了）

# 2020/10/15(今天继续学习了一些vue路由的东西)
### URL组成： 协议类型://服务器地址:端口号/路径?查询#片段ID
+ 英文： scheme://host:port/path?query#fragment

### vue路由传递参数类型
+ params
	- 配置路由格式：/router/:id
	- 传递的方式：在path后面跟上对应的值
	- 传递后形成的路径：/router/123
+ query
	- 配置路由格式：/router(正常配置)
	- 传递的方式：对象中使用query的key作为传递方式
	- 传递后形成的路径：/router?id=123

### vue生命周期函数
+ created：当组件被创建出来之后回调
+ mounted：当模板被挂载到DOM上之后
+ updated：页面更新之后（双向绑定的数据更新后也会触发）
+ destoryed:当路由被销毁时（切换到另一个路由）触发
+ activated:当路由处于活跃状态时触发
+ deactivated:当路由处于不活跃状态时触发

### 导航守卫函数——前置守卫：router.beforeEach((to,from,next)=>{})，用于在路由跳转前实现某些操作
+ to：即将要进入的目标路由对象
+ from：当前导航即将要离开的路由对象
+ next：调用该方法后，才能进入下一个路由（在函数体内必须调用方法 next() ，才能顺利跳转路由），next方法可以传入一个path，或者其他参数
+ 导航守卫函数——后置守卫：router.afterEach((to,from)=>{})，用于在路由跳转后实现某些操作
+ 上述导航守卫又被称为全局守卫，除此之外，还有：
	- 路由独享的守卫，可以为某个route设置守卫，使用beforeEnter:(to,from,next)=>{}
	- 组件内的守卫

### keep-alive 是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染
+ router-view也是一个组件，如果直接被包在keep-alive标签里面，对应的router-link的所有路径匹配到的视图组件都会被缓存(不会触发destroyed)
+ 属性:exclude="想排除在缓存之外的的组件的name"，如有多个，用逗号隔开
+ 属性:include="想缓存的组件的name"，如有多个，用逗号隔开，只有匹配的组件才会被缓存

# 2020/10/16(今天封装了一个TabBar组件，练习了学到的vue组件和vue-router知识，然后学习了Promise处理异步程序)
### 在输入路径时，@ 符号代表src文件夹（可在node_modules/@vue/cli-service/lib/config/base.js文件中的.alias中设置

### 在终端窗口 Ctrl+C，可以停止当前npm run serve的项目

### Promise，是异步编程的一种解决方案，通过链式编程的方式将异步编程的步骤分开，避免回调地狱
+ 用法为如下：
```
new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve('Hello World');
	},3000);
}).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});
```
+ 将异步函数setTimeout放在Promise中，传入两个参数，在异步操作中执行函数resolve，传入参数a（可以是需要等待异步操作之后才能获取的参数），就可在Promise函数中的异步函数执行完毕后，由then函数执行后续操作，并可在后续操作中接收参数a
+ 如果还有第二个异步操作，可在第一个then函数中return一个新的Promise，用resolve传出参数，在then之后再接一个then，接收参数并继续操作
+ 而reject函数为失败的时候调用，resolve函数为成功的时候调用，如下
```
new Promise(function(resolve,reject){
	setTimeout(function(){
		reject('error message');
	},3000);
}).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});
```
+ 当有多个then时，没必要为每个步骤写一个catch，如果可以满足需求的话，只需要在末尾写一个即可，这样一旦有reject则会自动在链上寻找最近的catch
+ 第二种写法，在then中传入两个函数参数，以逗号隔开，第一个函数参数为成功时执行，第二个函数参数为失败时执行
+ 还有一些简写的写法，但已经简写得面目全非，我觉得不好（可读性极差，增加了将来新手的学习成本）

### Promise中的异步操作会有三种状态：
+ pending：等待状态，比如正在进行网络请求，或者定时器没有到时间
+ fulfill：满足状态，当主动回调了resolve时，就处于该状态，并且会回调.then()
+ reject：拒绝状态，当主动回调了reject时，就处于该状态，并且会回调.catch()

### Promise的all方法使用
```
var abc='';
Promise.all([
	new Promise(function(resolve,reject){
		setTimeout(function(){
			abc=new Date();
			resolve(abc);
		},1000);
	}),
	new Promise(function(resolve,reject){
		setTimeout(function(){
			abc=new Date();
			resolve(abc);
		},5000);
	})
]).then(function(data){
	console.log(data);
});
```
+ 该方法会等待所有Promise内的异步操作都结束后，才跳转到then函数，并且会将多个resolve传出的参数放在一个数组中，传入then

# 2020/10/17（今天学习了vuex状态管理，明天还剩一个axios就结束vue的知识学习部分了，接下来就是跟着视频完整做一个项目）
### Vuex是一个专为Vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态
+ 可以简单地将其看成把需要多个组件共享的变量全部存储在一个对象里面，然后将这个对象放在顶层的Vue实例中，让其他组件可以使用，多个组件就可以共享这个对象中的所有变量属性
+ 而为了实现响应式的状态管理，Vue官方提供了插件Vuex

### 有哪些状态需要在多个组件之间共享：
+ 用户的登录状态、用户名称、头像、地理位置信息
+ 商品的收藏、购物车中的物品

### 安装Vuex插件：npm install vuex --save

### 可以通过 $store.state.属性名 访问vuex的state属性下的某一属性值
+ 不建议通过以上访问方式直接修改属性值，因为无法跟踪修改记录
+ 为了跟踪组件的修改，需要安装浏览器插件vue.js devtools
	- 安装完成后，在调试窗口中可以选择进入vue界面
+ 安装完devtools之后，通过mutations修改state就会被记录
	- 修改方法：$store.commit('mutations中的方法')
+ actions：异步操作使用Mutations要通过此方法

### Vuex核心概念
+ state：保存状态
	- state中修改经初始化的数据可以实现响应式，但新增属性则无法实现响应式，此时必须使用Vue提供的方法：Vue.set(要添加属性的对象,要添加属性的key,要添加属性的值) ，才能实现新增属性的响应式
	- 同理，删除也应用Vue.delete(要删除属性的对象,要删除属性的key)
+ getters：类似于组件的计算属性
	- getters属性中的函数默认会传入2个参数指向state和getters
+ mutations：借助devtools进行修改记录
	- mutations属性中的函数默认会传入1个参数指向state
	- mutation类型常量，在大型项目中会很有帮助？（需要的时候再用吧，现在看来有点低效）在store文件夹创建一个mutation-types的js文件，设置一个常量，并为其赋一个变量名，当需要使用变量名的时候引用该常量
	- 在通过mutation更新数据的时候，有时需要携带一些额外的参数，这些参数被称为载荷（Playload）
+ action：用于更好地追踪异步操作，当使用devtools时，可以捕捉到mutation的操作，但如果是异步操作，就难以追踪，因此需要增加action环节，通过action异步地去操作mutation
	- 在组件中$store.dispatch('actions中的方法')，再由actions中的方法，异步地commitmutations中的方法
	- actions中的方法默认传入的参数为context，可以认为代表$store
	- actions同样允许有载荷
	- 可以在异步操作中return一个Promise，在组件dispatch之后用then进行回调，这样就可以在异步操作执行完毕后通知组件进行下一步操作(mutation不行)
+ modules：划分模块，由于单一状态树思想的存在，如果程序较复杂，状态会比较臃肿，因此在modules下还可以以属性(a)的形式，再放置多个对象，每个对象都可以有自己的state、mutations、actions、getters、modules，理论上可以一直往下套娃
	- 访问时可以直接用$store.state.a的形式访问modules内的a的state，这是因为本质上a内的state还是放置于原先的state中
	- mutations、actions、getters的访问直接查找相应方法即可（模块内的方法名不能和原mutations、actions、getters中的方法名重复，本质上应该还是放在一起的）
		* mutations、getters默认传入的第一个参数state应该是同一模块的state
		* 模块中的getters可以有第三个参数rootState，可以拿到根级state
		* 模块中的actions传入的参数context，在使用commit时，只会调用同一模块的mutations，另外，context对象还有一些root的属性，可以拿到根state、根getters等

### Vuex提出使用单一状态树，也可以翻译成单一数据源，即一个项目只创建一个store对象，便于管理和维护

### store文件夹的目录组织，将store/index.js内的各个部分，拆分到不同文件中

# 2020/10/18(今天出门了，加上鼻炎有点发作，晚上就不学了)
### axios，vue官方推荐的ajax库，功能特点如下：
+ 在浏览器中发送XMLHttpRequests请求
+ 在node.js中发送http请求
+ 支持PromiseAPI
+ 拦截请求和响应
+ 转换请求和响应数据

### 安装axios： npm install axios --save

# 2020/10/19(今天把axios收尾了一下，然后开始vue项目，进行了初始化配置，又重新封装了一遍TabBar组件)
### 在main.js中进行配置axios，其会自动return一个new Promise
```
import axios from 'axios'
axios({
	// 默认只传url的话会使用get请求
	url:'http://123.207.32.32:8000/home/multidata',
	method:'get',
	//专门针对get请求的参数拼接
	params:{
		type:'pop',
		page:1
	}
}).then(function(res){
	console.log(res);
})
```
+ 常见配置选项如下：
	- 请求地址 url:'/user'
	- 请求类型 method:'get'，默认为get
	- 请求根路径 baseURL:'http://www.mt.com/api'
	- 请求前的数据处理 transformRequest:[function(data){}]
	- 请求后的数据处理 transformResponse:[function(data){}]
	- 自定义的请求头 headers:{'x-Requested-With':'XMLHttpRequest'}
	- URL查询对象 params:{id:12},配合get使用
	- 查询对象序列化函数 paramsSerializer:function(params){}
	- request body, data:{key:'aa'}
	- 超时设置 timeout:1000，单位毫秒
	- 跨域是否带Token, withCredentials:false
	- 自定义请求处理 adapter:function(resolve,reject,config){}
	- 身份验证信息 auth:{uname:'',pwd:'12'}
	- 相应的数据格式json/blob/document/arraybuffer/text/stream， responseType:'json'
+ 可以用axios.all，放入多个请求的数组，返回结果也是一个数组
+ 可以使用axios.spread((res1,res2)=>{...}),将数组展开为变量res1和res2
+ 可以使用axios.default.baseURL/timeout等来进行全局的配置，就不用在每个axios中单独设置了
	- 当需要多种配置（如要访问多个服务器）时，可以创建axios实例，使用 const instance = axios.create({baseURL:...}) 的方式创建一个实例，使用不同的实例对象时，就可以实现不同实例对象下的全局配置

### 在项目中只要引用了第三方的东西，尽量不要对其依赖过深，要封装成一个组件，这样日后一旦要更换，工作量小很多

### 可以在请求发出成功和失败的时候拦截请求，以及响应返回成功和失败的时候拦截响应，进行一些操作
+ 请求拦截使用场景如下
	- config中的一些信息不符合服务器要求
	- 在发送网络请求到返回的过程中，希望出现一些转圈之类的效果
	- 某些网络请求（比如登录（token）），必须携带一些特殊的信息，比如进入购物车必须先登录
+ 请求拦截代码如下：
```
//instance为axios实例
instance.interceptors.request.use(function(config){
	console.log(config);
	return config
},function(err){
	console.log(err);
});
```
+ 响应拦截代码如下：
```
//instance为axios实例
instance.interceptors.response.use(function(result){
	console.log(result);
	return result.data
},function(err){
	console.log(err);
});
```
### 下面是创建项目后的准备工作

### 划分目录结构
+ assets --资源文件夹
	- img --图片文件夹
	- css --样式文件夹
		* normalize.css --第三方css初始化文件（来自github）
		* base.css --本项目css初始化文件
+ components --公共组件文件夹
	- common --可跨项目的公共组件文件夹
	- content --和当前项目相关的公共组件文件夹
+ view --各视图组件文件夹
	- home --主页组件文件夹
+ router --路由文件夹
+ store --状态管理文件夹
+ network --网络相关文件夹
+ common --公共js文件夹
	- const.js --公共常量文件
	- utils.js --公共方法文件

### 引入第三方css初始化文件，和设置本项目的css初始化文件

### 在根目录下设置vue.config.js和.editorconfig文件
+ vue.config.js用于配置路径别名等
+ .editorconfig文件用于配置代码书写规范，vue默认如下：
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

### 开始做项目了，可以把之前封装过的tabbar组件复制进来用（这里我就再敲一遍吧）

# 2020/10/20（今天继续学做项目，比较新的东西就是网络请求数据并渲染的部分吧）
### 项目的模块划分：tabbar 与 路由映射关系

### 封装顶部导航栏
+ 导航栏可能在多个组件中都出现，不要用id

### 触摸事件
+ touchstart：手指触摸屏幕
+ touchmove：手指在屏幕上滑动
+ touchend：手指离开屏幕

### vertical-align:middle可以去除图片下方的空隙，不用再display:block了，此样式用于设置元素的垂直对齐方式

### ul>li{列表$}*100，按下Tab后可以生成列表1~列表100的100个li

### position:sticky; 粘滞定位，在top值减小到一定程度时，变为fixed定位，进而实现吸顶效果，即固定在某一top值，因此设置粘滞定位，必须设定top值
+ 实际使用，这样定位的元素好像会覆盖到其他所有元素上，改不了（待后面改进）(破案了，是因为定位的元素增加了position定位导致上浮了，只要给其他元素增加一个position：relative就可以了)

### 展开语法， ...数组名 ，可以将一个数组的每一项展开，并以逗号连接
+ push方法可以以逗号连接的方式添加多个元素，因此经常使用展开语法添加一个数组中的各项元素

# 2020/10/21(今天想强行造一波轮子失败，看来13k星的组件还是没那么好写啊，拖累了进度)
### scrollTo(x,y) 方法可以跳转到window的指定位置，x和y为指定位置的坐标，可以用来实现网页的回到顶部功能
+ scrollX和scrollY方法分别返回当前window的坐标

### css calc()函数，用于在css属性中动态地计算长度，如 height:cale(100vh - 10px);  其中vh是视口高度的百分比单位，因此此表达式的意思是，将元素高度设为比100%视口高度少10px
+ 注意，运算符号前后都要保留一个空格
+ calc函数支持 + - * / ，且使用标准的数学运算优先级规则
+ vw为视口宽度
+ 这个太好用了，以前竟然一直不知道，不枉我花了一个小时

### 抵抗了半天，还是用了别人的滚动轮子better-scroll，据说在移动端会比较丝滑，并且上滑下滑功能比较多，但是后续工作中要使用还是要封装
+ 安装方式：npm install better-scroll --save

### vue文件中style标签必须加上scoped属性，否则会导致作用域之间的选择器冲突
+ 加上之后，样式只会对本组件内的元素起效果

# 2020/10/22(最近开始敲项目以后，虽然心情比较好，但是看视频的速度也比较慢了)
### vue的事件总线，将不同组件中需要互相通信的事件放到事件总线中
+ 在main.js中创建事件总线
```
Vue.prototype.$bus=new Vue();
```
+ 在组件A中向事件总线发射事件
```
this.$bus.$emit('事件名',参数);
```
+ 在组件B中使用事件总线中的事件
```
this.$bus.$on('事件名',函数名(参数){});
```
+ 在组件被销毁时，记得移除事件总线中的相应事件监听
```
//当不传入事件名和监听函数时，则会移除所有事件监听
//当不传入监听函数时，会将所有该事件下的监听取消
//当传入事件名和监听函数时，则只会移除该调用事件的监听函数
this.$bus.$off('事件名'[,调用事件的监听函数]);
```

### 在调用需要挂载的组件时，如果在挂载之前就调用，会出现undefined的问题，此时可以通过如下代码，在调用时先判断是否挂载完毕（即组件有值）
```
组件名&&组件名.方法
```
+ 只有当执行到 组件名 得到值的时候，才会往 && 右侧继续执行，进而调用其方法

### 所有的组件中都有一个属性$el，用于获取组件中的元素

### 把详情页也设为路由

# 2020/10/23(今天出门了，竟然又去网吧玩了一晚上...醉了)
### 给组件传的数据过多时，应该以对象的形式传递，这里又可以封装一个生成对象的组件

### Object.keys(对象名).length !== 0，判断某一对象内是否有属性，可用于判断放置数据的对象是否为空，通常用于v-if，当数据为空时则不渲染，也可设置其他渲染方式

# 2020/10/24（今天最大的收获，销毁路由的时候要把存放在事件总线中的监听事件销毁，不然第二次打开路由会报错）
### 服务器返回的时间都是以时间戳的形式（即以1970/1/1为起点的秒数）
+ 将时间戳转成日期形式的字符串，原生js里面没有，需要自己封装

### img标签属性： object-fit:cover; 保持原有的尺寸比例，内容可能被裁切（显示部分将为图片中心）

# 2020/10/25(视频有点问题了，今天自己改bug)
### mixin 混入，可以将生命周期（如mounted）的整个钩子函数放入某一对象A中(可以同时放多个)，再在某一vue对象中用 mixins:[A] （以数组形式，可以引入多个）的方式引入，就会将对象A中的钩子函数内容并入到当前vue对象中
+ 此方法是为了复用

# 2020/10/26(今天用vuex实现了购物车，并且终于成功完成了详情页商品切换的不刷新页面重新渲染)

# 2020/10/27（今天完成了项目，开始看一些面试的东西了，接下来就以面试题为主吧，跟着再复习一遍之前学的。对了，css预处理器还是没学）
### 插件 fastClick:用于减少移动端的点击延迟时间（300ms左右），由于移动端双击会缩放，因此需要300ms来检查用户是否在双击，而fastClick则是用来去除这个检查时间
+ 安装：npm install fastclick --save

### 插件 vue-lazyload：图片懒加载
+ 安装：npm install vue-lazyload --save

### vue响应式原理
+ vue内部如何监听数据的改变——用Object.defineProperty监听对象属性的get和set
+ 数据发生改变，vue如何知道要通知哪些人，界面发生刷新——发布订阅者模式，有使用过get或set的对象将被添加到订阅者中，一旦数据改变则会通知其更新视图

# 2020/10/28（今天把less基本用法学习了一下，找了个面试题的视频看了一半）
### 网页中字体最小为12px，设为更小值将会被强制改为12px

### 原生css变量设置：
```
html{
	--color:#fff;
}
.box{
	background-color:var(--color);
}
```
+ 原生css变量对IE兼容性差

### css预处理：less
+ 对变量的支持
+ 对mixin的支持
+ 非插件使用方法
```
<link rel="stylesheet/less" href="./less.less">
<script src="../../Less.2.5.3.min.js" type="text/javascript" charset="utf-8"></script>
```
+ VScode安装插件Easy LESS后使用方法:vscode会自动为less文件在同目录下输出一个同名的由less编译而成的css文件（更新less文件将同步更新css文件），此时直接引用此css文件即可
+ less中对于后代选择器的样式可以使用嵌套的写法（如需指定为子元素，则加个大于号）,如下
```
.box1{
	width:100px;

	.box2{
		width:50px;
	}

	>.box3{
		width:20px;
	}
}
```
+ less中的注释不会被解析到css文件中
+ 变量的定义与使用
```
@a:100px;
.box{
	width:@a;
}
```
+ 当变量作为类名等部分值（如路径中的变量）使用时，调用时需要如下书写
```
@b:box2;
.@{b}{
	width:@a;
}
```
+ 变量重名时，使用最近的变量
+ 可在变量声明前就是用（也就是声明会提升），但不建议
+ 可以在同个选择器下引用其他样式，如下
```
.box{
	width:100px;
	height:$width * 2; //200px
}
```
+ 当要使用伪类/伪元素时，可以如下书写，用 & 表示大括号外的选择器
```
.box{
	&:hover{
		background-color: pink;
	}
}
```
+ 引用别的选择器样式，写法如下：
```
.box5{
	width:10px;
}
.box6{
  .box5();
  color:blue;
}
```
+ 创建一个函数（类似一个虚拟的选择器样式），自身不起作用，但可以被引用，写法如下：
```
.box5(){
	width:10px;
}
.box6{
  .box5();
  color:blue;
}
```
+ 可对函数传参数，参数也可以赋默认值，不传参时就取默认值，写法如下
```
.box5(@w：100px,@h){
	width:@w;
	height:@h;
}
.box6{
  .box5(10px,20px);
  color:blue;
}
.box7{
	.box5(@h:20px,@w:10px)
}
```
+ 可以用average()函数对两个颜色取平均色（把rgb三个十六进制数分别取平均值），如下
```
.box{
	background-color:average(#ff0000,#0000ff); //#800080
}
```
+ 还有不少函数
+ less中数值可以直接四则运算
+ 可以用 @import "路径/文件.less" 的方式引入其他less文件

### 属性：window.devicePixelRatio,返回物理像素与scc像素的比值

### meta的 name="viewport" 对应的content值：
+ width 视口的宽度，为正整数或字符串"device-width"（设为设备显示屏宽度）
+ initial-scale 页面的初始缩放值，可带小数
+ minimum-scale 允许用户的最小缩放值，可带小数
+ maximum-scale 允许用户的最大缩放值，可带小数
+ height 视口的高度，较少使用
+ user-scalable 是否允许用户进行缩放，值为no或yes

### rem适配
+ 1 rem = html元素的字体大小，即html根元素的font-size样式
+ 而移动设备的屏幕宽度可以通过window.innerwidth或document.documentElement.clientWidth获得
+ 将html的字体大小设为移动设备屏幕宽度，即可通过rem的方式，设置元素与屏幕宽度的比例

### 用function声明函数，会将函数整体提升
+ 提升后的函数优先级高于变量，但会被赋值所覆盖

# 2020/10/29（明天开始写一个个人介绍的网页吧）
### 节流与防抖
+ 节流throttle：一个函数执行一次之后，只有大于设定的执行周期后才会执行第二次
+ 防抖debounce：一个函数被触发之后有一段时间的静默期，只有静默期内未被再次触发，才会执行，如静默期内被再次触发，则重新开始计算新的静默期

### 同源策略是浏览器的安全策略，要求协议名、域名、端口号必须完全一致，才能读取对应资源
+ 违背了同源策略就会产生跨域
+ 解决跨域的方法 jsonp（利用script标签可跨域的特点） cors 服务器代理...

### 从输入网址到网页呈现
+ 解析DNS，将域名解析为IP地址
+ 浏览器与服务器建立连接（TCP三次握手）
+ 浏览器发送请求报文
+ 浏览器接收响应报文
+ 浏览器渲染页面
+ 浏览器与服务器断开连接（TCP四次挥手）

### 执行上下文：代码执行的环境，在代码正式执行之前会进入到执行环境
+ 工作步骤：
	- 创建变量对象，收集变量、函数及函数的参数
	- 确认this的指向
	- 创建作用域链
+ 作用域则是在代码定义的时候产生的

### 比较 React 和 Vue
+ 相同点
	- 都有组件化开发和 Virtual DOM
	- 都支持 props 进行父子组件间数据通信
	- 都支持数据驱动视图，不直接操作真实DOM，更新状态数据界面就自动更新
	- 都支持服务器端渲染
	- 都有支持 native 的方案，react的react native，vue的weex
+ 不同点
	- 数据绑定：vue实现了数据的双向绑定，react数据流动是单向的
	- 组件写法不一样

### SVG格式图像文件，可缩放，基于XML

### 前端代码规范——通用
+ 在文件结尾添加一行空白行

### 前端代码规范——HTML
+ 用两个空格代替制表符缩进，以保证在所有环境下获得一致展现
+ 对于属性的定义，使用双引号，不要使用单引号
+ 对单标签元素尾部不要添加斜线
+ 不要省略可选的结束标签，如 /li
+ HTML属性排序
	- class
	- id,name
	- data-*
	- scr,for,type,href,value
	- title,alt
	- role,aria-*
+ class名称中只能出现小写字符和破折号

### 前端代码规范——CSS
+ 每个声明块的左花括号前添加一个空格
+ 同时为多个选择器设置样式时，每个选择器单独一行
+ 声明语句与数值之间留一个空格
+ 十六进制数用小写，尽量用三位简写
+ CSS样式顺序
	- Positioning，定位相关，position、z-index等
	- Box model，盒模型，display、float、width等
	- Typographic，排版，font、line-height、color、text-align等
	- Visual，视觉效果，background-color、border、border-radius等
	- Misc，杂项，opacity、transition、animation等

### 前端代码规范——JavaScript
+ 变量及函数命名采用驼峰式
+ 方法命名采用 动词 或 动词+名词 的形式
+ 增删改查动词统一用 add/delete/update/get
+ 函数方法常用的动词
	- get 获取/set 设置,
	- add 增加/remove 删除
	- create 创建/destory 移除
	- start 启动/stop 停止
	- open 打开/close 关闭,
	- read 读取/write 写入
	- load 载入/save 保存,
	- create 创建/destroy 销毁
	- begin 开始/end 结束,
	- backup 备份/restore 恢复
	- import 导入/export 导出,
	- split 分割/merge 合并
	- inject 注入/extract 提取,
	- attach 附着/detach 脱离
	- bind 绑定/separate 分离,
	- view 查看/browse 浏览
	- edit 编辑/modify 修改,
	- select 选取/mark 标记
	- copy 复制/paste 粘贴,
	- undo 撤销/redo 重做
	- insert 插入/delete 移除,
	- add 加入/append 添加
	- clean 清理/clear 清除,
	- index 索引/sort 排序
	- find 查找/search 搜索,
	- increase 增加/decrease 减少
	- play 播放/pause 暂停,
	- launch 启动/run 运行
	- compile 编译/execute 执行,
	- debug 调试/trace 跟踪
	- observe 观察/listen 监听,
	- build 构建/publish 发布
	- input 输入/output 输出,
	- encode 编码/decode 解码
	- encrypt 加密/decrypt 解密,
	- compress 压缩/decompress 解压缩
	- pack 打包/unpack 解包,
	- parse 解析/emit 生成
	- connect 连接/disconnect 断开,
	- send 发送/receive 接收
	- download 下载/upload 上传,
	- refresh 刷新/synchronize 同步
	- update 更新/revert 复原,
	- lock 锁定/unlock 解锁
	- check out 签出/check in 签入,
	- submit 提交/commit 交付
	- push 推/pull 拉,
	- expand 展开/collapse 折叠
	- begin 起始/end 结束,
	- start 开始/finish 完成
	- enter 进入/exit 退出,
	- abort 放弃/quit 离开
	- obsolete 废弃/depreciate 废旧,
	- collect 收集/aggregate 聚集
+ 常量命名全部大写，单词用下划线隔开
+ 字符串统一使用单引号

# 2020/10/30（写得有点吃力。。。前面学的忘得都差不多了，今天写了个架子，以及响应式布局，还有半个点击图片全屏）

# 2020/10/31（今天把图片全屏写完了，本来费了半天劲把全屏结合轮播图写好了，后来觉得放在这里不适合，明天把轮播图放在别的地方吧，明天再写个自定义滚轮）