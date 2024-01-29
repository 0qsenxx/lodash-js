// !1
const sliderInputRangeRef = document.querySelector(".slider__input");
const sliderImgRef = document.querySelector(".slider__image");

const linkIdx = sliderImgRef.src.indexOf("m/") + 2;
const imgLink = sliderImgRef.src.split("");

sliderInputRangeRef.addEventListener(
  "input",
  _.debounce((evt) => {
    imgLink.splice(
      linkIdx,
      sliderImgRef.src.length - linkIdx,
      `${evt.target.value}x${evt.target.value}`
    );
    sliderImgRef.src = imgLink.join("");
    // console.log(sliderImgRef.src);
  }, 300)
);

// !2
const boxRef = document.getElementById("box");

function movingBox(evt) {
  boxRef.style.left = `${evt.clientX}px`;
  boxRef.style.top = `${evt.clientY}px`;
}

const debounce = _.debounce(movingBox, 100);

document.addEventListener("mousemove", _.debounce(movingBox, 100));
