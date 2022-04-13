function likes(){

     const hearts = document.querySelectorAll(".fa-heart");

     let totalNumberOfLikes = document.querySelector("#photographer-all-likes");

     hearts.forEach((heart)=>{

            heart.addEventListener("click", function(){

                  const numberOfLikes = heart.previousSibling;

                  numberOfLikes.textContent = Number(numberOfLikes.textContent) + 1;

                  totalNumberOfLikes.textContent = Number(totalNumberOfLikes.textContent) + 1;

            });

     })

}