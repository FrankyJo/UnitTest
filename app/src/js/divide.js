const divideFirstNum = document.querySelector('.first__divide');
const divideSecondNum = document.querySelector('.second__divide');
const divideAnswer = document.querySelector('.ans__divide');

const divide = (a, b) => {
  return Number(a) / Number(b);
}
document.addEventListener('DOMContentLoaded', function () {
  divideFirstNum.addEventListener('change', () => {
    if (divideFirstNum.value == '' || divideSecondNum.value == '') {
      divideAnswer.value = 0
    } else {
      divideAnswer.value = divide(divideFirstNum.value, divideSecondNum.value)
    }
  })

  divideSecondNum.addEventListener('change', () => {
    if (divideFirstNum.value == '' || divideSecondNum.value == '') {
      divideAnswer.value = 0
    } else {
      divideAnswer.value = divide(divideFirstNum.value, divideSecondNum.value)
    }
  })
})

export {divide}
