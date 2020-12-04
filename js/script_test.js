
$(document).ready(function(){

    var count = 0;
    var counter = setInterval( () => {
        if(count < 101){
            if(count == 80){
                $('.img_content').addClass('animate__rotateIn ')
            }
            $('.count').text(count)
            count++
        }else{
            clearInterval(counter)
            $('.loading-custom-animation').addClass('hiden_loading-custom-animation')

            var timeOut = setTimeout(()=>{
                console.log('.hiden_loading-custom-animation_none')
                $('.loading-custom-animation').addClass('hiden_loading-custom-animation_none')
            },900)

            setTimeout(()=>{
                $('.down_line').addClass('down_line_hide')
                setTimeout(()=>{
                    $('.inside_bg_hide').addClass('inside_bg_show')
                    setTimeout(()=>{
                        $('.down_text').addClass('down_text_show')
                        $('.scrolle_down').addClass('scrolle_down_show')
                        $('.scroll_to').addClass('hover_scrolle')
                    },400)
                },2500)
            },80)
        }
        
    },30)
   
  
});

$('.home-page').on('mousewheel', (e)=> {
    clearInterval(timeNext)
 setTimeout(()=>{
        $('.down_text').removeClass('down_text_show')
        setTimeout(()=>{
            $('.inside_bg_hide').removeClass('inside_bg_show')
            setTimeout(()=>{
                $('.down_line').removeClass('down_line_hide')
                $('.scrolle_down').removeClass('scrolle_down_show')
                setTimeout(()=>{
                    $('.slide_block').removeClass('d-none');
                    $('.home_slide1 img').css('transform','translateY(1000px)');
                    $('.home_slide2 img').css('transform','translateY(-1000px)');
                    $('.nav-list').css('left','1000px');
                    $('.nav-toggle').css('right', '-50px')
                    setTimeout(()=>{
                            
                            $('.home-page').addClass("d-none");
                            $('.nav-list').addClass("d-none");
                            document.addEventListener("mousewheel",(e)=>{
                                if(e.target.id === 'box_slide5' && e.deltaY < 0){
                                    $('.nav-list').removeClass("d-none");
                                    $('.home-page').removeClass("d-none");
                                    setTimeout(()=> {
                                        $('.home_slide1 img').css('transform','translateY(0px)');
                                        $('.home_slide2 img').css('transform','translateY(0px)');
                                        $('.nav-list').css('left','0px');
                                        $('.nav-toggle').css('right', '-5000px')
                                    },200)
                                }
                            });
                    },1000);
                    
                    $('.mian_slider').css('transform', 'scale(1)')
                    $('.content_block1').css('bottom', '50%')
                    timeNext = setTimeout(()=>{
                        $('.loader').addClass('d-none')
                        $('.ball').css('z-index', '0')
                        $('.loader1').removeClass('d-none')
                        $('.ball1').css('z-index', '-1')
                            // setTimeout(()=>{
                            //     funcnext1()
                            //     console.log('asas')
                            // },5000)
                    },2000)
                        
                },500)

            },1200)
        },500)
    },400)
    
   
})


$('.nav-toggle').on('click', ()=>{
    $('.min_menu_block').removeClass('d-none');
    $('.nav-list').removeClass('d-none');
    $('.nav-list').addClass("menu_list");
    $('.nav-list').css('display','block')
    $('.navbar-brand').addClass('d-none')
    $('.nav-toggle').addClass('d-none')


});
$('.close_menu').on('click', ()=> {
    $('.min_menu_block').addClass('d-none');
    $('.nav-list').removeClass("menu_list");
    $('.navbar-brand').removeClass('d-none');
    $('.nav-toggle').removeClass('d-none');
    $('.nav-list').addClass('d-none');
})

var count = 1
var timeNext = null;
var timeoutNext = null;
var timeoutPrev = null;
var clickTimeout =null;


// setTimeout block



// slide next function

function funcnext1(){
    $('.slide_1 .slide-overlay').addClass('d-none')
    $('.mian_slider').addClass('main_slide1_more')
    $('.loader').addClass('d-none')
    $('.ball1').css('z-index', '0')
    $('.main_slide1_more .content_block1').css('bottom','200%')
    
    
    
}
function funcnext2(){
    $('.slide_2 .slide-overlay').addClass('d-none')
    $('.mian_slider').removeClass('main_slide1_more')
    $('.mian_slider').addClass('main_slide2_more')
    $('.loader').addClass('d-none')
    $('.ball2').css('z-index', '0')
    $('.content_block2').css('left', '-4000px')
    
}
function funcnext3(){
    $('.loader').addClass('d-none')
    $('.ball3').css('z-index', '0')
    $('.slide_3 .slide-overlay').addClass('d-none')
    $('.mian_slider').removeClass('main_slide2_more')
    $('.mian_slider').addClass('main_slide3_more')
    $('.main_slide3_more .slide_3 .more_about_img').css('transform','scale(0.8)')
    $('.content_block3').css('transform', 'scale(0)')
    setTimeout(()=>{
        $('.main_slide3_more .slide_3 .more_about_img').css('left','50%')
        setTimeout(()=>{
            $('.main_slide3_more .slide_3 .more_about_img').css('transform','scale(1)')
            
        },800)
    },1000)
}
function funcnext4(){
    $('.slide_4 .slide-overlay').addClass('d-none')
    $('.mian_slider').removeClass('main_slide3_more')
    $('.mian_slider').addClass('main_slide4_more')
    $('.loader').addClass('d-none')
    $('.ball4').css('z-index', '0')
    $('.content_block4').css('bottom', '-4500px')
}


