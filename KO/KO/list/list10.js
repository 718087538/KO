// KO/list/list10.js
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
        info1: true,
        info2: false,
        info3: false,

    },

    /**
     * 组件的方法列表
     */
    methods: {
        toggle: function () {
            this.setData({
                info1: (!this.data.info1)
            })
        },
        toggle2: function () {
            this.setData({
                info2: (!this.data.info2)
            })
        },
        toggle3: function () {
            this.setData({
                info3: (!this.data.info3)
            })
        },
    }
})
