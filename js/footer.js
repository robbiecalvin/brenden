document.addEventListener("DOMContentLoaded", function(){

    const openButton = document.getElementById(
        "developerNoteButton"
    );

    const popup = document.getElementById(
        "developerNotePopup"
    );

    const closeButton = document.getElementById(
        "closeDeveloperPopup"
    );


    if (!openButton || !popup || !closeButton) {
        return;
    }


    openButton.addEventListener("click", function(){
        popup.style.display = "flex";
    });


    closeButton.addEventListener("click", function(){
        popup.style.display = "none";
    });


    popup.addEventListener("click", function(event){

        if(event.target === popup){
            popup.style.display = "none";
        }

    });

});