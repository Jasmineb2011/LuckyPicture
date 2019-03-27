function changeBackground() {
  var picId = document.getElementById('nPic').value;
  document.body.style.backgroundImage = "url(https:picsum.photos/200/200?image="+picId+")";
}

// fetch('https://picsum.photos/list')
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   var idURL = data[picId].post_url;
// })
