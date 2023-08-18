import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiStepFormService } from "../../multi-step-form.service";

@Component({
    selector: 'app-step-four',
    templateUrl: './step-four.component.html',
    styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent {

    private readonly PREVIOUS_STEP_ROUTE = 2;
    private readonly SECOND_STEP_ROUTE = 1;

    stepForm: FormGroup | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void { }

    goBack(): void {
        
        this.multiStepFormService.navigate( this.PREVIOUS_STEP_ROUTE );

    }

    goToSecondStep(): void {

        this.multiStepFormService.navigate( this.SECOND_STEP_ROUTE );

    }

}