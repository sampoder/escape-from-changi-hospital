function reverseGhostImage() {
  if (document.getElementById('ghost-image').style.filter == `grayscale(1) invert(1)`) {
    document.getElementById('ghost-image').style.filter = `grayscale(1)`
  }
  else {
    document.getElementById('ghost-image').style.filter = `grayscale(1) invert(1)`
  }


}