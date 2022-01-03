import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialExampleModule} from './material.module';


import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexformComponent } from './flexform/flexform.component';
import { FormlyFieldCustomInput } from './formly/formly-field-custom-input';
import {FormlyFieldCustomEmail } from './formly/formly-field-custom-email';
import {FormlyFieldCustomSelect} from './formly/formly-field-custom-select';
import { CommonModule } from '@angular/common';
//import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';
//import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlexformComponent,FormlyFieldCustomSelect,FormlyFieldCustomInput,FormlyFieldCustomEmail
  
    
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true }, 
      types: [
      {name: 'inno-select', component: FormlyFieldCustomSelect},
      {name: 'inno-input', component: FormlyFieldCustomInput},
      {name: 'inno-email', component: FormlyFieldCustomEmail},
    ]}),
    FormlyBootstrapModule,MatToolbarModule,
   FlexLayoutModule,MaterialExampleModule
   //FormlyMatNativeSelectModule 
   //FormlyMatNativeSelectModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
