$(function(){

    // 循环添加数组中的内容
    for (item in component) {
        $(".box").append(
            `<div class="img-box"><img class="example" src="${component[item].src}" alt="${component[item].id}">
<div class="number">${component[item].id}</div></div>
    `);}
    // 添加隐藏和显示
    $(".img-box").mouseover(function () {
        // this指的就是当前元素
        $(this).find(".number").css({"display":"block"});
        $(this).siblings().find(".number").css({"display":"none"});
    })
})
