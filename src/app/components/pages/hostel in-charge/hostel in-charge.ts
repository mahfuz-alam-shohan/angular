import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'hostel in-charge',
  templateUrl: './hostel in-charge.component.html',
  styleUrls: ['./hostel in-charge.component.scss']
})
export class HostelInChargeComponent implements OnInit
{

  dummyItems = [
    {
      "id": 201005091,
      "name": "NAZRUL ISLAM",
      "designation": "Head Cook",
      "image": "assets/img/hostel in-charge-img/1_201005091.jpg",
      "joiningDate": "03-02-2023",  
      "MobileNo": "8+8801818957659",
      "EmailAddress": "N/A",
    }, 
    {		
      "id": 202210081,
      "name": "MOHAMMAD MONIR HOSSEN",       
      "designation": "Head Cook",
      "image": "assets/img/hostel in-charge-img/2_202210081.jpg",
      "joiningDate": "10-09-2022",
      "MobileNo": "+8801776163307",
      "EmailAddress": "N/A",

    }, {
      "id": 200108191,
      "name": "	MD. DIDARUL ALAM",
      "designation": "	Assistant Cook",
      "image": "assets/img/hostel in-charge-img/3_200108191.jpg",
      "joiningDate": "10-06-2022",
      "MobileNo": "+8801831980449",
      "EmailAddress": "N/A",
    }, {
      "id": 200807081,
      "name": "MD YOUSUF ALI",
      "designation": "Guard	",
      "image": "assets/img/hostel in-charge-img/4_200807081.jpg",
      "joiningDate": "29-04-2023",
      "MobileNo": "+8801821156819",
      "EmailAddress": "N/A",
    }, {
      "id": 201006121,
      "name": "MD.RABIUL HOSSAIN",
      "designation": "Assistant Cook",    
      "image": "assets/img/hostel in-charge-img/5_201006121.jpg",
      "joiningDate": "28-10-2022",
      "MobileNo": "+8801837598980",
      "EmailAddress": "N/A",
    }, {	
      "id": 201401111,
      "name": "AMIR HOSSAIN",
      "designation": "Assistant Cook",
      "image": "assets/img/hostel in-charge-img/6_201401111.jpg",
      "joiningDate": "12-03-2023",
      "MobileNo": "+8801883152937",
      "EmailAddress": "N/A",
    }, {
      "id": 201406021,
      "name": "MD. JAHANGIR ALAM",
      "designation": "Water Supplier",
      "image": "assets/img/hostel in-charge-img/7_201406021.jpg",
      "joiningDate": "17-08-2022",
      "MobileNo": "+8801864808696",
      "EmailAddress": "N/A",
    }, {
      "id": 201501081,
      "name": "MOHAMMAD FARUQE HOSSEN",
      "designation": "Assistant Cook",
      "image": "assets/img/hostel in-charge-img/8_201501081.jpg",
      "joiningDate": "20-01-2023",
      "MobileNo": "+8801874454153",
      "EmailAddress": "N/A",
    }, {
      "id": 201701031,
      "name": "MD.SUMON",
      "designation": "Assistant Cook",
      "image": "assets/img/hostel in-charge-img/9_201701031.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801870580678",
      "EmailAddress": "	N/A",
    }, {
      "id": 202201081,
      "name": "MOHAMMAD SHAHIN ALAM",
      "designation": "Assistant Cook",
      "image": "assets/img/hostel in-charge-img/10_202201081.jpg",
      "joiningDate": "17-03-2023",
      "MobileNo": "+8801633382439",
      "EmailAddress": "	N/A",
    },
    {
      "id":200801012,
      "name": "MOHAMMAD IDRIS MIA",
      "designation": "	Guard",
      "image": "assets/img/hostel in-charge-img/11_200801012.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801829796175",
      "EmailAddress": "N/A",
    },
    {
      "id":201601021,
      "name": "AZIZUR RAHMAN",
      "designation": "Guard",
      "image": "assets/img/hostel in-charge-img/12_201601021.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "	+8801872526574",
      "EmailAddress": "N/A",
    },
    {
      "id":202201071,
      "name": "MOHAMMAD MEHERAJ UDDIN",
      "designation": "Guard",
      "image": "assets/img/hostel in-charge-img/13_202201071.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801888292118",
      "EmailAddress": "N/A",
    },
    {
      "id":201901091,
      "name": "MD. SHAHADAT HOSSAIN",
      "designation": "Water Supplier",
      "image": "assets/img/hostel in-charge-img/14_201901091.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801884068374	",
      "EmailAddress": "N/A",
    },
    {
      "id":200512111,
      "name": "MD. HARUN",
      "designation": "Cleaner",
      "image": "assets/img/hostel in-charge-img/15_200512111.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801833987352",
      "EmailAddress": "N/A",
    },
    {
      "id":201601101,
      "name": "MOHAMMAD HANIF	",
      "designation": "Cleaner	",
      "image": "assets/img/hostel in-charge-img/16_201601101.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801839481740",
      "EmailAddress": "N/A",
    },
    {
      "id":201609271,
      "name": "MD.ZAHED",
      "designation": "Cleaner",
      "image": "assets/img/hostel in-charge-img/17_201609271.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801846826875",
      "EmailAddress": "N/A",
    },
    {
      "id":201701081,
      "name": "MD. MOSTAFA",
      "designation": "Cleaner",
      "image": "assets/img/hostel in-charge-img/18_201701081.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801824613241",
      "EmailAddress": "N/A",
    },
    {
      "id":202101011,
      "name": "MOHAMMAD EASIN ARFAT",
      "designation": "Cleaner",
      "image": "assets/img/hostel in-charge-img/19_202101011.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "+8801830969439",
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
