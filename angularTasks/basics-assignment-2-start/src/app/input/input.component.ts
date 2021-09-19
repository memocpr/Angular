import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

username='';

  constructor() { }

  ngOnInit(): void {
  }

inputReset(){
this.username='';
}

}
