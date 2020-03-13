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
    launchApp("红包视频");
    tLog("红包视频")
    sleep(10000);
    id("ly3").findOne().click();
    sleep(2000);
    id("gold_tv").findOne().click();
    sleep(1500);
    back();
    sleep(1500);
    id("ly1").findOne().click();
    sleep(2000);
    while (true){
        tLog(Date());
        sleep(25000);
        swipe(120, 1115, 320, 280, 520);
        back();
    }
}