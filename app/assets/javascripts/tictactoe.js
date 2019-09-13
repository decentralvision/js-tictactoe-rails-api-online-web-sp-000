// Code your JavaScript / jQuery solution here
function player() {
  if (window.turn === 0) {
    return "X"
  } else {
    return "O"
  }
}

function updateState(el) {
  $(el).text(player())
}
