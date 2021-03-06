// KO/form/form20+/form2.js
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
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
            {
                id: 0,
                name: '美国'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '巴西'
            },
            {
                id: 3,
                name: '日本'
            }
        ],
        index: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
                index: e.detail.value
            })
        },
        bindMultiPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
                multiIndex: e.detail.value
            })
        },
    }
})
