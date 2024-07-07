import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit
{
  items: string[] = ['photos', 'videos'];
  selectedItem: string = 'videos';
  imageLoaded = false;
  fetchinData = true;
  ImageAlbums: any;
  VideoAlbums: any;
  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService, private router: Router) { }

  ngOnInit()
  {
    this.FetchAlbums();
  }

  selectItem()
  {
    this.router.navigate(['/photo-gallery']);
  }

  onImageLoad()
  {
    this.imageLoaded = true;
  }

  FetchAlbums()
  {
    forkJoin([
      this.appService.getVideoAlbums(),
    ]).subscribe((response: any) =>
    {
      console.log(response, 'response Albums');

      this.VideoAlbums = response[0].data;

      this.fetchinData = false;
    });
  }

  TransformUrl(value)
  {
    if (value.includes('https://'))
    {
      return value;
    }
    else
    {
      return `https://${value}`
    }
  }
}
