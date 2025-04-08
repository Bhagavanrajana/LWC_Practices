import { api, LightningElement} from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title

    clickHandler(){
        const ele= CustomEvent('sendmsg',{
            details: {
                "msg" : "Hello from LWC through custom event"
            }
        }

        )
        this.dispatchEvent(ele);
    }
}