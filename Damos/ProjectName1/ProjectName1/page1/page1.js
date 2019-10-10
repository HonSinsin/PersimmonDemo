var page = {

    naviagtePage2: function (event) {
        pm.navigateTo({ url: 'page2/page2', value: { lbl: 'Set Page2 Label', btn: 'Set Button' } })
    },

    onUpdate: function (event) {
        console.dir(event)
        this.setData({ label3: { value: event.value.lbl, refresh: true } })
        this.setData({ button1: { value: event.value.btn, refresh: true } })
    }
};

Page(page);

page = 0;