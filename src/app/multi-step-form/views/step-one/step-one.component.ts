import { Component, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector:'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit{

    private readonly FORM_GROUP: string = 'personalInfo';
    private readonly NEXT_STEP_ROUTE: number = 1;

    errors: {[key: string]: string} = {};
    stepForm: FormGroup | undefined;
    validated: boolean = false;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        this.stepForm = this.multiStepFormService.getFormGroupByName( this.FORM_GROUP );

    }

    navigate(): void {
        
        this.multiStepFormService.navigate( this.NEXT_STEP_ROUTE );

    }

    submitForm(form: FormGroupDirective): void {

        this.validated = true;
        if (this.stepForm?.valid) form.ngSubmit.emit();
        else this.generateErrorMessages();

    }

    generateErrorMessages(): void {

        this.errors = {...this.errors, ...this.multiStepFormService.generateErrorMessages( this.FORM_GROUP )};

    }

}