function changeBackground() {
  var picIdNum = document.getElementById('picId').value;
  document.body.style.backgroundImage = "url(https://picsum.photos/2000/1000?image="+picIdNum+")";
}
function changeBlur() {
  var picIdNum = document.getElementById('picId').value;
  document.body.style.backgroundImage = "url(https://picsum.photos/2000/1000?image="+picIdNum+"&blur)";
}
function changeGray() {
  var picIdNum = document.getElementById('picId').value;
  document.body.style.backgroundImage = "url(https://picsum.photos/g/2000/1000?image="+picIdNum+")";
}
function downloadPic(event){
  event.preventDefault();
  fetch('https://picsum.photos/list')
    .then(function(response) {
      return response.json();
      })
    .then(function(data) {
      var picIdNum = document.getElementById('picId').value;
      window.open(data[picIdNum].post_url, '_blank');
      })
    .catch(function(error){
      console.log(error);
      })
 }
 document.getElementById("download").addEventListener("click", downloadPic);
