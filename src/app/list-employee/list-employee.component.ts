import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService,private router:Router){}

 ngOnInit():void{

  this.getEmployee();
 
 }

 private getEmployee(){

  this.employeeService.getEmployeeList().subscribe(data=>{

    this.employees=data;

  })
 }

 updateEmployee(id:number){

  this.router.navigate(['update-employee',id]);
 }

 deleteEmployee(id:number){

  this.employeeService.deleteEmployeeById(id).subscribe(data=>{

    console.log(data);
    this.getEmployee();
  })

 }

 viewEmployee(id:number){

  this.router.navigate(['employee-details',id]);

 }
 
}
