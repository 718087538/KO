$(function(){


    // jquery引入另一个js文件，不能是本地js
    // $.getScript("http://code.jquery.com/jquery-3.3.1.js",function(){
    //     console.log("加载js文件");
    // });

    // 循环添加数组中的内容
    for (item in component) {
        $(".box").append(
            `<div class="img-box"><img class="example" src="${component[item].src}" alt="${component[item].id}">
<div class="number">${component[item].id}</div></div>
    `);}

    // 添加隐藏和显示
    $(".img-box").mouseenter(function () {
        // this指的就是当前元素
        $(this).find(".number").css({"display":"block"});
        $(this).siblings().find(".number").css({"display":"none"});
        $(this).find(".example").css({"border-color": "deeppink", "transform": "translateY(16px)"});
        $(this).siblings().find(".example").css({"border-color": "#1BC550", "transform": "translateY(0px)"});
    });


    // 可视区域内的直接加动画效果

    function move(){

        let canSeeHeight= $(window).height();

        let imgBox= $(".img-box");


        for(i=0;i<imgBox.length;i++){

            let topHeight= imgBox.eq(i).offset().top;

            // console.log("1:"+topHeight);
            // console.log("2:"+canSeeHeight);

            // 当前的盒子
            let nowItem = imgBox.eq(i);

            if( topHeight<canSeeHeight){
                nowItem.addClass("animated bounceInRight");
            }

        }
    }

    move();

    $(window).scroll(function(){
        move();
    });



})
