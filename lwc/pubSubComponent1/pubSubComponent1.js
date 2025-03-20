import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub';
//import { publish } from 'c/pubSub/pubSub';

export default class PubSubComponent1 extends LightningElement {

    message
    inputHandler(event){
        this.message=event.target.value
    }

    publishHandler()
    {
        pubsub.publish('Component1',this.message)
    }

}