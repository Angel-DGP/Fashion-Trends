import { Address } from './Address';
import { Branch } from './Branch';

export class Company {
  id!: string;
  ruc!: string;
  name!: string;
  address!: Address;
  branches!: Branch[];
}
