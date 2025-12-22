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
  client_basis: any;
  onl_button: any;
  brandName = "Ispahani Public School & College";
  brandLocation = "Comilla Cantonment";
  brandInitials = "IP";
  codes: string[] = ["EIIN 105826", "College 7925", "School 7801"];
  mobileOpen = false;
  openMap: Record<number, boolean> = {};

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
    forkJoin([this.appService.getClientBasics(), this.appService.getNotices()])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (response: any) => {
          console.log(response, "response FetchMainData");

          this.mainData = response[0].data;
          this.client_basis = response[0].data.LocalOptions;
          console.log(this.client_basis, "Home Basis");
          this.syncBranding();

          this.sortedNotice = this.sortByStartDate(response[1].data);
          console.log(this.sortedNotice, "Sorted Notices");
          
          // Online Admission Button
          if (this.client_basis != null) {
            let abc_button = this.client_basis.filter(
              (x) => x.DisplayName === "Online Admission"
            );
            this.onl_button = abc_button[0];
            console.log(this.onl_button, "Button Data");
          }

          if (this.sortedNotice != null) {
            let scrollFiltered = this.sortedNotice.filter(
              (x) => x.ShowScroll === true && x.IsActive === true
            );
            this.Notices = scrollFiltered.sort((a, b) => b.Id - a.Id);
          }

          // Menu items processing
          if (this.mainData != null) {
            let siteMapSorted = [];
            // Filter out unwanted menu items (welcome, etc.)
            let newArraay = this.mainData.SiteMapList.filter(
              (item) => item.MenuCode != 187 && item.MenuCode != 216 && item.MenuCode != 217
            ).map(item => ({
              ...item,
              Items: []
            }));

            console.log(newArraay, "All menu except Welcome");

            // Initialize parent items with ParentId === 0 and sort by MenuOrder
            newArraay.forEach((item) => {
              if (item.ParentId === 0) {
                siteMapSorted.push({
                  ...item,
                  Items: [],
                });
              }
            });

            // Sort the parent items by MenuOrder in ascending order
            siteMapSorted.sort((a, b) => a.MenuOrder - b.MenuOrder);

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

            // Sort the child items of each parent by MenuOrder
            siteMapSorted.forEach((parent) => {
              if (parent.Items.length > 0) {
                parent.Items.sort((a, b) => a.MenuOrder - b.MenuOrder);
              }
            });

            this.AllmenuItems = siteMapSorted;
            console.log(this.AllmenuItems, "Menu Items");

            // Split menu items into two arrays for display
            const middleIndex = Math.ceil(siteMapSorted.length / 2);
            this.array1 = siteMapSorted.slice(0, middleIndex);
            this.array2 = siteMapSorted.slice(middleIndex);

            localStorage.setItem("mainData", JSON.stringify(this.mainData));
          }

          if (this.sortedNotice != null && this.mainData != null) {
            this.loadingData = false;
            this.emitterService.changeMessage(true);
          }
        },
        (error) => {
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

  TransformUrl(value: string) {
    if (!value) return "#";
    if (value.startsWith("http://") || value.startsWith("https://")) {
      return value;
    }
    return `https://${value}`;
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

  toggleMobileNav(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  toggleChild(id: number): void {
    if (!id) return;
    this.openMap[id] = !this.openMap[id];
  }

  isInternal(url: string | undefined | null): boolean {
    if (!url) {
      return true;
    }
    return !/^https?:\/\//i.test(url);
  }

  private syncBranding(): void {
    const clientName = this.mainData?.ClientName || this.mainData?.EnglishName;
    const address = this.mainData?.Address || this.mainData?.Location;
    const codes =
      this.mainData?.LocalOptions?.filter?.((x: any) =>
        ["eiin", "college code", "school code", "code"].includes(
          (x.DisplayName || "").toLowerCase()
        )
      ) || [];

    this.brandName = clientName || this.brandName;
    this.brandLocation = address || this.brandLocation;
    this.brandInitials = this.brandName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    if (codes.length) {
      this.codes = codes
        .map((x: any) => {
          const label = x.DisplayName || "Code";
          const value = x.TextValue || x.Value;
          return value ? `${label}: ${value}` : null;
        })
        .filter(Boolean);
    }
  }
}
