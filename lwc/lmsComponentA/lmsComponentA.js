import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';


export default class LmsComponentA extends LightningElement {

    inputVal
    @wire(MessageContext)
    context //It will listen all LWC components which is using LMS- lightning messaging services

    inputHandler(event){
        this.inputVal=event.target.value
    }

    publishMessage(){

        const message={
            lmsData: this.inputVal // we are using lmsData as a variable name from MessageChannel component
        }

        publish(this.context, SAMPLEMC, message); //syntax for Publish : publish(MessageContext, MessageName, MessageDetail)
    }

}