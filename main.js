let countN = 0;
let countp = document.getElementById("countp");
let savep = document.getElementById("savep");
let saved = 0;

function count() {
  countN += 1;
  countp.innerText = countN;
}

function save() {
  if (countN == 0) {
    alert("No Count Found");
  } else {
    if (saved == 0) {
      savep.innerText = "Last Count is: " + countN;
      countN = 0;
      countp.innerText = 0;
      saved = 1;
    } else {
      savep.innerText += "-" + countN;
      countp.innerText = 0;
    }
  }
}

function reset() {
  countp.innerText = 0;
  saved = 0;
  countN = 0;
  savep.innerText = "Start Counting";
}
