import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, OnDestroy
{
  selectedItem: string = '';
  items = [
    { "Name": 'Governing Body', "Url": 'governing-body', },
    { "Name": 'Cheif Patron Message', "Url": 'message-of-chief-patron', },
    { "Name": 'Chairman Message', "Url": 'message-of-chairman', },
    { "Name": 'Vice Chairman Message,', "Url": 'message-of-vice-chairman', },
    { "Name": 'Principal Message', "Url": 'message-of-principal', },
    { "Name": 'Vice Principal Message', "Url": 'message-of-vice-principal', },
    { "Name": 'Teacher Information', "Url": 'teacher-information', },
  ];
  imageLoaded = false;
  fetchinData = true;
  ImageAlbums: any;
  GBs: any;
  GBs1: any;
  GBs2: any;
  TeacherInfo: any;
  GBms: any;
  GBms1: any;
  selectedItemName = '';
  private ngUnsubscribe = new Subject();

  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService, private router: Router, private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe((params: ParamMap) =>
    {
      const item = params.get("item");
      const matchedItem = this.items.find(i => i.Url === item);
      if (item && matchedItem && item == matchedItem.Url)
      {
        this.selectedItem = item;
        this.selectedItemName = matchedItem.Name

      } else
      {
        this.selectedItem = this.items[0].Url;
        this.selectedItemName = this.items[0].Name
        this.location.replaceState(`/${this.selectedItem}`);
      }
      this.FetchData();
    });

  }

  ngOnDestroy()
  {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

  FetchData()
  {
    this._changeDetectorRef.markForCheck();
    this.fetchinData = true;
    if (this.selectedItem === 'governing-body')
    {
      this.FetchGbs();
    } else if (this.selectedItem === 'teacher-information')
    {
      this.FetchTeacherInfo();
    } else
    {
      this.FetchGbms();
    }
  }

  selectItem(item: string)
  {
    this.selectedItem = item;
    if (this.selectedItem === 'governing-body')
    {
      this.router.navigate([`/administration/${item}`]);
    } else if (this.selectedItem === 'teacher-information')
    {
      this.router.navigate([`/administration/${item}`]);
    } else
    {
      this.location.go(`/administration/${item}`);
      if (this.GBms != null)
      {

        const matchedItem = this.items.find(i => i.Url === item);
        this.selectedItemName = matchedItem.Name;

        let gm = null;

        if (this.selectedItem === 'message-of-chairman')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 4);
        } else if (this.selectedItem === 'message-of-chief-patron')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 1);
        } else if (this.selectedItem === 'message-of-principal')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 6);
        }
        else if (this.selectedItem === 'message-of-vice-chairman')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 5);
        }
        else if (this.selectedItem === 'message-of-vice-principal')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 12);
        }
        this.GBms1 = gm[0];
      }
      else
      {
        this._changeDetectorRef.markForCheck();
        this.fetchinData = true;
        this.FetchGbms();
      }

    }
  }

  onImageLoad()
  {
    this.imageLoaded = true;
  }

  FetchGbs()
  {
    forkJoin([
      this.appService.getGBs(),
    ]).pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: any) =>
      {
        console.log(response, 'response Albums');

        this.GBs = response[0].data;

        if (this.GBs)
        {
          let m1 = this.GBs.slice(0, 1);
          this.GBs1 = m1[0];
          this.GBs2 = this.GBs.slice(1);
        }

        this.fetchinData = false;
      });
  }

  FetchTeacherInfo()
  {
    forkJoin([
      this.appService.getTeaherStaff(),
    ]).subscribe((response: any) =>
    {
      console.log(response, 'response Albums');

      this.TeacherInfo = response[0].data;
      this.fetchinData = false;
    });
  }

  FetchGbms()
  {
    forkJoin([
      this.appService.getGBMessages(),
    ]).subscribe((response: any) =>
    {
      console.log(response, 'response Albums');

      this.GBms = response[0].data;

      if (this.GBms)
      {

        let gm = null;

        if (this.selectedItem === 'message-of-chairman')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 4);
        } else if (this.selectedItem === 'message-of-chief-patron')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 1);
        } else if (this.selectedItem === 'message-of-principal')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 6);
        }
        else if (this.selectedItem === 'message-of-vice-chairman')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 5);
        }
        else if (this.selectedItem === 'message-of-vice-principal')
        {
          gm = this.GBms.filter(item => item.GBDesignationId == 12);
        }
        this.GBms1 = gm[0];
      }

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
