import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({selector: 'r3app-search',templateUrl: './search.component.html'})
export class SearchComponent implements OnInit {

  searchCriteriaForm: FormGroup
  loading: Boolean = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchCriteriaForm = this._formBuilder.group({
      criteria: ['', Validators.required],
      value: ['', Validators.required]
    });
  }


  onSearch(): void {
    console.log("Performing search");
    if (this.searchCriteriaForm.invalid) {
      return;
  }

    console.log(JSON.stringify(this.searchCriteriaForm));
  }

}
