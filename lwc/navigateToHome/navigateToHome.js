import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToHome extends NavigationMixin(LightningElement) {
    //Steps to use Navigation Mixin:
    //1. Import NavigationMixin
    //2. Use NavigationMixin in your class
    //3. Parameters are this[NavigationMixin.Navigate] and type and attributes to navigate
    //4.types of types are standard__namedPage, standard__objectPage, standard__recordPage, standard__appPage, standard__componentPage
    //5.standard__namedPage used to navigate to standard page , standard__objectPage used to navigate to object page , standard__recordPage used to navigate to record page, standard__appPage used to navigate to app page, standard__componentPage used to navigate to component

    navigateToHome(){ // Navigate to Home page or any standard page
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }

    navigateToContact(){ // Navigation and object page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }

    navigateToNewRecord(){ //Navigation to create new record page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state:{
                FilterName:'All Accountt'
            }
        });
    }

    navigateToRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
             attributes:{
                recordId:'001F300001lSjGKIA0',
                objectApiName: 'Account',
                actionName: 'view'
             }
        })
    }

    navigateToRecordEdit(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
             attributes:{
                recordId:'001F300001lSjGKIA0',
                objectApiName: 'Account',
                actionName: 'edit'
             }
        })
    }

    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"https://www.salesforcetroop.com"
            }
        })
    }

}