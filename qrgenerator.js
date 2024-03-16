let form=document.querySelector("form")
let imag=document.querySelector("img")
imag.style.visibility="hidden";

form.addEventListener("submit",(ele)=>
{
    ele.preventDefault()
    let input=document.querySelector("input").value
if(input=="")
{ 
    alert("enter url")
    document.querySelector("h1").style.backgroundColor="red";
    
}
else
{
    let qr=`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${input}`;
    imag.src=qr;
    console.log(qr);
    imag.style.visibility="visible"
}

})