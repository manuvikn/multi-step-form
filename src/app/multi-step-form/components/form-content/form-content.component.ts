import { Component, OnInit } from "@angular/core";
import { FormControlInterface, MultiStepFormInterface } from "../../interfaces/multi-step-form.interface";
import { Subscription } from "rxjs";
import { MultiStepFormService } from "../../multi-step-form.service";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-content',
    templateUrl: './form-content.component.html',
    styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {

    getFormContentDataSubscription: Subscription | undefined;
    index: number = 0;
    multiStepFormData: MultiStepFormInterface | undefined;
    formControlsArray: Array<FormControlInterface> | undefined;
    activeFormGroup: FormGroup | undefined;
    totalSteps: number = 0;

    constructor(private multiStepFormService: MultiStepFormService) { }

    ngOnInit(): void {

        this.getFormContentDataSubscription =
            this.multiStepFormService.getFormContentData()
                .subscribe(({multiStepFormData, activeFormGroup, index, totalSteps}) => {
                    this.multiStepFormData = multiStepFormData;
                    this.formControlsArray = this.multiStepFormData?.formContent?.formControls;
                    this.activeFormGroup = activeFormGroup;
                    this.index = index;
                    this.totalSteps = totalSteps;
                });

    }

    nextStep(): void {

        this.multiStepFormService.nextStep();

    }

    goBack(): void {

        this.multiStepFormService.goBack();

    }

}