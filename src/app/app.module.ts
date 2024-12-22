import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { HomeDemoNineComponent } from './components/pages/home-demo-nine/home-demo-nine.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { TeamStyleTwoComponent } from './components/pages/team-style-two/team-style-two.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ServicesStyleTwoComponent } from './components/pages/services-style-two/services-style-two.component';
import { ServicesStyleThreeComponent } from './components/pages/services-style-three/services-style-three.component';
import { ProjectsStyleTwoComponent } from './components/pages/projects-style-two/projects-style-two.component';
import { ProjectsStyleThreeComponent } from './components/pages/projects-style-three/projects-style-three.component';
import { ProjectsStyleFourComponent } from './components/pages/projects-style-four/projects-style-four.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { HomeDemoTenComponent } from './components/pages/home-demo-ten/home-demo-ten.component';
import { HomeDemoElevenComponent } from './components/pages/home-demo-eleven/home-demo-eleven.component';
import { HomeDemoTwelveComponent } from './components/pages/home-demo-twelve/home-demo-twelve.component';
import { NavbarStyleTwoComponent } from './components/layouts/navbar-style-two/navbar-style-two.component';
import { NavbarStyleThreeComponent } from './components/layouts/navbar-style-three/navbar-style-three.component';

import { NavbarStyleTwo2Component } from './components/layouts/navbar-style-two-2/navbar-style-two-2.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeDemoTen2Component } from './components/pages/home-demo-ten-2/home-demo-ten-2.component';
import { AtaGlanceComponent } from './components/pages/at-a-glance/at-a-glance.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { MissionAndVisionComponent } from './components/pages/mission-and-vision/mission-and-vision.component';
import { InfrastructureComponent } from './components/pages/infrastructure/infrastructure.component';
import { AchievementComponent } from './components/pages/achievement/achievement.component';
import { GoverningBodyComponent } from './components/pages/governing-body/governing-body.component';
import { ChairmanMessageComponent } from './components/pages/chairman-message/chairman-message.component';
import { PrincipalMessageComponent } from './components/pages/principal-message/principal-message.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { OfficeStaffComponent } from './components/pages/office-staff/office-staff.component';
import { AcademicCalendarComponent } from './components/pages/academic-calendar/academic-calendar.component';
import { ClassRoutineComponent } from './components/pages/class-routine/class-routine.component';
import { SyllabusAndBooklistComponent } from './components/pages/syllabus-and-booklist/syllabus-and-booklist.component';
import { NoticeComponent } from './components/pages/notice/notice.component';
import { PublicExamResultComponent } from './components/pages/public-exam-result/public-exam-result.component';
import { AcademicRulesComponent } from './components/pages/academic-rules/academic-rules.component';
import { HefzComponent } from './components/pages/hefz/hefz.component';
import { HefzTeacherComponent  } from './components/pages/hefz-teacher/hefz-teacher.component';
import { HostelInChargeComponent } from './components/pages/hostel in-charge/hostel in-charge';
import { EbtedayeeComponent } from './components/pages/ebtedayee/ebtedayee.component';
import { DakhilComponent } from './components/pages/dakhil/dakhil.component';
import { AlimComponent } from './components/pages/alim/alim.component';
import { FazilComponent } from './components/pages/fazil/fazil.component';
import { HonoursComponent } from './components/pages/honours/honours.component';
import { KamilComponent } from './components/pages/kamil/kamil.component';
import { MastersComponent } from './components/pages/masters/masters.component';
import { AdmissionCircularComponent } from './components/pages/admission-circular/admission-circular.component';
import { ProspectusComponent } from './components/pages/prospectus/prospectus.component';
import { AdmissionFormComponent } from './components/pages/admission-form/admission-form.component';
import { AdmissionResultComponent } from './components/pages/admission-result/admission-result.component';
import { DownloadAdmitCardComponent } from './components/pages/download-admit-card/download-admit-card.component';
import { ClassroomComponent } from './components/pages/classroom/classroom.component';
import { ComputerLabComponent } from './components/pages/computer-lab/computer-lab.component';
import { ScienceLabComponent } from './components/pages/science-lab/science-lab.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { HostelComponent } from './components/pages/hostel/hostel.component';
import { PlayGroundComponent } from './components/pages/play-ground/play-ground.component';
import { CanteenComponent } from './components/pages/canteen/canteen.component';
import { QuizCompetitionComponent } from './components/pages/quiz-competition/quiz-competition.component';
import { QiratCompetitionComponent } from './components/pages/qirat-competition/qirat-competition.component';
import { HamadNaatCompetitionComponent } from './components/pages/hamad-naat-competition/hamad-naat-competition.component';
import { DebateCompetitionComponent } from './components/pages/debate-competition/debate-competition.component';
import { EssayCompetitionComponent } from './components/pages/essay-competition/essay-competition.component';
import { ScoutComponent } from './components/pages/scout/scout.component';
import { SportsAndGameComponent } from './components/pages/sports-and-game/sports-and-game.component';
import { PhotoComponent } from './components/pages/photo/photo.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { EPaymentSystemComponent } from './components/pages/e-payment/e-payment.component';
import { ContactOComponent } from './components/pages/contact-o/contact-o.component';
import { NgMarqueeModule } from 'ng-marquee';
import { VicePrincipalMessageComponent } from './components/pages/vice-principal-message/vice-principal-message.component';
import { MpoTeacherComponent } from './components/pages/mpo-teacher/mpo-teacher.component';
import { NonMpoTeacherComponent } from './components/pages/non-mpo-teacher/non-mpo-teacher.component';
import { MpoOfficeStaffComponent } from './components/pages/mpo-office-staff/mpo-office-staff.component';
import { NonMpoOfficeStaffComponent } from './components/pages/non-mpo-office-staff/non-mpo-office-staff.component';
import { OnlineAdmisssionPagesComponent } from './components/pages/online-admisssion-pages/online-admisssion-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { EmitterService } from './EmitterService';
import { AchievementsItemComponent } from './components/pages/achievements-item/achievements-item.component';
import { AchievementsComponent } from './components/pages/achievements/achievements.component';
import { TemplatePageComponent } from './components/pages/template-page/template-page.component';
import { LayoutDocumentListComponent } from './components/layouts/layout-document-list/layout-document-list.component';
import { LayoutDocumentSingleComponent } from './components/layouts/layout-document-single/layout-document-single.component';
import { LayoutImageListComponent } from './components/layouts/layout-image-list/layout-image-list.component';
import { LayoutImageMultipleComponent } from './components/layouts/layout-image-multiple/layout-image-multiple.component';
import { LayoutImageSingleComponent } from './components/layouts/layout-image-single/layout-image-single.component';
import { AdministrationComponent } from './components/pages/administration/administration.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { ImageGalleryComponent } from './components/pages/image-gallery/image-gallery.component';
import { ImageFolderComponent } from './components/pages/image-folder/image-folder.component';
import { VideoGalleryComponent } from './components/pages/video-gallery/video-gallery.component';
import { VideoFolderComponent } from './components/pages/video-folder/video-folder.component';
import { SafePipe } from './utils/safe.pipe';
import { NewAndEventsComponent } from './components/pages/new-and-events/new-and-events.component';
import { NewAndEventsItemsComponent } from './components/pages/new-and-events-items/new-and-events-items.component';
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    FeaturesComponent,
    TeamComponent,
    PricingComponent,
    PartnerComponent,
    NotFoundComponent,
    FaqComponent,
    ContactComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    HomeDemoThreeComponent,
    HomeDemoFourComponent,
    HomeDemoFiveComponent,
    HomeDemoSixComponent,
    HomeDemoSevenComponent,
    HomeDemoEightComponent,
    HomeDemoNineComponent,
    AboutStyleTwoComponent,
    TeamStyleTwoComponent,
    LoginComponent,
    RegisterComponent,
    ServicesStyleTwoComponent,
    ServicesStyleThreeComponent,
    ProjectsStyleTwoComponent,
    ProjectsStyleThreeComponent,
    ProjectsStyleFourComponent,
    BlogRightSidebarComponent,
    HomeDemoTenComponent,
    HomeDemoTen2Component,
    AtaGlanceComponent,
    HistoryComponent,
    MissionAndVisionComponent,
    InfrastructureComponent,
    AchievementComponent,
    GoverningBodyComponent,
    ChairmanMessageComponent,
    PrincipalMessageComponent,
    VicePrincipalMessageComponent,
    TeacherComponent,
    MpoTeacherComponent,
    NonMpoTeacherComponent,
    OfficeStaffComponent,
    MpoOfficeStaffComponent,
    NonMpoOfficeStaffComponent,
    AcademicCalendarComponent,
    ClassRoutineComponent,
    SyllabusAndBooklistComponent,
    NoticeComponent,
    PublicExamResultComponent,
    AcademicRulesComponent,
    HefzComponent,
    HefzTeacherComponent,
    HostelInChargeComponent,
    EbtedayeeComponent,
    DakhilComponent,
    AlimComponent,
    FazilComponent,
    HonoursComponent,
    KamilComponent,
    MastersComponent,
    AdmissionCircularComponent,
    ProspectusComponent,
    AdmissionFormComponent,
    DownloadAdmitCardComponent,
    AdmissionResultComponent,
    ClassroomComponent,
    ComputerLabComponent,
    ScienceLabComponent,
    LibraryComponent,
    HostelComponent,
    PlayGroundComponent,
    CanteenComponent,
    QuizCompetitionComponent,
    QiratCompetitionComponent,
    HamadNaatCompetitionComponent,
    DebateCompetitionComponent,
    EssayCompetitionComponent,
    ScoutComponent,
    SportsAndGameComponent,
    PhotoComponent,
    VideoPageComponent,
    EPaymentSystemComponent,
    ContactOComponent,
    HomeDemoElevenComponent,
    HomeDemoTwelveComponent,
    NavbarStyleTwoComponent,
    NavbarStyleTwo2Component,
    NavbarStyleThreeComponent,
    OnlineAdmisssionPagesComponent,
    AchievementsComponent,
    AchievementsItemComponent,
    TemplatePageComponent,
    LayoutDocumentListComponent,
    LayoutDocumentSingleComponent,
    LayoutImageListComponent,
    LayoutImageMultipleComponent,
    LayoutImageSingleComponent,
    AdministrationComponent,
    AsideComponent,
    ImageGalleryComponent,
    ImageFolderComponent,
    VideoGalleryComponent,
    VideoFolderComponent,
    SafePipe,
    NewAndEventsComponent,
    NewAndEventsItemsComponent
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
