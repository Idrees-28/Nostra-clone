
var sidenavbar=document.querySelector(".side-navbar")



function showNavbar()
{
sidenavbar.style.left="0"
}
function closeNavbar()
{
    sidenavbar.style.left="-60%"

}

// discount 
var discount=document.querySelector(".discount")
var disicon=document.querySelector(".discount-icon")

disicon.addEventListener("click",function(){
    disicon.parentElement.remove()
})

// slider

var left=document.querySelector(".left-btn")
var slideimg=document.querySelector(".slider-image")
var right=document.querySelector(".right-arrow")
var margin=0

right.addEventListener("click",

    function(){
        margin=margin+100
    
        if(margin>200)
        {
            margin=0
            slideimg.style.marginLeft=0;
        }
        else{
            slideimg.style.marginLeft="-"+margin+"vw";
        }
        
       
    
    }
    )
    
    left.addEventListener("click",
    
    function(){
    
        if(margin==0)
        {
           
            margin=200
            slideimg.style.marginLeft="-"+margin+"vw";
        }
        else{
    
            margin=margin-100
        slideimg.style.marginLeft="-"+margin+"vw";
        }
        
        
    }
    )

// most wanted


var liked=document.getElementById("like")
var redlike=document.getElementById("likebtn")

liked.addEventListener("click", function() {
    alert("Hello! I am an alert box!");
    // alert("yes")
    redlike.style.display = "block";
    liked.style.display = "none";
   
});

redlike.addEventListener("click", function() {
    liked.style.display = "block";
    redlike.style.display = "none";
    
});
