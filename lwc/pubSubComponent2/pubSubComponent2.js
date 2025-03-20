import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub';
//import { subscribe } from 'c/pubSub/pubSub';

export default class PubSubComponent2 extends LightningElement {

    message
    connectedCallback(){
        pubsub.subscribe('Component1',(message)=>{
            this.message=message
        })
    }


}