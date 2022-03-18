import { LightningElement } from 'lwc';
import { ShowToastEvent } from'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
export default class ContactCreator extends LightningElement {

    contact=CONTACT_OBJECT;
    contactFields=[FirstName,LastName,Email];
    handleSuccess(event){
        const toastEvent= new ShowToastEvent(
            {
                title:"Contact Created!",
                message: event.detail.id,
                varient:"Success"

            }
        );
        this.dispatchEvent(toastEvent);
    }
}