// next scrolling
function funcprev1() {
    if(timeoutPrev || timeoutNext || clickTimeout) {
        clearTimeout(timeoutNext)
        clearTimeout(timeoutPrev)
        clearTimeout(clickTimeout)

    }
    $('.slide_1 .slide-overlay').removeClass('d-none')
    $('.mian_slider').removeClass('main_slide1_more')
    $('.loader').addClass('d-none')
    $('.loader1').removeClass('d-none')
    $('.ball').css('z-index', '0')
    $('.ball1').css('z-index', '-1')
    $('.content_block1').css('bottom', '50%')
    // timeoutPrev = setTimeout(()=>{
    //     funcnext1()
    // },5000)
}
function funcprev2() {
    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)
    // }
    $('.slide_1 .slide-overlay').removeClass('d-none')
    $('.slide_2 .slide-overlay').removeClass('d-none')
    $('.mian_slider').removeClass('main_slide2_more')
    $('.loader').addClass('d-none')
    $('.loader2').removeClass('d-none')
    $('.ball').css('z-index', '0')
    $('.ball2').css('z-index', '-1')
    $('.content_block2').css('left', '20%')
    // timeoutPrev = setTimeout(()=>{
    //     funcnext2()
    // },5000)
}
function funcprev3() {
    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)
    // }
    $('.slide_3 .slide-overlay').removeClass('d-none')
    $('.mian_slider').removeClass('main_slide3_more')
    
    setTimeout(()=>{
        $('.content_block3').css('transform', 'scale(1)')
        $('.slide_3 .more_about_img').css('left','0')
            setTimeout(()=>{
                $('.loader').addClass('d-none')
                $('.loader3').removeClass('d-none')
                $('.ball').css('z-index', '0')
                $('.ball3').css('z-index', '-1')
            },500)
    },200)
    // timeoutPrev = setTimeout(()=>{
    //     funcnext3()
    // },5000)
}

function funcprev4() {
    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)
    // }
    $('.slide_4 .slide-overlay').removeClass('d-none')
    $('.content_block4').css('bottom', '45%')
    $('.mian_slider').removeClass('main_slide4_more')
    $('.loader').addClass('d-none')
    $('.loader4').removeClass('d-none')
    $('.ball').css('z-index', '0')
    $('.ball4').css('z-index', '-1')

    // timeoutPrev = setTimeout(()=>{
    //     funcnext4()
    // },5000)
}

// next scrolling end


// clicke active slide
function activeSlide1(width){
    count = 1
    $('.slider_content').css('transform',`translateX(${0}px)`)  
    $('.slide_1').css('transform','scale(1)')

   
}

function activeSlide2(width){
    count = 2
    $('.slider_content').css('transform',`translateX(${-width}px)`)
    $('.slide_2').css('transform','scale(1)')
 
}

function activeSlide3(width){
    count = 3
    $('.slider_content').css('transform',`translateX(${-width*2}px)`)
    $('.slide_3').css('transform','scale(1)')

}

function activeSlide4(width){
    count = 4
    $('.slider_content').css('transform',`translateX(${-width*3}px)`)
    $('.slide_4').css('transform','scale(1)')
}

// maous weel slide 1
$('.mian_slider .slide_1 .slide-overlay, .mian_slider .slide_1 .content_block' ).on("wheel", (e) => {
    console.log('slide1')

    if(e.originalEvent.deltaY > 0){
        
        funcnext1()
    }
    return
    
})

// maous weel slide 1 next to slide 2
$('.mian_slider .slide_1 .more_about_block, .mian_slider .slide_1 .more_about_img').on("wheel", (e) => {
    console.log('slide1-2')
    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)

    // }

    if(e.originalEvent.deltaY > 0){
        
        setTimeout(()=> {
            $('.slider_content').css('transform',`translateX(${-window.innerWidth}px)`)
            $('.mian_slider').removeClass('main_slide1_more')
            setTimeout(()=>{
                $('.content_block2').css('left', '20%')
            },400)
        },360)
        
            $('.pagin').removeClass('active')
        setTimeout(()=>{
            $('.slide_1 .slide-overlay').removeClass('d-none')
            $('.loader').addClass('d-none')
            $('.loader2').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball2').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin2').addClass('active')

            
        },800)
        
        // timeoutNext = setTimeout(()=>{
        //     funcnext2()
        // },5000)
    }else{
        funcprev1()
        
    }

})

