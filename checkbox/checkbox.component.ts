import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  selectedAll: any;
  selectedAll2: any;
  names: any;
  names2: any;
  checked = true;
  constructor(private fb: FormBuilder) {
    this.names = [
      { name:'Users', selected: false },
      { name:'Interfaces', selected: false },
      { name:'Service Management', selected: false },
      { name:'Span Control', selected: false },
      { name:'Coustmer segments', selected: false },
      { name:'User Credits', selected: false },
    ];    

    this.names2 = [
      { name:'Campaigns', selected: false },
      { name:'Phone Book', selected: false },
      { name:'Template Studio', selected: false },
      { name:'Alert Manager', selected: false },
      { name:'Message Tracking', selected: false },
      { name:'Campaign Reports', selected: false },
      { name:'Department Wise Reports', selected: false },
      { name:'Interface Wise Reports', selected: false },
      { name:'User Wise Reports', selected: false },
      { name:'Credit Reports', selected: false },
      { name:'Message Tracking', selected: false },
      { name:'OffLine Alerts', selected: false },
    ];
    
  }

  approval = false;

  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function (item: any) {
      return item.selected == true && this.approval.selected;
    })
  }
  

  selectAll2() {
    for (var i = 0; i < this.names2.length; i++) {
      this.names2[i].selected = this.selectedAll2;
    }
  }
  
  checkIfAllSelected2() {
    this.selectedAll2 = this.names2.every(function (item2: any) {
      return item2.selected == true;
    })
  }

  onEdit(){
    console.log("works");
    if(this.selectedAll.checked){
      this.selectAll();
    }else{
      this.checkIfAllSelected();
    }
 
  }
 











  
  show: boolean = false;
  edit(){
    this.show = true;
  }
  save(){
    console.log("Saved");
    this.show = false;
    this.names.filter( save1 => {
      console.log("save-->",save1);
      var realNames = save1;
      console.log("RealNames -->",realNames);
    })
    this.names2.filter( save2 => {
      console.log("save2-->", save2);
      var realNames2 = save2;
      console.log("RealNames2-->", realNames2);
    })
    // this.names2.forEach( save2 => {
    //   console.log(save2);
    //   this.names2 = save2;
    // })
    // for(var i=0; i< this.names.length; i++){
    //   this.names = this.names.some( function (it) {
    //     this.names[i].selected = true;
    //  })
    //   console.log(this.names);
    // }
  }



}
