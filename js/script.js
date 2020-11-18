// $('#loading-custom-animation').loading({
//     onStart: function(loading) {
//         console.log(loading)
//         // loading.settings.message ='xasdas'
//       loading.overlay.slideDown(400);
//     },
//     onStop: function(loading) {

//         loading.overlay.slideUp(400);
//     },
//     message:'<span>bhjgjhjhjh</span>'
    
//   });
//     var  count = 0;
//     setInterval(function() {
//     $('#loading-custom-animation').loading('toggle');
//         if( count < 101){
            
//         }
//   }, 5000);
$(document).ready(function(){
    var count = 0;
    var counter = setInterval( () => {
        if(count < 101){
            if(count == 85){
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
        }
        
    },60)
   
  
});
function navheden() {
      
}

// window.addEventListener('wheel', event => {
//   console.log(event.target.id, 'i')
//     if(event.target.id === 'slide1'){
//         $('.nav-list').addClass('d-none')
//     }else if(event.target.id === 'slide5'){ 
//         $('.nav-list').removeClass('d-none') 
//     }
//     console.info(event.target.previousElementSibling)   
// })





// $(document).ready(function() {
  
//     var count = $('[class^="slide"]').size();
//     var lastScrollTop = 0;
//     var prev = count;
//     var curr = 1;
//     var now = 8;
//     var next = 2;
//     var finished = true;
  
//     $('.slide' + curr).css("left","0");
//     $('.slide' + curr).css("transform","scale(1)");
//     $('.slide').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
//       if (finished) {
//         finished = false;
//         var delta = e.originalEvent.wheelDelta;
//         console.log(delta);
//         console.log(e)
//         if (delta < 0) {
//           $('[class^="slide"]').css("transition","all 0.5s ease, width 0s, height 0s");
//           $('.slide' + curr).css("transform","scale(.8)");
//           $('.slide' + curr).animate({
//               step: function(now,fx) {
//                 $(this).css('transform',"scale(."+now+")");
//               },
//               duration:'slow'
//           },'linear');
//           $('.slide' + curr).css("z-index","20");
//           $('.slide' + prev).css("z-index","10");
//           $('[class^="slide"]').css("transition","0s");
//           $('.slide' + next).css("left","100vw");
//           setTimeout(function() {
//             $('[class^="slide"]').css("transition","all .5s ease, width 0s, height 0s");
//             $('.slide' + next).css("left","0");
//             $('.slide' + next).css("transform","scale(1)");
//             $('.slide' + prev).css("-moz-transform","scale(1)");
//             $('.slide' + next).css("z-index","50");
//           },400);
//           setTimeout(function() {
//             curr++;
//             if (curr > count) curr = 1;
//             next++;
//             if (next > count) next = 1;
//             prev++;
//             if (prev > count) prev = 1;
//           },900);
//           if(this.id==='slide1') {
//             $('.nav-list').addClass('d-none')
//           } else if(this.id==='slide5') {
//             $('.nav-list').removeClass('d-none')
//           }
//         } else if (delta > 0) {
  
//           $('.slide' + curr).css("transition","all 0.5s ease, width 0s, height 0s");
//           $('.slide' + curr).css("transform","scale(.8)");
//           $('.slide' + curr).animate({
//               step: function(now,fx) {
//                 $(this).css('transform',"scale(."+now+")");
//               },
//               duration:'slow'
//           },'linear');
//           $('.slide' + curr).css("z-index","20");
//           $('.slide' + next).css("z-index","10");
//           $('[class^="slide"]').css("transition","0s");
//           $('.slide' + prev).css("left","-100vw");
//           setTimeout(function() {
            
//             $('[class^="slide"]').css("transition","all 0.5s ease, width 0s, height 0s");
//             $('.slide' + prev).css("left","0");
//             $('.slide' + prev).css("transform","scale(1)");
//             $('.slide' + prev).css("-moz-transform","scale(1)");
//             $('.slide' + prev).css("z-index","50");
//           },400);
//           setTimeout(function() {
//             curr--;
//             if (curr < 1) curr = count;
//             next--;
//             if (next < 1) next = count;
//             prev--;
//             if (prev < 1) prev = count;
//           },900);
//           console.log(this.id, 'this')
//           if(this.id==='slide1') {
//             $('.nav-list').addClass('d-none')
//           } else if(this.id==='slide2') {
//             $('.nav-list').removeClass('d-none')
//           }
//         }
  
//         setTimeout(function() {
//           finished = true;
//         },1100);
//       }

      
//     });

//   });
  
$('.home-page').on('mousewheel', (e)=> {
    console.log(e)
    $('.slide_block').removeClass('d-none');
    $('.home_slide1 img').css('transform','translateY(1000px)');
    $('.home_slide2 img').css('transform','translateY(-1000px)');
    $('.nav-list').css('left','1000px');
    $('.nav-toggle').css('right', '-50px')
    setTimeout(()=>{
            
            $('.home-page').addClass("d-none");
            $('.nav-list').addClass("d-none");
            document.addEventListener("mousewheel",GO);
            document.addEventListener("DOMMouseScroll",GO);
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
    },1000)
    
    
})


$('.nav-toggle').on('click', ()=>{
    $('.min_menu_block').removeClass('d-none');
    $('.nav-list').removeClass('d-none');
    $('.nav-list').addClass("menu_list");
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

var slides=document.querySelectorAll('.slide'),tl=new TimelineLite({paused:true});
for(var i=slides.length;i--;){
    var D=document.createElement('div'); D.className='Dot'; D.id='Dot'+i;
    D.addEventListener('click',function(){ tl.seek(this.id).pause() });
    document.getElementById('Dots').appendChild(D);
    tl.add('Dot'+i)
    
    if(i>0){
      
      if(i!=slides.length){tl.addPause()}
        tl.to(slides[i],0.5,{height:0,ease:Quint.easeOut})
        .to(slides[i],0.7,{skale:0,xPercent:-100},'L'+i)
        .from(slides[i-1],0.7,{width:0},'L'+i)
        .to('#Dot'+i,0.7,{backgroundColor:'red'},'L'+i)
        .set(slides[i],{zIndex:1-i}).set(slides[i-1],{zIndex:slides.length})
        .from(slides[i-1],0.5,{scaleY:1,ease:Quint.easeIn})
    };
};
function GO(e){
  var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
  if(SD<0){tl.play()}else{tl.reverse()};
};
setTimeout(()=>{

},2000)





// a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW