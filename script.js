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

for (i = 0; i <= 5; i++) {
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
  if (i < 10) {
    newImg.src = `0${i + 1}.jpg`;
  } else {
    newImg.src = `${i + 1}.jpg`;
  }
  //   newDiv.style.background = 'url("./img/")';
  newImg.style.zIndex = i;
  newImg.style.opacity = 0;

  container.appendChild(newImg);
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

container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const cWidth = container.offsetWidth;
  console.log(x);
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
