import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {

    fullName="Bhagavan Rajana"
    title="Salesforce Developer"

    obj={
        city:"Vizag",//using @track is old way. we can spread the obj and can reassign it.
        phone:"234567890" 
    };

    trackHandler(event){
        this.obj={...this.obj,"city":event.target.value}
    }

    arr=["Bhagavan","Sravani","Pavani"];
    num1=11;num2=10;

    firstValue=this.arr[1]

    get firstVal(){
        return this.arr[0]
    }

    get mult(){
        return this.num1*this.num2
    }

    score = 0; // Track score to trigger reactivity

    getHandler(event) {
        this.score = event.target.value ? parseInt(event.target.value, 10) : 0; // Convert input to a number
    }

    get gradeMethod() {
        return this.score > 90 ? "A" :
               this.score > 80 ? "B" :
               this.score > 70 ? "C" :
               this.score > 60 ? "D" : "F"; // Added "F" for scores below 60
    }

}