$(document).ready(function(){
    //实现文章分享部分点击切换效果
    $('.column .title li').click(function(){
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        var number=$(this).attr('data-set');
        $('#show' + number).siblings('ul').hide();
        $('#show' + number).show();
    });
})