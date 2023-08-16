import { Component } from '@angular/core';
import { MultiStepFormInterface } from './multi-step-form/interfaces/multi-step-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-step-form';

  multiStepFormData: Array<MultiStepFormInterface> = [
    {
      navBarTitle: 'YOUR INFO',
      formContent: {
        formGroupName: 'yourInfo',
        title: 'Personal info',
        subtitle: 'Please provide your name, email address, and phone number.',
        formControls: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'e.g. Stephen King'
          },
          {
            type: 'email',
            label: 'Email Address',
            name: 'email',
            placeholder: 'e.g. stephenking@lorem.com'
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phone',
            placeholder: 'e.g. +1 234 567 890'
          }
        ]
      }
    },
    {
      navBarTitle: 'SELECT PLAN',
      formContent: {
        formGroupName: 'selectPlan',
        title: 'Select your plan',
        subtitle: 'You have the option of monthly or yearly billing.',
        formControls: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'e.g. Stephen King'
          },
          {
            type: 'email',
            label: 'Email Address',
            name: 'email',
            placeholder: 'e.g. stephenking@lorem.com'
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phone',
            placeholder: 'e.g. +1 234 567 890'
          }
        ]
      }
    },
    {
      navBarTitle: 'ADD-ONS',
      formContent: {
        formGroupName: 'addOns',
        title: 'Pick add-ons',
        subtitle: 'Please provide your name, email address, and phone number.',
        formControls: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'e.g. Stephen King'
          },
          {
            type: 'email',
            label: 'Email Address',
            name: 'email',
            placeholder: 'e.g. stephenking@lorem.com'
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phone',
            placeholder: 'e.g. +1 234 567 890'
          }
        ]
      }
    },
    {
      navBarTitle: 'SUMMARY',
      formContent: {
        formGroupName: 'summary',
        title: 'Finishing up',
        subtitle: 'Please provide your name, email address, and phone number.',
        formControls: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'e.g. Stephen King'
          },
          {
            type: 'email',
            label: 'Email Address',
            name: 'email',
            placeholder: 'e.g. stephenking@lorem.com'
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phone',
            placeholder: 'e.g. +1 234 567 890'
          }
        ]
      }
    }
  ];

}
