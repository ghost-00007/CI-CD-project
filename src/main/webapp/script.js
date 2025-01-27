var sidebar=document.querySelector(".side-navbar")

function sidenav()
{
    sidebar.style.left="0"
}

function closenav()
{
    sidebar.style.left="-60%"
}


var search=document.getElementById("search")
var productcontainer=document.getElementById("product")
var productlist=document.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textcontent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display='none'
        }
        else{
            productlist[count].style.display="block"
        }
    }
})