import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Service } from "./configs/service";
import UrlConfig from "./configs/UrlConfig";

@Injectable()
export class AppService {
    constructor(private service:Service) {}

    getNotices(): Observable<any> {
        return this.service.getKey(UrlConfig.NOTICECLIENT_NOTICES);
    }

    getClientBasics(): Observable<any> {
        return this.service.getKey(UrlConfig.APPSTRUCTURECLIENT_CLIENT_BASICS);
    }

    getImageAlbums(): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_IMAGE_ALBUMS);
    }

    getImageFolders(): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_IMAGE_ALBUMS_NEW);
    }

    getImageAlbumsById(id): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_IMAGES + `/${id}`);
    }

    getVideoAlbums(): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_VIDEO_ALBUMS);
    }

    getGBs(): Observable<any[]> {
        return this.service.getKey(UrlConfig.GBMESSAGECLIENT_GOVERNING_BODIES);
    }

    getGBMessages(): Observable<any[]> {
        return this.service.getKey(UrlConfig.GBMESSAGECLIENT_GB_MESSAGES);
    }

    getSlides(): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_SLIDE_IMAGE);
    }

    getTeaherStaff(): Observable<any[]> {
        return this.service.getKey(
            UrlConfig.TEACHERSTAFFCLIENT_TEACHERS_STAFFS
        );
    }

    getVideoFolders(): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_VIDEO_ALBUMS_NEW);
    }

    getVideoAlbumsById(id): Observable<any[]> {
        return this.service.getKey(UrlConfig.ALBUMCLIENT_VIDEOS + `/${id}`);
    }

    getContents(): Observable<any[]> {
        return this.service.getKey(UrlConfig.CONTENTCLIENT_CONTENTS);
    }
}
