import { LightningElement,wire,api } from 'lwc';
import CONTACT from '@salesforce/schema/Contact';
import TITLE from '@salesforce/schema/Contact.Title';
import { getListUi } from 'lightning/uiListApi';

export default class WireGetListUI extends LightningElement {
    contacts=[]
    pageToken=null
    nextPageToken =null
    previousPageToken=null
    @wire(getListUi,{
        objectApiName:CONTACT,
                listViewApiName:'AllContacts',
                pageSize:5,
                sortBy:TITLE,
                pageToken:'$pageToken'
                
    })
    ContactHandler({data}){
        if(data){
            console.log(data);
            this.contacts = data.records.records
            this.nextPageToken=data.records.nextPageToken
            this.previousPageToken=data.records.previousPageToken
        }
    }

    previousPage(){
        this.pageToken=this.previousPageToken
    }

    nextPage(){
        this.pageToken= this.nextPageToken
    }
}