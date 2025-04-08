import { LightningElement } from 'lwc';

export default class CustomComponent extends LightningElement {

    slotChangeHandler()
    {
        const ele=this.template.querySelector('footer');
        if(ele){
            ele.classList.remove('slds-hide')
        }
    }


}