// maous weel slide 2
$('.mian_slider .slide_2 .slide-overlay, .mian_slider .slide_2 .content_block' ).on("wheel", (e) => {
    console.log('slide2')
    if(e.originalEvent.deltaY > 0){
       
        funcnext2()

    }else{
        
        setTimeout(()=> {
            $('.slide_2 .slide-overlay').removeClass('d-none')

            $('.loader').addClass('d-none')
            $('.ball').css('z-index', '0')
            $('.pagin').removeClass('active')
            $('.slider_content').css('transform',`translateX(${0}px)`)
            $('.content_block1').css('bottom', '50%')
            $('.content_block2').css('left', '4000px')
        },360)
        setTimeout(()=>{
            $('.loader').addClass('d-none')
            $('.loader1').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball1').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin1').addClass('active')
            
        },1000)
    }
    
})

// maous weel slide 2 next to slide 3
$('.mian_slider .slide_2 .more_about_block, .mian_slider .slide_2 .more_about_img').on("wheel", (e) => {
    console.log('sdcsdcsdc,slide2')
    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)
    // }
    if(e.originalEvent.deltaY > 0){

        setTimeout(()=> {
            $('.slide_2 .slide-overlay').removeClass('d-none')

            $('.slider_content').css('transform',`translateX(${-window.innerWidth*2}px)`)
            $('.mian_slider').removeClass('main_slide2_more')
        },360)
            $('.pagin').removeClass('active')
            $('.content_block3').css('transform', 'scale(1)')

        setTimeout(()=>{
            $('.loader').addClass('d-none')
            $('.loader3').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball3').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin3').addClass('active')
            
            // timeoutNext = setTimeout(()=>{
            //     funcnext3()
            // },5000)

        },1000)
        
    }else{

        funcprev2()
    }
    
})

// maous weel slide 3
$('.mian_slider .slide_3 .slide-overlay, .mian_slider .slide_3 .content_block' ).on("wheel", (e) => {
    if(e.originalEvent.deltaY > 0){

        funcnext3()

    }else{

        setTimeout(()=> {
            $('.slide_3 .slide-overlay').removeClass('d-none')
            $('.loader').addClass('d-none')
            $('.ball').css('z-index', '0')
            $('.pagin').removeClass('active')
            $('.slider_content').css('transform',`translateX(${-window.innerWidth}px)`)
            $('.content_block2').css('left', '20%')
            $('.content_block3').css('transform', 'scale(0)')
        },360)
        setTimeout(()=>{
            $('.loader').addClass('d-none')
            $('.loader2').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball2').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin2').addClass('active')
            
        },1000)
    }
    
    
})

// maous weel slide 3 next to slide 4
$('.mian_slider .slide_3 .more_about_block, .mian_slider .slide_3 .more_about_img').on("wheel", (e) => {

    // if(timeoutPrev || timeoutNext || clickTimeout) {
    //     clearTimeout(timeoutNext)
    //     clearTimeout(timeoutPrev)
    //     clearTimeout(clickTimeout)
    // }
    if(e.originalEvent.deltaY > 0){

        setTimeout(()=> {
            $('.slide_3 .slide-overlay').removeClass('d-none')
            $('.slider_content').css('transform',`translateX(${-window.innerWidth*3}px)`)
            $('.mian_slider').removeClass('main_slide3_more')
            $('.content_block4').css('bottom', '45%')
        },360)
            $('.pagin').removeClass('active')
            
        setTimeout(()=>{
            $('.loader').addClass('d-none')
            $('.loader4').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball4').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin4').addClass('active')
            
        },1000)
        // timeoutNext = setTimeout(()=>{
        //     funcnext4()
        // },5000)
    }else{

        funcprev3()
    }
    
})

// maous weel slide 4
$('.mian_slider .slide_4 .slide-overlay, .mian_slider .slide_4 .content_block' ).on("wheel", (e) => {
    if(e.originalEvent.deltaY > 0){

        funcnext4()

    }else{

        $('.slide_3 .more_about_img').removeAttr('style')
        setTimeout(()=> {
            $('.slide_3 .slide-overlay').removeClass('d-none')
            $('.loader4').addClass('d-none')
            $('.ball4').css('z-index', '0')
            $('.pagin4').removeClass('active')
            $('.slider_content').css('transform',`translateX(${-window.innerWidth*2}px)`)
            $('.content_block3').css('transform', 'scale(1)')
        },360)
        setTimeout(()=>{
            $('.loader').addClass('d-none')
            $('.loader3').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball3').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin3').addClass('active')
            
        },1000)
    }
    
    
})

$('.mian_slider .slide_4 .more_about_block, .mian_slider .slide_4 .more_about_img').on("wheel", (e) => {
    if(e.originalEvent.deltaY > 0){

        return

    }else{

        funcprev4()

    }

})