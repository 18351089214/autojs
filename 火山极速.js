tLog("火山极速版")

function tLog(msg){
    toast(msg);
    console.log(msg);
}
enterMyMainPage();

function enterMyMainPage(){
    launchApp("火山极速版");
    tLog("火山极速版启动")
    sleep(5000);
    try {
        // text("我知道了").findOne().click();  
        click("我知道了");
    } catch (error) {
        tLog("没有出现弹框");
    }
    sleep(1000);
    var count = 0;
    while (true){
        count += 1;
        // id("x5").findOne().click();
        sleep(10000);
        // var sd = Math.floor(Math.random() * 22001);
        swipe(device.width/2, device.height/2 + 400, 150, 200, 400);
        tLog("上滑");
        if (count<=200){
            break;
        }
    }
}