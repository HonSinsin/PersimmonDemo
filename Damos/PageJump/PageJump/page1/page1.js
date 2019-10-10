var page = {

    ontouch: function (event) {
        console.dir(event)
        pageSwitch(event, "up", function () { pm.navigateTo('pageup/pageup') })
        pageSwitch(event, "left", function () { pm.navigateTo('pageleft/pageleft') })
    },

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






















        // if (parseInt(this.idx) == 1) {
        //     console.log('Panel2222 touch enter');
        // } else {
        //     console.log('Panel1111 toucn enter');
        // }