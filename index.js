$(".Invi").fadeOut(0);


function TurnDisplay()
{
    $(".Invi").fadeIn(1000);
}

var a=0;


$("#splineiframe").hover(function()
{
    $("#HoverIt").fadeOut();
    a=1;
})

function goodbyesc()
{
    $("#scrolldown").fadeOut();
}

$(".projectimg").hover(function(){
    $(this).css("opacity","80%");
    $(this).animate({width:"82%"});
},function(){
    $(this).css("opacity","100%");
    $(this).animate({width:"80%"});
})

$(".lastrowimg").hover(function(){
    $(this).css("opacity","80%");
    $(this).animate({width:"5.7%"});
},function(){
    $(this).css("opacity","100%");
    $(this).animate({width:"5.2%"});
})



const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

function checkIframeLoaded() {
    // var iframe = document.getElementById('splineiframe');
    // var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // // Check if loading is complete
    // if (  iframeDoc.readyState  == 'complete' ) {
        TurnDisplay();
        TurnLoader();
    //     return;
    // } 
    // window.setTimeout(checkIframeLoaded, 100);
}

function TurnLoader(){
    $(".loading").css("display","block");
    $("#loader").css("display","none");
}