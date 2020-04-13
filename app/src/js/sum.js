const sumFirstNum = document.querySelector('.first__sum');
const sumSecondNum = document.querySelector('.second__sum');
const sumAnswer = document.querySelector('.ans__sum');

const sum = (a, b) => {
  return Number(a) + Number(b);
}

document.addEventListener('DOMContentLoaded', function () {

  sumFirstNum.addEventListener('change', () => {
    if (sumFirstNum.value == '' || sumSecondNum.value == '') {
      sumAnswer.value = 0
    } else {
      sumAnswer.value = sum(sumFirstNum.value, sumSecondNum.value)
    }
  })
  sumSecondNum.addEventListener('change', () => {
    if (sumFirstNum.value == '' || sumSecondNum.value == '') {
      sumAnswer.value = 0
    } else {
      sumAnswer.value = sum(sumFirstNum.value, sumSecondNum.value)
    }
  })

})

export {sum}
