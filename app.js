const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outPutBox = document.querySelector("#output-box");
const btnClose = document.querySelector("#close");
const privacy = document.querySelector(".privacy")
const luckySection = document.querySelector(".lucky-div");
const unluckySection = document.querySelector(".unlucky-div");

function compareValues(sum, luckyNumber) {
  if (luckyNumber != '') {
    if (sum % luckyNumber === 0) {
      outPutBox.innerText = "Your birthday is lucky!";
      luckySection.style.display = "block";
      unluckySection.style.display = "none";
    } else {
      outPutBox.innerText = "Your birthday is not lucky, don't worry we make our own luck!";
      unluckySection.style.display = "block";
      luckySection.style.display = "none";
    }
  } else {
    outPutBox.innerText = "Please enter the lucky number"
  }

}


function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob)
    compareValues(sum, luckyNumber.value)
  else
    outPutBox.innerText = "Please enter both the fields "
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", " ");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));

  }
  return sum;
}

btnClose.addEventListener("click",()=>{privacy.style.display = "none";})

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)