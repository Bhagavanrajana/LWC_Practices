import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    carouselDetails=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card_mod_good",
            description:"First card Descr"

        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"second Card_soul_seek",
            description:"second card Descr"

        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"third Card_pookie",
            description:"third card Descr"

        }
    ]

    percentage=10
    handler(event){
        this.percentage=event.target.value
    }

    handleClick(event){
        this.template.querySelector('c-p2c-child-method-passing').resetSlider()
    }
}