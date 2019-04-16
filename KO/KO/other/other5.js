// KO/other/other5.js
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
        datas: [
            { price: 10, integral: 10, id: 1 },
            { price: 10, integral: 20, id: 2 },
            { price: 10, integral: 30, id: 3 },
        ],
        isSelect: 1,
    },

    /**
     * 组件的方法列表
     */
    methods: {

        select: function (e) {
            // console.log(e)
            // var sum = e.target.dataset.price;
            var id = e.target.dataset.id;
            this.setData({
                isSelect: id
            })
        }
    }
})
