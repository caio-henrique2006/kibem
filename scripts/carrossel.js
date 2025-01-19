let img_index = 0;
const carousel_img = [
  "/kibem/assets/carousel/img_1.png",
  "/kibem/assets/carousel/img_2.png",
  "/kibem/assets/carousel/img_3.png",
];
const path_selected_dot = "/kibem/assets/dot_selected.svg";
const path_not_selected_dot = "/kibem/assets/dot_not_selected.svg";

function changeImage(img_url) {
  const current_slide_img = document.getElementById("current-slide-img");
  const current_dot = document.getElementById("dot_" + img_url);
  carousel_img.forEach((url) => {
    document.getElementById("dot_" + url).src = path_not_selected_dot;
  });
  current_dot.src = path_selected_dot;
  current_slide_img.src = img_url;
}

function nextImage(value) {
  img_index += value;
  if (img_index > carousel_img.length - 1) {
    img_index = 0;
  } else if (img_index < 0) {
    img_index = carousel_img.length - 1;
  }
  changeImage(carousel_img[img_index]);
}

function displayDots() {
  const display = document.getElementById("dot-place");
  carousel_img.forEach((url) => {
    display.innerHTML += `
          <img src=${path_not_selected_dot} width="40px" class="dot" onclick="changeImage('${url}')" id='dot_${url}' active='false'></img>
        `;
  });
  changeImage(carousel_img[0]);
}
displayDots();
