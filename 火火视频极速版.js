enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("火火视频极速版");
    tLog("火火视频极速版")
    sleep(8000);
    id("alw").text("小视频").findOne().parent().click();
    var count = 0;
    while (true){
        count += 1;
        sleep(Math.floor(Math.random() * 30001));
        swipe(device.width/2, device.height/2 + 400, 150, 200, 800);
        try {
            var egg = text("金蛋大奖").findOne();
            if (egg.exists()){
                bds = egg.bounds();
                click(bds.centerX(), bds.centerY());
                id("ly").findOne().click();
            }
        } catch (error) {
            tLog("没有金蛋");
        }
        
        sleep(10000);
        if (count>=200){
            exti();
        }
    }
}