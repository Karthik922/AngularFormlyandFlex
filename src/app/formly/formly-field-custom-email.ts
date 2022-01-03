import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'formly-field-custom-select',
  template: `
  <mat-form-field class="example-full-width" appearance="outline">
    <mat-label>Email</mat-label>
    <input type="email" matInput [formControl]="emailFormControl" placeholder="Ex. pat@example.com" required>
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
  `,
  styleUrls: ['select-custom-trigger-example.css'],
  
})
export class FormlyFieldCustomEmail extends FieldType {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}