//第一关需要绘制的文字
function drawTextFor1() {
    //time present当前分数 goal目标分数 level第几关
    ctx.font = "40px fantasy";
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(35,123,232)";
    ctx.fillText("Present："+ score, 25, 50);
    ctx.strokeText("Present："+ score, 25, 50);

    ctx.fillText("Goal： " +goal, 25, 100);
    ctx.strokeText("Goal： "+goal, 25, 100);

    ctx.fillText("Time：" +time, 1100, 50);
    ctx.strokeText("Time：" +time, 1100, 50);

    ctx.fillText("Level：    1", 1100, 100);
    ctx.strokeText("Level：    1", 1100, 100);
}

//第二关需要绘制的文字
function drawTextFor2() {
    //time present当前分数 goal目标分数 level第几关
    ctx.font = "40px fantasy";
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(255,137,155)";
    ctx.fillText("Present："+ score, 25, 50);
    ctx.strokeText("Present："+ score, 25, 50);

    ctx.fillText("Goal： " +goal, 25, 100);
    ctx.strokeText("Goal： "+goal, 25, 100);

    ctx.fillText("Time：" +time, 1100, 50);
    ctx.strokeText("Time：" +time, 1100, 50);

    ctx.fillText("Level：    2", 1100, 100);
    ctx.strokeText("Level：    2", 1100, 100);
}

//第三关需要绘制的文字
function drawTextFor3() {
    ctx.font = "40px fantasy";
    ctx.strokeStyle = "white";
    ctx.fillStyle = "black";
    ctx.fillText("Present："+ score, 25, 50);
    ctx.strokeText("Present："+ score, 25, 50);

    ctx.fillText("Goal： " +goal, 25, 100);
    ctx.strokeText("Goal： "+goal, 25, 100);

    ctx.fillText("Time：" +time, 1100, 50);
    ctx.strokeText("Time：" +time, 1100, 50);

    ctx.fillText("Level：    3", 1100, 100);
    ctx.strokeText("Level：    3", 1100, 100);
}

//第四关需要绘制的文字
function drawTextFor4() {
    ctx.font = "40px fantasy";
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(19,69,255)";
    ctx.fillText("Present："+ score, 25, 50);
    ctx.strokeText("Present："+ score, 25, 50);

    ctx.fillText("Goal： " +goal, 25, 100);
    ctx.strokeText("Goal： "+goal, 25, 100);

    ctx.fillText("Time：" +time, 1100, 50);
    ctx.strokeText("Time：" +time, 1100, 50);

    ctx.fillText("Level：    4", 1100, 100);
    ctx.strokeText("Level：    4", 1100, 100);
}

//第一关需要绘制的页面
function drawbackFor1() {
    ctx.drawImage(img1_bg, 0, -100);
    for (var i = 0; i < pic.length; i++) {
        ctx.drawImage(pic[i].name, pic[i].x1 - pic[i].w / 2, pic[i].y1 - pic[i].w / 2, pic[i].w, pic[i].w);
    }
    ctx.drawImage(img_AI, 600, 15, 120, 120);
    drawTextFor1();
}

//第二关需要绘制的页面
function drawbackFor2() {
    ctx.drawImage(img2_bg2, 0, -100);
    for (var i = 0; i < pic.length; i++) {
        ctx.drawImage(pic[i].name, pic[i].x1 - pic[i].w / 2, pic[i].y1 - pic[i].w / 2, pic[i].w, pic[i].w);
    }
    ctx.drawImage(img_AI, 600, 15, 120, 120);
    drawTextFor2();
}

//第三关需要绘制的页面
function drawbackFor3() {
    ctx.drawImage(img3_bg3, 0, -100,1600,1000);
    for (var i = 0; i < pic.length; i++) {
        ctx.drawImage(pic[i].name, pic[i].x1 - pic[i].w / 2, pic[i].y1 - pic[i].w / 2, pic[i].w, pic[i].w);
    }
    ctx.drawImage(img_AI, 600, 15, 120, 120);
    drawTextFor3();
}

//第四关需要绘制的页面
function drawbackFor4() {
    ctx.drawImage(img4_bg4, 0, -100,1600,1000);
    for (var i = 0; i < pic.length; i++) {
        ctx.drawImage(pic[i].name, pic[i].x1 - pic[i].w / 2, pic[i].y1 - pic[i].w / 2, pic[i].w, pic[i].w);
    }
    ctx.drawImage(img_AI, 600, 15, 120, 120);
    drawTextFor4();
}

