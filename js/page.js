//开始界面
function pageForStart() {
    audio1.play();
    drawbackForStart();
    requestNextAnimationFrame(main);
    //注册事件
    canvas.addEventListener("mousemove",onMousemoveStart);
    canvas.addEventListener("mouseclick",onCanvasClick);
}
//事件注册
function onMousemoveStart(event) {    
    if((event.clientX >= 320 && event.clientX <= 495
            && event.clientY >= 645 && event.clientY <= 745)||
        (event.clientX >= 870 && event.clientX <= 1045
            && event.clientY >= 645 && event.clientY <= 745)||
        (event.clientX >= 600 && event.clientX <= 775
            && event.clientY >= 645 && event.clientY <= 745)){            
            canvas.style.cursor = "pointer";
            return;
        }
    else
        canvas.style.cursor = "default"; 
}


//帮助界面
function pageForHelp() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackForHelp();
    requestNextAnimationFrame(main);
    //注册事件
    canvas.addEventListener("mousemove",onMousemoveReturn);
    canvas.addEventListener("mouseclick",onCanvasClick);
}
//事件注册
function onMousemoveReturn(event) {    
    if(event.clientX >= 1220 && event.clientX <= 1345
            && event.clientY >= 700 && event.clientY <= 770){            
            canvas.style.cursor = "pointer";
            return;
        }
    else
        canvas.style.cursor = "default"; 
}


//第一关界面
function page1() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackFor1();
    animate();
    if(final == 1){
        audioWinter.pause();
        if(success == 1){
            chapter = 2;
            start = 3;
        }
        else if(success == 0){
            start = 2;
        }
        requestNextAnimationFrame(main);
    }
    else if(final == 0){
        requestNextAnimationFrame(page1);
    }
}

//第二关界面
function page2() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackFor2();
    animate();
    if(final == 1){
        audioSpring.pause();
        if(success == 1){
            chapter = 3;
            start = 3;
        }
        else if(success == 0){
            start = 2;
        }
        requestNextAnimationFrame(main);
    }
    else {
        requestNextAnimationFrame(page2);
    }
}

//第三关界面
function page3() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackFor3();
    animate();
    if(final == 1){
        audioSummer.pause();
        if(success == 1){
            chapter = 4;
            start = 3;
        }
        else if(success == 0){
            start = 2;
        }
        requestNextAnimationFrame(main);
    }
    else {
        requestNextAnimationFrame(page3);
    }
}

//第四关界面
function page4() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackFor4();
    animate();
    if(final == 1){
        audioAutumn.pause();
        if(success == 1){
            chapter=5;
            start = 5;
        }
        else if(success == 0){
            start = 2;
        }
        requestNextAnimationFrame(main);
    }
    else {
        requestNextAnimationFrame(page4);
    }  
}

//结束页面
function pageForEnd() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackForFail();
    requestNextAnimationFrame(main);
    //注册事件
    canvas.addEventListener("mousemove",onMousemoveReturn);
}

//胜利页面
function pageForWin(){
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackForWin();
    requestNextAnimationFrame(main);
    //注册事件
    canvas.addEventListener("mousemove",onMousemoveReturn);
}

//情节页面
function pageForStory() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    if(chapter == 1){
        audioWinter.play();
        ctx.drawImage(imgForStory1,0,0);
    }
    else if(chapter == 2){
        audioSpring.play();
        ctx.drawImage(imgForStory2,0,0);
    }
    else if(chapter == 3){
        audioSummer.play();
        ctx.drawImage(imgForStory3,0,0);
    }
    else if(chapter == 4){
        audioAutumn.play();
        ctx.drawImage(imgForStory4,0,0);
    }
}

//自由选择页面
function pageForChoose() {
    ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
    drawbackForChoose();
    requestNextAnimationFrame(main);
    //注册事件
    canvas.addEventListener("mousemove",onMousemoveFree);
    canvas.addEventListener("mouseclick",onCanvasClick);   
}
//事件注册
function onMousemoveFree(event) {    
    if((event.clientX >= 310 && event.clientX <= 535
            && event.clientY >= 150 && event.clientY <= 335)||
        (event.clientX >= 900 && event.clientX <= 1150
            && event.clientY >= 150 && event.clientY <= 335)||
        (event.clientX >= 310 && event.clientX <= 535
            && event.clientY >= 500 && event.clientY <= 700)||
        (event.clientX >= 900 && event.clientX <= 1150
            && event.clientY >= 500 && event.clientY <= 700)||
        (event.clientX >= 1270 && event.clientX <= 1400
            && event.clientY >= 730 && event.clientY <= 800)){            
            canvas.style.cursor = "pointer";
            return;
        }
    else
        canvas.style.cursor = "default"; 
}