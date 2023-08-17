import { RouterModule, Routes } from "@angular/router";
import { StepOneComponent } from "./views/step-one/step-one.component";
import { NgModule } from "@angular/core";
import { StepTwoComponent } from "./views/step-two/step-two.component";

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