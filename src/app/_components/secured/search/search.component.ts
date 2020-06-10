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

  }

      // convenience getter for easy access to form fields
  get f() { return this.searchCriteriaForm.controls; }

  onSearch(): void {

    console.log("Performing search");
    if (this.searchCriteriaForm.invalid) {
      return;
    }

    this._searchUserService.searchUserDetails(this.f.searchCriteria.value, this.f.searchValue.value)
    .pipe(first()).subscribe( 
      result => {
          let data = <SearchResult>result;
          console.log(data);
      },
      error => {
        console.error("Error getting the result");
        console.error(error);
      });

  }

}

//Specific for this component
interface SearchResult{
  status: number;
  data?: AppUserDetails;
}
