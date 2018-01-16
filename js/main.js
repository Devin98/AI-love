/*
	Function  :课程设计
	Author    :王楚轩 董江涛
	Build_Date:
	Version   :0.0
 */

//1. 公共变量声明块........................................................
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var iCanvasWidth = canvas.width,
    iCanvasHeight = canvas.height;
//不变图
var img_hand = new Image();
var img_AI = new Image();
//背景
var img1_bg = new Image();
var img2_bg2=new Image();
var img3_bg3=new Image();
var img4_bg4=new Image();
//雪花
var img1_1 = new Image();
var img1_2 = new Image();
//冰块
var img_ice = new Image();
//各种各样的花
var img2_1=new Image();
var img2_2=new Image();
var img2_3=new Image();
var img2_4=new Image();
//老师、画盘、书本
var img3_1=new Image();
var img3_book=new Image();
var img3_paint=new Image();
//同学们
var img4_WP=new Image(),
    img4_WZY=new Image(),
    img4_JBY=new Image(),
    img4_JYB=new Image(),
    img4_WY=new Image(), 
    img4_ZWN=new Image(),
    img4_WQD=new Image(), 
    img4_GYJ=new Image(),
    img4_WCX=new Image(),
    img4_DJT=new Image();
//开始页面
var img0_bg1=new Image();
var img0_bg2=new Image();
//转场页面
var imgForStory1=new Image();
var imgForStory2=new Image();
var imgForStory3=new Image();
var imgForStory4=new Image();
//帮助页面
var imgForHelp=new Image();
//GAME OVER结束页面
var imgForFail=new Image();
//YOU WIN胜利页面
var imgForWin=new Image();
//自由页面
var imgForChoose = new Image();

img1_bg.src = "img/bg.jpg";
img2_bg2.src="img/bg2.jpg";
img3_bg3.src="img/bg3.jpg";
img4_bg4.src="img/bg4.jpg";
img1_1.src = "img/DongFlower.png";
img1_2.src = "img/DongFlower2.png";
img_ice.src = "img/ice.png";
img_AI.src = "img/AI.png";
img_hand.src = "img/AIHand.png";
img2_1.src="img/2_flower1.png";
img2_2.src="img/2_flower2.png";
img2_3.src="img/2_flower3.png";
img2_4.src="img/2_flower4.png";
img3_1.src="img/3_Teacher.png";
img3_book.src="img/3_book.png";
img3_paint.src="img/3_bag.png";
img0_bg1.src="img/0_bg1.png";
img0_bg2.src="img/0_bg2.png";
imgForStory1.src="img/preFor1.png";
imgForStory2.src="img/preFor2.png";
imgForStory3.src="img/preFor3.png";
imgForStory4.src="img/preFor4.png";
imgForHelp.src="img/help.png";
imgForFail.src="img/gameOver.png";
img4_WP.src="img/4_WP.png";
img4_WZY.src="img/4_WZY.png";
img4_JBY.src="img/4_JBY.png";
img4_JYB.src="img/4_JYB.png";
img4_WY.src="img/4_WY.png";
img4_ZWN.src="img/4_ZWN.png";
img4_WQD.src="img/4_WQD.png";
img4_GYJ.src="img/4_GYJ.png";
img4_WCX.src="img/4_WCX.png";
img4_DJT.src="img/4_DJT.png";
imgForWin.src="img/youWin.png";
imgForChoose.src = "img/ForFree.png"

var IMG_COUNT = 36;//加载图片总数
var loadImgCount = 0;//已加载图片数
var R = 60;// /绳子长度
var angle = 0;//绳子旋转角度
var flag = 1;//绳子旋转方向 1表示向右转 0表示向左转
var extend = 0;//绳子是否在伸长过程中（包括缩回状态） 0表示不再伸长状态 1表示在伸长状态
var unextend = 0;//绳子是否在缩回状态 0表示不再缩回状态 1表示在缩回状态
var x, y;//绳子中点、爪子起点的坐标
var pic = [];//需要绘制的抓取物图片数组
var num = 0;//在页面中还余下的未抓取物数量
var crush = 0;//物体是否被抓到 1表示有物体被抓到 0表示没有
var speed;//被抓取物的抓取速度
var special ={};//此刻被抓取的物体属性
var score  = 0 ;//已经获得的分数
var goal = 0;//需要获得的目标分数
var final = 0;//每一关是否结束 0表示本关游戏结束 1表示未结束
var success = 0;//每一关是否成功通过 0表示失败 1表示成功
var date;//每个时刻的时间值
var scoreDate;//每个物体被抓取的时间（用来计算分数需要在显示时间内）
var startDate;//每一关的开始时间（用来计算每一关的时间）
var time = 60;//计算每一关余下的时间
var chapterTime = 0;//每一关的时间值
var start = 0;//游戏状态 0表示未开始 1表示进行中 2表示游戏失败 3表示转场动画 4表示游戏帮助页面 5表示游戏成功 6表示自由模式
var chapter = 1;//表示正在进行的关卡数

var audio1 = document.getElementById('audio1');
var audioSpring = document.getElementById('audioSpring');
var audioSummer = document.getElementById('audioSummer');
var audioAutumn = document.getElementById('audioAutumn');
var audioWinter = document.getElementById('audioWinter');
var audioFail = document.getElementById('audioFail');
var audioSuccess = document.getElementById('audioSuccess');

//2. 函数定义块...........................................................

