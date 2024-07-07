import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss'],
})
export class AchievementComponent implements OnInit {
  dummyItems = [
    {
      id: 1,
      title: 'Jamia Ahmadia Sunnia Kamil Madrasah Shines at the Top in Islamic Cultural Competition',
      url: '/',
      date: 'Sep 11, 2023',
      image: 'assets/img/school/achievements/achievement.jpg',
      description:
        'Jamia Ahmadia Sunnia Kamil Madrasah Shines at the Top in Islamic Cultural Competition.Students from Jamia Ahmadia Sunnia Kamil Madrasah, located in the Chattogram District, achieved remarkable success by securing 10 (Ten) prestigious prizes in the Islamic Cultural Competition held by the Islamic Foundation Bangladesh (Chattogram Divisional Office) in celebration of the Holy Eid -e-Miladunnabi. The awards were earned in various categories, including Qiraat, Hamd/Naat, Poetry Recitation, Essay, and Azaan. Allhamdulillah The Chairman, Abul Mohsin Md Yeahiya Khan, the principal of Jamia and all the teachers and staff over helmed getting the news and humbly request for the           ',
    },      
  
  ];
    
  dummyItemsTwo = [ 
    

    {
      id: 1,
      title: '"A" group',
      url: '/',
      date: 'Sep 11, 2023',
      image: 'assets/img/school/achievements/1.jpeg',
      description:
        'First Place - Afnan Abrar, Jamea Ahmadia Sunnia Kamil Madrasah, Shola Shahar, Chittagong.',
    },

    {
      id: 2,
      title: '"B" group',
      url: '/',
      date: 'Sep 11, 2023',
      image: 'assets/img/school/achievements/2.jpeg',
      description: 'First place - Osman Siddiqui Jamea Ahmadia Sunnia Kamil Madrasah, Shola Shahar, Chittagong. ',
    },
    {
      id: 3,
      title: '"D" group',
      url: '/',
      date: 'Sep 11, 2023',
      image: 'assets/img/school/achievements/3.jpeg',
      description: 'Second place - Zahedul Islam Jamea Ahmadia Sunnia Kamil Madrasah, Shola Shahar, Chittagong.',
    },
  ]
    

  selectedLanguage = '';

  font = '';

  constructor(
    private _homeTranslationLoaderService: HomeTranslationLoaderService
  ) {
    this._homeTranslationLoaderService.loadTranslations(
      english,
      bangla,
      arabic
    );
  }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
  }

  GetFontName() {
    switch (this.selectedLanguage) {
      case 'en':
        return 'Congenial';
      case 'bn':
        return 'Kalpurush';
      case 'ar':
        return 'Jameel Noori Nastaleeq';
    }
  }
}


