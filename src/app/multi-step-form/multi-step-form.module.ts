import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormComponent } from './multi-step-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormContentComponent } from './components/form-content/form-content.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MultiStepFormComponent
    ],
    declarations: [
        MultiStepFormComponent,
        NavBarComponent,
        FormContentComponent
    ]
})
export class MultiStepFormModule {

    constructor() {}

}