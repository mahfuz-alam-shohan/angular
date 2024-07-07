import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-document-list',
  templateUrl: './layout-document-list.component.html',
  styleUrls: ['./layout-document-list.component.scss']
})
export class LayoutDocumentListComponent implements OnInit
{
  @Input() inputData: any;
  documentList = dummyData;
  constructor() { }

  ngOnInit()
  {
  }

}

const dummyData = [
  {
    imageUrl: "https://via.placeholder.com/150?text=Image+1",
    Title: "Sample Title 1",
    Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    imageUrl: "https://via.placeholder.com/150?text=Image+2",
    Title: "Sample Title 2",
    Details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    imageUrl: "https://via.placeholder.com/150?text=Image+3",
    Title: "Sample Title 3",
    Details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

