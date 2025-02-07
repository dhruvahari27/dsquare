
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

t1.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4 ,

});
t1.from("#page1",{
    delay:0.2,
    y:1600,
   opacity:0,
   ease:Power4,
   duartion:0.5
})
