const body = document.body;
const container = document.querySelector('.container');

const colors = ['green', 'pink', 'purple', 'orange', 'blue', 'black'];

for (i = 0; i <= 5; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('pic');
  newDiv.style.background = colors[i];
  newDiv.style.zIndex = i;
  newDiv.style.opacity = 0;
  container.append(newDiv);
}

// const pics = document.querySelectorAll('.pic');

// pics.forEach((pic) => {
//   pic.addEventListener('mousemove', (e) => {
//     console.log(e.offsetX);
//   });
// });

// for (i = 0; i <= 5; i++) {
//   const newSpan = document.createElement('span');
//   newSpan.style.display = 'inline-block';
//   newSpan.style.height = '100%';
//   newSpan.style.width = 100 / 6 + '%';
//   newSpan.style.background = colors[i];
//   newSpan.style.zIndex = 10;
//   container.append(newSpan);
// }

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const pics = document.querySelectorAll('.pic');
pics[0].style.opacity = 1;

container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const cWidth = container.offsetWidth;
  if (x > 0 && x < cWidth / 6) {
    pics[0].style.opacity = scale(x, 0, cWidth / 6, 1, 0);
    pics[1].style.opacity = scale(x, 0, cWidth / 6, 0, 1);
  }
  if (x >= cWidth / 6 && x < (cWidth / 6) * 2) {
    pics[1].style.opacity = scale(x, cWidth / 6, (cWidth / 6) * 2, 1, 0);
    pics[2].style.opacity = scale(x, cWidth / 6, (cWidth / 6) * 2, 0, 1);
  }
  if (x >= (cWidth / 6) * 2 && x < (cWidth / 6) * 3) {
    pics[2].style.opacity = scale(x, (cWidth / 6) * 2, (cWidth / 6) * 3, 1, 0);
    pics[3].style.opacity = scale(x, (cWidth / 6) * 2, (cWidth / 6) * 3, 0, 1);
  }
  if (x >= (cWidth / 6) * 3 && x < (cWidth / 6) * 4) {
    pics[3].style.opacity = scale(x, (cWidth / 6) * 3, (cWidth / 6) * 4, 1, 0);
    pics[4].style.opacity = scale(x, (cWidth / 6) * 3, (cWidth / 6) * 4, 0, 1);
  }
  if (x >= (cWidth / 6) * 4 && x < (cWidth / 6) * 5) {
    pics[4].style.opacity = scale(x, (cWidth / 6) * 4, (cWidth / 6) * 5, 1, 0);
    pics[5].style.opacity = scale(x, (cWidth / 6) * 4, (cWidth / 6) * 5, 0, 1);
  }
  if (x >= (cWidth / 6) * 5 && x < (cWidth / 6) * 6) {
    // pics[5].style.opacity = scale(x, (cWidth / 6) * 5, (cWidth / 6) * 6, 1, 0);
    // pics[6].style.opacity = scale(x, (cWidth / 6) * 5, (cWidth / 6) * 6, 0, 1);
  }
});
