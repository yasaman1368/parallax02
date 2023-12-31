const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const lezatHead = page1.querySelector("h2");
const page2Head = page2.querySelector("h1");
const spans = page2.querySelectorAll("h1 span");

console.log(spans);
const FIRST_MAX_SCROLL = 500;
const FIRST_MIN_HIDDEN = 350;
const FIRST_MAX_HIDDEN = 750;
const FIRST_P2 = 755;
const ScaleMath = 1800;
document.addEventListener("scroll", function (event) {
  let offsetScrollY = window.pageYOffset;
  // console.log(offsetScrollY);
  let p = 1 + offsetScrollY / FIRST_MAX_SCROLL;
  if (offsetScrollY < FIRST_MAX_SCROLL) {
    page1.hidden = false;
    page1.style.opacity = `1`;
    lezatHead.style.transform = `scale(${p})`;
  }
  if (
    offsetScrollY >= FIRST_MIN_HIDDEN &&
    offsetScrollY <= FIRST_MAX_HIDDEN
  ) {
    let op = 1.3 - offsetScrollY / FIRST_MAX_HIDDEN;

    page1.style.opacity = op > 0.32 ? op : 0;
  }
  if (offsetScrollY > FIRST_MAX_HIDDEN) {
    page1.hidden = true;
    let p = offsetScrollY / FIRST_P2;
    let y = offsetScrollY - FIRST_MAX_HIDDEN;

    spans[0].style.transform = `translateX(${y * 0.076}px)`;

    spans[0].style.color = `red`;
    spans[1].style.transform = `translateY(${y * 0.3}px)`;
    spans[2].style.transform = `translateX(${y * 0.5}px)`;
    spans[3].style.transform = `translateY(-${y * 0.3}px)`;
  }
  if (offsetScrollY > ScaleMath) {
    console.log(offsetScrollY);
    let k = offsetScrollY - ScaleMath;
    console.log(k);
    page2.style.transform = `translateY(${-k * 0.6}px)`;
  }
});