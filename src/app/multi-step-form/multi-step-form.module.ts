import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormComponent } from './multi-step-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormContentComponent } from './components/form-content/form-content.component';
import { MultiStepFormRoutingModule } from './multi-step-form.routing.module';
import { WrapperFormComponent } from './components/wrapper-form/wrapper-form.component';
import { StepOneComponent } from './views/step-one/step-one.component';
import { StepTwoComponent } from './views/step-two/step-two.component';
import { SlideElementComponent } from './shared/slide-element/slide-element.component';
import { StepThreeComponent } from './views/step-three/step-three.component';
import { StepFourComponent } from './views/step-four/step-four.component';
import { CheckGroupElementComponent } from './shared/check-group-element/check-group-element.component';
import { RadioGroupElementComponent } from './shared/radio-group-element/radio-group-element.component';
import { InputElementComponent } from './shared/input-element/input-element.component';
import { InputPhoneElementComponent } from './shared/input-phone-element/input-phone-element.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MultiStepFormRoutingModule
    ],
    exports: [
        MultiStepFormComponent
    ],
    declarations: [
        MultiStepFormComponent,
        NavBarComponent,
        FormContentComponent,
        StepOneComponent,
        WrapperFormComponent,
        StepTwoComponent,
        SlideElementComponent,
        StepThreeComponent,
        StepFourComponent,
        CheckGroupElementComponent,
        RadioGroupElementComponent,
        InputElementComponent,
        InputPhoneElementComponent
    ]
})
export class MultiStepFormModule {

    constructor() {}

}