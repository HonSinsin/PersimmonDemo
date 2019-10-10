var page = {

    /* 此方法在第一次显示窗体前发生 */
    onLoad: function (event) {
        // console.dir(event)
        this.setData({ label1: { value: event.lbl, refresh: true } })
        this.setData({ button1: { value: event.btn, refresh: true } })
    },

    /* 此方法展示窗体前发生 */
    onShow: function (event) {

    },

    /* 此方法关闭窗体前发生 */
    onExit: function (event) {

    },

    navigateBack: function (event) {
        pm.navigateBack({ value: { lbl: 'Set Page1', btn: 'Set Button' } });
    },
};

Page(page);

page = 0;
