import { RouterModule, Routes } from "@angular/router";
import { StepOneComponent } from "./views/step-one/step-one.component";
import { NgModule } from "@angular/core";
import { StepTwoComponent } from "./views/step-two/step-two.component";
import { StepThreeComponent } from "./views/step-three/step-three.component";
import { StepFourComponent } from "./views/step-four/step-four.component";

const ROUTES: Routes = [
    {
        path: 'step-one',
        component: StepOneComponent
    },
    {
        path: 'step-two',
        component: StepTwoComponent
    },
    {
        path: 'step-three',
        component: StepThreeComponent
    },
    {
        path: 'summary',
        component: StepFourComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'step-one'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class MultiStepFormRoutingModule {}