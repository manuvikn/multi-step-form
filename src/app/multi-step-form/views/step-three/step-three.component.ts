import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { MultiStepFormService } from "../../multi-step-form.service";

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.component.html',
    styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {

    private readonly NEXT_STEP_ROUTE = 3;
    private readonly PREVIOUS_STEP_ROUTE = 1;

    stepForm: FormGroup | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        this.stepForm = this.multiStepFormService.getFormGroupByName( 'addOns' );        

    }

    navigate(next: boolean): void {
        
        this.multiStepFormService.navigate( next ? this.NEXT_STEP_ROUTE : this.PREVIOUS_STEP_ROUTE );

    }

    submitForm(form: FormGroupDirective, next: boolean): void {

        form.ngSubmit.emit( next );

    }

}