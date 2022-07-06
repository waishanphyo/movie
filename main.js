// navbar background-color
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        $("#navbar").css("background-color","#115fc4");
    }else{
        $("#navbar").css("background-color","#00204a");
    }
})
//fetch API
const url={
    apikey:"api_key=ec58d4bebc90d7769b644a3b411df94e",
    baseurl:"https://api.themoviedb.org/3/discover/movie?"
}
const IMG="https://image.tmdb.org/t/p/w500/";
const popularUrl=url.baseurl+url.apikey+"&sort_by=popularity.desc";

const searchUrl="https://api.themoviedb.org/3/search/movie?"+url.apikey;

fetchmovie(popularUrl);
function fetchmovie(path) {
    fetch(path)
    .then(res=>res.json())
    .then(data=>movie(data))
}
function movie(data){
    let res =data.results;
   //console.log(res)
   $("#heading").html("");

   res.forEach(element => {
       // console.log(element)
        const div=document.createElement("div");
        //const div=$("<div></div>");
        div.className="col-4 col-md-4 col-lg-3";
        div.innerHTML=`
        <div class="img">
             <img  src="${IMG+element.poster_path}">
             <p>Rating ${element.vote_average.toFixed(1)}</p>
         </div>
         <p class="text-center" id="title">${element.original_title}</p>
     `;
        $("#heading").append(div);
   });
}
// Search

$("#search").keypress((e)=>{
    let val=$("#search").val();
  if(e.keyCode===13 ){
    if(val){
       fetchmovie(searchUrl+"&query="+val);
       $("#search").val("");
      // document.querySelector("#search").value="";
      }else{
        fetchmovie(popularUrl);
        $("#search").val("");
        //document.querySelector("#search").value="";
   }
  };
  
});

// Search Button
$("#btn").click(()=>{
    let val=$("#search").val();
    if(val){
        fetchmovie(searchUrl+"&query="+val);
        $("#search").val("");
       // document.querySelector("#search").value="";
       }else{
         fetchmovie(popularUrl);
         $("#search").val("");
         //document.querySelector("#search").value="";
    }
});

// Home
$("#home").click(()=>{
    window.screenY(0,0);
})
$("#navbar").click((e)=>{
    console.log(e.target)
})
//$("#navbar").first().addClass("navbar-brand");
let nav=$("#navbar").first();
console.log(nav)
console.log(document.querySelector("#navbar").firstElementChild)