import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english } from 'src/services/locale';

@Component({
  selector: 'non-mpo-teacher',
  templateUrl: './non-mpo-teacher.component.html',
  styleUrls: ['./non-mpo-teacher.component.scss']
})
export class NonMpoTeacherComponent implements OnInit
{
 

  dummyItems = [
    {
      "id": 200601011,
      "name": "  MOHAMMAD SAIFUDDIN KHALED",
      "designation": "Head Of The Department (Al-Hadith)	",
      "image": "assets/img/non-mpo-teacher-img/1_200601011.jpg",
      "joiningDate": "03-02-2023",  
      "MobileNo": "8801818764751",
      "EmailAddress": "N/A",
    }, 
    {
      "id": 201601111,
      "name": "MOHAMMAD ABDUL QUADER",       
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/2_201601111.jpg",
      "joiningDate": "10-09-2022",
      "MobileNo": "8801726801063",
      "EmailAddress": "nurnabijamea@gmail.com",

    }, {
      "id": 201708191,
      "name": "MOHAMMAD AHASAN HABIB",
      "designation": "Lecturer in English",
      "image": "assets/img/non-mpo-teacher-img/3_201708191.jpg",
      "joiningDate": "10-06-2022",
      "MobileNo": "8801612345671",
      "EmailAddress": "mah.maruf@gmail.com",
    }, {
      "id":  201707081,
      "name": "MD. MOINUL ISLAM",
      "designation": "Lecturer in English",
      "image": "assets/img/non-mpo-teacher-img/4_201707081.jpg",
      "joiningDate": "29-04-2023",
      "MobileNo": "8801817781424",
      "EmailAddress": "mdmoin1809@gmail.com",
    }, {
      "id": 201801071      ,
      "name": "MOHAMMED MONOAR HOSSAIN CHOWDHURY",
      "designation": "Lecturer in Economics",    
      "image": "assets/img/non-mpo-teacher-img/5_201801071.jpg",
      "joiningDate": "28-10-2022",
      "MobileNo": "8801816357963",
      "EmailAddress": "monoarcdh@gmail.com      ",
    }, {
      "id": 200001201,
      "name": "MOHAMMAD OSMAN GANI",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/6_200001201.jpg",
      "joiningDate": "12-03-2023",
      "MobileNo": "8801817232364",
      "EmailAddress": "N/A",
    }, {
      "id": 200101071      ,
      "name": "MOHAMMAD AZIZUR RAHMAN",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/7_200101071.jpg",
      "joiningDate": "17-08-2022",
      "MobileNo": "8801815957368",
      "EmailAddress": "N/A",
    }, {
      "id":  200301051,
      "name": "MOHAMMAD AHMADUL HOQUE",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/8_200301051.jpg",
      "joiningDate": "20-01-2023",
      "MobileNo": "8801815660768      ",
      "EmailAddress":"N/A",
    }, {
      "id": 200501041,
      "name": "MUHAMMAD JASHIM UDDIN AL-KADERI",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/9_200501041.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801619179991",
      "EmailAddress": "N/A",
    }, {
      "id": 200401031,
      "name": "KAZI MOHAMMAD JALAL UDDEN",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/10_200401031.jpg",
      "joiningDate": "17-03-2023",
      "MobileNo": "8801814286909",
      "EmailAddress": "N/A",
    },
    {
      "id":201202071,
      "name": "MOHAMMAD TAREQUL ISLAM",
      "designation": "Lecturer in Arabic",
      "image": "assets/img/non-mpo-teacher-img/11_201202071.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801718142410",
      "EmailAddress": "N/A",
    },
    {
      "id":200510031      ,
      "name": "MUHAMMAD MAHBUBUR RAHMAN",
      "designation": "Lecturer in English",
      "image": "assets/img/non-mpo-teacher-img/12_200510031.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "88801819636903",
      "EmailAddress": "mahbubur3800@gmail.com",
    },
    {
      "id":202303031,
      "name": "MUHAMMAD AZIZUL MOSTAFA",
      "designation": "Lecturer in Bangla",
      "image": "assets/img/non-mpo-teacher-img/13_202303031.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801826161607",
      "EmailAddress":" mostafaazizcu@gmail.com",

    },
    {
      "id":199510061,
      "name": "MOHAMMAD ANWARUL ISLAM",
      "designation": "Assistant Moulovi (Qari)",
      "image": "assets/img/non-mpo-teacher-img/14_199510061.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801819631460",
      "EmailAddress": "N/A",
    },
    {
      "id":201401021,
      "name": "ABDUR RAZZAQUE",
      "designation": "Assistant Teacher (S. Science)",
      "image": "assets/img/non-mpo-teacher-img/15_201401021.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801816033845",
      "EmailAddress": "abdurrazzak@gmail.com",
    },
    {
      "id":201608251      ,
      "name": "MOHAMMAD MAINUL ISLAM",
      "designation": "Assistant Teacher (Science)",
      "image": "assets/img/non-mpo-teacher-img/16_201608251.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801818738683",
      "EmailAddress": "mainuljasa@gmail.com",
    },
    {
      "id":201701092,
      "name": "MUHAMMAD JOYNUL ABEDIN CHY",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/17_201701092.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801818085559",
      "EmailAddress": "mabedin626@gmail.com",
    },
    {
      "id":199603171,
      "name": "SYED MOHAMMAD YOUNUS",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/18_199603171.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801715898669",
      "EmailAddress": "N/A",
    },
    {
      "id":202101091,
      "name": "MUHAMMAD NAYMUL HUQ",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/19_202101091.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801817326194",
      "EmailAddress": "nayumulhaque86@gmail.com",
    },
    {
      "id":202303121      ,
      "name": "MD JAHID HOSSAIN",
      "designation": "Demonstrator",
      "image": "assets/img/non-mpo-teacher-img/20_202303121.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801822908609",
      "EmailAddress": "jahidhossain2060@gmail.com",
      
    },
    {
      "id":199901121,
      "name": "MD. ATAUR RAHMAN NOIMEE",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/21_199901121.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801815522254",
      "EmailAddress": "ataurrahmannaemy@gmail.com",
    },
    {
      "id":200101101,
      "name": "MUHAMMAD SHAH ALAM CHOWDHURY",
      "designation": "Junior Teacher",
      "image": "assets/img/non-mpo-teacher-img/22_200101101.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801816012681",
      "EmailAddress": "shahalamjasa@gmail.com",
    },
    {
      "id":200801011,
      "name": "MOHAMMAD AMZAD HOSSION",
      "designation": "Junior Teacher",
      "image": "assets/img/non-mpo-teacher-img/23_200801011.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801716782052",
      "EmailAddress": "abhuiyan210318@gmail.com",
    },
    {
      "id":201110051,
      "name": "MD. OMAR FARUQUE",
      "designation": "Junior Moulovi",
      "image": "assets/img/non-mpo-teacher-img/24_201110051.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801754641445",
      "EmailAddress": "N/A",
    },
    {
      "id":201202073 ,
      "name": "MOHAMMAD SOLAIMAN",
      "designation": "Assistant Moulovi",  
      "image": "assets/img/non-mpo-teacher-img/25_201202073.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801815132039",
      "EmailAddress": "N/A",
    },
    {
      "id":201701041,
      "name": "MOHAMMAD NURUSSAFA",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/26_201701041.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801815668072",
      "EmailAddress": "mnurussafa919@gmail.com",
    },
    {
      "id":201707161,
      "name": "MOHAMMAD NASIR UDDIN",
      "designation": "Assistant Librarian",
      "image": "assets/img/non-mpo-teacher-img/27_201707161.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801816003385",
      "EmailAddress": "nasiruddinqaderi@gmail.com",
    },
    {
      "id":202303122,
      "name": "MUHAMMAD JUBAIR SIDDIQUE",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/28_202303122.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801812835948",
      "EmailAddress": "N/A",
    },
    {
      "id":202303123,
      "name": "MASUM MOHAMMAD IMRAN",
      "designation": "Assistant Moulovi",
      "image": "assets/img/non-mpo-teacher-img/29_202303123.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801851843816",
      "EmailAddress": "imranmasommohammad@gmail.com",
    },
    {
      "id":202303124,
      "name": "MUHAMMAD ABDUL QUADER",
      "designation": "Ebtedayee Teacher",
      "image": "assets/img/non-mpo-teacher-img/30_202303124.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801826359961",
      "EmailAddress": "N/A",
    },
    {
      "id":202303125,
      "name": "RUJI AKTER",
      "designation": "Ebtedayee Teacher",
      "image": "assets/img/non-mpo-teacher-img/31_202303125.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801813908660",
      "EmailAddress": "rozyakter1112008@gmail.com",
    },
    {
      "id":202303126,
      "name": "ASMA NASRIN",
      "designation": "Ebtedayee Teacher",
      "image": "assets/img/non-mpo-teacher-img/32_202303126.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801521484416",
      "EmailAddress": "asmanasrin918@gmail.com",
    },
    {
      "id":202303129,
      "name": "ABDULLAH AL KAYUM",
      "designation": "Ebtedayee Teacher",
      "image": "assets/img/non-mpo-teacher-img/33_202303129.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801647448246",
      "EmailAddress": "smmkayum@gmail.com",
    },
    {
      "id":2023031210,
      "name": "MOHAMMAD KAMRUL HASAN",
      "designation": "Ebtedayee Teacher",
      "image": "assets/img/non-mpo-teacher-img/34_2023031210.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801866603461",
      "EmailAddress": "mkh.ifescu@gmail.com",
    },
    {
      "id":2023031211,
      "name": "MUHAMMAD FAISAL AHAMAD",
      "designation": "Ebtedayee Teacher (Extra)",
      "image": "assets/img/non-mpo-teacher-img/35_2023031211.jpg",
      "joiningDate": "30-05-2022",
      "MobileNo": "8801846045397",
      "EmailAddress": "faisalahmad720@gmail.com",
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
