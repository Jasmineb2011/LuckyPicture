function changeBackground() {
  var picId = document.getElementById('nPic').value;
  document.body.style.backgroundImage = "url(https:picsum.photos/200/200?image="+picId+")";
}

function downloadPic(event){
  event.preventDefault();
  fetch('https://picsum.photos/list')
    .then(function(response) {
      return response.json();
    })
     .then(function(data) {
       var picId = document.getElementById('nPic').value;
       console.log(data[picId].post_url);
       window.open(data[picId].post_url, '_blank');
      })
      .catch(function(error){
        console.log(error);
      })
 }

 document.getElementById("download").addEventListener("click", downloadPic);
