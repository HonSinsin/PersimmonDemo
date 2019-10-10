/* 全局变量 */
var s_x = 0; // 开始X点
var s_y = 0; // 开始y点
var e_x = 0; // 结束X点
var e_y = 0; // 结束y点
/* --End-- */

var app = {
page : "page1/page1",

    /* app 加载完成触发该函数 */
    onLaunch:function(){

    },

    /* app 退出触发该函数 */
    onExit:function(){

    },

};

pageSwitch = function (event, direction, func) {
    var ttype = event.touchs[0].type;
    // console.dir(event)
    switch (ttype) {
        case 'touchstart':
            this.s_x = event.touchs[0].x;
            this.s_y = event.touchs[0].y;
            this.e_x = this.e_y = 0
            return;
        case 'touchend':
            this.e_x = event.touchs[0].x;
            this.e_y = event.touchs[0].y;
            break;
        default:
            return;
    }
    switch (direction) {
        case 'up':
            if (parseInt(this.s_y - this.e_y) > 99) {
                console.log('upupup');
                func();
            }
            break;
        case 'left':
            if (this.s_x - this.e_x > 99) {
                console.log('leftleftleft');
                func();
            }
            break;
    }
};
App(app);

app = 0;
