import { Component, OnInit } from '@angular/core';
import { HomeTranslationLoaderService } from 'src/services/home-translation-loader.service';
import { arabic, bangla, english, urdu } from 'src/services/locale';

@Component({
  selector: 'principal-message',
  templateUrl: './principal-message.component.html',
  styleUrls: ['./principal-message.component.scss']
})
export class PrincipalMessageComponent implements OnInit
{

  selectedLanguage = '';

  font = '';

  constructor(
    private _homeTranslationLoaderService: HomeTranslationLoaderService,

  )
  {
    this._homeTranslationLoaderService.loadTranslations(english, bangla, arabic, urdu);
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
      case 'ur':
        return 'Jameel Noori Nastaleeq';
    }
  }

}