//程序主函数 控制页面切换
function main() {
    //在游戏未开始时进入开始界面
    if(start == 0){
        goal = 0;
        score = 0;
        final = 0;
        success = 0;
        angle = 0;
        flag = 1;
        extend = 0;
        unextend = 0;
        crush = 0;
        R = 60;
        requestNextAnimationFrame(pageForStart);
    }
    else if(start == 1){
        //游戏开始后进入每一关都需要初始化的变量
        final = 0;
        success = 0;
        angle = 0;
        flag = 1;
        extend = 0;
        unextend = 0;
        crush = 0;
        R = 60;
        //进入第一关页面
        if(chapter == 1){
            num = 6;
            goal += 400;
            chapterTime = 40;
            time = chapterTime;
            initdataFor1();
            startDate = new Date();
            requestNextAnimationFrame(page1);
        }
        //进入第二关页面
        else if(chapter == 2){

            num = 8;
            goal += 600;
            chapterTime = 40;
            time = chapterTime;
            initdataFor2();
            startDate = new Date();
            requestNextAnimationFrame(page2);
        }
        //进入第三关页面
        else if(chapter == 3){
            num = 8;
            goal += 400;
            chapterTime = 60;
            time = chapterTime;
            initdataFor3();
            startDate = new Date();
            requestNextAnimationFrame(page3);
        }
        //进入第四关页面
        else if(chapter == 4){
            num = 10;
            goal += 1500;
            chapterTime = 60;
            time = chapterTime;
            initdataFor4();
            startDate = new Date();
            requestNextAnimationFrame(page4);
        }
    }
    //进入结束页面
    else if(start == 2){
        audioFail.play();
        requestNextAnimationFrame(pageForEnd);
    }    
    //转场
    else if(start == 3){
        audio1.pause();
        pageForStory();
        setTimeout(
            function () {
               start = 1;
               requestNextAnimationFrame(main);
            },4000)
    }    
    //进入游戏帮助页面
    else if(start == 4){
        pageForHelp();
    }
    //进入胜利界面
    else if(start == 5){
        audioSuccess.play();
        requestNextAnimationFrame(pageForWin);
    }
    //进入自由页面
    else if(start == 6){
        requestNextAnimationFrame(pageForChoose);
    }
}

//3. 事件注册块...........................................................
//鼠标点击时间的注册
canvas.onclick = onCanvasClick;

//4. 初始化块............................................................
//图片加载
img1_bg.onload = function () {
    loadImgCount++;
};
img1_1.onload = function () {
    loadImgCount++;
};
img1_2.onload = function () {
    loadImgCount++;
};
img_ice.onload = function () {
    loadImgCount++;
};
img_AI.onload = function () {
    loadImgCount++;
};
img_hand.onload = function () {
    loadImgCount++;
};
img2_bg2.onload=function(){
    loadImgCount++;
};
img2_1.onload=function(){
    loadImgCount++;
};
img2_2.onload=function(){
    loadImgCount++;
};
img2_3.onload=function(){
    loadImgCount++;
};
img2_4.onload=function(){
    loadImgCount++;
};
img0_bg1.onload=function(){
    loadImgCount++;
};
img0_bg2.onload=function(){
    loadImgCount++;
};
imgForStory1.onload=function(){
    loadImgCount++;
};
imgForStory2.onload=function(){
    loadImgCount++;
};
imgForStory3.onload=function(){
    loadImgCount++;
};
imgForStory4.onload=function(){
    loadImgCount++;
};
imgForHelp.onload=function(){
    loadImgCount++;
};
img3_bg3.onload=function(){
    loadImgCount++;
};
img3_book.onload=function(){
    loadImgCount++;
};
img3_paint.onload=function(){
    loadImgCount++;
};
img3_1.onload=function(){
    loadImgCount++;
};
imgForFail.onload=function(){
    loadImgCount++;
};
img4_bg4.onload=function(){
    loadImgCount++;
};
img4_WP.onload=function(){
    loadImgCount++;
};
img4_WZY.onload=function(){
    loadImgCount++;
};
img4_JBY.onload=function(){
    loadImgCount++;
};
img4_JYB.onload=function(){
    loadImgCount++;
};
img4_WY.onload=function(){
    loadImgCount++;
};
img4_ZWN.onload=function(){
    loadImgCount++;
};
img4_WQD.onload=function(){
    loadImgCount++;
};
img4_GYJ.onload=function(){
    loadImgCount++;
};
img4_WCX.onload=function(){
    loadImgCount++;
};
img4_DJT.onload=function(){
    loadImgCount++;
};
imgForWin.onload=function(){
    loadImgCount++;
};
imgForChoose.onload=function(){
    loadImgCount++;
};
audio1.onload = function () {
    loadImgCount++;
};
audioSpring.onload = function () {
    loadImgCount++;
};
audioSummer.onload = function () {
    loadImgCount++;
};
audioAutumn.onload = function () {
    loadImgCount++;
};
audioWinter.onload = function () {
    loadImgCount++;
};
audioFail.onload = function () {
    loadImgCount++;
};
audioSuccess.onload = function () {
    loadImgCount++;
};
//控制变量 在所有需要加载的图片加载完成后 开始执行程序
var interval = setInterval(function () {
    if (loadImgCount == IMG_COUNT) {
        clearInterval(interval);
        //整个程序的入口是第一个开始页面
        pageForStart();
    }
}, 0);
