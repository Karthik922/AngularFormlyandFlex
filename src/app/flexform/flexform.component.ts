import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-flexform',
  templateUrl: './flexform.component.html',
  styleUrls: ['./flexform.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FlexformComponent implements OnInit {
  constructor() { }
  form = new FormGroup({});
  
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'TSelect',
          templateOptions: {
            label: 'Type',
            description: '',
            customSelect: true,
            addonRight: {
              text: '',
            },
            options: [
              { value: 'Guest', label: 'Guest' },
              { value: 'Moderator', label: 'Moderator'  },
              { value: 'Co-ordinator', label: 'Co-ordinator' }
            ]
          },
          validation: {
              messages: {
                  required: 'You need to select a type! '
              }
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'CSelect',
          templateOptions: {
            label: 'Class', 
            description: '',
            required: true,
            customSelect: true,
            addonRight: {
              text: '',
            },
            options: [
              { value: 'Class A', label: 'Class A' },
              { value: 'Class B', label: 'Class B'  },
              { value: 'Class C', label: 'Class C' }
            ]
          },
          validation: {
              messages: {
                  required: 'You need to select the class! '
              }
          },
        },
      ],
    },
    {
      template: '<br/>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'inno-input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
          },
          validation: {
            messages: {
                required: 'You need to provide a first name! '
            }
        }
        },
        {
          className: 'flex-1',
          type: 'inno-input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
          },
          validation: {
            messages: {
                required: 'You need to provide a last name! '
            }
        },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
  {
      template: '<br/>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'inno-input',
          key: 'Pnumber',
          
          templateOptions: {
            type: 'tel',
            label: 'Phone Number',
            placeholder: 'Phone Number',
          },
          validation: {
              messages: {
                  required: 'You need to provide a phone number! '
              }
          }
        },
        {
          className: 'flex-1',
          type: 'inno-email',
          key: 'email',
          templateOptions: {
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            required: true,
            pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) => ` Please type valid Email Address`,
            },
          },
        },
       
      ],
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
  ngOnInit(): void {
  }


}
