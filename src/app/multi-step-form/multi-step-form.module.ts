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
import { StepThreeComponent } from './views/step-three/step-three.component';
import { StepFourComponent } from './views/step-four/step-four.component';
import { ThankYouComponent } from './views/thank-you/thank-you.component';
import { CustomInputsModule } from './custom-inputs/custom-inputs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MultiStepFormRoutingModule,
        CustomInputsModule
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
        StepThreeComponent,
        StepFourComponent,
        ThankYouComponent
    ]
})
export class MultiStepFormModule {

    constructor() {}

}