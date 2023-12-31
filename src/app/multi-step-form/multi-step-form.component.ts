import { Component, OnInit } from '@angular/core';
import { MultiStepFormService } from './services/multi-step-form.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-multi-step-form',
    templateUrl: './multi-step-form.component.html',
    styleUrls: ['./multi-step-form.component.scss'],
    providers: [MultiStepFormService]
})
export class MultiStepFormComponent implements OnInit {

    multiStepForm: FormGroup | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.multiStepForm = this.multiStepFormService.initMultiStepForm();      
    }

}