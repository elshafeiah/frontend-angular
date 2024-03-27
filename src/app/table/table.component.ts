import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(private emplyeeService:EmployeeService){}
  data:any;

  ngOnInit(){
    this.emplyeeService.get().subscribe(response=>{
      this.data = response;
    });
  }


}
