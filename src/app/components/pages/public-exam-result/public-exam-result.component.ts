import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'public-exam-result',
  templateUrl: './public-exam-result.component.html',
  styleUrls: ['./public-exam-result.component.scss'],
})
export class PublicExamResultComponent implements OnInit {
  selectedLanguage = '';

  font = '';

  dynamicTape = [
    {
      Id: 1,
      Text: 'Madrasah_ssc_2023_104702',
      Link: 'madrasah_ssc_2023_104702.pdf',
      Date: new Date('2023-09-11'),
      Category: 'Alim',
    },
  ];

  pdfUrl: SafeResourceUrl | undefined;
  selectedNotice: any;

  constructor(
    private sanitizer: DomSanitizer,
    private _homeTranslationLoaderService: HomeTranslationLoaderService
  ) {
    this.dynamicTape.sort((a, b) => b.Date.getTime() - a.Date.getTime());
    this._homeTranslationLoaderService.loadTranslations(
      english,
      bangla,
      arabic
    );
  }

  // transform(pdfUrl) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  // }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
  }

  GetFontName() {
    switch (this.selectedLanguage) {
      case 'en':
        return 'Congenial';
      case 'bn':
        return 'HindSiliguri';
      case 'ar':
        return 'Jameel Noori Nastaleeq';
    }
  }

  showNotice(event: Event, notice: any) {
    event.preventDefault();
    this.selectedNotice = notice;
    const pdfPath = 'assets/img/school/calender/' + notice.Link + '#toolbar=0';
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }

  isImage(link: string): boolean {
    return /\.(jpe?g|png|gif)$/i.test(link);
  }
}
