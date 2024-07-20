// setup
var tl = gsap.timeline({ paused: true });

let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

gsap.set(spanBefore, {
  background: "#000",
});

gsap.set(".menu", { visibility: "hidden" });
// toggle

function revealMenuItem() {
  const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

  tl.to("#hamburger", 1, {
    marginTop: "-5px",
    x: -40,
    y: 40,
    ease: "power2.inOut",
  });

  tl.to(
    "#hamburger span",
    0.9,
    {
      background: "white",
      ease: "power2.inOut",
    },
    "<"
  );
  tl.to(
    spanBefore,
    0.9,
    {
      background: "white",
      width: "30px",
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(
    ".btn .btn-outline",
    1,
    {
      x: -40,
      y: 40,
      width: "120px",
      height: "120px",
      border: "1px solid #e2e2dc",
      ease: "power2.inOut",
    },
    "<"
  );
  tl.from(
    ".overlay",
    1,
    {
      top: "-115%",
      ease: "power4.inOut",
    },
    "<"
  ).from(
    ".overlay>svg>path",
    1.5,
    {
      attr: {
        d: start,
      },
      ease: "power4.inOut",
    },
    "<"
  );

  tl.to(".menu", 0.8, {
    visibility: "visible",
    ease: "power4.inOut",
  });

  tl.to(
    ".menu-item>a",
    0.7,
    {
      top: 0,
      ease: "power4.inOut",
      opacity: 1,
      stagger: {
        amount: 0.7,
      },
    },
    "-=1"
  ).reverse();
}

revealMenuItem();
// how to reveal
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  // hamburger.style.backgroundColor = "red";
  let toggle = document.querySelector("#hamburger").classList.toggle("active");
  console.log(toggle);
  if (toggle) {
    tl.play();
  } else {
    tl.reverse();
  }
});
