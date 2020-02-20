enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("微博");
    tLog("启动微博")
    while (true){
        var random = Math.floor(Math.random() * 20001);
        swipe(520, 100, 500, 200, 476);
        sleep(random);
        tLog("滑动屏幕");
    }
}