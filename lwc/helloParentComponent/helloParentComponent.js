import { LightningElement } from 'lwc';

export default class HelloChildComponent extends LightningElement {
    constructor(){
        super()
        console.log("this parent contructor")
    }
    connectedCallback(){
        console.log("this is parent connected Callback")
    }
    renderedCallback(){
        console.log("this is parent rendered callback")
    }
}