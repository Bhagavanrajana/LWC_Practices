import { LightningElement } from 'lwc';

export default class HelloParent extends LightningElement {

    isChildVisible=false
    constructor()
    {
        super()
        console.log("This is Constructor!!")
    }
    connectedCallback()
    {
        console.log("This is connected Callback")
    }
    renderedCallback()
    {
        console.log("This is rendered callback")
    }
    handleClick(){
        this.isChildVisible=!this.isChildVisible
    }

}