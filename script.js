var rec = document.querySelector(".circle");

rec.addEventListener("mousemove", function (dets) {
  var rectanglocation = rec.getBoundingClientRect();
  
  var insiderect = dets.clientX - rectanglocation.left;

  if (insiderect < rectanglocation.width / 2) {
    var redcolor = gsap.utils.mapRange(0, rectanglocation.width/2, 255, 0, insiderect);

    gsap.to(rec,{
       backgroundColor: `rgb(${redcolor},0,0)`,
       ease:Power4
    });
  } else {
    var bluecolor = gsap.utils.mapRange(rectanglocation.width/2,rectanglocation.width, 255, 0, insiderect);
    gsap.to(rec,{
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease:Power4
   });
  }
});

rec.addEventListener('mouseleave',function(){
  gsap.to(rec,{
    backgroundColor: "white"
  })
})
