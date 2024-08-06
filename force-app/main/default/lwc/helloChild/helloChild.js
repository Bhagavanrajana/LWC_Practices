import { LightningElement } from 'lwc';

export default class HelloChild extends LightningElement {
    constructor()
    {
        super()
        console.log("This is child Constructor!!")
    }
    connectedCallback()
    {
        console.log("This is child connected Callback")
    }
    renderedCallback()
    {
        console.log("This is child rendered callback")
    }
    disconnectedCallback()
    {
        alert("Hide the Children ")
    }
}