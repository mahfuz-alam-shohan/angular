import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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

const templatePagePaths: string[] = [
  "at-a-glance",
  "history",
  "welcome",
  "mission-and-vision",
  "why-study",
  "infustructure",
  "syllabus-and-booklist",
  "academic-calendar",
  "rules-and-regulations",
  "uniform",
  "syllabus",
  "admission-result",
  "admission-procedure",
  "fees",
  "hsc-results",
  "ssc-results",
  "scholarship-result",
  "admission-test-result",
  "semester-term-result",
  "mid-term-result",
  "club-activity",
  "english-language-club",
  "laboratory",
  "library",
  "games-and-sports",
  "prospectus",
  "admission-circular",
  "admission-form",
  "download-admit-card",
  "class-room",
  "hostel",
  "scout",
  "sports-and-game",
  "class-routine",
  "lesson-plan",
  "public-exam-result",
  "academic-rules",
  "hefz",
  "ebtedayee",
  "dakhil",
  "alim",
  "fazil",
  "honours",
  "kamil",
  "masters",
  "admission-prospectus",
  "classrooms",
  "sports-&-game",
  "hamd-competition",
  "public-exam-results",
  "computer-lab",
  "science-lab",
  "annual-cultural",
  "discipline",
  "play-ground",
  "canteen",
  "quiz-competition",
  "qirat-competition",
  "hamad-naat-competition",
  "debate-competition",
  "essay-competition",
];

const routes: Routes = [
  { path: "", component: HomeComponent },
  ...templatePagePaths.map((path) => ({ path, component: TemplatePageComponent })),
  { path: "notice", component: NoticeComponent },
  { path: "online-admission", component: OnlineAdmisssionPagesComponent },
  { path: "admission-links", component: OnlineAdmisssionPagesComponent },
  { path: "hefz-teacher", component: HefzComponent },
  { path: "mpo-teacher", component: MpoTeacherComponent },
  { path: "mpo-office-staff", component: MpoOfficeStaffComponent },
  { path: "non-mpo-office-staff", component: NonMpoOfficeStaffComponent },
  { path: "hostel-in-charge", component: HostelInChargeComponent },
  { path: "hostel-in-Charge", redirectTo: "hostel-in-charge" },
  { path: "non-mpo-teacher", component: NonMpoTeacherComponent },
  { path: "administration/governing-body", component: GoverningBodyComponent },
  { path: "administration/message-of-chairman", component: ChairmanMessegeComponent },
  { path: "administration/message-of-vice-chairman", component: ViceChairmanComponent },
  { path: "administration/message-of-principal", component: PrincipalMessagesComponent },
  { path: "administration/message-of-vice-principal", component: VicePrincipalComponent },
  { path: "administration/message-of-chief-patron", component: CheifPatronComponent },
  { path: "photo-gallery", component: ImageGalleryComponent },
  { path: "video-gallery", component: VideoGalleryComponent },
  {
    path: "imageFolder",
    children: [
      { path: "", component: ImageFolderComponent },
      { path: ":folderId", component: ImageFolderComponent },
    ],
  },
  {
    path: "videoFolder",
    children: [
      { path: "", component: VideoFolderComponent },
      { path: ":folderId", component: VideoFolderComponent },
    ],
  },
  {
    path: "news-and-events",
    children: [
      { path: "", component: NewAndEventsComponent },
      { path: ":ItemId", component: NewAndEventsItemsComponent },
    ],
  },
  {
    path: "achievements",
    children: [
      { path: "", component: AchievementsComponent },
      { path: ":ItemId", component: AchievementsItemComponent },
    ],
  },
  { path: "contact", component: ContactComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
