import { Injectable } from '@angular/core';
import { storeData } from '../data/store.data';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private store: Company = storeData;
  constructor() {}

  getStore(): Company {
    return this.store;
  }
}
