import { LightningElement ,track} from 'lwc';
export default class HelloWorld extends LightningElement {
  Fullname="Bhagavan Rajana"
  course="Apex"
  @track address={
    city :'Hyderabad',
    State : 'TG',
    Country: 'India'
  }
  trackHandler(event)
  {
    this.address.city=event.target.value
  }
}