import { Injectable } from '@angular/core';
import { AppUserDetails } from '@/_models';
import { BaseService } from '../common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SearchUserService extends BaseService{

  constructor(private _http: HttpClient) { 
    super();
  }



  /**
   * Performs a search for a given searchable criteria and value
   * @param criteria 
   * @param value 
   */
  searchUserDetails(criteria: string, value: string) : AppUserDetails[]{
    
    const url = `${this.getApiUrl()}/customer/users?criteria=${criteria}&value=${value}`;
    const encodeuri = encodeURI(url);
    
    console.log(`Searching user details with uri of ${encodeuri}`);
    this._http.get(encodeuri).pipe(map(userDetails => {
      JSON.stringify(userDetails);
      return userDetails;
    }));

    return null;
  }


}
