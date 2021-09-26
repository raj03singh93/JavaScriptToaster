let Toaster = {
    init(){
        
        this.hideTimeout = null;
        this.toasterContainer = document.createElement("div");
        this.toasterContainer.classList.add("toaster-container");

        this.toaster = document.createElement("div");
        this.toaster.classList.add("toaster");

        this.toasterIcon = document.createElement("i");
        this.toasterIcon.classList.add("toaster-icon");

        this.toasterText = document.createElement("span");
        this.toasterText.classList.add("toaster-text");

        let toasterClose = document.createElement("i");
        toasterClose.classList.add("fa","fa-close","toaster-close");

        // Create Toaster
        this.toaster.appendChild(this.toasterIcon);
        this.toaster.appendChild(this.toasterText);
        this.toaster.appendChild(toasterClose);

        // Create Container
        this.toasterContainer.appendChild(this.toaster);
        document.body.appendChild(this.toasterContainer);

        toasterClose.addEventListener("click",function(){
            this.parentElement.parentElement.classList.remove("toaster-warning","toaster-visible");
        });
    },

    notify(messageType, message){
        
        clearTimeout(this.hideTimeout);
        messageType = messageType.toLocaleLowerCase();
        this.toasterText.innerText = message;
        

        if(messageType == "success")
        {
            this.toasterContainer.classList.remove("toaster-warning","toaster-error");
            this.toasterIcon.classList.remove("fa","fa-warning");
            this.toasterIcon.classList.remove("fa","fa-exclamation-circle");
            this.toasterIcon.classList.add("fa","fa-check-circle");
        }
        else if(messageType == "warning")
        {
            this.toasterContainer.classList.remove("toaster-success","toaster-error");
            this.toasterIcon.classList.remove("fa","fa-exclamation-circle");
            this.toasterIcon.classList.remove("fa","fa-check-circle");
            this.toasterIcon.classList.add("fa","fa-warning");
        }
        else if(messageType == "error")
        {
            this.toasterContainer.classList.remove("toaster-success","toaster-warning");
            this.toasterIcon.classList.remove("fa","fa-check-circle");
            this.toasterIcon.classList.remove("fa","fa-warning");
            this.toasterIcon.classList.add("fa","fa-exclamation-circle");
            
        }
        
        this.toasterContainer.classList.add(`toaster-${messageType}`);
        this.toasterContainer.classList.add("toaster-visible");
        
        hideTimeout = setTimeout(() => {
            this.toasterContainer.classList.remove("toaster-visible");
        },3000)
        
    }
}

window.addEventListener('DOMContentLoaded', Toaster.init());

