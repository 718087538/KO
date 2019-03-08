//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
     ul: [
          { title: "宝宝姓名", placeholder: "请输入内容", value: "KASON" },
          { title: "出生日期", placeholder: "请输入联系方式", value: "1666666666" },
         { title: "性别", placeholder: "--请选择--", value: "KK省 KK市 KK区" },
         { title: "奶粉品牌", placeholder: "请输入宝宝喝的奶粉品牌", value: "某某镇某某街道某某号" },
      ],
      color: "#ffffff",
      backgroundColor: "#ff759c",
      name: "保存",
      ulk10: [
          "奶瓶用品",
          "用品",
          "奶瓶用品",
          "奶瓶用品",

          "奶瓶用品",
          "奶瓶用品",
          "奶瓶用品",
          "奶瓶用品",
      ]
  }

  
})
