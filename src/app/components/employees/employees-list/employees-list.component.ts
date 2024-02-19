import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  nameFilter: string = '';
  departmentFilter: string = '';
  nameFilterEnabled: boolean = false;
  departmentFilterEnabled: boolean = false;
  selectedFilter: string = '';


  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeesService.getAllEmployees()
      .subscribe({
        next: (employees) => {
          this.employees = employees;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  onFilterChange(): void {
    if (this.selectedFilter === 'name') {
        this.nameFilterEnabled = true;
        this.departmentFilterEnabled = false;
    } else if (this.selectedFilter === 'department') {
        this.nameFilterEnabled = false;
        this.departmentFilterEnabled = true;
    }
  }


  get filteredEmployees(): Employee[] {
    if (!this.employees) return [];

    if (this.nameFilterEnabled) {
      return this.employees.filter(employee =>
        employee.name.toLowerCase().includes(this.nameFilter.toLowerCase())
      );
    } else if (this.departmentFilterEnabled) {
      return this.employees.filter(employee =>
        employee.department.toLowerCase().includes(this.departmentFilter.toLowerCase())
      );
    } else {
      return [];
    }
  }
}





// import { Component } from '@angular/core';
// import { Employee } from '../../../models/employee.model';
// import { EmployeesService } from '../../../services/employees.service';

// @Component({
//   selector: 'app-employees-list',
//   templateUrl: './employees-list.component.html',
//   styleUrl: './employees-list.component.css'
// })
// export class EmployeesListComponent {
//   employees: Employee[] = []
//   nameFilter: string = '';
//   departmentFilter: string = '';
//   constructor(private employeesService: EmployeesService) {}

//   ngOnInit(): void {
//     this.employeesService.getAllEmployees()
//     .subscribe({
//       next: (employees) => {
//         this.employees = employees;
//       },
//       error: (response) => {
//         console.log(response);
//       }
//     })
//   }


//   get filteredEmployees(): Employee[] {
//     if (!this.employees) return [];
    
//     return this.employees.filter(employee => 
//       (employee.name.toLowerCase().includes(this.nameFilter.toLowerCase()) || 
//        employee.department.toLowerCase().includes(this.departmentFilter.toLowerCase()))
//     );
//   }
// }
