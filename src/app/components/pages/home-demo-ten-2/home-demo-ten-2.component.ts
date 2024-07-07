import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { Subscription, forkJoin } from "rxjs";
import { EmitterService } from "src/app/EmitterService";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-home-demo-ten-2",
  templateUrl: "./home-demo-ten-2.component.html",
  styleUrls: ["./home-demo-ten-2.component.scss"],
})
export class HomeDemoTen2Component implements OnInit {
  cardGroups: any[][] = [];
  cardGroupsNews: any[][] = [];

  // Event
  subscription: Subscription;
  slides = [];
  Notices = [];
  Notices2 = [];
  all_static_data: any;
  ContentData: any;
  loadingData = true;
  HomeContent: any;
  News_event_data: any;
  club_data: any;
  mission_data: any;
  vission_data: any;
  MainData: any;
  numVisibleCards: number;
  items: string[] = ["photos", "videos"];
  selectedItem: string = "photos";
  VideoAlbums: any;
  test: any;
  VideoAlbumShown = [];
  imageLoaded = false;
  ImageAlbums: any;
  ImageAlbumShown = [];
  GBMessages: any;
  GBMessageShown = [];
  foundnews: any;
  foundAchivements: any;
  foundClubs: any;
  randomBackgroundColor: string = "#000000";
  hoverShadowColor: string = "#00000033";
  all_achievement_data: any;
  all_news_and_event_data: any;

  constructor(
    private emitterService: EmitterService,
    private appService: AppService
  ) {
    this.subscription = this.emitterService.currentMessage.subscribe(
      (message) => {
        if (message === true) {
          let mainData = localStorage.getItem("mainData");

          if (mainData != null) {
            this.ContentData = JSON.parse(mainData);
            this.initializeAchievementData();
            this.initializeNewsEventData();
          }
        }
      }
    );
  }

