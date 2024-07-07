import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'mpo-office-staff',
  templateUrl: './mpo-office-staff.component.html',
  styleUrls: ['./mpo-office-staff.component.scss']
})
export class MpoOfficeStaffComponent implements OnInit
{

  dummyItems = [{
    "id": 199707091,
    "name": "MOHAMMAD ASIR ALI",
    "designation": "Librarian",
    "image": "assets/img/mpo-staff-img/1_199707091.jpg",
    "joiningDate": "03-02-2023",
    "MobileNo": "8801718177336",
    "EmailAddress": "asirali112017@gmail.com",

  }, {
    "id": 200507161,
    "name": "ABDUL AWAL",
    "designation": "Administrative Officer",
    "image": "assets/img/mpo-staff-img/2_200507161.jpg",
    "joiningDate": "10-09-2022",
    "MobileNo": "8801912511936",
    "EmailAddress":"abdulawaljasactg@gmail.com",
  }, 
  
  {
    "id": 200001081,
    "name": "MOHAMMED NAZRUL ISLAM",
    "designation": "Accountant",
    "image": "assets/img/mpo-staff-img/3_200001081.jpg",
    "joiningDate": "10-06-2022",
    "MobileNo": "8801818127800",
    "EmailAddress":"manikcum@gmail.com",
  },
  
  {
    "id": 202101101,
    "name": "MOHAMMAD AKTERUL ALAM SOHEL",
    "designation": "IT In-charge",
    "image": "assets/img/mpo-staff-img/4_202101101.jpg",
    "joiningDate": "10-06-2022",
    "MobileNo": "8801818559215",
    "EmailAddress":"sohelctgonline@gmail.com",
    },  
  
  {
    "id": 200212141,
    "name": "MOHAMMAD NAZRUL ISLAM",
    "designation": "MLSS",
    "image": "assets/img/mpo-staff-img/5_200212141.jpg",
    "joiningDate": "29-04-2023",    
    "MobileNo": "8801813703734",
    "EmailAddress":"islamnazrul732@gmail.com",
  }, {
    "id": 199701031,
    "name": "ABU JAFAR",
    "designation": "MLSS",
    "image": "assets/img/mpo-staff-img/6_199701031.jpg",
    "joiningDate": "28-10-2022",
    "MobileNo": "8801815603242",
    "EmailAddress":"N/A",
   },
    {
    "id": 200212142 ,
    "name": "MOHAMMAD ABU NOMAN",
    "designation": "MLSS",
    "image": "assets/img/mpo-staff-img/7_200212142.jpg",
    "joiningDate": "12-03-2023",
    "MobileNo": "8801822541199",
    "EmailAddress":"N/A",
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
