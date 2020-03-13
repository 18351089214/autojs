threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 10800000);
});
enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("快逗短视频");
    tLog("快逗短视频")
    sleep(10000);
    while (true){
        tLog(Date());
        // var random = Math.floor(Math.random() * 40001);
        // sleep(random);
        sleep(25000);
        swipe(120, 1115, 320, 280, 520);
        // 用于消除弹窗
        back();
    }
}