  ngOnInit(): void {
    this.numVisibleCards = window.innerWidth < 768 ? 1 : 3;
    this.FetchData();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private initializeAchievementData(): void {
    if (this.ContentData != null) {
      const achievements_data = this.ContentData.filter(
        (x) => x.ContentCategoryName === "Achievements"
      );
      this.foundAchivements = achievements_data.slice(0, 6);
      console.log(this.foundAchivements, "All Achievement Data");
      this.groupCards();
    }
  }

  private initializeNewsEventData(): void {
    if (this.ContentData != null) {
      const news_data = this.ContentData.filter(
        (x) => x.ContentCategoryName === "News And Events"
      );
      this.foundnews = news_data.slice(0, 6);
      console.log(this.foundnews, "All news event data");
      this.groupnewsCards();
    }
  }

  private groupCards(): void {
    this.cardGroups = [];
    for (let i = 0; i < this.foundAchivements.length; i += 3) {
      this.cardGroups.push(this.foundAchivements.slice(i, i + 3));
    }
  }

  private groupnewsCards(): void {
    this.cardGroupsNews = [];
    for (let i = 0; i < this.foundnews.length; i += 3) {
      this.cardGroupsNews.push(this.foundnews.slice(i, i + 3));
    }
  }

  FetchData() {
    forkJoin([
      this.appService.getNotices(),
      this.appService.getContents(),
      this.appService.getVideoAlbums(),
      this.appService.getImageFolders(),
      this.appService.getGBMessages(),
      this.appService.getSlides(),
    ]).subscribe((response: any) => {
      console.log(response, "response FetchData All");

      // debugger;
      // To get Notice Data
      this.Notices = response[0].data.filter((x) => x.ShowScroll === true);

      this.Notices.sort((a, b) => b.Id - a.Id);

      this.ContentData = response[1].data;
      this.initializeAchievementData();
      this.initializeNewsEventData();

      // To get Slider Data
      this.slides = response[5].data;
      console.log(this.slides, "Today Slides");
      // To get Welcome Message
      if (this.ContentData != null) {
        let homeContent = this.ContentData.filter(
          (x) => x.ContentCategoryName == "Welcome"
        );
        this.HomeContent = homeContent[0];
        console.log(this.HomeContent, "Home Content Data");
      }

      // To get GB Information
      this.GBMessages = response[4].data;
      console.log(this.GBMessages, "GB Messages");
      let filteredGBM = this.GBMessages.filter((item) =>
        item.Placement.includes("1")
      );
      this.GBMessageShown = filteredGBM;
      console.log(this.GBMessageShown, "GBMessageShown");

      // To get Achievement Data
      if (this.ContentData != null) {
          let achievements_data = this.ContentData.filter(
              (x) => x.ContentCategoryName == "Achievements"
          );
          this.all_achievement_data = achievements_data;
          this.foundAchivements = this.all_achievement_data.slice(0, 6);
          console.log(this.foundAchivements, "All Achievemet Data");
      }
      this.groupCards();
      this.groupnewsCards();
      // To get New & Event Data
      if (this.ContentData != null) {
        let news_data = this.ContentData.filter(
          (x) => x.ContentCategoryName == "News And Events"
        );
        this.all_news_and_event_data = news_data;
        this.foundnews = this.all_news_and_event_data.slice(0, 4);
        console.log(this.foundnews, "All News and eEvent Data");
      }

      // To get Club Data
      if (this.ContentData != null) {
        let club_items = this.ContentData.filter(
          (x) => x.ContentCategoryName == "Club"
        );
        this.club_data = club_items;
        this.foundClubs = this.club_data;
        console.log(this.foundClubs, "All club Data");
      }

      this.all_static_data = static_clubd_data;

      // To get Video Album Data

      this.VideoAlbums = response[2].data;

      if (this.VideoAlbums != null) {
        for (let i = 0; i < Math.min(3, this.VideoAlbums.length); i++) {
          this.VideoAlbumShown.push(this.VideoAlbums[i]);
        }
      }

      // To get Image Album Data

      this.ImageAlbums = response[3].data;

      if (this.ImageAlbums != null) {
        for (let i = 0; i < Math.min(3, this.ImageAlbums.length); i++) {
          this.ImageAlbumShown.push(this.ImageAlbums[i]);
        }
      }

      this.loadingData = false;
    });
  }

  TransformUrl(value) {
    if (value.includes("https://")) {
      return value;
    } else {
      return `https://${value}`;
    }
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

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
  };

  selectItem(item: string) {
    this.selectedItem = item;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
  // Test truncate starts
  truncateText(text, maxLength) {
    // Check if the text length is greater than the maximum length
    if (text.length > maxLength) {
      // Truncate the text to the maximum length and append "..." at the end
      return text.substring(0, maxLength) + "...";
    } else {
      // If the text length is within the maximum length, return the original text
      return text;
    }
  }

  getMessageHref(GBDesignationName: string): string {
    if (GBDesignationName === "Chief Patron") {
      return "/message-of-chief-patron";
    } else if (GBDesignationName === "Chairmen") {
      return "/message-of-chairman";
    } else if (GBDesignationName === "Principal") {
      return "/message-of-principal";
    } else {
      // Default href if none of the conditions match
      return "#";
    }
  }
  onCardHover() {
    this.hoverShadowColor = this.randomBackgroundColor;
  }

  onCardLeave() {
    this.hoverShadowColor = "#00000033";
  }

  // Start for modal view

  modalImageUrl: string;

  openModal(imageUrl: string): void {
    this.modalImageUrl = imageUrl; // Set the modal image URL dynamically
    document.getElementById("modal01").style.display = "block";
  }

  closeModal(): void {
    document.getElementById("modal01").style.display = "none";
  }

  // Test truncate ends
  // For Honur Board
  selectedDiv: string = "chiefPatron"; // Set default div to show

  showDiv(divId: string) {
    this.selectedDiv = divId;
  }
}

 let static_clubd_data = [
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 251,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-14T18:30:22.31",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Our House and Club",
        DetailsEn:
            "<p><strong>হাউস পরিচিতি</strong></p><p>মিরপুর ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজের প্রতিষ্ঠা লগ্ন থেকে সমস্ত শিক্ষক শিক্ষার্থীকে চারটি হাউসে বিভক্ত করা হয়েছে। “হাউস” বলতে চারটি দলে বিভক্ত প্রতিষ্ঠানের একদল শিক্ষক ও শিক্ষার্থীকে নির্দেশ করে। স্বদেশপ্রেমে উজ্জীবিত করার লক্ষ্যে নদীমাতৃক বাংলাদেশের চারটি নদীর নামে প্রতিষ্ঠানের চারটি হাউসের নামকরণ করা হয়েছে। হাউসগুলো হলো: বুড়িগঙ্গা, শীতলক্ষ্যা, তুরাগ, বংশী। চারটি নদীর মতই সৃজনে মুক্ত, প্রাণনেযুক্ত, দীপ্তিতে ভাস্বর শিক্ষার্থীবৃন্দ শিক্ষা, খেলাধুলা, সহশিক্ষা কার্যক্রমের বিভিন্ন প্রতিযোগিতায় অংশ গ্রহণ করে।</p><p><strong>বুড়িগঙ্গা হাউস:</strong></p><p>গাঢ় নীল রঙে শোভিত ‘বুড়িগঙ্গা হাউসে’র মূল লক্ষ্য হলো সুশিক্ষার মাধ্যমে সুনীতি আনয়ন করা। ‘গাঢ় নীল’ রং হলো আনন্দ, সুখ, আশাবাদ এবং আদর্শবাদের প্রতীক। ঢাকার পাশ দিয়ে প্রবাহিত নদী বুড়িগঙ্গার উৎপত্তি ধলেশ^রী নদী থেকে। এ নদী আমাদের পুরোনো ঐতিহ্যের অংশ। ৪০০ বছর আগে বুড়িগঙ্গা নদীর তীরে সভ্যতার ছোঁয়ায় গড়ে ওঠে আধুনিক শহর ঢাকা। পুরোনো ইতিহাস-ঐতিহ্যের সঙ্গে নতুন চেতনা ও দৃষ্টিভঙ্গি মিশিয়ে সভ্যতার জয়যাত্রা অব্যাহত রাখার উদ্দেশ্যে এই হাউসের নামকরণ করা হয় ‘বুড়িগঙ্গা’। মুক্তপ্রাণ, আশাবাদী ও প্রাণের উচ্ছলতায় শিক্ষার্থীরা আদর্শ মানুষ হিসেবে গড়ে উঠবে এ হাউসের ছায়ায়।</p><p><strong>শীতলক্ষ্যা হাউস:</strong></p><p>মেরুন রঙে শোভিত হাউসটি ‘শীতলক্ষ্যা হাউস’। মেরুন রং আবেগ, আন্তরিকতা, শক্তি এবং ক্ষমতার প্রতীক। মোগল আমলের রাজধানী সোনার গাঁ সংলগ্ন শীতলক্ষ্যা নদীর পাড় বিশ^বিখ্যাত মসলিন শাড়ির জন্য প্রসিদ্ধ। ঢাকাই জামদানি কিংবা বিখ্যাত আদমজী পাটকল (বর্তমানে বিলুপ্ত) এ এলাকার অহংকার। শীতলক্ষ্যা নদীর গৌরবময় ঐতিহ্য ধারণ করে এ হাউসের শিক্ষার্থীরা তাদের শিক্ষা ও সহশিক্ষা কর্মকাÐে আগামী দিনের যোগ্য কর্ণধার হয়ে উঠবে। &nbsp;</p><p><strong>তুরাগ হাউস:</strong></p><p>সবুজ রঙে শোভিত ‘তুরাগ হাউস’ প্রতৃতি, তারুণ্য এবং উৎপাদনশীলতার প্রতীক। এ হাউসের শিক্ষার্থীরা প্রকৃতির ন্যায় নির্মল ও শান্ত, ভ্রাতৃত্বের বন্ধনে আবদ্ধ, সৃজনী চিন্তায় উন্মুক্ত। রাজধানী ঢাকার চারপাশ দিয়ে বয়ে চলা চারটি নদ-নদীর মধ্যে তুরাগ অন্যতম। যমুনা নদীর একটি শাখানদী তুরাগ। ‘তুরাগ হাউসে’র শিক্ষার্থীরা সবুজ প্রকৃতির মতো পুনর্বিকিরণ, উদারতা ও সজীবতায় স্বশিক্ষিত ও স্বনির্ভর হয়ে সফলতার শীর্ষে পৌঁছাতে সক্ষম হবে।</p><p><strong>বংশী হাউস:</strong></p><p>আকাশি রঙে শোভিত হাউসটি ‘বংশী হাউস’। আকাশী রং আকাশের মতো বিশালতা ও স্থায়িত্বের প্রতীক। বাংলাদেশের মধ্যাঞ্চল দিয়ে প্রবাহিত বংশী পুরাতন ব্রহ্মপুত্রের শাখা-নদী। এই নদীকে কেন্দ্র করে অনেক ছোট বাজার, গঞ্জ, স্থাপনা গড়ে উঠেছে। এই নদী তীরেই জাতীয় স্মৃতিসৌধ মাধা উঁচু করে দাঁড়িয়ে আছে। ‘বংশী হাউসে’র শিক্ষার্থীরা আকাশের বিশালতা ও সৌন্দর্য নিয়ে অত্যন্ত মার্জিত ও বন্ধুসুলভ আচরণ রপ্ত করে শিক্ষিত নাগরিক হিসেবে দেশ ও জাতিকে সমৃদ্ধ করবে। তাদের অন্তহীন স্বপ্ন:সুন্দর-সৃমদ্ধ বাংলাদেশ উপহার দিবে।</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_Our House and Club_14-05-2024-06-30-21_s.jpeg","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_Our House and Club_14-05-2024-06-30-21_s.jpeg",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 253,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:51:19.033",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Science Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_Science Club_16-05-2024-12-51-18_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_Science Club_16-05-2024-12-51-18_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 254,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:54:42.467",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Debating Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_Robotics Club_16-05-2024-12-51-49_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_Robotics Club_16-05-2024-12-51-49_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 255,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:55:14.99",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Scout Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_Debating Club_16-05-2024-12-52-24_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_Debating Club_16-05-2024-12-52-24_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 256,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:55:35.667",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Math Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_English Club_16-05-2024-12-52-50_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_English Club_16-05-2024-12-52-50_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 257,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:55:53.607",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Sports Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_English Club_16-05-2024-12-52-52_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_English Club_16-05-2024-12-52-52_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
    {
        ContentCategoryName: "Club",
        MenuCode: 51,
        TenantClientId: 65,
        Id: 258,
        ContentCategoryId: 1441,
        CurrentDate: "2024-05-16T12:56:26.21",
        VideoId: "",
        FileType: 1,
        LayOut: 2,
        TitleEn: "Drawing Club",
        DetailsEn:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        TitleBn: "",
        DetailsBn: "",
        TitleAr: "",
        DetailsAr: "",
        AttachmentUrl:
            '[{"FileId":1,"FilePath":"dws/2024/content_image/Content_Big_Drawing Club_16-05-2024-12-56-25_s.png","Title":""}]',
        TotalHitCount: 0,
        IsDownload: true,
        IsPublished: true,
        SaveAttachments: null,
        ShowAttachments: [
            {
                FileId: 1,
                FilePath:
                    "https://mcpsc-c104.s3.us-east-2.amazonaws.com/dws/2024/content_image/Content_Big_Drawing Club_16-05-2024-12-56-25_s.png",
                Title: "",
            },
        ],
        IsActive: true,
    },
];

// End  for modal view