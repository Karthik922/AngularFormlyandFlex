import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {FormControl,Validators} from '@angular/forms';




@Component({
  selector: 'formly-field-custom-select',
  template: `
  <mat-form-field [class]="field.templateOptions?.class" appearance="outline" fxFlex="100" class="margin-space">
  <mat-label>{{to.label}}</mat-label>
  <mat-select>
      <mat-option>
        Guest
      </mat-option>
     
    </mat-select>
    <div class="error_msg"  *ngIf="showError"><formly-validation-message [field]="field"></formly-validation-message></div>

</mat-form-field>
  `,
  styleUrls: ['select-custom-trigger-example.css'],
  
})
export class FormlyFieldCustomSelect extends FieldType{
 
  // options:any = [
  //   { value: 'Guest', label: 'Guest' },
  //   { value: 'Moderator', label: 'Moderator'  },
  //   { value: 'Co-ordinator', label: 'Co-ordinator' },
  // ];


 
  
}