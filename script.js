f_span = document.getElementsByClassName("f_span");
s_span = document.getElementsByClassName("s_span");
arrow = document.getElementsByClassName("arrow");
info = document.getElementsByClassName("info");
img = document.getElementsByClassName("img");
block = document.getElementsByClassName("block");

function toggleAnimation(index, flag) {
    img[index].classList.toggle("img_ani_utility");
    info[index].classList.toggle("info_ani_utility");
    arrow[index].classList.toggle("arr_ani_utility");
    let vis = "visible", c = "black";
    if (flag == 1) { vis = "hidden"; c = "white"; }
    s_span[index].style.visibility = vis;
    f_span[index].style.color = c;
}

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('mouseover', function () {
        toggleAnimation(i, 1);
    });
    block[i].addEventListener('mouseout', function () {
        toggleAnimation(i, 0);
    });
}

// Section: 3
img_wrapper = document.getElementsByClassName("img_wrapper");
img_third_sec = document.getElementsByClassName("img_third_sec");
stack_wrapper = document.getElementsByClassName("stack_wrapper");
heart_wrapper = document.getElementsByClassName("heart_wrapper");
tip_right = document.getElementsByClassName("tip_right");
text_icon = document.getElementsByClassName("text_icon");
btn1 = document.getElementsByClassName("btn1");
btn2 = document.getElementsByClassName("btn2");

function toggleAnimation_3(index) {
    img_third_sec[index].classList.toggle("img_third_ani_utility");
    btn1[index].classList.toggle("btn1_ani_utility");
    btn2[index].classList.toggle("btn2_ani_utility");
    stack_wrapper[index].classList.toggle("s_h_wrapper_ani_utility");
    heart_wrapper[index].classList.toggle("s_h_wrapper_ani_utility");
}

for (let i = 0; i < img_wrapper.length; i++) {
    img_wrapper[i].addEventListener('mouseover', function () {
        toggleAnimation_3(i);
    });
    img_wrapper[i].addEventListener('mouseout', function () {
        toggleAnimation_3(i);
    });
}

function toggleAnimation_4(index, flag){
    let vis_1 = "visible";
    if (flag == 0) { vis_1 = "hidden"; }
    tip_right[index].style.visibility = vis_1;
    console.log(tip_right[index]);
    text_icon[index].style.visibility = vis_1;
    console.log(text_icon[index]);
}


for (let i = 0, j = 0; i < heart_wrapper.length; i++, j+=2) {
    heart_wrapper[i].addEventListener('mouseover', function () {
        toggleAnimation_4(j, 1);
    });
    heart_wrapper[i].addEventListener('mouseout', function () {
        toggleAnimation_4(j, 0);
    });
}
for (let i = 0, j = 1; i < heart_wrapper.length; i++, j+=2) {
    stack_wrapper[i].addEventListener('mouseover', function () {
        toggleAnimation_4(j, 1);
    });
    stack_wrapper[i].addEventListener('mouseout', function () {
        toggleAnimation_4(j, 0);
    });
}

ani_dot = document.getElementsByClassName("ani_dot")[0];
dot_card = document.getElementsByClassName("dot_card")[0];
ani_dot.onmouseover=()=>{
    dot_card.style.visibility = "visible";
}
ani_dot.onmouseout=()=>{
    dot_card.style.visibility = "hidden";
}

const dealEnd = new Date('2023-12-05T08:12:45');

setInterval(function() {
    const now = new Date();
    const timeRemaining = dealEnd - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }, 1000);