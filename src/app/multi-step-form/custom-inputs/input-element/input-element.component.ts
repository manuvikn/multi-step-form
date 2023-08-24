import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-input-element',
    templateUrl: './input-element.component.html',
    styleUrls: ['../global-styles/input-styles.scss']
})
export class InputElementComponent {

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

}