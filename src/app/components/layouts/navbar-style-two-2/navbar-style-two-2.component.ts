// import { Component, HostListener, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
// import { arabic, bangla, english } from 'src/services/locale';
import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Observable, Subject, Subscription, forkJoin, interval } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { EmitterService } from "src/app/EmitterService";
import { AppService } from "src/app/app.service";
import * as _ from 'lodash';

@Component({
  selector: "app-navbar-style-two-2",
  templateUrl: "./navbar-style-two-2.component.html",
  styleUrls: ["./navbar-style-two-2.component.scss"],
})
export class NavbarStyleTwo2Component implements OnInit, OnDestroy {
  scrolled = 0;
  loadingData = true;
  isScrolled = false;
  isSmall: boolean;
  isBig = true;
  isLeft = true;
  isMiddle = false;
  subscription: Subscription;
  currentDay: string;
  currentTime: string;
  currentDate: string;
  Notices = [];
  array1 = [];
  array2 = [];
  currentDateTime$: Observable<string>;
  mainData: any;
  sortedNotice: any;
  private ngUnsubscribe = new Subject();
  @Output() parametersReady = new EventEmitter<any>();
  AllmenuItems: any[];

  constructor(
    private appService: AppService,
    private emitterService: EmitterService
  ) {
    this.smallScreen();
  }

  ngOnInit(): void {
    this.currentDateTime$ = interval(1000).pipe(
      map(() => {
        const currentDate = new Date();
        const dayOfWeek = this.getDayOfWeek(currentDate);
        const time = this.getTime(currentDate);
        const month = this.getMonth(currentDate);
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        return `${dayOfWeek} ${" | "}  ${time}  ${" | "}   ${month} ${day}, ${year}`;
      })
    );

    this.FetchMainData();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

  FetchMainData() {
    // debugger;
    forkJoin([this.appService.getClientBasics(), this.appService.getNotices()])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (response: any) => {
          console.log(response, "response FetchMainData");

          this.mainData = response[0].data;

          this.sortedNotice = this.sortByStartDate(response[1].data);
          if (this.sortedNotice != null) {
            let scrollFiltered = this.sortedNotice.filter(
              (x) => x.ShowScroll === true
            );

            this.Notices = scrollFiltered.sort((a, b) => b.Id - a.Id);

            // localStorage.setItem('noticeData', JSON.stringify(this.Notices));
          }

          // Starts all menu
          if (this.mainData != null) {
            let siteMapSorted = [];
            // except welcome
            let newArraay = [];

            this.mainData.SiteMapList.forEach((item) => {
              if (
                item.MenuCode != 187 &&
                item.MenuCode != 216 &&
                item.MenuCode != 217
              ) {
                newArraay.push({
                  ...item,
                  Items: [],
                });
              }
            });
            0;
            // except welcome ends

            // Initialize parent items with ParentId === 0
            newArraay.forEach((item) => {
              if (item.ParentId === 0) {
                siteMapSorted.push({
                  ...item,
                  Items: [],
                });
              }
            });

            // Nest the child items under their respective parents
            newArraay.forEach((item) => {
              if (item.ParentId !== 0) {
                let parentItem = siteMapSorted.find(
                  (parent) => parent.Id === item.ParentId
                );
                if (parentItem) {
                  parentItem.Items.push(item);
                } else {
                  // If parent item not found, create a new parent item placeholder
                  parentItem = {
                    Id: item.ParentId,
                    MenuName: item.DisplayNameParent,
                    Items: [item],
                  };
                  siteMapSorted.push(parentItem);
                }
              }
            });

            // Sort the parent items to ensure any placeholder parent items are positioned correctly
            siteMapSorted.sort((a, b) => a.Id - b.Id);

            this.AllmenuItems = siteMapSorted;
            // console.log(this.AllmenuItems, "Menu Items");

            const middleIndex = Math.ceil(siteMapSorted.length / 2);

            this.array1 = siteMapSorted.slice(0, middleIndex);
            this.array2 = siteMapSorted.slice(middleIndex);

            localStorage.setItem("mainData", JSON.stringify(this.mainData));
          }
          if (this.sortedNotice != null && this.mainData != null) {
            this.loadingData = false;
            this.emitterService.changeMessage(true);
            // this.parametersReady.emit(true);
          }
        },
        (error) => {
          // Handle errors
          console.error("Error:", error);
        }
      );
  }

  private getDayOfWeek(date: Date): string {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }

  private getTime(date: Date): string {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const ampm = date.getHours() < 12 ? "AM" : "PM";
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  }

  private getMonth(date: Date): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  }

  @HostListener("window:resize")
  onResize() {
    this.smallScreen();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  smallScreen() {
    this.isSmall = window.innerWidth < 1300;
    this.isBig = window.innerWidth > 1300;
    this.isLeft = window.innerWidth > 1300;
    this.isMiddle = window.innerWidth < 1300;
  }

  onNavigate(url: string) {
    let MyUrl = "";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      MyUrl = url;
    } else {
      MyUrl = "https://" + url;
    }
    window.open(MyUrl, "_blank");
  }

  NoAdmissionAlert() {
    alert("Admission services not open yet.");
    return;
  }

  private getTimeFull(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  public sortByStartDate(array: any): any {
    return array.sort((a: any, b: any) => {
      return this.getTimeFull(b.CreatedDate) - this.getTimeFull(a.CreatedDate);
    });
  }
}
