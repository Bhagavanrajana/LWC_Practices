import { LightningElement } from 'lwc';
import signIn from './signIn.html'
import signUp from './signUp.html'
import renderTemplate from './renderTemplate.html'

export default class RenderTemplate extends LightningElement {

    clickBtn=''
    render(){
        return this.clickBtn === 'signIn' ? signIn :
                this.clickBtn ==='signUp' ? signUp :
                renderTemplate
    }

    handlerClass(event){
         this.clickBtn=event.target.label
    }

}