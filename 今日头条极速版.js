enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("今日头条极速版");
    tLog("今日头条极速版")
    sleep(8000);
    click("视频");
    var count = 0;
    while (true){
        count += 1;
        sleep(Math.floor(Math.random() * 30001));
        swipe(device.width/2, device.height/2 + 400, 150, 200, 400);
        id("jf").findOne().click();
        sleep(20000);
        if (count>=200){
            exti();
        }
    }
}