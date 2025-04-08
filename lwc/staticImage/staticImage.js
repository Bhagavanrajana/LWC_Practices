import { LightningElement } from 'lwc';
import MY_PHOTO from '@salesforce/resourceUrl/profile';

export default class StaticImage extends LightningElement {

    myPhoto = MY_PHOTO;
}