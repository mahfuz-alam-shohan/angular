/** @format */

export default class UrlConfig {
    static apiVersion = 1;

    static readonly rootUrl: string =
        "https://portal2websiteapi.cloudcampus24.com";
    static readonly apiUrl: string =
        "https://portal2websiteapi.cloudcampus24.com/api/";
    static readonly apiUrlV1: string =
        "https://portal2websiteapi.cloudcampus24.com/api/v1/";

    public static get NOTICECLIENT_NOTICES(): string {
        return UrlConfig.apiUrlV1 + `NoticeClient/notices`;
    }

    public static get ALBUMCLIENT_IMAGE_ALBUMS(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/image-albums`;
    }

    public static get ALBUMCLIENT_IMAGE_ALBUMS_NEW(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/image-albums-new`;
    }

    public static get ALBUMCLIENT_IMAGES(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/images`;
    }

    public static get ALBUMCLIENT_VIDEO_ALBUMS(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/video-albums`;
    }

    public static get ALBUMCLIENT_VIDEO_ALBUMS_NEW(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/video-albums-new`;
    }

    public static get ALBUMCLIENT_VIDEOS(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/videos`;
    }

    public static get GBMESSAGECLIENT_GOVERNING_BODIES(): string {
        return UrlConfig.apiUrlV1 + `GBMessageClient/governing-bodies`;
    }

    public static get GBMESSAGECLIENT_GB_MESSAGES(): string {
        return UrlConfig.apiUrlV1 + `GBMessageClient/gb-messages`;
    }

    public static get ALBUMCLIENT_SLIDE_IMAGE(): string {
        return UrlConfig.apiUrlV1 + `AlbumClient/slide-images`;
    }

    public static get TEACHERSTAFFCLIENT_TEACHERS_STAFFS(): string {
        return UrlConfig.apiUrlV1 + `TeacherStaffClient/teachers-staffs`;
    }

    public static get GOVERNING_BODY_GB_SEARCH_GB(): string {
        return UrlConfig.apiUrlV1 + `GB/search-gb`;
    }

    public static get APPSTRUCTURECLIENT_CLIENT_BASICS(): string {
        return UrlConfig.apiUrlV1 + `AppStructureClient/client-basics`;
    }

    public static get CONTENTCLIENT_CONTENTS(): string {
        return UrlConfig.apiUrlV1 + `ContentClient/contents`;
    }
}
