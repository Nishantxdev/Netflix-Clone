const slider = document.querySelector(".slider");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const scrollAmount = 1060;

rightBtn.addEventListener("click",(e)=>{

    if(screen.width>=1120){
        slider.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
        });
    }

    else if(screen.width <1120 && screen.width>950){
        slider.scrollBy({
        left:900,
        behavior:"smooth"})
    }

    else if(screen.width <=950 && screen.width >600 ){
         slider.scrollBy({
        left:500,
        behavior:"smooth"})
    }

    else if(screen.width <=600 ){
         slider.scrollBy({
        left:300,
        behavior:"smooth"})
    }



    slider.style.marginLeft = "40px"

});

leftBtn.addEventListener("click",()=>{

    if(screen.width>=1120){
        slider.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
        });
    }

    else if(screen.width <1120 && screen.width>950){
        slider.scrollBy({
        left:-900,
        behavior:"smooth"})
    }

    else if(screen.width <=950 && screen.width >600 ){
         slider.scrollBy({
        left:-500,
        behavior:"smooth"})
    }

    else if(screen.width <=600 ){
         slider.scrollBy({
        left:-300,
        behavior:"smooth"})
    }

    slider.style.marginLeft = "0px"

});

function checkButtons(){

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    leftBtn.style.display = slider.scrollLeft <= 0 ? "none":"block";

    rightBtn.style.display =
    slider.scrollLeft >= maxScroll-5 ? "none":"block";

}

slider.addEventListener("scroll",checkButtons);

window.addEventListener("load",checkButtons);

window.addEventListener("resize",checkButtons);

let sign_in = document.querySelector('.sign-btn')

sign_in.addEventListener("click",(e)=>{
    
    console.log(sign_in)
    console.log(e)
    window.location.href = "https://www.netflix.com/in/login?serverState=Bgi8vuvcAxK1AQj5pgpCwfRCP1yw9MeCt2QicYRZP4oUwp4lrhCXmDJlsXaum9AFLWYCn26%2B%2BQVPa2apDviRCyNh6Ian%2Bimqw8RbzETEmpq3DRK7TkEe6ecDFueIeyOYqKMYLWbaS2TbeS%2FIV5ldzCvTwtfQPSfqN7EDojo7XH6Da2rFxj8Z%2BOFWux2tZWE7V8rm9xMAriDFNOBsjQ6QrTtLZYAkwS3wD0kyqIasC8Ql9%2FIf3ldIw2sV0eBZs6kYBiIOCgxoTX8yqMxatTGFAgg%3D";

})

