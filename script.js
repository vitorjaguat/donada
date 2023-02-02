const body = document.body;
const container = document.querySelector('.container');

const colors = ['green', 'pink', 'purple', 'orange', 'blue', 'black'];
const imgSrcs = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

for (i = 0; i < 24; i++) {
  //   const newDiv = document.createElement('div');
  //   newDiv.classList.add('pic');
  //   newDiv.style.background = colors[i];
  //   if (+imgSrcs[i] < 10) {
  //     newDiv.style.backgroundImage = `url(./img/0${i + 1}.jpg)`;
  //   } else {
  //     newDiv.style.backgroundImage = `url(./img/${i + 1}.jpg)`;
  //   }
  const newImg = document.createElement('img');
  newImg.classList.add('pic');
  if (i < 9) {
    newImg.src = `0${i + 1}.jpg`;
  } else {
    newImg.src = `${i + 1}.jpg`;
  }
  //   newDiv.style.background = 'url("./img/")';
  newImg.style.zIndex = i;
  newImg.style.opacity = 0;

  container.append(newImg);
}

const pics = document.querySelectorAll('.pic');

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

// function handleOpacity(element, children) {
//   element.addEventListener('mousemove', (e) => {
//     const x = e.offsetX;
//     const cWidth = element.offsetWidth;
//     children.forEach((child, number, array) => {
//       if (x >= (number * cWidth) / 6 && x < ((number + 1) * cWidth) / 6) {
//         children[number].style.opacity = scale(
//           x,
//           (number * cWidth) / 6,
//           cWidth / 6 + (number * cWidth) / 6,
//           1,
//           0
//         );
//         if (number < array.length - 1) {
//           array[number + 1].style.opacity = scale(
//             x,
//             (number * cWidth) / 6,
//             cWidth / 6 + (number * cWidth) / 6,
//             0,
//             1
//           );
//         } else {
//           child.style.opacity = 1;
//         }
//       }
//     });
//   });
// }

// handleOpacity(container, pics);

pics[0].style.opacity = 1;

