import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../user-list/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  empForm!:FormGroup;
  id!: number;
  empEmployee!:Employee
  constructor(private _fb:FormBuilder, 
    private _location:Location, 
    private _route: ActivatedRoute, private _router:Router,private _empService:EmpService ) { 
     
    }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._empService.find(this.id).subscribe((data: Employee)=>{
      this.empEmployee = data;
    }); 
     
    this.empForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      salary: new FormControl('')
  })
}
  
 

  submit(){
    console.log(this.empForm.value);
    this._empService.update(this.id, this.empForm.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this._router.navigateByUrl('dashboard');
    })
  }

goBack(){
  this._location.back();
}

}
