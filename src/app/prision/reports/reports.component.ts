import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Reports } from 'src/app/service/Report';
import { ClientelaravelService } from 'src/app/service/clientelaravel.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Reports[] = [];

  myFormWard!: FormGroup;

  constructor (public servc:ClientelaravelService)
  {
    this.servc.getReports().subscribe(r=>{
      console.warn(r);
      console.table(r[0]);
    })
  }
  ngOnInit(): void {
    this.getReportsComponent()

    this.myFormWard = new FormGroup({
      nameF: new FormControl(''),
      authorF: new FormControl(''),
      descriptionF: new FormControl(''),
    });
}
getReportsComponent() {
  this.servc.getReports().subscribe((r) => {
    return this.reports = r;
    
  });
  
}
}

