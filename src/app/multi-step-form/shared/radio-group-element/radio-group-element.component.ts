import { Component, Input } from "@angular/core";
import { MultiStepFormService } from "../../services/multi-step-form.service";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-radio-group-element',
    templateUrl: './radio-group-element.component.html',
    styleUrls: ['./radio-group-element.component.scss']
})
export class RadioGroupElementComponent {

    @Input() stepForm: FormGroup | undefined;
    @Input() validated: boolean = false;
    @Input() dataForm: Array<any> = [];

    errors: {[key: string]: string} = {};

    constructor(private multiStepFormService: MultiStepFormService) {}

    generateErrorMessages(formGroup: string, controlName?: string): void {

        this.errors = {...this.errors, ...this.multiStepFormService.generateErrorMessages( formGroup, controlName )};

    }

}