import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../user-list/employee';
import {Location} from '@angular/common'
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  id!: number;
  empEmployee!:Employee
  constructor(
    private _location:Location, 
    private _route: ActivatedRoute, private _router:Router,private _empService:EmpService ) { 
     
    }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._empService.find(this.id).subscribe((data: Employee)=>{
      this.empEmployee = data;
      console.log(data)
    }); 
  }
  goBack(){
    this._location.back();
  }
}
