import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  empForm!:FormGroup;

  constructor(private _fb:FormBuilder, 
    private _location:Location, private _router:Router,private _empService:EmpService ) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      salary: new FormControl('')
    });
  }






  onSubmit(){
    console.log(this.empForm.value);
    this._empService.create(this.empForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this._router.navigateByUrl('dashboard');
    })
  }

 
  goBack(){
    this._location.back();
  }
}
