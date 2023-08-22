import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-check-group-element',
    templateUrl: './check-group-element.component.html',
    styleUrls: ['./check-group-element.component.scss']
})
export class CheckGroupElementComponent {

    @Input() stepForm: FormGroup | undefined;
    @Input() dataForm: Array<any> = [];

    constructor() { }

}