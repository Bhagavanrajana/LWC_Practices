import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModal=false
    msg

    modalHandler(event){
        this.showModal=!this.showModal
    }

    handleOkay(event){
        this.showModal=false
        this.msg=event.detail
    }

}