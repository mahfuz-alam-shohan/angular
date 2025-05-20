import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription, forkJoin } from 'rxjs';
import { EmitterService } from 'src/app/EmitterService';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit
{
  Notices = [];
  subscription: Subscription;
  loadingData = true;
  urlSafe: SafeResourceUrl;



  selectedNotice: any;

  constructor(private emitterService: EmitterService,
    public sanitizer: DomSanitizer, private appService: AppService,)
  {

  }

  ngOnInit(): void
  {
    this.FetchData();
  }

FetchData() {
  forkJoin([
    this.appService.getNotices(),
  ]).subscribe((response: any) => {
    console.log(response, 'response FetchData');

    this.Notices = response[0].data
      .filter((x) => x.IsActive === true);

    this.Notices.sort((a, b) => b.Id - a.Id);

    this.loadingData = false;
  });
}

  showNotice(event: Event, notice: any)
  {
    event.preventDefault();
    this.selectedNotice = notice;

    let val = "";
    if (this.selectedNotice.FileLink.includes('https://'))
    {
      val = this.selectedNotice.FileLink;
    }
    else
    {
      val = `https://${this.selectedNotice.FileLink}`
    }

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(val);

  }

  isImage(link: string): boolean
  {
    return /\.(jpe?g|png|gif)$/i.test(link);
  }

  TransformUrl(value)
  {
    let val = "";
    if (value.includes('https://'))
    {
      val = value;
    }
    else
    {
      val = `https://${value}`
    }

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(val);

    return this.urlSafe;

  }
}
