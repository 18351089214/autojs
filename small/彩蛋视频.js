threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 14400000);
});
enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("彩蛋视频");
    tLog("彩蛋视频")
    sleep(10000);
    while (true){
        tLog(Date());
        // var random = Math.floor(Math.random() * 40001);
        // sleep(random);
        sleep(25000);
        swipe(120, 1115, 320, 280, 520);
        // 为了关闭弹出框
        back();
    }
}