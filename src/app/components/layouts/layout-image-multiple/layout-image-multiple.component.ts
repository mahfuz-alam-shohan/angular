import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-image-multiple',
  templateUrl: './layout-image-multiple.component.html',
  styleUrls: ['./layout-image-multiple.component.scss']
})
export class LayoutImageMultipleComponent implements OnInit
{

  @Input() inputData: any;
  constructor() { }

  ngOnInit()
  {
  }

  
}


