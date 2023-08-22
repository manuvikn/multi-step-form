import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";
import { RadioGroupElementComponent } from "../../shared/radio-group-element/radio-group-element.component";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit, OnDestroy {

    private readonly FORM_GROUP: string = 'selectPlan';
    private readonly NEXT_STEP_ROUTE: number = 2;
    private readonly PREVIOUS_STEP_ROUTE: number = 0;

    @ViewChild('radioGroup') radioGroup: RadioGroupElementComponent | undefined;

    stepForm: FormGroup | undefined;
    validated: boolean = false;
    dataForm: Array<any> = [];
    planTypeSubscription: Subscription | undefined;
    
    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        this.stepForm = this.multiStepFormService.getFormGroupByName( this.FORM_GROUP );
        this.planTypeSubscription = this.multiStepFormService.getPlanType()
            .subscribe(() => this.dataForm = this.multiStepFormService.getRadioGroupData());

    }

    ngOnDestroy(): void {
        
        this.planTypeSubscription?.unsubscribe();

    }

    navigate(next: boolean): void {
        
        this.multiStepFormService.navigate( next ? this.NEXT_STEP_ROUTE : this.PREVIOUS_STEP_ROUTE );

    }

    submitForm(form: FormGroupDirective, next: boolean): void {

        this.validated = true;
        if (this.stepForm?.valid || !next) form.ngSubmit.emit( next );
        else this.radioGroup?.generateErrorMessages(this.FORM_GROUP);

    }

}