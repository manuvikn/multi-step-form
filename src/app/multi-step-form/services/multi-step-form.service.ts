import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MultiStepFormService {

    private readonly EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    private readonly PHONE_PATTERN: RegExp = /^(\+[0-9]{1,3} ){1}([0-9]{3} ){2,3}([0-9]{3})$/;
    private readonly ERRORS_DICTIONARY: { [key: string]: string } = {
        pattern: 'This field must follow the correct pattern',
        required: 'This field is required'
    };
    private readonly ROUTES: Array<string> = [
        '/step-one',
        '/step-two',
        '/step-three',
        '/summary',
        '/thank-you'
    ];
    private readonly CHECK_GROUP_DATA: Array<any> = [
        {
            formControl: 'onlineService',
            title: 'Online service',
            subtitle: 'Access to multiplayer games',
            price: {
                monthly: {
                    value: 1,
                    label: '+$1/mo'
                },
                yearly: {
                    value: 10,
                    label: '+$10/yr'
                }
            }
        },
        {
            formControl: 'largerStorage',
            title: 'Larger storage',
            subtitle: 'Extra 1TB of cloud save',
            price: {
                monthly: {
                    value: 2,
                    label: '+$2/mo'
                },
                yearly: {
                    value: 20,
                    label: '+$20/yr'
                }
            }
        },
        {
            formControl: 'customizable',
            title: 'Customizable profile',
            subtitle: 'Custom theme on your profile',
            price: {
                monthly: {
                    value: 2,
                    label: '+$2/mo'
                },
                yearly: {
                    value: 20,
                    label: '+$20/yr'
                }
            }
        }
    ];
    private readonly RADIO_GROUP_DATA: Array<any> = [
        {
            formControl: 'plan',
            value: 'arcade',
            title: 'Arcade',
            icon: 'icon-arcade.svg',
            price: {
                monthly: {
                    value: 9,
                    label: '$9/mo'
                },
                yearly: {
                    value: 90,
                    label: '$90/yr',
                    offer: '2 months free'
                }
            }
        },
        {
            formControl: 'plan',
            value: 'advanced',
            title: 'Advanced',
            icon: 'icon-advanced.svg',
            price: {
                monthly: {
                    value: 12,
                    label: '$12/mo'
                },
                yearly: {
                    value: 120,
                    label: '$120/yr',
                    offer: '2 months free'
                }
            }
        },
        {
            formControl: 'plan',
            value: 'pro',
            title: 'Pro',
            icon: 'icon-pro.svg',
            price: {
                monthly: {
                    value: 15,
                    label: '$15/mo'
                },
                yearly: {
                    value: 150,
                    label: '$150/yr',
                    offer: '2 months free'
                }
            }
        }
    ];

    private multiStepForm: FormGroup | undefined;
    private planType$: BehaviorSubject<string> = new BehaviorSubject('monthly');
    private currentStep$: BehaviorSubject<number> = new BehaviorSubject(undefined as any);

    constructor(private fb: FormBuilder,
        private router: Router) { }

    initMultiStepForm(): FormGroup {

        this.multiStepForm = this.fb.group({

            personalInfo: this.fb.group({

                name: this.fb.control('', Validators.required),
                email: this.fb.control('', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]),
                phone: this.fb.control('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)])

            }),
            selectPlan: this.fb.group({

                plan: this.fb.control('', Validators.required),
                paymentOption: this.fb.control('monthly', Validators.required),

            }),
            addOns: this.fb.group({

                onlineService: this.fb.control(false),
                largerStorage: this.fb.control(false),
                customizable: this.fb.control(false)

            }),
            summary: this.fb.group({

                total: this.fb.control(0, Validators.required)
            
            })

        });

        return this.multiStepForm;

    }

    getMultiStepForm(): FormGroup | undefined {

        return this.multiStepForm;

    }

    generateErrorMessages(formGroup: string, controlName?: string): { [key: string]: string } {

        const errors: { [key: string]: string } = {};

        if (!controlName) {

            for (const key in (this.multiStepForm?.get(formGroup) as FormGroup)?.controls) {

                errors[key] = this.generateErrorMessagesFromObject(this.multiStepForm?.get(formGroup)?.get(key)?.errors);

            }

        } else {

            errors[controlName] = this.generateErrorMessagesFromObject(this.multiStepForm?.get(formGroup)?.get(controlName)?.errors);

        }

        return errors;

    }

    generateErrorMessagesFromObject(errors: ValidationErrors | null | undefined): string {

        if (!errors) return '';
        return Object.keys(errors).reduce((prev, curr) => prev.concat(`${this.ERRORS_DICTIONARY[curr]}\n`), '');

    }

    getFormGroupByName(formGroup: string): FormGroup {

        return this.multiStepForm?.get(formGroup) as FormGroup;

    }

    navigate(indexRoute: number): void {

        this.router.navigate([this.ROUTES[indexRoute]]);

    }

    setCurrentStep(currentStep: number): void {

        this.currentStep$.next(currentStep);

    }

    getCurrentStep(): Observable<number> {

        return this.currentStep$.asObservable();

    }

    setPlanType(planType: string): void {

        this.planType$.next(planType);

    }

    getPlanType(): Observable<string> {

        return this.planType$.asObservable();

    }

    getPlanTypeValue(): string {

        return this.planType$.getValue();

    }

    getCheckGroupData(): Array<any> {

        const planType = this.getPlanTypeValue();
        return this.CHECK_GROUP_DATA.map((item: any) => ({...item, price: item.price[planType]}));

    }

    getSelectedAddOns(): Array<any> {

        const formGroup = this.multiStepForm?.get('addOns');
        const controls = (formGroup as FormGroup)?.controls;
        const selectedControls = Object.keys(controls).filter((control) => formGroup?.get( control )?.value);
        
        const planType = this.getPlanTypeValue();
        const selectedData = this.CHECK_GROUP_DATA
            .filter(({formControl}) => selectedControls.includes( formControl ))
            .map((item: any) => ({...item, price: item.price[planType]}));
        
        return selectedData;

    }

    getRadioGroupData(): Array<any> {

        const planType = this.getPlanTypeValue();
        return this.RADIO_GROUP_DATA.map((item: any) => ({...item, price: item.price[planType]}));

    }

    getSelectedPlan(): any {

        const formGroup = this.multiStepForm?.get('selectPlan')?.get('plan');
        const controlValue = (formGroup as FormGroup)?.value;

        const planType = this.getPlanTypeValue();
        const selectedData = {...this.RADIO_GROUP_DATA.find(({value}) => value == controlValue)};
        if (Object.keys(selectedData).length == 0) return {};
        selectedData['price'] = selectedData.price[planType];
        selectedData['planType'] = planType;
        selectedData['isMonthly'] = planType == 'monthly';
        
        return selectedData;

    }

}