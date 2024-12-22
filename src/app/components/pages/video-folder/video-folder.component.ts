import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { forkJoin } from "rxjs";
import Utility from "src/app/utils/utility";

interface Image
{
    src: string;
    thumbnail: string;
    alt: string;
}
@Component({
    selector: "app-video-folder",
    templateUrl: "./video-folder.component.html",
    styleUrls: ["./video-folder.component.scss"],
})
export class VideoFolderComponent implements OnInit
{
    album = [];
    files: any = [];
    folders: any = [];
    mainResponse: any = [];
    imageLoaded = false;
    fetchinData = true;
    selectedItem: string = 'photos';
    constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) { }

    ngOnInit()
    {
        this.route.paramMap.subscribe((params: ParamMap) =>
        {
            const folderId = params.get('folderId');
            if (folderId)
            {
                this.FetchAlbumById(folderId);

            } else
            {
                console.log('no folderId');

            }
        });
    }

    FetchAlbumById(folderId)
    {
        forkJoin([
            this.appService.getVideoAlbumsById(folderId),
            this.appService.getVideoFolders(),
        ]).subscribe((response: any) =>
        {
            console.log(response, 'response Albums');

            this.mainResponse = response[0].data;
            console.log(this.mainResponse, 'mainResponse');


            this.album = this.mainResponse.filter(item => item.IsAlbumFolder === true);
            this.files = this.mainResponse.filter(item => item.IsAlbumFolder === false);

            const folderId = this.route.snapshot.paramMap.get("folderId") === 'null' ? null : this.route.snapshot.paramMap.get("folderId");

            this.folders = Utility.Transfrom_Folder(response[1].data,folderId);

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

    trackByFn2(index: number, item: any): any
    {
        return item.id || index;
    }

    Goto(link): void
    {
      this.album = [];
      this.files = [];
      this.folders = [];
      this.mainResponse = [];
      // debugger;
      this.router.navigateByUrl(`/videoFolder/${link}`);
    }

    selectItem()
    {
        this.router.navigate(['/video-gallery']);
    }


    convertToEmbedUrl(url: string): string
    {
        const videoRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?)(.*)(?:v=)([a-zA-Z0-9_-]{11})(&|$)/;
        const match = url.match(videoRegex);
        if (match)
        {
            const videoId = match[2];
            return `https://www.youtube.com/embed/${videoId}`;
        } else
        {
            console.error('Invalid YouTube URL');
            return url;
        }
    }


    onImageLoad()
    {
        this.imageLoaded = true;
    }
}
