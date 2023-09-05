let btn=document.getElementById("short_btn");


btn.addEventListener('click', short);

async function short(){
    let longurl=document.getElementById("long_url").value;
    let shorturl = document.getElementById("short_url");

    const result=await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
    const data = await result.json();

    shorturl.value= data.result.short_link2

}

//copy btn code

let copybtn= document.getElementById("copy");
let newurl=document.getElementById("short_url");

copybtn.onclick=()=>{
    newurl.select();

    window.navigator.clipboard.writeText(newurl.value);
}