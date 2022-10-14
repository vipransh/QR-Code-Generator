let input=document.querySelector(".input");
let btn=document.querySelector(".submit");
let parentDiv=document.querySelector(".img-div");

btn.addEventListener("click",function(){
    parentDiv.innerHTML="";
    if(input.value.trim()!=0)
    {
    let img=document.createElement('img');
    img.classList.add("qr-img");
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    parentDiv.append(img);
    }
});