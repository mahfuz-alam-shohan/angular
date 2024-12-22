import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  selectedLanguage = '';

  font = '';

  dynamicTape = [
    {
      Id: 1,
      Text: 'Alim 1st year Exam fee',
      Link: 'Alim 1st year Exam fee.jpg',
      Date: new Date('2023-09-11'),
      Category: 'Alim',
    },
    {
      Id: 2,
      Text: 'Masters 2020-21 Registration card',
      Link: 'Masters 2020-21 Registration card.jpg',
      Date: new Date('2023-09-11'),
      Category: 'Dakhil',
    },
    {
      Id: 3,
      Text: '2 Yearly leave 2023',
      Link: '2 Yearly leave 2023.pdf',
      Date: new Date('2023-09-11'),
      Category: 'Dakhil',
    },
    {
      Id: 4,
      Text: 'শিক্ষার্থী আবদেন ফরম',
      Link: 'StudentApplyForm.pdf',
      Date: new Date('2023-10-26'),
      Category: 'Dakhil',
    },
    {
      Id: 5,
      Text: 'আলিম ২০২৩-২০২৪ শিক্ষাবর্ষে উপবৃত্তি আবেদন ফরম',
      Link: 'StipendApplyForm.pdf',
      Date: new Date('2023-10-26'),
      Category: 'Dakhil',
    },
    {
      Id: 6,
      Text: 'Fazil Reg. eSIF List',
      Link: 'ESIF.pdf',
      Date: new Date('2023-11-13'),
      Category: 'Dakhil',
    },
    {
      Id: 7,
      Text: 'ইবতেদায়ী প্রথম থেকে দাখিল নবম শ্রেনির ভর্তি বিজ্ঞপ্তি',
      Link: 'DakhilNotice.pdf',
      Date: new Date('2023-11-15'),
      Category: 'Dakhil',
    },
    {
      Id: 8,
      Text: 'ফাযিল ১ম বর্ষ ফরম পূরণ তালিকা',
      Link: 'print-fazil-proble-list.pdf',
      Date: new Date('2023-11-16'),
      Category: 'Dakhil',
    },
    {
      Id: 9,
      Text: 'ALIM ESIF LIST-2025',
      Link: '104702-Alim-eSIF-2025.pdf',
      Date: new Date('2023-12-14'),
      Category: 'Dakhil',
    },
    {
      Id: 10,
      Text: 'হিফয ও নাযেরা ভর্তি ২০২৪',
      Link: '২০২৪.pdf',
      Date: new Date('2024-03-24'),
      Category: 'Dakhil',
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
    const pdfPath = 'assets/img/school/notice/' + notice.Link + '#toolbar=0';
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }

  isImage(link: string): boolean {
    return /\.(jpe?g|png|gif)$/i.test(link);
  }
}
