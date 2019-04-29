// KO/tab/tab0+/tab7.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    data: {
        navbar: ['热门', '推荐', '话题', '活动', '商城', '大众评审', '附近'],
        currentTab: 0,
        show1: true,
    },

    /**
     * 组件的方法列表
     */
    methods: {

        // 导航切换监听
        navbarTap: function (e) {
            var that = this;
            that.setData({
                currentTab: e.currentTarget.dataset.idx
            })
            // console.log(that.data.currentTab)

            if (that.data.currentTab == 0) {
                that.setData({
                    isshow: true
                })
            }
            if (that.data.currentTab == 1) {
                that.setData({
                    isshow: true
                })
            }
            if (that.data.currentTab == 2) {
                that.setData({
                    isshow: true
                })
            }
        },

        // 切换主体内容
        swiperChange: function (e) {
            var that = this;
            that.setData({
                currentTab: e.detail.current,
            })

            if (that.data.currentTab == 0) {
                that.setData({
                    isshow: true
                })
            }
            if (that.data.currentTab == 1) {
                that.setData({
                    isshow: true
                })
            }
            
            if (that.data.currentTab == 2) {
                that.setData({
                    isshow: true
                })
            }
        },



        swichNav: function (e) {
            console.log(e);
            var that = this;
            if (this.data.currentTabs === e.target.dataset.current) {
                return false;
            } else {
                that.setData({
                    currentTabs: e.target.dataset.current,
                })
            }
        },

        swiperChanges: function (e) {
            // console.log(e);
            this.setData({
                currentTabs: e.detail.current,
            })
        },
    }
})
