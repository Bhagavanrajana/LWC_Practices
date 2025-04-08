import { LightningElement,api } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import { loadScript, loadStyle} from 'lightning/platformResourceLoader';
import song from '@salesforce/contentAssetUrl/song';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import LABEL from '@salesforce/label/c.labelOne';
import isAccessHad from '@salesforce/userPermission/ViewAllData';
import customPermission from '@salesforce/customPermission/LWC_import_demo';
import USER_ID from '@salesforce/user/Id';

export default class AllImports extends LightningElement {

    // This piece of code is used to import the moment.js library and we use renderedcallback and promise to make sure that the library is loaded..
    dateTime=''
    flag =false
    renderedCallback(){
        if(this.flag){
            return
        }
        else{
            Promise.all([
                loadScript(this, MOMENT+'/moment.js'),
                loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{
                this.currentDateTime()
            }).catch(error=>{
                console.error(error)
            })
        }
        this.flag=true
    }

    currentDateTime(){
        this.dateTime= moment().format('LLLL');
    }

    //Making available Asset file for download in the org
    song = song;

    //Internationalization examples

    num=4526.22
    formattedNumber = new Intl.NumberFormat(LOCALE, {style:'currency',currency:'INR'}).format(this.num)

    //Importing from the Custom Labels
    customLabel=''

    connectedCallback(){ //connectedCallback mainly used for importing custom labels and also to make sure that the label is loaded
        this.customLabel=LABEL
    }

    //Checking User Permissions by importing userPermissions

    get isAccessHadMethod(){
        return isAccessHad
    }

    get customAccessHadMethod(){
        return customPermission
    }

    // Getting User info by using userInfo.
    get userId(){
        return USER_ID
    }

    // Getting Record id and its object name for the record in context.
    @api recordId;
    @api objectApiName;

}