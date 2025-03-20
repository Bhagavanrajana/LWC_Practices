import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetails

    @api
    get details(){
        return this.userDetails
    }

    set details(data){
        this.userDetails={...data, age:data.age*2 , 'city':'Hyderabad'}
    }
}