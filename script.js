// Elements
const $bottomSheetContainer = document.querySelector("#container");
const $bottomSheet = document.querySelector("#bottom-sheet");
const $btnOpen = document.querySelector("#btn-open");
const $btnClose = document.querySelector("#btn-close");

// Dark
const $btnLight = document.querySelector("#btn-light");
const $btnDark = document.querySelector("#btn-dark");
const $html = document.documentElement;

// Functions
function open() {
  $bottomSheetContainer.classList.toggle("!visible");
  $bottomSheet.classList.toggle("translate-y-0");
}

function close() {
  $bottomSheet.classList.remove("translate-y-0");

  setTimeout(() => {
    $bottomSheetContainer.classList.remove("!visible");
  }, 500);
}

// Bind
$btnOpen.addEventListener("click", open, false);
$btnClose.addEventListener("click", close, false);

// prettier-ignore
$btnLight.addEventListener("click", function () {
    $html.classList.remove("dark");
}, false);

// prettier-ignore
$btnDark.addEventListener("click", function () {
    $html.classList.add("dark");
}, false);
