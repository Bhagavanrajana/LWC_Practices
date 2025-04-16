import { LightningElement,wire,api } from 'lwc';
import { getRecord , getFieldDisplayValue, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import OWNER_NAME from '@salesforce/schema/Account.Owner.Name'

export default class WireGetRecordAdapter extends LightningElement {
    @api recordId;
    @api Name
    @api AnnualRevenue;
    @api ownerName;
    @api accNum;
    @api parent;
    @wire(getRecord, {recordId:'$recordId',fields:[NAME_FIELD,ANNUAL_REVENUE,OWNER_NAME]})
    accountDetails({data}){
        // if(data){
        //     console.log(data);
        //     this.Name=data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
        //     this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
        //     this.ownerName=data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;
        // }

        if(data){ 
            this.Name=getFieldValue(data,NAME_FIELD)
            this.AnnualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE)
            this.ownerName=getFieldValue(data,OWNER_NAME)
        }
    }
    // **********************************Note **************************
    //getFRecord method is used to get the record data
    // getFieldValue can be used to get the value of the field as fieldApiName.value
    // getFieldDisplayValue can be used to get the display value of the field as fieldApiName.displayValue - Formatted value can check in console.


    // @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'], modes:['View'] })
    // handleAccount({data}){
    //     if(data){
    //             console.log(data);
    //             this.Name=data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
    //             this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
    //             this.ownerName=data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;
    //             this.accNum=data.fields.AccountNumber.displayValue ? data.fields.AccountNumber.displayValue : data.fields.AccountNumber.value;
    //             this.parent=data.fields.Parent.displayValue ? data.fields.Parent.displayValue : data.fields.Parent.value;
    //         }
    // }

    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD, ANNUAL_REVENUE ,OWNER_NAME]})
        handleAccount({data}){
            if(data){
                console.log(data);
                this.Name = getFieldValue(data,NAME_FIELD)
                this.AnnualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE)
                this.ownerName=getFieldValue(data,OWNER_NAME)

            }
        }
}