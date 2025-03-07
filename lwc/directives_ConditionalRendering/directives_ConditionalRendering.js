import { LightningElement } from 'lwc';

export default class Directives_ConditionalRendering extends LightningElement {
    isVisible=false;
    name;

    clickMethod(){
        this.isVisible=true
    }

    conditionMethod(event){
        this.name=event.target.value;
    }
    get helloWorld(){
        return this.name==='hello'
    }


}