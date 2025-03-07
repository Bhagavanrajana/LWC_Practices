import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=["TATA","tesla","BYD","VW"]

    ceoList=[
        {
            id:1,
            company:"Tesla",
            name:"Elon"
        },
        {
            id:2,
            company:"Google",
            name:"Sundar"
        },
        {
            id:3,
            company:"Zoho",
            name:"Sridhar"
        },
        {
            id:4,
            company:"Zerodha",
            name:"Kamath bros"
        },
    ]
}