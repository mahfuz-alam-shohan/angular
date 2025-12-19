import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxScrollTopModule } from "ngx-scrolltop";

import { TranslateModule } from "@ngx-translate/core";
import { NgMarqueeModule } from "ng-marquee";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmitterService } from "./EmitterService";
import { AppService } from "./app.service";
import { AsideComponent } from "./components/layouts/aside/aside.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { LayoutDocumentListComponent } from "./components/layouts/layout-document-list/layout-document-list.component";
import { LayoutDocumentSingleComponent } from "./components/layouts/layout-document-single/layout-document-single.component";
import { LayoutImageListComponent } from "./components/layouts/layout-image-list/layout-image-list.component";
import { LayoutImageMultipleComponent } from "./components/layouts/layout-image-multiple/layout-image-multiple.component";
import { LayoutImageSingleComponent } from "./components/layouts/layout-image-single/layout-image-single.component";
import { NavbarStyleTwo2Component } from "./components/layouts/navbar-style-two-2/navbar-style-two-2.component";
import { AchievementsItemComponent } from "./components/pages/achievements-item/achievements-item.component";
import { AchievementsComponent } from "./components/pages/achievements/achievements.component";
import { CheifPatronComponent } from "./components/pages/cheif-patron/cheif-patron.component";
import { ChairmanMessegeComponent } from "./components/pages/chairman-messege/chairman-messege.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { GoverningBodyComponent } from "./components/pages/governing-body/governing-body.component";
import { HefzComponent } from "./components/pages/hefz/hefz.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { HostelInChargeComponent } from "./components/pages/hostel-in-charge/hostel-in-charge.component";
import { ImageFolderComponent } from "./components/pages/image-folder/image-folder.component";
import { ImageGalleryComponent } from "./components/pages/image-gallery/image-gallery.component";
import { MpoOfficeStaffComponent } from "./components/pages/mpo-office-staff/mpo-office-staff.component";
import { MpoTeacherComponent } from "./components/pages/mpo-teacher/mpo-teacher.component";
import { NewAndEventsItemsComponent } from "./components/pages/new-and-events-items/new-and-events-items.component";
import { NewAndEventsComponent } from "./components/pages/new-and-events/new-and-events.component";
import { NonMpoOfficeStaffComponent } from "./components/pages/non-mpo-office-staff/non-mpo-office-staff.component";
import { NonMpoTeacherComponent } from "./components/pages/non-mpo-teacher/non-mpo-teacher.component";
import { NoticeComponent } from "./components/pages/notice/notice.component";
import { OnlineAdmisssionPagesComponent } from "./components/pages/online-admisssion-pages/online-admisssion-pages.component";
import { PrincipalMessagesComponent } from "./components/pages/principal-messages/principal-messages.component";
import { TemplatePageComponent } from "./components/pages/template-page/template-page.component";
import { ViceChairmanComponent } from "./components/pages/vice-chairman/vice-chairman.component";
import { VicePrincipalComponent } from "./components/pages/vice-principal/vice-principal.component";
import { VideoFolderComponent } from "./components/pages/video-folder/video-folder.component";
import { VideoGalleryComponent } from "./components/pages/video-gallery/video-gallery.component";
import { SafePipe } from "./utils/safe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarStyleTwo2Component,
    HomeComponent,
    TemplatePageComponent,
    NoticeComponent,
    OnlineAdmisssionPagesComponent,
    AchievementsComponent,
    AchievementsItemComponent,
    ImageGalleryComponent,
    ImageFolderComponent,
    VideoGalleryComponent,
    VideoFolderComponent,
    NewAndEventsComponent,
    NewAndEventsItemsComponent,
    ContactComponent,
    GoverningBodyComponent,
    ChairmanMessegeComponent,
    ViceChairmanComponent,
    PrincipalMessagesComponent,
    VicePrincipalComponent,
    CheifPatronComponent,
    MpoTeacherComponent,
    NonMpoTeacherComponent,
    MpoOfficeStaffComponent,
    NonMpoOfficeStaffComponent,
    HostelInChargeComponent,
    HefzComponent,
    LayoutDocumentListComponent,
    LayoutDocumentSingleComponent,
    LayoutImageListComponent,
    LayoutImageMultipleComponent,
    LayoutImageSingleComponent,
    AsideComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    AppRoutingModule,
    NgxScrollTopModule,
    NgMarqueeModule,
    HttpClientModule,
  ],
  providers: [AppService, EmitterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
