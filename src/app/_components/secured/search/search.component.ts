import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AlertService } from '@/_service/utilities/alert.service';
import { SearchUserService } from '@/_service/search';
import { first } from 'rxjs/operators';
import { AppUserDetails } from '@/_models';

@Component({selector: 'r3app-search',templateUrl: './search.component.html'})
export class SearchComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  loading: Boolean = false;

  searchedUsers : AppUserDetails[];

  
  constructor(
    private _formBuilder: FormBuilder,
    private _alertService: AlertService,
    private _searchUserService: SearchUserService
    ) { }

  ngOnInit(): void {

    this.searchCriteriaForm = this._formBuilder.group({
      searchCriteria: ['', Validators.required],
      searchValue: ['', Validators.required]
    });

    this.searchedUsers = new Array();

  }

      // convenience getter for easy access to form fields
  get f() { return this.searchCriteriaForm.controls; }

  onSearch(): void {

    console.log("Performing search");
    if (this.searchCriteriaForm.invalid) {
      return;
    }

    this._searchUserService.searchUserDetails(this.f.searchCriteria.value, this.f.searchValue.value)
    //.pipe(first())
    .subscribe( 
      (result:SearchResult) => {
          let data:SearchResult = result;
          this.searchedUsers = data.data;
          console.log(data);
      },
      error => {
        console.error(error);
        this._alertService.error({
          code:'2345',
          message: 'Unable to process search result!',
          type: 'error'
        });
      });

  }

}

//Specific for this component
interface SearchResult{
  status: number;
  data?: AppUserDetails[];
}
