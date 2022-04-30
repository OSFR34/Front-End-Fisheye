function createImage(mediaInfo){

     const {title, image} = mediaInfo;

     return `<img src="assets/images/medias/${image}"  tabindex="3" class="article-media" data-alttxt="${title}" alt="${title}" />`;

}