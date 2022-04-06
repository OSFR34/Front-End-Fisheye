let isOpen = false;

 const selectOptions = document.querySelector("#select-block-options");
 
 const firstButtonText = document.querySelector("#select-first-option-text");
 
 const optionsButtons = selectOptions.querySelectorAll("button");

document.querySelector("#select-first-option").addEventListener("click", ()=>{
				if(isOpen === false){
         
             // On ouvre le faux select
             
             selectOptions.style.display = "block";
             
             isOpen = true;
             
             return handleButtonsOptions();
        
        }
        
        if(isOpen === true){
        
        		 return closeSelect();
        
        }

});


function closeSelect(){

		 // On ferme le faux select
             
     selectOptions.style.display = "none";
     
      return isOpen = false;
             

}

function handleButtonsOptions(){

     optionsButtons.forEach((button)=>{
        
              button.onclick = ()=>{

                // Récupération du contenu du bouton cliquer (textContent récupère le contenu de tous les éléments, y compris <script> et <style>)
              
                  const buttonText = button.textContent;

                //   j'affecte le texte du button cliqué au premier bouton (remplacement du texte du premier bouton par celui qui est cliqué)
                
                  button.innerHTML = firstButtonText.textContent;
                    
                //   j'affecte le texte du premier button par celui qui a été cliqué
                  firstButtonText.innerHTML = buttonText;  
                  
                // je retourne la fct de fermeture de la liste déroulante.
                    
                  return closeSelect();
        
              };
        
        });


}
