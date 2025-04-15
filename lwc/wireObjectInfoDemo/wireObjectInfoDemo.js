import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_DATA from '@salesforce/schema/Account';

export default class WireObjectInfoDemo extends LightningElement {

    @wire(getObjectInfo, { objectApiName: ACCOUNT_DATA }) //@wire syntax is (Adapter , Object reference)
    AccountDetails // Adapters are functions that you write to provide reusable functionality like getObjectInfo, getRecord, getPicklistValues, etc.
}