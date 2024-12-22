import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-layout-document-single',
  templateUrl: './layout-document-single.component.html',
  styleUrls: ['./layout-document-single.component.scss']
})
export class LayoutDocumentSingleComponent implements OnInit
{
  @Input() inputData: any;
  urlSafe: SafeResourceUrl;
  documentSingle = dummyData;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit()
  {
    let val = '';
    if (this.documentSingle.FilePath.includes('https://'))
    {
      val = this.documentSingle.FilePath;
    }
    else
    {
      val = `https://${this.documentSingle.FilePath}`
    }

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }

}


const dummyData = {
  "FilePath": "https://jaskm-edu-bd.s3.ap-southeast-1.amazonaws.com/dws/2024/notice/Notice_ABC_21-01-2024-04-51-46_s.pdf",
  "Name": 'ABCD1212'
}
