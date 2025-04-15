import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/User.Name';
import EMAIL from '@salesforce/schema/User.Email';
import COMPANY from '@salesforce/schema/User.CompanyName';

const fields = [NAME , EMAIL , COMPANY];
export default class WireDemo extends LightningElement {
    userId = Id  //005F30000091EBZIA2

    userDetail
    @wire(getRecord, {recordId: '005F30000091EBZIA2', fields})
    userDetailsHandler(data, error){ //Wire service as a function
        if(data){
            this.userDetail = data.fields;
            console.log(this.userDetail);
        }
        else if(error){
            console.error(error);
        }
    }

    @wire(getRecord, {recordId: '005F30000091EBZIA2', fields}) 
    userDetailsHandler2 //wire service as property

    // steps to Use @wire Service is reactive data binding mechanism to UI and Salesforce server
    //Step 1 : Import getRecord from uiRecordApi
    //Step 2: Import the fields from Schema
    //Step 3: Define the wire service as a property
    //Step 4: Define the @wire method 
    //step 5: Parameters are recordId and fields
    //Step 6: Store the response in a variable with data 
    //Step 7: Store the error in a variable with error
    //step 8 : If data is not null then store the data in userDetail variable
    //step 9: If error is not null then log the error
}
