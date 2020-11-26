enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("抖音火山版");
    tLog("抖音火山版")
    sleep(8000);
    var count = 0;
    while (true){
        count += 1;
        sleep(Math.floor(Math.random() * 20001));
        swipe(device.width/2, device.height/2 + 400, 150, 200, 800);
        // tLog("点击首页");
        // click("首页");
        sleep(10000);
        if (count>=200){
            exit();
        }
    }
}