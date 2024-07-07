import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject, Subscription, forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { EmitterService } from 'src/app/EmitterService';
import { filter, takeUntil } from 'rxjs/operators';
import { NavbarStyleTwo2Component } from '../../layouts/navbar-style-two-2/navbar-style-two-2.component';

@Component({
  selector: "app-template-page",
  templateUrl: "./template-page.component.html",
  styleUrls: ["./template-page.component.scss"],
})
export class TemplatePageComponent implements OnInit, OnDestroy {
  imageLoaded = false;
  fetchinData = true;
  subscription: Subscription;
  mainData: any;
  currentRoute: string;
  currentMenuItem: any;
  ContentData: any;
  currentContentData: any;
  private ngUnsubscribe = new Subject();
  @ViewChild(NavbarStyleTwo2Component) childComponent: NavbarStyleTwo2Component;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService,
    private router: Router,
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this.subscription = this.emitterService.currentMessage.subscribe(
      (message) => {
        if (message === true) {
          // this.emitterService.changeMessage(false);
          this.FetchData();
        }
      }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
    this.subscription.unsubscribe();
    // if (this.subscription)
    // {
    //   this.subscription.unsubscribe();
    // }
  }

  FetchData() {
    debugger;
    forkJoin([this.appService.getContents()])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: any) => {
        console.log(response, "response FetchData");

        this.ContentData = response[0].data;

        let mData = localStorage.getItem("mainData");

        if (mData != null) {
          this.mainData = JSON.parse(mData);
          this.currentRoute = "/" + this.route.snapshot.url.join("/");

          let currentMenu = this.mainData.SiteMapList.filter(
            (item) => item.MenuUrl == this.currentRoute
          );

          if (currentMenu.length != 0) {
            this.currentMenuItem = currentMenu[0];
          }

          let ccData = this.ContentData.filter(
            (x) => x.MenuCode == this.currentMenuItem.MenuCode
          );

          if (ccData.length != 0) {
            this.currentContentData = ccData[0];
          }
          console.log(
            this.currentContentData,
            "this.currentContentData.........."
          );
          this.emitterService.changeMessage(false);
        }

        this.fetchinData = false;
      });
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
