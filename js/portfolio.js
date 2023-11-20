$(document).ready(function(){
  // Home 영역
  const pTag1 = document.querySelector('.first-parallel') 

  const textArr1 = 'get new inspiration from my video. get new inspiration from my video. get new inspiration from my video. get new inspiration from my video.'.split(' ')

  let count1 = 0;

  console.log(textArr1)


  initTexts(pTag1,textArr1)

  function initTexts(element,textArray){
      textArray.push(...textArray)
      for(let i=0; i<textArray.length; i++){
          element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`

      }
  }
  function marqueeText(count, element, direction)
  {
      console.log(element.clientWidth)
      if(count > element.clientWidth/2) {
          element.style.transform = `translate3d(0,0,0)`
          count = 0
      }
      element.style.transform = `translate3d(${
          direction*count}px, 0, 0)`
      
      return count 
  }
  function animate(){
          count1++
          count1 = marqueeText(count1,pTag1, -1)
          window.requestAnimationFrame(animate)
      }

      animate();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 2,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });

});

// FOOTER 영역
var swiper = new Swiper(".sw-mail", {
  effect: "cards",
  grabCursor: true,
});

// 원페이지
$(document).ready(function(){
  const windowMask = $('.window-mask')
      mobileBtn.click(function(e){
          e.preventDefault();
          let tmp = $(this).hasClass('mobile-btn-active')
          if(tmp == true) {
              $(this).removeClass('mobile-btn-active')
              windowMask.removeClass('active')
          }else{
              $(this).addClass('mobile-btn-active')
              windowMask.addClass('active')
          }
      })
      //Window-Mask 클릭시
      windowMask.click(function(){
          windowMask.removeClass('active')    
      })
      //윈도우 화면사이즈 리사이징할 때 
      $(window).resize(function(){
          let winWidth = $(window).width()
          // console.log(winWidth)
          if(winWidth > 960) {
              windowMask.removeClass('active')   
          }
      })
      // 주메뉴를 클릭할 때 스크롤 
      const menu = $('header ul li'),
      contents =$('section')
      // console.log(menu)
      // console.log(contents)
      menu.click(function(){
          $(this).addClass('on')
          //메뉴에서 클릭된 li의 인덱스번호구하기
          let idx = $(this).index()
          // console.log(idx)
          let $section =contents.eq(idx)
          //현재 선택된 section의 위치정보구하기
          let sectionDistance =$section.offset().top -114
          // console.log(sectionDistance)
          $('html, body').animate({
              scrollTop: sectionDistance
          })
          //위에서부터  얼마나 떨어져있는지 구해줘
      })
      //윈도우를 스크롤할때
      $(window).scroll(function(){
          /*스크롤움직일때 온을 리무브시켜준다*/
          contents.each(function(){
              // console.log($(this).offset().top, $(window).scrollTop()+114)
              if($(this).offset().top<= $(window).scrollTop()+0){
                  let idx = $(this).index()
                  menu.removeClass('on')
                  menu.eq(idx).addClass('on')
              }
          }) 
      })
      //모바일메뉴 클릭시 스크롤
      const menuMobile = $('menu-mobile li')
      menuMobile.click(function(){
          $(this).addClass('active')
          let $section = contents.eq(idx)
          let sectionDistance = $section.eq(offset().top)+0
          $('html, body').animate({
  
          })
      })
  })
$(document).ready(function(){
      const mobileBtn = $('.mobile-btn'),
            navMobile = $('.nav-mobile'),
            windowMask = $('.window-mask')
          // console.log(mobileBtn)
          // console.log(navMobile)
          // console.log(windowMask)
          //Mobile Button 클릭시
          mobileBtn.click(function(e){
              e.preventDefault();
              let tmp = $(this).hasClass('mobile-btn-active')
              if(tmp == true) {
                  $(this).removeClass('mobile-btn-active')
                  navMobile.removeClass('active')
                  windowMask.removeClass('active')
              }else{
                  $(this).addClass('mobile-btn-active')
                  // navMobile.addClass('active')
                  windowMask.addClass('active')
              }
          })
          //Window-Mask 클릭시
          windowMask.click(function(){
              // mobileBtn.removeClass('mobile-btn-active')
              // navMobile.removeClass('active')
              windowMask.removeClass('active')    
          })
          //윈도우 화면사이즈 리사이징할 때 
          $(window).resize(function(){
              let winWidth = $(window).width()
              // console.log(winWidth)
              if(winWidth > 960) {
                  // mobileBtn.removeClass('mobile-btn-active')
                  // navMobile.removeClass('active')
                  windowMask.removeClass('active')   
              }
          })
          // 주메뉴를 클릭할 때 스크롤 
          const menu = $('header ul li'),
          contents =$('section')
          // console.log(menu)
          // console.log(contents)
          menu.click(function(){
              $(this).addClass('on')
              //메뉴에서 클릭된 li의 인덱스번호구하기
              let idx = $(this).index()
              // console.log(idx)
              let $section =contents.eq(idx)
              //현재 선택된 section의 위치정보구하기
              let sectionDistance =$section.offset().top +0
              // console.log(sectionDistance)
              $('html, body').animate({
                  scrollTop: sectionDistance
              })
              //위에서부터  얼마나 떨어져있는지 구해줘
          })
  })



  $(function(){
    const header = $('.page-header')
    //header요소 전체를 복사하는 것이 아니라 안에 있는 내용들만 복사한다.
    headerClone = header.contents().clone()
    let headerCloneContainer = $('<div class="page-header-clone"></div>')
    let threshold = header.offset().top + header.outerHeight();
    // console.log(headerClone)
    // console.log(headerCloneContainer)
    // A.append(B) 이용:headerCloneContainer(A)요소만 내용뒤에 headerClone(B)요소를 추가(첨부)
    headerCloneContainer.append(headerClone)
    // A. appendTo(B) 이용 : body안에 headerCloneContainer요소를 추가
    headerCloneContainer.appendTo('body')
    //$.소갯싣(시간, 할일)시간마다 할일 실행
    //시간: 1000/ 15 => 1초에 15회 실행

    //$(window).on('scroll', function(){
    $(window).on('scroll',$.throttle(1000/15, function(){
        if($(this).scrollTop() >= threshold) {
            headerCloneContainer.addClass('visible')
        }else {
            headerCloneContainer.removeClass('visible')
        }
    }))
})
