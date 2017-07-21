
function appendImages(arr, index){ 
  console.log(arr.length)
    let imageCounter = index + 3;
    let imageContainerDiv = document.createElement('div');
    imageContainerDiv.class = "imageContainerDiv";
    imageContainerDiv.id = "imageContainerDiv";
    for (let i = 0; i <= arr.length; i++){
      console.log(arr[i])
    let child = arr[i];
      imageContainerDiv.append(`${child}`);
      index += 1;
    }
  console.log(imageContainerDiv)
  $('#artistImagesDiv').html(imageContainerDiv)   
}
