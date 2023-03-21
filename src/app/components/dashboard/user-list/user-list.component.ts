import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from './employee';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  employeeList:Employee[]=[]
  constructor( private _empService:EmpService) { }


  ngOnInit(): void {
    this.getEmplyeeAll()
  }
  getEmplyeeAll(){
    this._empService.getAll()
    .subscribe(res=>{
      this.employeeList =res
    })
  }

 
  deleteEmp(id:number){
     this._empService.delete(id).subscribe(res=>{
       this.getEmplyeeAll()
       alert('Post deleted successfully!')
     })
  }
}
