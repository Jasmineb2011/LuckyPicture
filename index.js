function changeBackground() {
  var picId = document.getElementById('nPic').value;
  document.body.style.backgroundImage = "url(https:picsum.photos/2000/1000?image="+picId+")";
}
function changeBlur() {
  var picId = document.getElementById('nPic').value;
  document.body.style.backgroundImage = "url(https:picsum.photos/2000/1000?image="+picId+"&blur)";
}
function changeGray() {
  var picId = document.getElementById('nPic').value;
  document.body.style.backgroundImage = "url(https://picsum.photos/g/2000/1000?image="+picId+")";
}
