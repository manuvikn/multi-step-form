import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-step-four',
    templateUrl: './step-four.component.html',
    styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {

    private readonly FORM_GROUP: string = 'summary';
    private readonly PREVIOUS_STEP_ROUTE = 2;
    private readonly SECOND_STEP_ROUTE = 1;
    private readonly NEXT_STEP_ROUTE: number = 4;

    multiStepForm: FormGroup | undefined;
    addOnsData: Array<any> = [];
    planData: any = {};
    total: string = '';

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {

        this.multiStepForm = this.multiStepFormService.getMultiStepForm();
        this.addOnsData = this.multiStepFormService.getSelectedAddOns();
        this.planData = this.multiStepFormService.getSelectedPlan();
        this.calculateTotal();

    }

    calculateTotal(): void {

        if (!this.planData?.price?.value || !this.addOnsData) return;
        const total = this.planData.price.value + this.addOnsData.reduce((prev, curr) => prev += curr.price.value ,0);
        this.multiStepForm?.get( this.FORM_GROUP )?.get( 'total' )?.setValue( total );
        this.total = `+$${ total }/${ this.planData.isMonthly ? 'mo' : 'yr' }`;

    }

    navigate(next: boolean): void {
        
        if (next && this.multiStepForm?.invalid) return;
        this.multiStepFormService.navigate( next ? this.NEXT_STEP_ROUTE : this.PREVIOUS_STEP_ROUTE );

    }

    goToSecondStep(): void {

        this.multiStepFormService.navigate( this.SECOND_STEP_ROUTE );

    }

}