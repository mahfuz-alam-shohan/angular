import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-image-list',
  templateUrl: './layout-image-list.component.html',
  styleUrls: ['./layout-image-list.component.scss']
})
export class LayoutImageListComponent implements OnInit
{

  @Input() inputData: any;

  constructor() { }

  ngOnInit()
  {
  }

}




