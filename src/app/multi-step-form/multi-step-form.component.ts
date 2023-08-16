import { Component, Input, OnInit } from '@angular/core';
import { MultiStepFormInterface } from './interfaces/multi-step-form.interface';
import { MultiStepFormService } from './multi-step-form.service';

@Component({
    selector: 'app-multi-step-form',
    templateUrl: './multi-step-form.component.html',
    styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {

    @Input() multiStepFormData: Array<MultiStepFormInterface> | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        console.log(this.multiStepFormData);

        if (this.multiStepFormData) {

            this.multiStepFormService.initMultiStepForm( this.multiStepFormData );

        }


    }

}