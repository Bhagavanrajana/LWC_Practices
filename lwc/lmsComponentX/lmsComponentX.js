import { LightningElement,wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class LmsComponentX extends LightningElement {

    receivedMsg
    @wire(MessageContext)
        context //It will listen all LWC components which is using LMS- lightning messaging services

    connectedCallback(){
        this.subscription() //connectedCallback is called when component is connected to the DOM
    }

    subscription(){
        subscribe(this.context,SAMPLEMC, (message) => {
        this.handleMessage(message);
        },{scope:APPLICATION_SCOPE})
        //subscribe syntax: subscribe(messageChannel, callback)
    //messageChannel: name of the message channel
    //callback: function to be executed when message is received
    }
    handleMessage(message)
    {
        console.log('Message Received: '+message);
        this.receivedMsg=message.lmsData.value ? message.lmsData.value : 'No message Received';
    }

}