import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}
    correctAnswers=0
    isVisible=false

    questionList=[
        {
            id:"Q1",
            name:"who are you",
            answers:{
                a:"Bhagavan",
                b:"Sukku",
                c:"Dinnu",
                d:"Ball"
            },
            coorectAnswer:"a"
        },

        {
            id:"Q2",
            name:"what are you",
            answers:{
                a:"IT",
                b:"Enterpreneur",
                c:"GOAT",
                d:"Peaceful"
            },
            coorectAnswer:"c"
        },

        {
            id:"Q3",
            name:"when will you become",
            answers:{
                a:"Definitely",
                b:"Sachemundhu Goppaga ayye chastha",
                c:"Edhi emaina GOAT avthaa",
                d:"All the above"
            },
            coorectAnswer:"d"
        }
    ]
    get allSelected(){
        return !(Object.keys(this.selected).length===this.questionList.length)
    }

    //storing selected answers and its name 
    changeHandler(event){
        const{name,value}=event.target
        this.selected={...this.selected,[name]:value}
    }

    //Submitting form
    submitHandler(event){
        event.preventDefault();
        this.isVisible=true
        const correct=this.questionList.filter(item=>this.selected[item.id]===item.coorectAnswer)
        this.correctAnswers=correct.length
        console.log("Correct Answers", this.correctAnswers)
    }

    //Resetting the form
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isVisible=false
    }

    //changing the color of font according to correct answers
    get isScored()
    {
        return `slds-text-heading_large ${this.questionList.length===this.correctAnswers ?
            `slds-text-color_success`:`slds-text-color_error`
        }`
    }
}