function createVideo(mediaInfo){

    const {title, video} = mediaInfo;

    return `<video class="article-media">
              <source src="assets/images/medias/${video}" alt="${title}" type="video/mp4">
            </video>`;

}