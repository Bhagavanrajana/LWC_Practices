import { LightningElement,api } from 'lwc';

export default class P2cChild_MethodPassing extends LightningElement {
    val=20

    changeHandler(event)
    {
        this.val=event.target.value
    }

    @api resetSlider(event){
        this.val=69
    }
}