import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "class-routine",
  templateUrl: "./class-routine.component.html",
  styleUrls: ["./class-routine.component.scss"],
})
export class ClassRoutineComponent implements OnInit {
  selectedLanguage = "";

  font = "";

  dynamicTape = [
    {
      Id: 1,
      Text: "Class Routine Alim New",
      Link: "Class Rotin Alim New.pdf",
      Date: new Date("2023-09-11"),
      Category: "Alim",
    },
    {
      Id: 2,
      Text: "Class Routine Dakhil New",
      Link: "Class Rotin Dakhil New.pdf",
      Date: new Date("2023-09-11"),
      Category: "Dakhil",
    },
    {
      Id: 3,
      Text: "Class Rotine Ebtedayee New",
      Link: "Class Rotine Ebtedayee New.pdf",
      Date: new Date("2023-09-11"),
      Category: "Ebtedayee",
    },
    {
      Id: 4,
      Text: "Teacher Rotine (all) New",
      Link: "Teacher Rotine (all) New.pdf",
      Date: new Date("2023-09-11"),
      Category: "All",
    },
    {
      Id: 5,
      Text: "Teacher Rotine -Part",
      Link: "Teacher Rotine -Part.pdf",
      Date: new Date("2023-09-11"),
      Category: "All",
    },
    {
      Id: 6,
      Text: "Fazil Reg. eSIF List",
      Link: "ESIF.pdf",
      Date: new Date("2023-11-15"),
      Category: "All",
    },
    {
      Id: 7,
      Text: "ইবতেদায়ী প্রথম থেকে দাখিল নবম শ্রেনির ভর্তি বিজ্ঞপ্তি",
      Link: "DakhilNotice.pdf",
      Date: new Date("2023-11-15"),
      Category: "All",
    },
    {
      Id: 8,
      Text: "ফাযিল ১ম বর্ষ ফরম পূরণ তালিকা",
      Link: "print-fazil-proble-list.pdf",
      Date: new Date("2023-11-16"),
      Category: "All",
    },
    {
      Id: 9,
      Text: "ALIM ESIF LIST-2025",
      Link: "104702-Alim-eSIF-2025.pdf",
      Date: new Date("2023-12-14"),
      Category: "All",
    },
    {
      Id: 10,
      Text: "Kamil (Masters) Admission",
      Link: "JaskmKamilNotice.pdf",
      Date: new Date("2024-01-09"),
      Category: "All",
    },
    {
      Id: 11,
      Text: "Fazil (Pass) Admission",
      Link: "jaskmfaziladmission.pdf",
      Date: new Date("2024-01-21"),
      Category: "All",
    },
    {
      Id: 12,
      Text: "কামিল ইএসআইএফ (রেজিষ্টেশন তালিকা) ২০২১-২০২২",
      Link: "Book1-1.pdf",
      Date: new Date("2024-02-18"),
      Category: "All",
    },
    {
      Id: 13,
      Text: "হিফয ও নাযেরা ভর্তি ২০২৪",
      Link: "২০২৪.pdf",
      Date: new Date("2024-03-24"),
      Category: "All",
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
    this.selectedLanguage = localStorage.getItem("selectedLanguage");
  }

  GetFontName() {
    switch (this.selectedLanguage) {
      case "en":
        return "Congenial";
      case "bn":
        return "HindSiliguri";
      case "ar":
        return "Jameel Noori Nastaleeq";
    }
  }

  showNotice(event: Event, notice: any) {
    event.preventDefault();
    this.selectedNotice = notice;
    const pdfPath = "assets/img/school/calender/" + notice.Link + "#toolbar=0";
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }

  isImage(link: string): boolean {
    return /\.(jpe?g|png|gif)$/i.test(link);
  }
}