function mediaFactory(media){
  
     if(media.image !== undefined){

           return createImage(media);

     }

     return createVideo(media);
      
}