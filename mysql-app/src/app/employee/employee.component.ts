import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  employees:any=[];
  employeeEndPoint='department/';

  modalTitle="";
  DepartmentId=0;
  DepartmentName="";

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.API_URL+this.departmentEndPoint)
    .subscribe(data=>{
      this.departments=data;
      console.log("Departments : " +this.departments)
    });
  }

  onAdd(){
    this.modalTitle="Add Department";
    this.DepartmentId=0;
    this.DepartmentName="";
  }

  onEdit(oneDep:any){
    this.modalTitle="Edit Department";
    this.DepartmentId=oneDep.DepartmentId;
    this.DepartmentName=oneDep.DepartmentName;
  }

  onDelete(id:any){
    if(confirm('Are You Sure???')){
      this.http.delete(environment.API_URL+this.departmentEndPoint+id)
      .subscribe(res=>{
        alert(res.toString());
        this.refreshList();
      });
    }
  }

  onCreate(){
    var value={
      DepartmentName:this.DepartmentName
    };

    this.http.post(environment.API_URL+this.departmentEndPoint,value).subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  onUpdate(){
    var value={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };

    this.http.put(environment.API_URL+this.departmentEndPoint,value).subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  

}

