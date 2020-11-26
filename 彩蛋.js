enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("彩蛋视频");
    tLog("彩蛋视频")
    sleep(10000);
    var count = 0;
    while (true){
        count += 1;
        tLog(Date());
        // click("首页");
        sleep(10000 + Math.floor(Math.random() * 20001))
        // sleep(random);
        swipe(device.width/2, device.height/2 + 400, 150, 200, 800);
        // 为了关闭弹出框
        back();
        if (count>=100){
            home();
            exit();
        }
    }
}