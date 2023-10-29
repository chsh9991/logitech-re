// 헤더 스크롤 기능
$(function(){
    const header = $('header');

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
    });
});
// 헤더 브랜드
$(function(){
    const brand = $('.header_right .brand');

    brand.click(function(){
        brand.toggleClass('active');
    })
});
// cotainer2
$(function(){
    let tabMenu = $('.con2_wrap .tab_menu a'),
        tabImg = $('.con2_wrap .content_wrap');

        // 링크를 클릭하면 할 일
        tabMenu.click(function(e){
            e.preventDefault(); // a링크 기본속성 제거
            
            tabMenu.removeClass('active'); //active 빼고
            $(this).addClass('active'); //그 요소만 추가
            
            tabImg.hide();  //none 숨김
            
            let target = $(this).attr('href'); //attr로 속성을 가져옴
            
            $(target).css('display','flex'); //block 보이기
        })
        tabMenu.eq(0).trigger('click'); // 탭 첫화면 보이기
});