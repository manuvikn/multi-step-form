import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckGroupElementComponent } from "./check-group-element/check-group-element.component";
import { RadioGroupElementComponent } from "./radio-group-element/radio-group-element.component";
import { InputElementComponent } from "./input-element/input-element.component";
import { InputPhoneElementComponent } from "./input-phone-element/input-phone-element.component";
import { SlideElementComponent } from "./slide-element/slide-element.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SlideElementComponent,
        CheckGroupElementComponent,
        RadioGroupElementComponent,
        InputElementComponent,
        InputPhoneElementComponent,
    ],
    exports: [
        SlideElementComponent,
        CheckGroupElementComponent,
        RadioGroupElementComponent,
        InputElementComponent,
        InputPhoneElementComponent,
    ]
})
export class CustomInputsModule { }