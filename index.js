const content=document.getElementById("content")
const auther=document.getElementById("author1")
 async function next(params) {
    const response=await fetch("https://api.quotable.io/random")
    console.log(response);
    const data=await response.json()
    console.log(data);
    content.innerText=data.content
    author1.innerText="~"+data.author

}
next()