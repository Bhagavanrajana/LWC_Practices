import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class WireGetPicklist extends LightningElement {
    selectedIndustry=''
    selectedType=''
    Industryoptions=[]
    typeoptions=[]

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data)
            this.Industryoptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.log(error)
        }
        }

        generatePicklist(data){
            return data.values.map(item=>({label:item.label,value:item.value}))
        }

        handleChange(event){
            this.selectedIndustry=event.detail.value
        }

        @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
        typePicklist({data,error}){
        if(data){
            console.log(data)
            this.typeoptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.log(error)
        }
        }

        generatePicklist(data){
            return data.values.map(item=>({label:item.label,value:item.value}))
        }

        handleChange(event){
            this.selectedType=event.detail.value
        }
    }