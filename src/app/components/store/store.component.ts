import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/Company';
import { StoreService } from '../../services/store.service';
import { BranchComponent } from '../branch/branch.component';

@Component({
  selector: 'app-store',
  imports: [BranchComponent],
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {
  store!: Company;
  totalSucursalesQuantity: number = 0;
  constructor(private service: StoreService) {}
  ngOnInit(): void {
    this.store = this.service.getStore();
    this.calculateTotalSucursalesQuantity();
  }
  calculateTotalSucursalesQuantity(): void {
    this.totalSucursalesQuantity = this.store.branches.reduce((acc, branch) => {
      return acc + branch.cuantity;
    }, 0);
  }
}
