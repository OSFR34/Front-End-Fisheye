function createImage(mediaInfo){

     const {title, image} = mediaInfo;

     return `<img src="assets/images/medias/${image}" class="article-media" alt=${title} />`;

}