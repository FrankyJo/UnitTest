const multFirstNum = document.querySelector('.first__multipl');
const multSecondNum = document.querySelector('.second__multipl');
const multAnswer = document.querySelector('.ans__multipl');

const mult = (a, b) => {
  return Number(a) * Number(b);
}

document.addEventListener('DOMContentLoaded', function () {

  multFirstNum.addEventListener('change', () => {
    if (multFirstNum.value == '' || multSecondNum.value == '') {
      multAnswer.value = 0
    } else {
      multAnswer.value = mult(multFirstNum.value, multSecondNum.value)
    }
  })

  multSecondNum.addEventListener('change', () => {
    if (multFirstNum.value == '' || multSecondNum.value == '') {
      multAnswer.value = 0
    } else {
      multAnswer.value = mult(multFirstNum.value, multSecondNum.value)
    }
  })

})

export {mult}

