threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 7200000);
});
enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("多多视频");
    log("多多视频")
    sleep(10000);
    while (true){
        sleep(15000);
        log('滑动时间：', Date());
        swipe(120, 1115, 320, 280, 520);
    }
}