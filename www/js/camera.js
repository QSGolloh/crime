//@author Selassie Golloh

document.addEventListener("deviceready",function(){
    console.log(navigator.camera);
});


var cameraTakePicture = document.getElementById("cameraTakePicture");
cameraTakePicture.addEventListener("click",TakePicture);

function TakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}
