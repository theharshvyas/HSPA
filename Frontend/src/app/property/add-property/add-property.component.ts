import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  //will come from masters
  propertyType: Array<string> = ['House', 'Appartment', 'Duplex']
  furnishType: Array<string> = ['Full', 'Semi', 'Unfurnished']
  communityType: Array<string> = ['Yes', 'No']
  entranceDirection: Array<string> = ['East', 'West','South', 'North']
  readyToMove: Array<string> = ['Yes', 'No']

  propertyView: IProperty={
    Id:null,
    Name:'',
    Price: null,
    SellRent: null,
    Type: null
  };

  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router:Router) { }

  @ViewChild('formTabs') formTabs?: TabsetComponent;

  ngOnInit() {

  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
