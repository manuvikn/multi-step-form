import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MultiStepFormService } from '../../multi-step-form.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

    currentStep: number | undefined;
    navBarData: Array<string> = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
    currentStepSubscription: Subscription | undefined;

    constructor(private multiStepFormService: MultiStepFormService, 
                private cd: ChangeDetectorRef) {}

    ngOnInit(): void {

        this.currentStepSubscription = this.multiStepFormService.getCurrentStep()
            .subscribe(currentStep => {
                this.currentStep = currentStep;
                this.cd.detectChanges();
            });

    }

    ngOnDestroy(): void {
        
        this.currentStepSubscription?.unsubscribe();

    }

}