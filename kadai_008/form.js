$(function() {
    //　id属性がbtnの要素がクリックされたら
    $('.btn').on('click', function() {
        //クリックされましたと表示する
       $('.text-box').val('クリックしました！')
    });
});