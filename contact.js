var sidenavbar=document.querySelector(".side-navbar")



function showNavbar()
{
sidenavbar.style.left="0"
}
function closeNavbar()
{
    sidenavbar.style.left="-60%"

}


//  discount 
var discount=document.querySelector(".discount")
var disicon=document.querySelector(".discount-icon")

disicon.addEventListener("click",function(){
    disicon.parentElement.remove()
})