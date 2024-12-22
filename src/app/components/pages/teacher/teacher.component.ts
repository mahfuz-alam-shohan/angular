import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit
{

  dummyItems = [
    {
      "id": 1,
      "name": "Georg",
      "designation": "Chief Design Engineer",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "03-02-2023"
    }, {
      "id": 2,
      "name": "Margarete",
      "designation": "Accounting Analyst III",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "10-09-2022"
    }, {
      "id": 3,
      "name": "Karrie",
      "designation": "Health Coach II",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "10-06-2022"
    }, {
      "id": 4,
      "name": "Constancy",
      "designation": "Chemical Engineer",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "29-04-2023"
    }, {
      "id": 5,
      "name": "Jacintha",
      "designation": "Research Associate",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "28-10-2022"
    }, {
      "id": 6,
      "name": "Kaine",
      "designation": "Recruiter",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "12-03-2023"
    }, {
      "id": 7,
      "name": "Brandais",
      "designation": "Technical Writer",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "17-08-2022"
    }, {
      "id": 8,
      "name": "Carmon",
      "designation": "Analog Circuit Design manager",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "20-01-2023"
    }, {
      "id": 9,
      "name": "Ryan",
      "designation": "Marketing Manager",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "30-05-2022"
    }, {
      "id": 10,
      "name": "Hayyim",
      "designation": "Compensation Analyst",
      "image": "assets/img/blog-image/blog2.jpg",
      "joiningDate": "17-03-2023"
    }]

  selectedLanguage = '';

  font = '';

  constructor(
    private _homeTranslationLoaderService: HomeTranslationLoaderService,

  )
  {
    this._homeTranslationLoaderService.loadTranslations(english, bangla, arabic);
  }

  ngOnInit(): void
  {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
  }

  GetFontName()
  {
    switch (this.selectedLanguage)
    {
      case 'en':
        return 'Congenial';
      case 'bn':
        return 'HindSiliguri';
      case 'ar':
        return 'Jameel Noori Nastaleeq';
    }
  }

}
