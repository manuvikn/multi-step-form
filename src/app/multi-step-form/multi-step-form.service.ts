import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MultiStepFormService {
    
    private readonly ROUTES: Array<string> = [
        '/step-one',
        '/step-two',
        '/step-three',
        '/summary',
    ];

    private multiStepForm: FormGroup | undefined;
    private currentStep: BehaviorSubject<number> = new BehaviorSubject(undefined as any);
    
    constructor(private fb: FormBuilder,
                private router: Router) {}

    initMultiStepForm(): FormGroup {

        this.multiStepForm = this.fb.group({
            
            personalInfo: this.fb.group({

                name: this.fb.control(''),
                email: this.fb.control(''),
                phone: this.fb.control('')

            }),
            selectPlan: this.fb.group({

                plan: this.fb.control(''),
                paymentOption: this.fb.control('monthly'),
                
            }),
            addOns: this.fb.group({

                onlineService: this.fb.control(false),
                largerStorage: this.fb.control(false),
                customizable: this.fb.control(false)
                
            })

        });

        return this.multiStepForm;

    }

    getFormGroupByName(formGroup: string): FormGroup {

        return this.multiStepForm?.get( formGroup ) as any;

    }

    navigate(indexRoute: number): void {

        this.router.navigate([this.ROUTES[ indexRoute ]]);

    }

    setCurrentStep( currentStep: number ): void {

        this.currentStep.next( currentStep );

    }

    getCurrentStep(): Observable<number> {

        return this.currentStep.asObservable();

    }

}