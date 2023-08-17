import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-slide-element',
    templateUrl: './slide-element.component.html',
    styleUrls: ['./slide-element.component.scss']
})
export class SlideElementComponent {

    @ViewChild('slideValue') slideValue: ElementRef | undefined;
    
    private readonly RIGHT_VALUE: string = 'move-to-right';
    private readonly LEFT_VALUE: string = 'move-to-left';
    leftValue: boolean = true;

    constructor() {}

    toggleValue(): void {

        if (!this.slideValue) return;

        this.leftValue = !this.leftValue;

        (this.slideValue.nativeElement as HTMLElement).classList.remove( this.leftValue ? this.RIGHT_VALUE : this.LEFT_VALUE );
        (this.slideValue.nativeElement as HTMLElement).classList.add( this.leftValue ? this.LEFT_VALUE : this.RIGHT_VALUE );

        
    }

}