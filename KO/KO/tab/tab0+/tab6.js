// KO/tab/tab0+/tab6.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        status: 0

    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickTab: function (e) {
            var that = this;
            if (that.data.status == e.currentTarget.dataset.tabid) {
                return false;
            } else {
                that.setData({
                    status: e.currentTarget.dataset.tabid
                })
            }
        },
    }
})
