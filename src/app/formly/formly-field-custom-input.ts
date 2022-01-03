import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
  <mat-form-field class="example-form-field" appearance="outline">
  <mat-label>{{to.label}}</mat-label>
  <input matInput type="text" required>
  
  
</mat-form-field>


  `,
  styleUrls: ['select-custom-trigger-example.css'],
})

export class FormlyFieldCustomInput extends FieldType {
  //  [fxFlex]="to.fxFlex"

}
