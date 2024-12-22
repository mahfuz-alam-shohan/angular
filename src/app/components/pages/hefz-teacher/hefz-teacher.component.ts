import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'hefz-teacher',
  templateUrl: './hefz-teacher.component.html',
  styleUrls: ['./hefz-teacher.component.scss']
})
export class HefzTeacherComponent implements OnInit{

  dummyItems = [
    {
      "id": 199101071,
      "name": "MOHAMMAD FARIDUL ALAM",
      "designation": "Hefza Head",     
      "image": "assets/img/hefzteacher.img/1_199101071.jpg",
      "joiningDate": "03-02-2023",  
      "MobileNo": "8801826538609",
      "EmailAddress": "liakat2015@gmail.com",
    },		
    {
      "id": 200204291,
      "name": "MOHAMMAD FARUQUE",       
      "designation": "Hafez",
      "image": "assets/img/hefzteacher.img/2_200204291.jpg",
      "joiningDate": "10-09-2022",
      "MobileNo": "8801819348013",
      "EmailAddress": "nurnabijamea@gmail.com",

    }, {		
      "id": 200805031,
      "name": "MUHAMMAD FARID UDDIN",
      "designation": "Hafez",
      "image": "assets/img/hefzteacher.img/3_200805031.jpg",
      "joiningDate": "10-06-2022",
      "MobileNo": "	8801818465438",
      "EmailAddress": "N/A",
    }, {	
      "id": 201404031,
      "name": "MD ABUL KASHEM",
      "designation": "Hafez",
      "image": "assets/img/hefzteacher.img/4_201404031.jpg",
      "joiningDate": "29-04-2023",
      "MobileNo": "8801817260773",
      "EmailAddress": "N/A",
    }, {
      "id": 201401121,
      "name": "MOHAMMAD SADDAM HOSSAIN",
      "designation": "	Hafez",    
      "image": "assets/img/hefzteacher.img/5_201401121.jpg",
      "joiningDate": "28-10-2022",
      "MobileNo": "8801815953023",
      "EmailAddress": "mdsaddamhossain3319@gmail.com",
    }, {		
      "id": 201603201,
      "name": "MOHAMMAD OBAIDULLAH",
      "designation": "	Hafez",
      "image": "assets/img/hefzteacher.img/6_201603201.jpg",
      "joiningDate": "12-03-2023",
      "MobileNo": "8801628986078",
      "EmailAddress": "N/A",
    }, {		
      "id": 202101092,
      "name": "MOHAMMAD ABDUL LATIF",
      "designation": "Hafez",
      "image": "assets/img/hefzteacher.img/7_202101092.jpg",
      "joiningDate": "17-08-2022",
      "MobileNo": "	8801812548406",
      "EmailAddress": "	latif8406@gmail.com",
    },   
  ]
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
