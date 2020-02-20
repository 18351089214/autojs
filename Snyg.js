setScreenMetrics(1080, 1920);

//启动程序
function openAPP() {
    app.launchApp("苏宁易购");
    sleep(5000);
}

start()

function start() {
    auto.waitFor();
    log("正在启动苏宁易购");
    openAPP();
    bounds(864, 2075, 1080, 2222).clickable().click();
    sleep(Math.floor(Math.random() * 5000));
    var bds = id("tv_name_two").text("我的关注").findOne().bounds();
    click(bds.centerX(), bds.centerY());
    sleep(Math.floor(Math.random() * 5000))
    id("root_view").findOne().click();
    sleep(Math.floor(Math.random() * 3000));
    swipe(420, 906, 500, 313, 191);
    sleep(500);
    log("进入抢购页面");
    while(true){
        id("btn_goodsdetail_add_shopcart").findOne().click();
        log(Date().toString());
        sleep(190);
    }

    // 自动抢券，未中风控人机
    // bounds(645, 1034, 857, 1243).clickable().click();
    // sleep(Math.floor(Math.random() * 5000));
    // scrollDown();
    // sleep(Math.floor(Math.random() * 5000));
    // scrollUp();
    // sleep(Math.floor(Math.random() * 5000));
    // log("开始领券");
    // var flag = id("comm_btn").text("立即领取").findOne().click();
    // if(flag){
    //     log("领券成功");
    // } else{
    //     log("领券失败");
    // }
}