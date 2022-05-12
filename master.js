function makeSlid(name) {
    let arrowL2 = document.querySelector(`.${name} .arrow-l`);
    let arrow2 = document.querySelector(`.${name} .arrow`);
    let coursesBoxs2 = document.querySelectorAll(`.${document.querySelector(`.${name}`).dataset.name} .box`);
    let number;
    if (document.body.offsetWidth > 991) {
        number = 4;
    } else if (document.body.offsetWidth < 991 && document.body.offsetWidth > 767) {
        number = 3;
    } else if (document.body.offsetWidth < 767 && document.body.offsetWidth > 576) {
        number = 2;
    } else if (document.body.offsetWidth < 576) {
        number = 1;
    }
    let indexOne = 0;
    let indexTwo = coursesBoxs2.length - 1;
    arrow2.addEventListener("click", () => {
        indexTwo = coursesBoxs2.length - 1;
        arrowL2.style.display = "block";
        coursesBoxs2[indexOne].style.display = "none";
        coursesBoxs2[indexOne + number].style.display = "block";
        if (indexOne + (number + 1) == coursesBoxs2.length) {
            arrow2.style.display = "none";
        }
        indexOne++;
    });
    arrowL2.addEventListener("click", () => {
        indexOne = 0;    
        arrow2.style.display = "block";
        coursesBoxs2[indexTwo - number].style.display = "block";
        coursesBoxs2[indexTwo].style.display = "none";
        if (indexTwo == number) {
            arrowL2.style.display = "none";
        }
        indexTwo--;
    });
}
makeSlid("python");
makeSlid("viewing");

let heading = document.querySelectorAll(".heading h4");
let contents = document.querySelectorAll(".courses .content");
function changeCourses(name) {
    heading.forEach((head) => {
        head.addEventListener("click", () => { 
            heading.forEach((h) => {
                h.classList.remove("active");
            });
            head.classList.add("active");
            if (head.innerHTML == head.parentElement.parentElement.querySelector(`.${name}`).dataset.name) {
                contents.forEach((content) => {
                    content.style.display = "none";
                });
                head.parentElement.parentElement.querySelector(`.${name}`).style.display = "block";
            }
            makeSlid(`${name}`);
        });
    });
}
changeCourses("excel");
changeCourses("python");
changeCourses("webDevelopment");
changeCourses("javaScript");

let toggle = document.querySelector(".toggle .open-aside");
let aside = document.querySelector("aside");
let closeAside = document.querySelector(".close .close-aside");
let over = document.getElementById("over");

toggle.addEventListener("click", () => {
    aside.style.left = "0";
    over.classList.add("overOn");
});
closeAside.addEventListener("click", () => {
    aside.style.left = "-270px";
    over.classList.remove("overOn");
});
document.onscroll = () => {
    aside.style.left = "-270px";
    over.classList.remove("overOn");
}
if (aside.style.left == 0) {
    document.addEventListener("click", (e) => {
        if (e.target.clientWidth > 270) {    
            aside.style.left = "-270px";
            over.classList.remove("overOn");
        }
    })
}

let namesOfJop = document.querySelectorAll("aside .nameOfJop");
let allcontent = document.querySelectorAll("aside .mid .box .thejopcontent");
let bottomofaside = document.querySelector(".bottomofaside");
let topofside = document.querySelector(".topofside");
let nameofmid = document.querySelector(".nameofmid");

namesOfJop.forEach((name) => {
    name.addEventListener("click", () => {
        name.parentElement.parentElement.querySelector(".choises").classList.add("left-15");
        allcontent.forEach((content) => {
            content.style.display = "none";
        });
        bottomofaside.style.display = "none";
        topofside.style.display = "none";
        nameofmid.style.display = "none";        
        name.parentElement.parentElement.querySelector(".choises .top").addEventListener("click", () => {
            name.parentElement.parentElement.querySelector(".choises").classList.remove("left-15");
            bottomofaside.style.display = "block";
            topofside.style.display = "block";
            nameofmid.style.display = "block";
            allcontent.forEach((content) => {
                content.style.display = "flex";
            });
        });
    });
});

function scrollToSection(nameOflink, nameOfSection) {
    nameOflink.addEventListener("click", () => {
        setTimeout( () => {
            nameOfSection.scrollIntoView({behavior: "smooth"})
        },500)
    })
}
scrollToSection(udemyBusiness, udemyBusinessSection);
scrollToSection(techOnUdemy, techOnUdemySection);

let i = 0;
let iTwo = 0;
let text = `So many courses starting at E£169.99`;
let textTwo = `Your future’s wide open, and so is our course library. Learn more for less — sale ends May 6.`;

function autoWrite() {
    if  (i < text.length) {
        landingPara.innerHTML += text[i]
        i++
        setTimeout(autoWrite, 50)
    }
}
autoWrite()

function autoWriteTwo() {
    if  (iTwo < textTwo.length) {
        landingParaTwo.innerHTML  += textTwo[iTwo]
        iTwo++;
        setTimeout(autoWriteTwo, 50)
    }
}
setTimeout(autoWriteTwo, text.length*50);