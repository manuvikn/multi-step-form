import { Component, Input } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-input-phone-element',
    templateUrl: './input-phone-element.component.html',
    styleUrls: ['../global-styles/input-styles.scss']
})
export class InputPhoneElementComponent {

    @Input() form: FormGroup | undefined;
    @Input() controlName: string = '';
    @Input() type: string = 'text';
    @Input() validated: boolean = false;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() errors: string = '';

    constructor(private multiStepFormService: MultiStepFormService) { }

    generateErrorMessages(): void {

        this.errors = this.multiStepFormService.generateErrorMessagesFromObject( this.form?.get( this.controlName )?.errors );

    }

    formatPhoneNumber(): void {

        const control: AbstractControl | null | undefined = this.form?.get( this.controlName );
        if (!control) return;

        const len: number = control.value.length;
        let value: string = len > 0 ? '+' : '';
        let interval: number = 0;

        for (let i = 0; i < len; i ++) {

            const char = control.value[i];

            if (char.match(/^[0-9]$/)) {

                interval++;
    
                if (interval > 3) {
    
                    if (char != ' ') value = value.concat( ' ' );
                    interval = 1;
    
                }
    
                value = value.concat( char );

            } else if ((i == 2 || i == 3) && (char.match(/^ $/))) {

                if (!(i == 3 && control.value[2] == ' ')) {

                    interval = 0;
                    value = value.concat( char );

                }

            }

        }

        control.setValue( value );

    }

}