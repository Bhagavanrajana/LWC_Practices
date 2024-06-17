import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  Fullname="Bhagavan Rajana"
  course="Apex"
  changeHandler(event)
  {
    this.course=event.target.value
  }
}