function loadingAnimation() {
var t1=gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})


// t1.from("#page1",{
//     delay:0.2,
//     duration:1600,
//     opacity:0,
//     duartion:0.5,
//     ease:Power4,
// })

t1.from("#line1-part1,.line h2",{
    opaciaty:0,
    onStart:function(){
        var grow=0;
var h5timer=document.querySelector( "#line1-part1 h5")
setInterval(function(){
    if (grow<100){
        h5timer.innerHTML=grow++
    }
    else{  h5timer.innerHTML= grow
        
    }
},33)

    },
});
t1.from("#page1",{
    delay:0.2,
    y:1600,
   opacity:0,
   ease:Power4,
   duartion:0.8,});

t1.to("#loader",{
    display:"none",
    opacity:0,
    duration:0.2,
    delay:0 ,
});
t1.from("#nav",{
    opacity:0,
   
});
t1.to(".hero",{
    y:-110,
     stagger:0.2 }
)


}

function cursorAnimation(){
    document.addEventListener("mouseover",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4"); 
}
cursorAnimation();
loadingAnimation();
