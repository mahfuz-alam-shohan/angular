import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AppService } from "src/app/app.service";
interface Image {
  src: string;
  thumbnail: string;
  alt: string;
}

@Component({
  selector: "app-new-and-events-items",
  templateUrl: "./new-and-events-items.component.html",
  styleUrls: ["./new-and-events-items.component.scss"],
})
export class NewAndEventsItemsComponent implements OnInit {
 
  ContentData: any;
  News_event_data: any;
  foundnews: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const ItemId = params.get("ItemId");
      if (ItemId) {
        this.FetchData(ItemId);
      } else {
        console.log("no ItemId");
      }
    });
  }

  FetchData(ItemId) {
    this.appService.getContents().subscribe((response: any) => {
      console.log(response, "response FetchData");

      this.ContentData = response.data;
      console.log(this.ContentData, "Ramu Content Data");

      if (this.ContentData != null) {
        let news = this.ContentData.filter(
          (x) => x.ContentCategoryName == "News And Events"
        );
        this.News_event_data = news;

        let newsItem = this.News_event_data.filter((x) => x.Id == ItemId);
        this.foundnews = newsItem[0];
        console.log(this.News_event_data, "All News Event Data");
      }
    });
  }
}

