import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { MultiStepFormService } from "../../multi-step-form.service";

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {

    private readonly NEXT_STEP_ROUTE = 2;
    private readonly PREVIOUS_STEP_ROUTE = 0;

    stepForm: FormGroup | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        this.stepForm = this.multiStepFormService.getFormGroupByName( 'selectPlan' );        

    }

    navigate(next: boolean): void {
        
        this.multiStepFormService.navigate( next ? this.NEXT_STEP_ROUTE : this.PREVIOUS_STEP_ROUTE );

    }

    submitForm(form: FormGroupDirective, next: boolean): void {

        form.ngSubmit.emit( next );

    }

}