
import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy 
{
@Input('srvElement') element:{type:string,name:string,content:string};
@Input() name:string;
@ViewChild('heading', {static:true}) header: ElementRef;
@ContentChild('contentParagraph', {static:true}) paragraph : ElementRef;

  constructor() {
 console.log('consructor called');
 }
    ngOnDestroy(): void {
        console.log('ngOnDestroy called');
    }
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked called');
    }
    ngAfterViewInit(): void {
        console.log('ngAfterViewInit called');
        console.log('Text Content: '+this.header.nativeElement.textContent);
    }
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked called');
    }
    ngAfterContentInit(): void {
         console.log('ngAfterContentInit called');
         console.log('Text Content of paragraph : '+ this.paragraph.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
        console.log('Text Content: '+this.header.nativeElement.textContent);
        console.log('Text Content of paragraph : '+ this.paragraph.nativeElement.textContent);
    }

}
