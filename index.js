// select rating

// function select(x){
//     x.classList.toggle("select");
// }

document.querySelectorAll(".split-item").forEach( btn => {
    btn.addEventListener("click", selectRating)
});

function selectRating(x) {
    console.log(x);
    document.querySelectorAll(".split-item").forEach(btn => {
        btn.classList.remove("select");
    });
    if (x.target.classList.contains("split-item")){
        x.target.classList.add("select");
    }
}

//Hover effect
function selectPointer(x){
    x.classList.add("hover-effect");
}
function unselectPointer(x){
    x.classList.remove("hover-effect");
}

//submit function

function submitEl(){
    // console.log("clicked");
    document.querySelector(".card-1").classList.add("hide");
    document.querySelector(".card-2").classList.remove("hide");
    let rating = document.querySelector(".select").innerHTML;
    // console.log(rating);
    let ratingResult = document.querySelector(".message-paragraph").innerHTML = "You selected " + rating + " out of 5!";
    // console.log(ratingResult);
}