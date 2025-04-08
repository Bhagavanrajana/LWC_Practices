import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; //importing Toast event

export default class ToastNotification extends LightningElement {

    toastHandlerOne(){
        this.showToast("Success","You've clicked the button","success");
    }

    toastHandlerTwo(){
        this.showToast("Error","Error Msg","error")
    }

    toastHandlerThree(){
        this.showToast("Warning","Warning Msg","warning")
    }

    toastHandlerFour(){
        this.showToast("Info","Info msg","info")
    }

    showToast(title,message,variant){ //Creating method to show toast for all the onlick events
        const event= new ShowToastEvent({ //show toast event parameters are (title, message, variant)
            title:title,
            message:message,
            variant:variant
        });
        this.dispatchEvent(event);
    }

}