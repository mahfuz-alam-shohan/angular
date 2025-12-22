import { Component, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Subscription, forkJoin } from "rxjs";

import { EmitterService } from "src/app/EmitterService";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  heroTitle = "Ispahani Public School & College";
  heroTaglinePrefix = "Enter To Learn,";
  heroTaglineHighlight = "Leave To Serve";
  heroWelcomeLabel = "Welcome";
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
  leaderCards: any[] = [];
  GBMessageShown = [];
  foundnews: any;
  foundAchivements: any;
  foundClubs: any;
  galleryImages: string[] = [];
  houseCards: any[] = [];
  learningCards = [
    {
      label: "HTML Editor",
      icon: "fa-brands fa-html5",
      color: "#f97316",
      link: "/online-html-editor",
    },
    {
      label: "C/C++ Editor",
      icon: "fa-solid fa-code",
      color: "#0369a1",
      link: "/online-c-editor",
    },
    {
      label: "Python Interpreter",
      icon: "fa-brands fa-python",
      color: "#facc15",
      link: "/online-python-editor",
    },
    {
      label: "Painting Studio",
      icon: "fa-solid fa-palette",
      color: "#f43f5e",
      link: "/paint-studio",
    },
    {
      label: "Solar System",
      icon: "fa-solid fa-earth-asia",
      color: "#16a34a",
      link: "/solar-system",
    },
    {
      label: "Conics Explorer",
      icon: "fa-solid fa-circle-notch",
      color: "#4338ca",
      link: "/learn-conics",
    },
    {
      label: "Learn Physics",
      icon: "fa-solid fa-atom",
      color: "#6b21a8",
      link: "/learn-physics",
    },
    {
      label: "Learn Chemistry",
      icon: "fa-solid fa-flask-vial",
      color: "#0f766e",
      link: "/learn-chemistry",
    },
  ];
  randomBackgroundColor: string = "#000000";
  hoverShadowColor: string = "#00000033";
  all_achievement_data: any;
  all_news_and_event_data: any;

  
  find_category: any;
  urlSafe: SafeResourceUrl;
  selectedNotice: any;
  notice_cat_values: any[];
  filteredNotices: any[] = []; // Holds filtered notices based on category
  selectedCategory: string = "Search Notices"; // Default dropdown label

  constructor(
    private emitterService: EmitterService,
    private appService: AppService,
    private sanitizer: DomSanitizer
  ) {
    this.subscription = this.emitterService.currentMessage.subscribe(
      (message) => {
        if (message === true) {
          this.loadMainData();
          this.initializeAchievementData();
          this.initializeNewsEventData();
          this.syncHeroFromMainData();
        }
      }
    );
  }

  ngOnInit(): void {
    this.loadMainData();
    this.syncHeroFromMainData();
    forkJoin([this.appService.getNotices()]).subscribe((response: any) => {
      this.Notices = response[0].data.filter((x) => x.ShowScroll === true);
      this.Notices.sort((a, b) => b.Id - a.Id);

      this.notice_cat_values = Array.from(
        new Set(
          this.Notices
            .filter(x => x.NoticeCategoryName !== 'TEST') // Remove TEST category
            .map(x => x.NoticeCategoryName)
        )
      );
      // Initially display all notices
      this.filteredNotices = this.Notices;
      console.log(this.filteredNotices,"Notices")
    });
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
      this.Notices = response[0].data.filter((x) => x.IsActive === true);

      this.Notices.sort((a, b) => b.Id - a.Id);
      
    // Step 2: Sort by Id descending
    this.Notices.sort((a, b) => b.Id - a.Id);

    // ✅ Step 3: Initially assign filteredNotices
    this.filteredNotices = [...this.Notices];  // Make sure filteredNotices is same as Notices

    this.loadingData = false;

      this.ContentData = response[1].data;
      this.initializeAchievementData();
      this.initializeNewsEventData();

      // To get Slider Data
      this.slides = response[5].data;
      console.log(this.slides, "Today Slides");
      this.buildGallery();
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
      this.buildLeaderCards();

      // To get Achievement Data
      if (this.ContentData != null) {
          let achievements_data = this.ContentData.filter(
              (x) => x.ContentCategoryName == "Achievements"
          );
          this.all_achievement_data = achievements_data.sort((a, b) => b.Id - a.Id);
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
        this.all_news_and_event_data = news_data.sort((a, b) => b.Id - a.Id);
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
      this.buildHouseCards();
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
      this.buildGallery();
    });
  }
  onSelectCategory(category: string): void {
    this.selectedCategory = category; // Update selected category

    // Show all notices if "All Notices" is selected, otherwise filter by category
    this.filteredNotices =
      category === "All Notices"
        ? this.Notices
        : this.Notices.filter(
            (notice) => notice.NoticeCategoryName === category
          );
  }
  onSearch(): void {
    // Filter based on selected category or show all if no category is selected
    this.filteredNotices = this.selectedCategory
      ? this.Notices.filter(
          (notice) => notice.NoticeCategoryName === this.selectedCategory
        )
      : this.Notices;
  }

  showNotice(event: Event, notice: any) {
    event.preventDefault();
    this.selectedNotice = notice;

    let val = "";
    if (this.selectedNotice.FileLink.includes("https://")) {
      val = this.selectedNotice.FileLink;
    } else {
      val = `https://${this.selectedNotice.FileLink}`;
    }

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }

  isImage(link: string): boolean {
    return /\.(jpe?g|png|gif)$/i.test(link);
  }
  TransformUrl(value) {
    if (!value) {
      return "#";
    }

    const link = value.toString();
    if (link.startsWith("http://") || link.startsWith("https://")) {
      return link;
    }
    return `https://${link}`;
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
    if (!text) {
      return \"\";
    }
    const value = text.toString();
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + \"...\";
    }
    return value;
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

  private loadMainData(): void {
    const stored = localStorage.getItem("mainData");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.SiteMapList) {
        this.MainData = parsed;
      } else {
        this.ContentData = parsed;
      }
    }
  }

  private syncHeroFromMainData(): void {
    if (this.MainData?.ClientName) {
      this.heroTitle = this.MainData.ClientName;
    }
    const slogan = this.MainData?.LocalOptions?.find?.(
      (opt) => opt.DisplayName === "Slogan" || opt.DisplayName === "Tagline"
    );
    if (slogan?.TextValue) {
      const [prefix, highlight] = slogan.TextValue.split("|");
      this.heroTaglinePrefix = prefix?.trim() || this.heroTaglinePrefix;
      this.heroTaglineHighlight = highlight?.trim() || this.heroTaglineHighlight;
    }
  }

  private buildLeaderCards(): void {
    const preferredOrder = [
      { key: "Chief Patron", label: "Chief Patron" },
      { key: "Chairmen", label: "Chairman" },
      { key: "Principal", label: "Principal" },
    ];

    this.leaderCards = preferredOrder
      .map((role) => {
        const match = this.GBMessages?.find(
          (message) => message.GBDesignationName === role.key
        );

        const summary = match?.MessageEn || match?.MessageBn || match?.Message;

        return {
          roleLabel: role.label,
          name: match?.GBName || match?.GBDesignationName,
          photo: match?.GBImagePath,
          message: summary ? this.truncateText(summary, 140) : "",
          routerLink: this.getMessageHref(role.key),
        };
      })
      .filter((card) => card.name || card.photo || card.message);
  }

  private buildGallery(): void {
    const gallery: string[] = [];

    if (Array.isArray(this.slides)) {
      gallery.push(
        ...this.slides
          .map((slide: any) => slide?.ImageLink)
          .filter((link: string) => Boolean(link))
      );
    }

    if (!gallery.length && Array.isArray(this.ImageAlbums)) {
      gallery.push(
        ...this.ImageAlbums
          .map((album: any) => album?.ImageLink || album?.CoverImage || album?.FilePath)
          .filter((link: string) => Boolean(link))
      );
    }

    this.galleryImages = gallery.slice(0, 6);
  }

  private buildHouseCards(): void {
    const clubItems = Array.isArray(this.foundClubs) ? this.foundClubs.slice(0, 4) : [];
    const colors = ["red", "green", "yellow", "orange"];

    this.houseCards = clubItems.map((club, index) => {
      const attachments = club?.ShowAttachments || [];
      const imagePath = attachments.length
        ? attachments[attachments.length - 1].FilePath
        : club?.ImageLink;
      return {
        title: club?.TitleEn || club?.ContentNameEn || club?.ContentCategoryName,
        image: imagePath,
        color: colors[index % colors.length],
      };
    });
  }
}



// End  for modal view
