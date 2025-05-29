import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-new-and-events',
  templateUrl: './new-and-events.component.html',
  styleUrls: ['./new-and-events.component.scss']
})
export class NewAndEventsComponent implements OnInit
{
  dummyItems = [
    {

    },

  ];

  dummyItemsTwo = [
    {
      id: 1,
      url: '/news',
      date: 'February 20, 2024',
      image: 'assets/img/school/news&events/19.jpeg',
      description:
        'গতকাল ১৫ই ফেব্রুয়ারি,২০২৪ রোজ বৃহস্পতিবার জ্ঞান, শৃঙ্খলা ও নৈতিকতা এই স্লোগানকে সামনে রেখে রামু ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ প্রাঙ্গনে...',
    },

    {
      id: 2,
      url: '/duamunajat',
      date: 'February 20, 2024',
      image: 'assets/img/school/Dua and Munajat.picture/1.jpeg',
      description: 'এসএসসি পরীক্ষার্থীদের জন্য "দোয়া ও মোনাজাত" অনুষ্ঠান প্রতিবছরের ন্যায় এবারও রামু ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজে ২০২৪ সালের এসএসসি পরীক্ষার্থীদের জন্য "দোয়া ও মোনাজাত" অনুষ্ঠানের আয়োজন করা হয়  ১২ ফেব্রুয়ারি, ২০২৪ রোজ সোমবার। স্কুলের অডিটোরিয়ামে অনুষ্ঠিত এ অনুষ্ঠানের প্রধান অতিথি ছিলেন এ প্রতিষ্ঠানের সম্মানিত অধ্যক্ষ মেজর জাহিদ সারওয়ার আকন্দ, এইসি স্যার। আরও উপস্থিত ছিলেন নবাগত অধ্যক্ষ মেজর মোহাম্মদ পারভেজ, এইসি স্যার। ',
    },
    {
      id: 3,
      url: '/visit',
      date: 'February 20, 2024',
      image: 'assets/img/school/news/3.jpeg',
      description: 'রামু ক্যান্ট. পাবলিক স্কুল ও কলেজের চেয়ারম্যান জনাব মো: জাহাঙ্গীর আলম এর বিদ্যালয় পরিদর্শন রামু ক্যান্ট পাবলিক স্কুল ও কলেজের চেয়ারম্যান জনাব মো: জাহাঙ্গীর আলম HQ 10 Arty Bde অত্র বিদ্যালয় পরিদর্শন করেন। তিনি দীর্ঘ সময় নিয়ে বিদ্যালয়ের প্রতিটি শ্রেণিকক্ষ, ল্যাব, আইসিটি ল্যাবসহ পুরো ক্যাম্পাস পরিদর্শন করেন। এসময় তিনি শ্রেণিকক্ষে শিক্ষক ও শিক্ষার্থীদের সাথে কুশল বিনিময় করেন। এসময় তার সাথে প্রতিষ্ঠানের অধ্যক্ষ মহোদয় ও শিক্ষকগণ উপস্থিত ছিলেন।',
    },
    {
      id: 4,
      url: '/fun',
      date: 'February 20, 2024',
      image: 'assets/img/school/Fun Tour 2024.picture/1.jpeg',
      description: 'গত ১৯/০১/২৪ ইং রোজ শনিবার রামু ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ শিক্ষক, কর্মকর্তা ও কর্মচারীদের এক চমৎকার আনন্দ ভ্রমণের  আয়োজন করা হয়। এতে প্রধান অতিথি উপস্থিত ছিলেন রামু ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজের অধ্যক্ষ মেজর জাহিদ সারওয়ার আকন্দ। নানান ইভেন্টের মধ্য দিয়ে আনন্দ ভ্রমণ-২৪ এ নানা ইভেন্টের মধ্যে ছিল বাচ্চাদের ঝুড়িতে বল নিক্ষেপ, শিক্ষকদের গলফ খেলা, শিক্ষিকাদের ডার্ট নিক্ষেপ এবং কর্মকর্তা ও কর্মচারীদের মধ্যে বিভিন্ন ইভেন্ট। সবশেষে সাংস্কৃতিক অনুষ্ঠান, রেফেল ড্র  ও বিভিন্ন ইভেন্টে অংশগ্রহণকারীদের মধ্যে বিজয়ীদের হাতে পুরস্কার প্রদান ও অধ্যক্ষ মহোদয়ের গুরুত্বপূর্ণ বক্তব্যের মধ্য দিয়ে অনুষ্ঠানের সুন্দর সমাপ্তি হয়।',
    },
  ]


  selectedLanguage = '';

  font = '';
  ContentData: any;
  News_event_data: any;
  foundnews: any;

  constructor(
    private appService: AppService,
  )
  {

  }

  ngOnInit(): void
  {
    // this.selectedLanguage = localStorage.getItem('selectedLanguage');

    this.FetchData();
  }

  FetchData()
  {

    this.appService.getContents()
      .subscribe((response: any) =>
      {
        console.log(response, 'response FetchData');


        this.ContentData = response.data;
        console.log(this.ContentData, "Ramu Content Data")

      if (this.ContentData != null) {
  // Filter News And Events
  let news = this.ContentData.filter(
    (x) => x.ContentCategoryName == 'News And Events'
  );

  // Sort by latest ID (descending)
  this.News_event_data = news.sort((a, b) => b.Id - a.Id);
  console.log(this.News_event_data, 'Latest First News And Events');
}


      });
  }

  GetFontName()
  {
    switch (this.selectedLanguage)
    {
      case 'en':
        return 'Congenial';
      case 'bn':
        return 'Kalpurush';
      case 'ar':
        return 'Jameel Noori Nastaleeq';
    }
  }
}
