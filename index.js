fetch('https://picsum.photos/list')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  var picId = document.getElementById('picId').value;
  picId = data.post_url;
})
