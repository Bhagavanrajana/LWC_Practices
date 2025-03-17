import { LightningElement } from 'lwc';

export default class HelloChildComponent extends LightningElement {
    constructor(){
        super()
        console.log("this child contructor")
    }
    connectedCallback(){
        console.log("this is child connected Callback")
    }
    renderedCallback(){
        console.log("this is child rendered callback")
    }

}