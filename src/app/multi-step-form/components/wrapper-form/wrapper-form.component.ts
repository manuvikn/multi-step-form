import { Component, Input, OnInit } from "@angular/core";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-wrapper-form',
    templateUrl: './wrapper-form.component.html',
    styleUrls: ['./wrapper-form.component.scss']
})
export class WrapperFormComponent implements OnInit {

    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() currentStep: number | undefined;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        
        if (this.currentStep != undefined) this.multiStepFormService.setCurrentStep( this.currentStep );

    }
}