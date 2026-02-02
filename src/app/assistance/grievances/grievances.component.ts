import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-grievances',
  templateUrl: './grievances.component.html',
  styleUrls: ['./grievances.component.scss']
})
export class GrievancesComponent {
  submitted = false;
  formErrors: string[] = [];

  model = {
    title: '',
    grievant: '',
    nature: '',
    email: '',
    contact: '',
    time: ''
  };

  submitForm(form: NgForm) {
    this.submitted = true;
    this.formErrors = [];

    if (!this.model.title) {
      this.formErrors.push('Title of Grievance is required.');
    }

    if (!this.model.grievant) {
      this.formErrors.push('Name of Grievant is required.');
    }

    if (form.invalid) {
      setTimeout(() => {
        document.getElementById('error-summary')?.focus();
      });
      return;
    }

    // ✅ Replace with API call
    alert('Form submitted successfully');

    form.resetForm();
    this.submitted = false;
  }
}