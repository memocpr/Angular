import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  departments:any=[];
  departmentEndPoint='department/';

  modalTitle="";
  DepartmentId=0;
  DepartmentName="";

  DepartmentIdFilter="";
  DepartmentNameFilter="";
  departmentsWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.API_URL+this.departmentEndPoint)
    .subscribe(data=>{
      this.departments=data;
      this.departmentsWithoutFilter=data;
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


  filterResults(){
    var DepartmentIdFilter=this.DepartmentIdFilter;
    var DepartmentNameFilter=this.DepartmentNameFilter;

    this.departments=this.departmentsWithoutFilter.filter(
      function(el:any){
       return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
      }
    );
  }


  sortResults(prop:any,asc:any){
    this.departments=this.departmentsWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
      }else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
      }
    })
  }

  

}
