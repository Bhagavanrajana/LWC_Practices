import { LightningElement,wire } from 'lwc';
import filterAccounts from '@salesforce/apex/AccountController.filterAccounts'

export default class WireApexWithParams extends LightningElement {
    selectedType =''
    @wire(filterAccounts, { type: '$selectedType' })
    filteredAccounts

    get typeOptions(){
        return[
            {label:"Customer - Direct", value:"Customer - Direct"},
            {label:"Customer - Channel", value:"Customer - Channel"}
        ]
    }

    handleTypeChange(event){
        this.selectedType = event.target.value
    }
}