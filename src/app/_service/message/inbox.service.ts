import { Injectable } from '@angular/core';
import { BaseService } from '../common';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InboxService extends BaseService{

  constructor(private _http: HttpClient) { 
    super();
  }


  /**
   * Return a data structure for the message inbox
   */
  getMessageInbox(){
    const url = `${this.getApiUrl()}/manage-inbox`;
    return this._http.get(url);
  }


}
