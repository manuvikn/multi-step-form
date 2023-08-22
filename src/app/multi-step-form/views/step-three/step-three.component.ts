import { Component, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.component.html',
    styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

    private readonly FORM_GROUP: string = 'addOns';
    private readonly NEXT_STEP_ROUTE = 3;
    private readonly PREVIOUS_STEP_ROUTE = 1;

    stepForm: FormGroup | undefined;
    dataForm: Array<any> = [];

    constructor(private multiStepFormService: MultiStepFormService) { }

    ngOnInit(): void {

        this.stepForm = this.multiStepFormService.getFormGroupByName( this.FORM_GROUP );
        this.dataForm = this.multiStepFormService.getCheckGroupData();

    }

    navigate(next: boolean): void {

        this.multiStepFormService.navigate(next ? this.NEXT_STEP_ROUTE : this.PREVIOUS_STEP_ROUTE);

    }

    submitForm(form: NgForm, next: boolean): void {

        form.ngSubmit.emit(next);

    }

}