import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    fullName="Bhagavan Rajana" //Single way data Binding - Controller to Template

    title="Salesforce Developer" 

    changeTitle(event){
        this.title=event.target.value //Two way Binding- both ways - defaultly LWC douesnt support. we have to implement.
    }

}