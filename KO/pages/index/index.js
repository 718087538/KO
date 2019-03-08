//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
     ul: [
          { title: "收货人", placeholder: "请输入内容", value: "KASON" },
          { title: "联系方式", placeholder: "请输入联系方式", value: "1666666666" },
          { title: "省 市 区", placeholder: "请输入地址", value: "KK省 KK市 KK区" },
          { title: "详细地址", placeholder: "请输入详细地址", value: "某某镇某某街道某某号" },
      ],
      color: "#ffffff",
      backgroundColor: "#ff759c",
      name: "保存",
  }

  
})
