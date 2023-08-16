import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MultiStepFormInterface } from './interfaces/multi-step-form.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MultiStepFormService {

    private navBarData$!: BehaviorSubject<any>;
    private formContentData$!: BehaviorSubject<any>;
    private multiStepForm: FormGroup | undefined;
    private multiStepFormData: Array<MultiStepFormInterface> | undefined;
    activeFormGroup: FormGroup | undefined;
    index: number = 0;
    totalSteps: number = 0;

    constructor(private fb: FormBuilder) {}

    initMultiStepForm( multiStepFormData: Array<MultiStepFormInterface> ): void {

        if (!multiStepFormData) return;
        this.index = 0;
        this.totalSteps = multiStepFormData.length;
        this.multiStepFormData = multiStepFormData;
        this.navBarData$ = new BehaviorSubject({
            index: this.index,
            navBarItems: multiStepFormData.map(({navBarTitle}) => navBarTitle)
        });

        this.initForm( multiStepFormData );

    }

    initForm(multiStepFormData: Array<MultiStepFormInterface>): void {

        this.multiStepForm = this.fb.group( multiStepFormData.reduce((prev: any, curr) => {

            prev[curr.formContent.formGroupName] = this.fb.group(
                curr.formContent.formControls.reduce((p: any, {name}) => {
                    if (name) p[name] = this.fb.control('');
                    return p;
                }, {})
            );
            return prev;

        }, {}));

        (this.activeFormGroup as any) = this.multiStepForm.get( multiStepFormData[this.index].formContent.formGroupName );

        this.formContentData$ = new BehaviorSubject({
            multiStepFormData: multiStepFormData[this.index],
            activeFormGroup: this.activeFormGroup,
            index: this.index,
            totalSteps: this.totalSteps
        });
        
    }

    nextStep(): void {

        if (this.index >= this.totalSteps - 1) return;
        this.index += 1 ;
        this.updateData();

    }

    goBack(): void {

        if (this.index <= 0) return;
        this.index -= 1 ;
        this.updateData();

    }

    updateData(): void {

        if (!this.multiStepForm || !this.multiStepFormData) return;
        (this.activeFormGroup as any) = this.multiStepForm.get( this.multiStepFormData[this.index].formContent.formGroupName );

        this.formContentData$.next({
            multiStepFormData: this.multiStepFormData[this.index],
            activeFormGroup: this.activeFormGroup,
            index: this.index,
            totalSteps: this.totalSteps
        });

        this.navBarData$.next({
            index: this.index
        });

    }

    
    setNavBarData( navBarData: any ): void {

        this.navBarData$.next( navBarData );

    }

    getNavBarData(): Observable<any> {

        return this.navBarData$.asObservable();

    }

    setFormContentData( formContentData: any ): void {

        this.formContentData$.next( formContentData );

    }

    getFormContentData(): Observable<any> {

        return this.formContentData$.asObservable();

    }

}