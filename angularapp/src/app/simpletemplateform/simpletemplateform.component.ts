import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
  defaultGender: string = 'Male';
  defaultValue: string = 'Angular';
  employee = new Employee();
  submited: boolean = false;
  genders = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' }
  ]
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    //  console.log(form);
    // var emp
    this.submited = true;
    this.employee.course = form.value.course;
    this.employee.username = form.value.userDetails.username;
    this.employee.email = form.value.userDetails.email;
    this.employee.gender = form.value.gender
    form.reset();
    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Male');
    // console.log(form.controls);
    
    this.saveEmployeeData(this.employee)
  }
  saveEmployeeData(emp: Employee) {
    console.log(emp.course);


  }
}




