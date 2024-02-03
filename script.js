const postbox= document.querySelector(".post-box");
const input = document.getElementById("post-input");
const postLane = document.getElementById("post-lane");
const deletebtn= document.querySelector(".delete-post");
const post= document.querySelector(".post");
const addbtn= document.getElementById("addbtn");

deletebtn.addEventListener("click", function(){
    console.log("ahjdnan")
    var delpost= document.querySelector(".post-lane")
    var del= document.querySelector(".post")
    delpost.classList.remove("del");
})

addbtn.addEventListener("click", (e)=>{
    e.preventDefault();
   
    if(!input.value) return;

    var newPost= document.createElement("div");
    newPost.classList.add("post");

    var para= document.createElement("p");
    para.classList.add("post-text");
    para.innerText= input.value;

    var delicon = document.createElement("img") ;
    delicon.src='https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643';

    var del= document.createElement("button");
    del.classList.add("delete-post");

    del.appendChild(delicon);

    newPost.append(para);
    newPost.append(del);
    
    postLane.appendChild(newPost);

    localStorage.setItem(post, para);
    input.value="";
});