import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'non-mpo-office-staff',
  templateUrl: './non-mpo-office-staff.component.html',
  styleUrls: ['./non-mpo-office-staff.component.scss']
})
export class NonMpoOfficeStaffComponent implements OnInit
{

  dummyItems = [
    { 
      "id": 201103231	,
      "name": " S.M. OSMAN GANI",
      "designation": "Office Secretary (Admin)",
      "image": "assets/img/non-mpo-0ffice-staff-img/1_201103231.jpg",
      "joiningDate": "03-02-2023",  
      "MobileNo": "8801819036029",
      "EmailAddress": "N/A",
    }, 
  {
      "id": 200901031,
      "name": "MS.M. SHAHNEWAZ ALI MEERZA",       
      "designation": "Office Assistant (Hostel)	",
      "image": "assets/img/non-mpo-0ffice-staff-img/2_200901031.jpg",
      "joiningDate": "10-09-2022",
      "MobileNo": "8801856822823",
      "EmailAddress": "s_meerza@yahoo.com",

    }, { 
      "id": 201103232,
      "name": "MOHAMMAD JAHIR UDDIN",
      "designation": "Office Assistant",
      "image": "assets/img/non-mpo-0ffice-staff-img/3_201103232.jpg",
      "joiningDate": "10-06-2022",
      "MobileNo": "8801719009051",
      "EmailAddress": "N/A",
    }, 
   
    {
      "id":   201906071,
      "name": "MASHUB YOUSUF",
      "designation": "IT Officer",
      "image": "assets/img/non-mpo-0ffice-staff-img/4_201906071.jpg",
      "joiningDate": "29-04-2023",
      "MobileNo": "	8801888727912",
      "EmailAddress": "mn.mashub@gmail.com",
    }, {
      "id":201601041 ,
      "name": "MD. MOSLEH UDDIN",
      "designation": "	Office Assistant",    
      "image": "assets/img/non-mpo-0ffice-staff-img/5_201601041.jpg",
      "joiningDate": "28-10-2022",
      "MobileNo": "8801828853533",
      "EmailAddress": "moslehbd89@gmail.com ",
    }, {
      "id": 201607141,
      "name": "K.M. AZIZUR RAHMAN",
      "designation": "Office Assistant",
      "image": "assets/img/non-mpo-0ffice-staff-img/6_201607141.jpg",
      "joiningDate": "12-03-2023",
      "MobileNo": "	8801817797264",
      "EmailAddress": "aziz.pro786@gmail.com",
    }, {
      "id": 202201014 ,
      "name": "AKIB UDDIN AHMED CHY",
      "designation": "	Assistant Accountant",
      "image": "assets/img/non-mpo-0ffice-staff-img/7_202201014.jpg",
      "joiningDate": "17-08-2022",
      "MobileNo": "	8801833982267",
      "EmailAddress": "akibuddin74662@gmail.com",
    }, {
      "id": 200912091,
      "name": "MOHAMMAD AMINUL ISLAM AMIN",
      "designation": "MLSS",
      "image": "assets/img/non-mpo-0ffice-staff-img/8_200912091.jpg",
      "joiningDate": "20-01-2023",
      "MobileNo": "8801829054171     ",
      "EmailAddress":"aminulislam054171@gmail.com",
    }, {
      "id": 201301261,
      "name": "MOHAMMAD SHOHEL ARMAN",
      "designation": "	MLSS",
      "image": "assets/img/non-mpo-0ffice-staff-img/9_201301261.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801816860151",
      "EmailAddress": "N/A",
    }, {
      "id": 201305031	,
      "name": "MOHAMMAD DIDARUL ISLAM",
      "designation": "	MSLS",
      "image": "assets/img/non-mpo-0ffice-staff-img/10_201305031.jpg",
      "joiningDate": "17-03-2023",
      "MobileNo": "	8801635182430",
      "EmailAddress": "N/A",
    },
    {
      "id":201301041,
      "name": "MD JOBIEDULLAH FAROQUIE",
      "designation": "	MLSS",
      "image": "assets/img/non-mpo-0ffice-staff-img/11_201301041.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801815370068",
      "EmailAddress": "faruquejobaied@gmail.com",
    },
    {
      "id":201404091    ,
      "name": "MD. ABDUL MANNAN",
      "designation": "MLSS",
      "image": "assets/img/non-mpo-0ffice-staff-img/12_201404091.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801875367860",
      "EmailAddress": "N/A",
    },
    {
      "id":201710141,
      "name": "NAZMUL MIA	",
      "designation": "MLSS	",
      "image": "assets/img/non-mpo-0ffice-staff-img/13_201710141.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801995988521",
      "EmailAddress":" nh4633@gmail.com",

    },
    {
      "id":201505041,
      "name": "	MD NURU NNABI",
      "designation": "	MLSS",
      "image": "assets/img/non-mpo-0ffice-staff-img/14_201505041.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801811142035",
      "EmailAddress": "N/A",
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
