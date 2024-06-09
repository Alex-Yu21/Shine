
function openContactsPopup() {
  document.getElementById('contactPopup').style.display = 'block';
}


window.onclick = function(event) {
  var popup = document.getElementById('contactPopup');
  if (event.target == popup) {
      popup.style.display = 'none';
  }
}
