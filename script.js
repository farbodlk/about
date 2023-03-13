const pageRej = document.querySelector(".animate-down");
const closeBtn = document.querySelector(".fa-solid ");
const aboutWarrper = document.getElementById("about-warpper");
const aboutlink = document.getElementById("nav-link");
aboutlink.addEventListener("click", changPageAbout);
function changPageAbout() {
  pageRej.classList.add("down-animete");
  setTimeout(() => {
    aboutWarrper.classList.add("active");
  }, 500);
}



const closeRusume = document.querySelector(".close-resume ");
const resumePage = document.getElementById("resume-page");
const resumelink = document.getElementById("nav-link1");
resumelink.addEventListener("click", changPageResume);
function changPageResume() {
  pageRej.classList.add("down-animete");
  setTimeout(() => {
    resumePage.classList.add("active");
  }, 500);
}


const closePortfolio = document.querySelector(".close-portfolio ");
const PortfolioPage = document.getElementById("protfolio-page");
const Portfoliolink = document.getElementById("nav-link3");
Portfoliolink.addEventListener("click", changPagePortfolio);
function changPagePortfolio() {
  pageRej.classList.add("down-animete");
  setTimeout(() => {
    PortfolioPage.classList.add("active");
  }, 500);
}


function closePage() {
  pageRej.classList.remove("down-animete");

  setTimeout(() => {
    aboutWarrper.classList.remove("active");
    resumePage.classList.remove("active");
    PortfolioPage.classList.remove("active");
  }, 800);
}
closeBtn.addEventListener("click", closePage);
closeRusume.addEventListener("click", closePage);
closePortfolio.addEventListener("click", closePage);





const text = document.querySelector(".sec-text");
const textLoud = () => {
  setTimeout(() => {
    text.textContent = "Developer";
  }, 0);

  setTimeout(() => {
    text.textContent = "Designer";
  }, 4000);

  setTimeout(() => {
    text.textContent = "freelancer";
  }, 8000);
};
textLoud();
setInterval(textLoud, 12000);

jQuery(document).ready(function () {
  /*MODIFICATION START*/
  jQuery(document).on("scroll", function () {
    if (jQuery("html,body").scrollTop() > jQuery("#first-sec").height()) {
      /*MODIFICATION END*/
      jQuery(".progress-bar").each(function () {
        jQuery(this)
          .find(".progress-content")
          .animate(
            {
              width: jQuery(this).attr("data-percentage"),
            },
            2000
          );

        jQuery(this)
          .find(".progress-number-mark")
          .animate(
            {
              left: jQuery(this).attr("data-percentage"),
            },
            {
              duration: 2000,
              step: function (now, fx) {
                var data = Math.round(now);
                jQuery(this)
                  .find(".percent")
                  .html(data + "%");
              },
            }
          );
      });
      /*MODIFICATION START*/
    }
  });
  /*MODIFICATION END*/
});

var allLi = document.querySelectorAll(".filter-control li");
var all = document.querySelectorAll(".img-fluid");
for (var t = 0; t < allLi.length; t++) {
  allLi[t].addEventListener("click", function () {
    for (var z = 0; z < all.length; z++) {
      if (all[z].src.includes(this.innerHTML)) {
        all[z].parentElement.style.display = "block";
      } else {
        all[z].parentElement.style.display = "none";
      }
      if (this.innerHTML == "All") {
        all[z].parentElement.style.display = "block";
      }
    }
  });
}
