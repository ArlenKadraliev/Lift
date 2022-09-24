let lift = document.querySelector("#lift");
let floor = 0;
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let thirteen = document.querySelector("#thirteen");
let fourteen = document.querySelector("#fourteen");
let fiveteen = document.querySelector("#fiveteen");
let sixteen = document.querySelector("#sixteen");

// let info = lvl.value;

function rander() {
  lift.style.bottom = `${floor}px`;
}

first.addEventListener("click", () => {
  floor = 33;
  rander();
  lift.style.transition = "2s";
});
second.addEventListener("click", () => {
  floor = 66;
  rander();
  lift.style.transition = "2s";
});

third.addEventListener("click", () => {
  floor = 99;
  rander();
  lift.style.transition = "2s";
});
fourth.addEventListener("click", () => {
  floor = 132;
  rander();
  lift.style.transition = "2s";
});
five.addEventListener("click", () => {
  floor = 165;
  rander();
  lift.style.transition = "2s";
});
six.addEventListener("click", () => {
  floor = 198;
  rander();
  lift.style.transition = "2s";
});
seven.addEventListener("click", () => {
  floor = 231;
  rander();
  lift.style.transition = "2s";
});
eight.addEventListener("click", () => {
  floor = 264;
  rander();
  lift.style.transition = "2s";
});
nine.addEventListener("click", () => {
  floor = 297;
  rander();
  lift.style.transition = "2s";
});
ten.addEventListener("click", () => {
  floor = 330;
  rander();
  lift.style.transition = "2s";
});
eleven.addEventListener("click", () => {
  floor = 363;
  rander();
  lift.style.transition = "2s";
});
twelve.addEventListener("click", () => {
  floor = 396;
  rander();
  lift.style.transition = "2s";
});
thirteen.addEventListener("click", () => {
  floor = 429;
  rander();
  lift.style.transition = "2s";
});
fourteen.addEventListener("click", () => {
  floor = 462;
  rander();
  lift.style.transition = "2s";
});
fiveteen.addEventListener("click", () => {
  floor = 495;
  lift.style.transition = "2s";
  rander();
});
sixteen.addEventListener("click", () => {
  floor = 528;
  rander();
  lift.style.transition = "2s";
});
