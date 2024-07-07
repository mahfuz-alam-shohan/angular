import { cloneDeep } from "lodash";

export default class Utility {
    static Transfrom_Folder(_items, folderId) {
        const pathItems: any = cloneDeep(_items);
        const path = [];

        let currentFolder = null;

        if (folderId) {
            currentFolder = pathItems.find(
                (item) => item.id.toString() === folderId
            );
            console.log(currentFolder, "currentFolder");
            path.push(currentFolder);
        }
        console.log(path, "path");

        while (currentFolder?.folderId) {
            currentFolder = pathItems.find(
                (item) => item.id === currentFolder.folderId
            );
            if (currentFolder) {
                path.unshift(currentFolder);
            }
        }
        return path;
    }

    static TransformFolder_Data(data) {
        let object = data.map((element: any) => {
            let obj: any = {};
            // obj.term = element[0].TermName;

            obj.Id = element.Id;
            obj.ParentId = element.ParentId != null ? element.ParentId : null;
            obj.Name = element.Name != null ? element.Name : element.AlbumName;
            obj.BanglaName =
                element.BanglaName != null ? element.BanglaName : null;
            obj.ThumbnailPath =
                element.ThumbnailPath != null ? element.ThumbnailPath : null;
            obj.ThumbnailLink =
                element.ThumbnailLink != null ? element.ThumbnailLink : null;
            obj.AlbumType =
                element.AlbumType != null ? element.AlbumType : null;
            obj.AlbumOrder =
                element.AlbumOrder != null ? element.AlbumOrder : null;
            obj.TotalHitCount =
                element.TotalHitCount != null ? element.TotalHitCount : null;
            obj.IsActive = element.IsActive != null ? element.IsActive : null;
            obj.TotalSubFolder =
                element.TotalSubFolder != null ? element.TotalSubFolder : null;
            obj.TotalImage =
                element.TotalImage != null ? element.TotalImage : null;
            obj.LastUpdated =
                element.LastUpdated != null ? element.LastUpdated : null;

            obj.AlbumId = element.AlbumId != null ? element.AlbumId : null;

            obj.ImageOrder =
                element.ImageOrder != null ? element.ImageOrder : null;
            obj.ImagePath =
                element.ImagePath != null ? element.ImagePath : null;
            obj.ImageLink =
                element.ImageLink != null ? element.ImageLink : null;
            obj.IsAlbumFolder =
                element.IsAlbumFolder != null ? element.IsAlbumFolder : true;

            return obj;
        });

        return object;
    }

    static GBEnum() {
        let gbs = [
            { id: 1, Name: "Chief Patron" },
            { id: 2, Name: "Commander" },
            { id: 3, Name: "Chief Patron" },
            { id: 4, Name: "Chairmen" },
            { id: 5, Name: "Vice-Chairmen" },
            { id: 6, Name: "Principal" },
            { id: 7, Name: "Principal (School)" },
            { id: 8, Name: "Principal (College)" },
            { id: 9, Name: "Shift In-charge" },
            { id: 10, Name: "Shift In-charge (BV)" },
            { id: 11, Name: "Shift In-charge (EV)" },
            { id: 12, Name: "Vice-Principal" },
            { id: 13, Name: "Member" },
            { id: 14, Name: "Representative" },
            { id: 15, Name: "Managing Director" },
            { id: 16, Name: "Director" },
            { id: 17, Name: "Professor" },
            { id: 18, Name: "Assists. Professor" },
            { id: 19, Name: "First Asst Vice President" },
            { id: 20, Name: "Senior Teacher" },
        ];

        return gbs;
    }
}
