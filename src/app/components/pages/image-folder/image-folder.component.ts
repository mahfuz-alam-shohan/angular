import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AppService } from "src/app/app.service";

import { forkJoin } from "rxjs";
import Utility from "src/app/utils/utility";
import { DomSanitizer } from "@angular/platform-browser";

interface Image
{
    src: string;
    thumbnail: string;
    alt: string;
}
@Component({
    selector: "app-image-folder",
    templateUrl: "./image-folder.component.html",
    styleUrls: ["./image-folder.component.scss"],
})
export class ImageFolderComponent implements OnInit
{
    album = [];
    files: any = [];
    folders: any = [];
    mainResponse: any = [];
    imageLoaded = false;
    fetchinData = true;
    selectedItem: string = 'photos';
    constructor(private route: ActivatedRoute, private appService: AppService, private router: Router, public sanitizer: DomSanitizer) { }

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
            this.appService.getImageAlbumsById(folderId),
            this.appService.getImageFolders(),
        ]).subscribe((response: any) =>
        {
            console.log(response, 'response Albums');

            this.mainResponse = Utility.TransformFolder_Data(response[0].data);
            console.log(this.mainResponse, 'mainResponse');


            this.album = this.mainResponse.filter(item => item.IsAlbumFolder === true);
            this.files = this.mainResponse.filter(item => item.IsAlbumFolder === false);
            console.log(this.files, ' this.files');


            const folderId = this.route.snapshot.paramMap.get("folderId") === 'null' ? null : this.route.snapshot.paramMap.get("folderId");

            this.folders = Utility.Transfrom_Folder(response[1].data, folderId);

            this.fetchinData = false;
        });
    }

    TransformUrl(value)
    {
        if (value.includes('https://'))
        {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
        else
        {
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://${value}`);
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
        this.router.navigateByUrl(`/imageFolder/${link}`);
    }

    selectItem()
    {
        this.router.navigate(['/video-gallery']);
    }





    onImageLoad()
    {
        this.imageLoaded = true;
    }
}
