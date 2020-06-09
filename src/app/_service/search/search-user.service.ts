import { Injectable } from '@angular/core';
import { AppUserDetails } from '@/_models';
import { BaseService } from '../common';

@Injectable({providedIn: 'root'})
export class SearchUserService extends BaseService{

  constructor() { 
    super();
  }



  /**
   * Performs a search for a given searchable criteria and value
   * @param criteria 
   * @param value 
   */
  searchUserDetails(criteria: string, value: string) : AppUserDetails[]{
    
    return null;
  }


}
