import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  departments:any=[];
  departmentEndPoint='department/';

  employees:any=[];
  employeeEndPoint='employee/';
  

  modalTitle="";
  EmployeeId=0;
  EmployeeName="";
  Department="";
  DateOfJoining="";
  PhotoFileName="anyphoto.png";
  PhotoPath=environment.PHOTO_URL;

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.API_URL+this.employeeEndPoint)
    .subscribe(data=>{
      this.employees=data;
    });

    this.http.get<any>(environment.API_URL+this.departmentEndPoint)
    .subscribe(data=>{
      this.departments=data;
    });
  }

  onAdd(){
    this.modalTitle="Add Employee";
    this.EmployeeId=0;
    this.EmployeeName="";
    this.Department="";
    this.DateOfJoining="";
    this.PhotoFileName="anyphoto.png";
  }

  onEdit(oneEmp:any){
    this.modalTitle="Edit Employee";
    this.EmployeeId=oneEmp.EmployeeId;
    this.EmployeeName=oneEmp.EmployeeName;
    this.Department=oneEmp.Department;
    this.DateOfJoining=oneEmp.DateOfJoining;
    this.PhotoFileName=oneEmp.PhotoFileName;
  }

  onDelete(id:any){
    if(confirm('Are You Sure???')){
      this.http.delete(environment.API_URL+this.employeeEndPoint+id)
      .subscribe(res=>{
        alert(res.toString());
        this.refreshList();
      });
    }
  }

  onCreate(){
    var value={
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    };

    this.http.post(environment.API_URL+this.employeeEndPoint,value).subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  onUpdate(){
    var value={
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    };

    this.http.put(environment.API_URL+this.employeeEndPoint,value)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }


  onImageUpload(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('file',file,file.name);

    this.http.post(environment.API_URL+this.employeeEndPoint+'SaveFile',formData)
    .subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
    })

  }

  

}

