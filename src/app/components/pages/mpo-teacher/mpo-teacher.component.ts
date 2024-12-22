import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'mpo-teacher',
  templateUrl: './mpo-teacher.component.html',
  styleUrls: ['./mpo-teacher.component.scss']
})
export class MpoTeacherComponent implements OnInit
{

  dummyItems = [
    {
      "id": 201705111,
      "name": "DR. A T M LIAKAT ALI",
      "designation": "Vice Principal",
      "image": "assets/img/mpo-picture-img/1_201705111.jpg",
      "joiningDate": "03-02-2023",  
      "MobileNo": "8801818489064",
      "EmailAddress": "liakat2015@gmail.com",
    }, 
    {
      "id": 199001141,
      "name": "GOLAM MOSTAFA MOHAMMAD NURUN NABI",       
      "designation": "Lecturer in Arabic",
      "image": "assets/img/mpo-picture-img/2_199001141.jpg",
      "joiningDate": "10-09-2022",
      "MobileNo": "8801819548344",
      "EmailAddress": "nurnabijamea@gmail.com",

    }, {
      "id": 198901111,
      "name": "MIR MOHAMMAD ALA UDDIN",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/mpo-picture-img/3_198901111.jpg",
      "joiningDate": "10-06-2022",
      "MobileNo": "8801815954401",
      "EmailAddress": "N/A",
    }, {
      "id": 200001101,
      "name": "MOHAMMAD ELIAS",
      "designation": "Assistant Professor in Islamic History",
      "image": "assets/img/mpo-picture-img/4_200001101.jpg",
      "joiningDate": "29-04-2023",
      "MobileNo": "8801843351903",
      "EmailAddress": "N/A",
    }, {
      "id": 199011221,
      "name": "ABUL ASAD MUHAMMAD ZOBAIR",
      "designation": "Lecturer in Arabic",    
      "image": "assets/img/mpo-picture-img/5_199011221.jpg",
      "joiningDate": "28-10-2022",
      "MobileNo": "8801819035484",
      "EmailAddress": "zubairrazavi.ctg@gmail.com",
    }, {
      "id": 199201011,
      "name": "MOHAMMED ANISUZZAMAN",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/mpo-picture-img/6_199201011.jpg",
      "joiningDate": "12-03-2023",
      "MobileNo": "8801818573698",
      "EmailAddress": "N/A",
    }, {
      "id": 199901021,
      "name": "MD. ABDUL ALIM",
      "designation": "Assistant Teacher (Agriculture)",
      "image": "assets/img/mpo-picture-img/7_199901021.jpg",
      "joiningDate": "17-08-2022",
      "MobileNo": "8801814721844",
      "EmailAddress": "alimfarida59@gmail.com",
    }, {
      "id": 200101061,
      "name": "JAHANGIR ALAM",
      "designation": "Assistant Teacher Mathematics",
      "image": "assets/img/mpo-picture-img/8_200101061.jpg",
      "joiningDate": "20-01-2023",
      "MobileNo": "8801711054943",
      "EmailAddress": "jahangir0574@gmail.com",
    }, {
      "id": 200104231,
      "name": "MOHAMMAD ABU TAHER",
      "designation": "Assistant Teacher (English)",
      "image": "assets/img/mpo-picture-img/9_200104231.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801819333044",
      "EmailAddress": "abutaher197204@gmail.com",
    }, {
      "id": 200303201,
      "name": "S.M. DIDARUL ISLAM",
      "designation": "Assistant Teacher Mathematics",
      "image": "assets/img/mpo-picture-img/10_200303201.jpg",
      "joiningDate": "17-03-2023",
      "MobileNo": "8801819866452",
      "EmailAddress": "anididar@gmail.com",
    },
    {
      "id":200301101,
      "name": "MOHAMMED SHAH -E- JAHAN",
      "designation": "Assistant Teacher (Computer)",
      "image": "assets/img/mpo-picture-img/11_200301101.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801819333188",
      "EmailAddress": "shahejahan@gmail.com",
    },
    {
      "id":198505111,
      "name": "RMUHAMMAD ZAHURUL ANWAR",
      "designation": "Junior Teacher",
      "image": "assets/img/mpo-picture-img/12_198505111.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801815804590",
      "EmailAddress": "zahrulanwar67@gmail.com",
    },
    {
      "id":199911111,
      "name": "RKARI MOHAMMED IBRAHIM",
      "designation": "Qari",
      "image": "assets/img/mpo-picture-img/13_199911111.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801819358143",
      "EmailAddress": "N/A",
    },
    {
      "id":201701091,
      "name": "MUHAMMAD ANISUR RAHMAN BHUIYAN",
      "designation": "Ebtadayee Head",
      "image": "assets/img/mpo-picture-img/14_201701091.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801715487906",
      "EmailAddress": "abhuiyan210318@gmail.com",
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
