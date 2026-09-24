import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer';

@Component({
  selector: 'app-customer-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-group.html',
  styleUrls: ['./customer-group.css']
})
export class CustomerGroupComponent {
  public groups: any = [];
  public errorMessage: string = '';

 constructor(private cservice: CustomerService) {
  console.log('=== CONSTRUCTOR CHAY ===');
  this.cservice.getCustomers().subscribe({
    next: (data) => {
      console.log('=== DATA ===', data);
      this.groups = data;
    },
    error: (err) => {
      console.log('=== LOI ===', err);
      this.errorMessage = err.message || err.toString();
    }
  });
}
}
