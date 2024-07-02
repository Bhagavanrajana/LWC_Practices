import { LightningElement ,track} from 'lwc';
export default class HelloWorld extends LightningElement {
  Fullname="Bhagavan Rajana"
  course="Apex"
  address={
    city :'Hyderabad',
    State : 'TG',
    Country: 'India'
  }
  num1=10
  num2=20


  changeHandler(event)
  {
    this.course=event.target.value //Changing the course by binding technique
    
  }

  trackHandler(event)
  {
    this.address={...this.address,"city":event.target.value} //Using spread operator.& we can use track method also.
  }
  


  get multi(){
    return this.num1*this.num2
  }

  get lengthh(){
    return this.Fullname.length
  }


}