const input = document.querySelector("input");
const drop = document.querySelector("#dropdown");
const search = document.querySelector(".search");
const btns = document.querySelector("#buttons");
const goffer = document.querySelector(".goffer");
const glink = document.querySelector(".glink");


input.addEventListener("mousedown", ()=> {
  console.log("Hello there");

  btns.style.display = "none";
  goffer.style.display = "none";
  glink.style.display = "none";

  if (drop.style.display === "none") {
    drop.style.display = "block";
    btns.style.display = "none";
    goffer.style.display = "none";
    glink.style.display = "none";
    search.style.borderRadius = "20px 20px 0px 0px";
  } else {
    drop.style.display = "none";
    btns.style.display = "flex";
    goffer.style.display = "block";
    glink.style.display = "block";
    search.style.borderRadius = "50px";
  }

});
