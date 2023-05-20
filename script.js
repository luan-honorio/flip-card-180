let likes = 0;
document.querySelector('.bt').addEventListener('click',()=>{
    
    document.querySelector('.btn').style.border = "solid 1px red";
    document.querySelector('.cor ').style.color = "red";

    likes++;
    document.querySelector("#like").innerHTML = likes;
})

