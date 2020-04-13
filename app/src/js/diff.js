const diffFirstNum = document.querySelector('.first__diff');
const diffSecondNum = document.querySelector('.second__diff');
const diffAnswer = document.querySelector('.ans__diff');

const diff = (a, b) => {
  return Number(a) - Number(b);
}
document.addEventListener('DOMContentLoaded', function () {
  diffFirstNum.addEventListener('change', () => {
    if (diffFirstNum.value == '' || diffSecondNum.value == '') {
      diffAnswer.value = 0
    } else {
      diffAnswer.value = diff(diffFirstNum.value, diffSecondNum.value)
    }
  })

  diffSecondNum.addEventListener('change', () => {
    if (diffFirstNum.value == '' || diffSecondNum.value == '') {
      diffAnswer.value = 0
    } else {
      diffAnswer.value = diff(diffFirstNum.value, diffSecondNum.value)
    }
  })
})
export {diff}

