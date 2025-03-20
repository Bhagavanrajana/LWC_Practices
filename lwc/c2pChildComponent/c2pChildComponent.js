import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {

    handleOkay(){
        const myEvent=new CustomEvent('close',{
            detail:"This is from custom event detail data passing"
        })
        this.dispatchEvent(myEvent)
    }
}