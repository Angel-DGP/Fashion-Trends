import { Component, Input } from '@angular/core';
import { Branch } from '../../models/Branch';

@Component({
  selector: 'app-branch',
  imports: [],
  templateUrl: './branch.component.html',
})
export class BranchComponent {
  @Input() branch!: Branch;
  
}
