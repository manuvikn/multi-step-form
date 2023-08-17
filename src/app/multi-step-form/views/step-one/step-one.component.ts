import { Component, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { MultiStepFormService } from "../../multi-step-form.service";

@Component({
    selector:'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit{

    private readonly NEXT_STEP_ROUTE: number = 1;
    stepForm: FormGroup | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        this.stepForm = this.multiStepFormService.getFormGroupByName( 'personalInfo' );

    }

    navigate(): void {
        
        this.multiStepFormService.navigate( this.NEXT_STEP_ROUTE );

    }

    submitForm(form: FormGroupDirective): void {

        form.ngSubmit.emit();

    }

}