import {Component, Input, OnInit} from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-form-debub',
  templateUrl: './form-debub.component.html',
  styleUrls: ['./form-debub.component.css']
})
export class FormDebubComponent implements OnInit {

  @Input() form;
  constructor() { }

  ngOnInit(): void {
  }

}
