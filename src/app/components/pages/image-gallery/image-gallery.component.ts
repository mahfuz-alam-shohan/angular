import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit
{
  items: string[] = ['photos', 'videos'];
  selectedItem: string = 'photos';
  imageLoaded = false;
  fetchinData = true;
  ImageAlbums: any;
  VideoAlbums: any;
  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService, private router: Router) { }

  ngOnInit()
  {
    this.FetchAlbums();
    // this.route.paramMap.subscribe((params: ParamMap) =>
    // {
    //   const item = params.get('item');
    //   if (item && this.items.includes(item))
    //   {
    //     this.selectedItem = item;
    //   } else
    //   {
    //     this.selectedItem = this.items[0];
    //   }
    // });


  }

  selectItem()
  {
    this.router.navigate(['/video-gallery']);
  }

  onImageLoad()
  {
    this.imageLoaded = true;
  }

  FetchAlbums()
  {
    forkJoin([
      this.appService.getImageAlbums(),
    ]).subscribe((response: any) =>
    {
      console.log(response, 'response Albums');

      this.ImageAlbums = response[0].data;

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