//结束页面
function drawbackForFail() {
    ctx.fillStyle="black";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.font="140px fantasy";
    ctx.fillStyle="white";
    ctx.fillText("GAME", 150, 400);
    ctx.fillText("OVER", 850, 400);  
    ctx.drawImage(imgForFail,450,200,400,400);
    drawRoundedRect('white',1200, 750,125, -70, 30);
    ctx.save();
    ctx.font = "30px fantasy";
    ctx.fillStyle = "black";
    ctx.fillText("重玩",1230, 725);
    ctx.restore();
}

//胜利页面 
function drawbackForWin(){
    ctx.save();
    gradient=ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0, 'rgb(255,241,243)');
    gradient.addColorStop(0.25, 'rgb(232,208,231)');
    gradient.addColorStop(0.5, 'rgb(241,220,255)');
    gradient.addColorStop(0.75, 'rgb(205,200,232)');
    gradient.addColorStop(1, 'rgb(221,230,255)');
    ctx.fillStyle = gradient;
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.restore();
    ctx.font="140px fantasy";
    ctx.fillStyle="black";
    ctx.fillText("YOU WIN!", 550, 400); 
    ctx.drawImage(imgForWin, 0, 0, 490, 830);
    drawRoundedRect('white',1200, 750,125, -70, 30);
    ctx.save();
    ctx.font = "30px fantasy";
    ctx.fillStyle = "black";
    ctx.fillText("重玩",1230, 725);
    ctx.restore();
}

//开始页面
function drawbackForStart() {
    ctx.save();
    gradient=ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0, 'rgb(255,241,243)');
    gradient.addColorStop(0.25, 'rgb(232,208,231)');
    gradient.addColorStop(0.5, 'rgb(241,220,255)');
    gradient.addColorStop(0.75, 'rgb(205,200,232)');
    gradient.addColorStop(1, 'rgb(221,230,255)');
    ctx.fillStyle = gradient;
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.restore();
    ctx.drawImage(img_AI, 500, 250, 350, 350);
    ctx.drawImage(img0_bg1,-250,25);
    ctx.drawImage(img0_bg1,950,25);
    ctx.drawImage(img0_bg2,300,0);
    drawRoundedRect('white',300, 725,175, -100, 30);
    drawRoundedRect('white',590, 725,175, -100, 30);
    drawRoundedRect('white',850, 725,175, -100, 30);
    ctx.save();
    ctx.font = "75px fantasy";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("穿越四季 人机相恋",700, 200);
    ctx.font = "30px fantasy";
    ctx.fillText("闯关模式",385, 675);
    ctx.fillText("自由模式",675, 675);
    ctx.fillText("游戏说明",940, 675);

    ctx.restore();
}

//帮助页面
function drawbackForHelp() {
    ctx.save();
    gradient=ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0, 'rgb(255,241,243)');
    gradient.addColorStop(0.25, 'rgb(232,208,231)');
    gradient.addColorStop(0.5, 'rgb(241,220,255)');
    gradient.addColorStop(0.75, 'rgb(205,200,232)');
    gradient.addColorStop(1, 'rgb(221,230,255)');
    ctx.fillStyle = gradient;
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.restore();
    ctx.drawImage(imgForHelp,100,50);
    drawRoundedRect('white',1200, 750,125, -70, 30);
    ctx.save();
    ctx.font = "30px fantasy";
    ctx.fillStyle = "black";
    ctx.fillText("返回",1230, 725);
    ctx.restore();
}

//自由选择页面
function drawbackForChoose() {
    ctx.save();
    ctx.drawImage(imgForChoose,0,0,iCanvasWidth,iCanvasHeight);
    drawRoundedRect('white',1250, 780,125, -70, 30);
    ctx.font = "30px fantasy";
    ctx.fillStyle = "black";
    ctx.fillText("返回",1280, 755);
    ctx.restore();
}
//画圆角矩形
function roundedRect(cornerX, cornerY, width, height, cornerRadius) {
    ctx.moveTo(cornerX + cornerRadius, cornerY);

    ctx.arcTo(cornerX + width, cornerY,
        cornerX + width, cornerY + height,
        cornerRadius);

    ctx.arcTo(cornerX + width, cornerY + height,
        cornerX, cornerY + height,
        cornerRadius);

    ctx.arcTo(cornerX, cornerY + height,
        cornerX, cornerY,
        cornerRadius);

    ctx.arcTo(cornerX, cornerY,
        cornerX + cornerRadius, cornerY,
        cornerRadius);

}
function drawRoundedRect(fillStyle, cornerX, cornerY, width, height, cornerRadius) {
    ctx.beginPath();
    roundedRect(cornerX, cornerY, width, height, cornerRadius);
    ctx.fillStyle = fillStyle;
    ctx.fill();
}