container.addEventListener('mouseenter', (e) => {
  pics.forEach((pic) => (pic.style.opacity = 0));
});
container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const cWidth = container.offsetWidth;
  const l = pics.length;
  console.log(x);
  //   console.log(cWidth);
  if (x > 0 && x < cWidth / l) {
    pics[0].style.opacity = scale(x, 0, cWidth / l, 1, 0);
    pics[1].style.opacity = scale(x, 0, cWidth / l, 0, 1);
  }
  if (x >= cWidth / l && x < (cWidth / l) * 2) {
    pics[1].style.opacity = scale(x, cWidth / l, (cWidth / l) * 2, 1, 0);
    pics[2].style.opacity = scale(x, cWidth / l, (cWidth / l) * 2, 0, 1);
  }
  if (x >= (cWidth / l) * 2 && x < (cWidth / l) * 3) {
    pics[2].style.opacity = scale(x, (cWidth / l) * 2, (cWidth / l) * 3, 1, 0);
    pics[3].style.opacity = scale(x, (cWidth / l) * 2, (cWidth / l) * 3, 0, 1);
  }
  if (x >= (cWidth / l) * 3 && x < (cWidth / l) * 4) {
    pics[3].style.opacity = scale(x, (cWidth / l) * 3, (cWidth / l) * 4, 1, 0);
    pics[4].style.opacity = scale(x, (cWidth / l) * 3, (cWidth / l) * 4, 0, 1);
  }
  if (x >= (cWidth / l) * 4 && x < (cWidth / l) * 5) {
    pics[4].style.opacity = scale(x, (cWidth / l) * 4, (cWidth / l) * 5, 1, 0);
    pics[5].style.opacity = scale(x, (cWidth / l) * 4, (cWidth / l) * 5, 0, 1);
  }
  if (x >= (cWidth / l) * 5 && x < (cWidth / l) * 6) {
    // pics[5].style.opacity = 1;
    pics[5].style.opacity = scale(x, (cWidth / l) * 5, (cWidth / l) * 6, 1, 0);
    pics[6].style.opacity = scale(x, (cWidth / l) * 5, (cWidth / l) * 6, 0, 1);
  }
  if (x >= (cWidth / l) * 6 && x < (cWidth / l) * 7) {
    // pics[5].style.opacity = 1;
    pics[6].style.opacity = scale(x, (cWidth / l) * 6, (cWidth / l) * 7, 1, 0);
    pics[7].style.opacity = scale(x, (cWidth / l) * 6, (cWidth / l) * 7, 0, 1);
  }
  if (x >= (cWidth / l) * 7 && x < (cWidth / l) * 8) {
    // pics[5].style.opacity = 1;
    pics[7].style.opacity = scale(x, (cWidth / l) * 7, (cWidth / l) * 8, 1, 0);
    pics[8].style.opacity = scale(x, (cWidth / l) * 7, (cWidth / l) * 8, 0, 1);
  }
  if (x >= (cWidth / l) * 8 && x < (cWidth / l) * 9) {
    // pics[5].style.opacity = 1;
    pics[8].style.opacity = scale(x, (cWidth / l) * 8, (cWidth / l) * 9, 1, 0);
    pics[9].style.opacity = scale(x, (cWidth / l) * 8, (cWidth / l) * 9, 0, 1);
  }
  if (x >= (cWidth / l) * 9 && x < (cWidth / l) * 10) {
    // pics[5].style.opacity = 1;
    pics[9].style.opacity = scale(x, (cWidth / l) * 9, (cWidth / l) * 10, 1, 0);
    pics[10].style.opacity = scale(
      x,
      (cWidth / l) * 9,
      (cWidth / l) * 10,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 10 && x < (cWidth / l) * 11) {
    // pics[5].style.opacity = 1;
    pics[10].style.opacity = scale(
      x,
      (cWidth / l) * 10,
      (cWidth / l) * 11,
      1,
      0
    );
    pics[11].style.opacity = scale(
      x,
      (cWidth / l) * 10,
      (cWidth / l) * 11,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 11 && x < (cWidth / l) * 12) {
    // pics[5].style.opacity = 1;
    pics[11].style.opacity = scale(
      x,
      (cWidth / l) * 11,
      (cWidth / l) * 12,
      1,
      0
    );
    pics[12].style.opacity = scale(
      x,
      (cWidth / l) * 11,
      (cWidth / l) * 12,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 12 && x < (cWidth / l) * 13) {
    // pics[5].style.opacity = 1;
    pics[12].style.opacity = scale(
      x,
      (cWidth / l) * 12,
      (cWidth / l) * 13,
      1,
      0
    );
    pics[13].style.opacity = scale(
      x,
      (cWidth / l) * 12,
      (cWidth / l) * 13,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 13 && x < (cWidth / l) * 14) {
    // pics[5].style.opacity = 1;
    pics[13].style.opacity = scale(
      x,
      (cWidth / l) * 13,
      (cWidth / l) * 14,
      1,
      0
    );
    pics[14].style.opacity = scale(
      x,
      (cWidth / l) * 13,
      (cWidth / l) * 14,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 14 && x < (cWidth / l) * 15) {
    // pics[5].style.opacity = 1;
    pics[14].style.opacity = scale(
      x,
      (cWidth / l) * 14,
      (cWidth / l) * 15,
      1,
      0
    );
    pics[15].style.opacity = scale(
      x,
      (cWidth / l) * 14,
      (cWidth / l) * 15,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 15 && x < (cWidth / l) * 16) {
    // pics[5].style.opacity = 1;
    pics[15].style.opacity = scale(
      x,
      (cWidth / l) * 15,
      (cWidth / l) * 16,
      1,
      0
    );
    pics[16].style.opacity = scale(
      x,
      (cWidth / l) * 15,
      (cWidth / l) * 16,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 16 && x < (cWidth / l) * 17) {
    // pics[5].style.opacity = 1;
    pics[16].style.opacity = scale(
      x,
      (cWidth / l) * 16,
      (cWidth / l) * 17,
      1,
      0
    );
    pics[17].style.opacity = scale(
      x,
      (cWidth / l) * 16,
      (cWidth / l) * 17,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 17 && x < (cWidth / l) * 18) {
    pics[17].style.opacity = scale(
      x,
      (cWidth / l) * 17,
      (cWidth / l) * 18,
      1,
      0
    );
    pics[18].style.opacity = scale(
      x,
      (cWidth / l) * 17,
      (cWidth / l) * 18,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 18 && x < (cWidth / l) * 19) {
    pics[18].style.opacity = scale(
      x,
      (cWidth / l) * 18,
      (cWidth / l) * 19,
      1,
      0
    );
    pics[19].style.opacity = scale(
      x,
      (cWidth / l) * 18,
      (cWidth / l) * 19,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 19 && x < (cWidth / l) * 20) {
    pics[19].style.opacity = scale(
      x,
      (cWidth / l) * 19,
      (cWidth / l) * 20,
      1,
      0
    );
    pics[20].style.opacity = scale(
      x,
      (cWidth / l) * 19,
      (cWidth / l) * 20,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 20 && x < (cWidth / l) * 21) {
    pics[20].style.opacity = scale(
      x,
      (cWidth / l) * 20,
      (cWidth / l) * 21,
      1,
      0
    );
    pics[21].style.opacity = scale(
      x,
      (cWidth / l) * 20,
      (cWidth / l) * 21,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 21 && x < (cWidth / l) * 22) {
    pics[21].style.opacity = scale(
      x,
      (cWidth / l) * 21,
      (cWidth / l) * 22,
      1,
      0
    );
    pics[22].style.opacity = scale(
      x,
      (cWidth / l) * 21,
      (cWidth / l) * 22,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 22 && x < (cWidth / l) * 23) {
    pics[22].style.opacity = scale(
      x,
      (cWidth / l) * 22,
      (cWidth / l) * 23,
      1,
      0
    );
    pics[23].style.opacity = scale(
      x,
      (cWidth / l) * 22,
      (cWidth / l) * 23,
      0,
      1
    );
  }
  if (x >= (cWidth / l) * 23 && x < (cWidth / l) * 24) {
    pics[23].style.opacity = 1;
    // pics[23].style.opacity = scale(x, (cWidth / 6) * 23, (cWidth / 6) * 24, 1, 0);
    // pics[24].style.opacity = scale(x, (cWidth / 6) * 23, (cWidth / 6) * 24, 0, 1);
  }
});
