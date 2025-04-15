import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

import CONTACT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';

export default class RecordForm extends LightningElement {
    ObjectApi =ACCOUNT;
    fields =[NAME_FIELD,ANNUAL_REVENUE_FIELD,TYPE_FIELD,INDUSTRY_FIELD];
    
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Account Created with '+event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

    //Contact details for lightning-record-edit-form example

    ObjectApi2 = CONTACT
    cont_fields= {
        firstName:FIRSTNAME_FIELD,
        lastName:LASTNAME_FIELD,
        email:EMAIL_FIELD,
        accountField:ACCOUNTID_FIELD
    }

    resetHandler(){
        this.template.querySelectorAll('lightning-input-field').forEach(form => {
            form.reset();
        });
    }
}