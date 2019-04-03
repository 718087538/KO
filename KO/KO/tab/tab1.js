// KO/tab/tab1.js
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
        tabid:1
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeTab: function (e) {
            var that = this;
            console.log(e.currentTarget.dataset.id)
            if (this.data.tabid == e.currentTarget.dataset.id) {
                if (e.currentTarget.dataset.id == 1) {

                    if (this.data.disnone == "disnone") {
                        this.setData({
                            disnone: ""
                        })
                    } else {
                        this.setData({
                            disnone: "disnone"
                        })
                    }
                } else if (e.currentTarget.dataset.id == 2) {
                    if (this.data.disnone2 == "disnone") {
                        this.setData({
                            disnone2: ""
                        })
                    } else {
                        this.setData({
                            disnone2: "disnone"
                        })
                    }
                }
            } else {
                // 切换tab
                this.setData({
                    tabid: e.currentTarget.dataset.id,
                    disnone: "disnone",
                    disnone2: "disnone"
                })
            }
        },
    }
})
