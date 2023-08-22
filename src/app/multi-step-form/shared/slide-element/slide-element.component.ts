import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MultiStepFormService } from "../../services/multi-step-form.service";

@Component({
    selector: 'app-slide-element',
    templateUrl: './slide-element.component.html',
    styleUrls: ['./slide-element.component.scss']
})
export class SlideElementComponent implements AfterViewInit {

    @ViewChild('slideValue') slideValue: ElementRef | undefined;
    @Input() options: Array<{label: string, value: string}> = [];
    @Input() form: FormGroup | undefined;
    @Input() controlName: string = '';
    
    private readonly RIGHT_VALUE: string = 'move-to-right';
    private readonly LEFT_VALUE: string = 'move-to-left';
    leftValue: boolean = true;

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngAfterViewInit(): void {
        
        if (!this.form || !this.slideValue) return;

        const controlValue: string = this.form.get( this.controlName )?.value;
        this.leftValue = this.options.findIndex( ({value}) => value === controlValue) === 0;
        (this.slideValue.nativeElement as HTMLElement).style.left = this.leftValue ? '0px' : '14px';

    }

    toggleValue(): void {

        this.form?.get( this.controlName )?.setValue( this.options.find( ({value}) => value != this.form?.get( this.controlName )?.value )?.value || '' );
        this.toggleViewValue();

    }

    toggleViewValue(): void {

        this.multiStepFormService.setPlanType( this.form?.get( this.controlName )?.value );
        if (!this.slideValue) return;

        this.leftValue = !this.leftValue;

        (this.slideValue.nativeElement as HTMLElement).classList.remove( this.leftValue ? this.RIGHT_VALUE : this.LEFT_VALUE );
        (this.slideValue.nativeElement as HTMLElement).classList.add( this.leftValue ? this.LEFT_VALUE : this.RIGHT_VALUE );

    }

}