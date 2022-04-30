function createVideo(mediaInfo){

    const {title, video} = mediaInfo;

    return `<video class="article-media video-media" tabindex="3" data-alttxt="${title}" alt="${title}">
              <source src="assets/images/medias/${video}" type="video/mp4">
            </video>`;

}