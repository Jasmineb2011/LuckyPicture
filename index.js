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
function downloadPic(event){
  event.preventDefault();
  fetch('https://picsum.photos/list')
    .then(function(response) {
      return response.json();
    })
     .then(function(data) {
       var picId = document.getElementById('nPic').value;
       window.open(data[picId].post_url, '_blank');
      })
      .catch(function(error){
        console.log(error);
      })
 }

 document.getElementById("download").addEventListener("click", downloadPic);