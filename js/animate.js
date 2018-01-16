//游戏页面的动画动作
function animate() {
    //计算时间
    date = new Date();
    time = chapterTime - (date - startDate) / 1000;
    time = parseInt(time);
    //计算 本关游戏是否结束
    //如果页面上图片数为0 本关结束
    if (time <= 0
        || num ==0
        || score >= goal
    ) {
        time = 0;
        final = 1;
        //计算本关游戏是否成果
        if (score >= goal) success = 1;
        else success = 0;
    }
    // 在1s内绘制抓到物品得到的分数
    if (date - scoreDate <= 1000) drawScore();
    //在抓到物品后执行
    if (crush == 1) {
        handCrush();
    }
    //计算是否在伸长还是旋转过程
    else {
        if (extend == 1) handExend();
        else handRotate();
    }
    //绘制爪子用到的，模型
    handModel();
    // console.log(angle);
}

//爪子模型  主要调用了R angle 两个变量
//两个变量是在前期的handCrush(); handExend(); handRotate(); 三个函数中进行改变
function handModel() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(660, 130);
    ctx.lineTo(660 + (R + 10) * Math.sin(angle * Math.PI / 180), 130 + (R + 10) * Math.cos(angle * Math.PI / 180));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();
    ctx.translate(660 + R * Math.sin(angle * Math.PI / 180), 120 + R * Math.cos(angle * Math.PI / 180));
    ctx.rotate((-angle) * Math.PI / 180);
    ctx.drawImage(img_hand, -43, 0);
    ctx.restore();

}

//旋转过程中的angle 变化
function handRotate() {
    if (flag == 1) {
        if (angle == 60) flag = 2;
        else angle = angle + 0.5;
    }
    else if (flag == 2) {
        if (angle == -60) flag = 1;
        else angle = angle - 0.5;
    }
}

//伸长过程中的R值变化
function handExend() {
    //伸长过程
    if (unextend == 0) {
        if (R <= 600) {
            R += 10;
        }
        else {
            unextend = 1;
        }
        // 伸长过程在判断是否抓到物品
        handHit();
    }
    //缩回过程
    if (unextend == 1) {
        if (R - 30 <= 60) {
            R = 60;
            extend = 0;
        }
        else R -= 30;
    }
}

//鼠标点击事件
function onCanvasClick(event) {
    if (start == 0) {
        console.log(event.clientX);
        console.log(event.clientY);
        //游戏开始
        if (event.clientX >= 320 && event.clientX <= 495
            && event.clientY >= 645 && event.clientY <= 745) {
            start = 3;
            //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveStart);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
        // 帮助界面
        else if (event.clientX >= 870 && event.clientX <= 1045
            && event.clientY >= 645 && event.clientY <= 745) {
            start = 4;
        }
        // 自由模式
        else if (event.clientX >= 600 && event.clientX <= 775
            && event.clientY >= 645 && event.clientY <= 745) {
            start = 6;
        }
            //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveStart);
            canvas.removeEventListener("mouseclick",onCanvasClick);
    }
    //鼠标点击后开始伸长
    else if (start == 1) {
        extend = 1;
        unextend = 0;
        console.log(extend);
    }
    //结束页面
    else if (start == 2) {
        console.log(event.clientX);
        console.log(event.clientY);
        if (event.clientX >= 1220 && event.clientX <= 1345
            && event.clientY >= 700 && event.clientY <= 770) {
            start = 0;
            chapter = 1;
            audioFail.pause();
        }
    }
    //游戏帮助页面
    else if (start == 4) {
        console.log(event.clientX);
        console.log(event.clientY);
        if (event.clientX >= 1220 && event.clientX <= 1345
            && event.clientY >= 700 && event.clientY <= 770){
            start = 0;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveReturn);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
    }
    //结束页面
    else if (start == 5) {
        console.log(event.clientX);
        console.log(event.clientY);
        if (event.clientX >= 1220 && event.clientX <= 1345
            && event.clientY >= 700 && event.clientY <= 770) {
            start = 0;
            chapter = 1;
            audioSuccess.pause();
        }
    }
    else if (start == 6) {
        console.log(event.clientX);
        console.log(event.clientY);
        if (event.clientX >= 310 && event.clientX <= 535
            && event.clientY >= 150 && event.clientY <= 335) {
            start = 3;
            chapter = 1;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveFree);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
        else if (event.clientX >= 900 && event.clientX <= 1150
            && event.clientY >= 150 && event.clientY <= 335) {
            start = 3;
            chapter = 2;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveFree);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
        else if (event.clientX >= 310 && event.clientX <= 535
            && event.clientY >= 500 && event.clientY <= 700) {
            start = 3;
            chapter = 3;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveFree);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
        else if (event.clientX >= 900 && event.clientX <= 1150
            && event.clientY >= 500 && event.clientY <= 700) {
            start = 3;
            chapter = 4;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveFree);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
        else if (event.clientX >= 1270 && event.clientX <= 1400
            && event.clientY >= 730 && event.clientY <= 800) {
            start = 0;
            chapter = 1;
        //移除鼠标事件，否则事件会遗留到下一个界面
            canvas.style.cursor = "default";
            canvas.removeEventListener("mousemove",onMousemoveFree);
            canvas.removeEventListener("mouseclick",onCanvasClick);
        }
    }
}

//计算两点距离
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

}

//计算是否抓到
function handHit() {
    //xy是爪子终点的坐标
    x = 660 + (R + 10) * Math.sin(angle * Math.PI / 180);
    y = 130 + (R + 10) * Math.cos(angle * Math.PI / 180);
    //遍历图片数组 判断是否碰撞
    for (var i = 0; i < pic.length; i++) {
        var d = distance(x, y, pic[i].x1, pic[i].y1);
        //如果终点与本图中心点距离小于图片半径 视为碰撞
        if (d <= pic[i].r) {
            // console.log('------------------');
            // console.log(d);
            // console.log(pic[i].r);
            // console.log('------------------');
            crush = 1;
            speed = pic[i].v;
            //将碰撞的图赋值给special
            special = pic[i];
            //在数组中将碰撞的图片删除
            pic.splice(i, 1);
        }
    }
}

//图片抓取后动作 需要变化的参数
function handCrush() {
    //如果绳子长度已经缩回原长
    if (R - speed <= 60) {
        //初始化变量
        R = 60;
        crush = 0;
        extend = 0;
        //加上分数
        score += special.score;
        //页面上图片减一
        num--;
        //分数展示的开始时间
        scoreDate = new Date();
    }
    //如果未回到原长 绳子继续缩短
    else R -= speed;
    //更改抓到的图片位置参数
    special.x1 = 660 + (R + 50) * Math.sin(angle * Math.PI / 180);
    special.y1 = 130 + (R + 50) * Math.cos(angle * Math.PI / 180);
    //连续绘制被抓到的图片
    ctx.drawImage(special.name, special.x1 - special.w / 2, special.y1 - special.w / 2, special.w, special.w);
}

//绘制获得的分数 测试 需改 绘制样式 绘制位置 绘制时间
function drawScore() {
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = '100px Arial';
    ctx.fillText(" " + special.score, special.x1, special.y1 + 50);
    ctx.restore();
}