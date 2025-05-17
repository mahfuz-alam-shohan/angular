import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: 'app-mpo-office-staff',
  templateUrl: './mpo-office-staff.component.html',
  styleUrls: ['./mpo-office-staff.component.scss']
})
export class MpoOfficeStaffComponent implements OnInit {
  selectedLanguage = "";
  firstPageItems = [];
  paginatedItems = [];
  //   page: number = 1;
  font = "";
  foundnews: any;
  ContentData: any[] = [];
  all_employee_data: any[] = [];
  all_teachers_info: any[] = [];
  paginated_teachers_info: any[] = [];
  length = 0;
  pageSize = 15;
  pageIndex = 0;
  totalPages: number[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
      this.FetchData();
  }

  FetchData() {
  this.appService.getTeaherStaff().subscribe((response: any) => {
    console.log(response, "response FetchData");

    this.ContentData = response.data;
    console.log(this.ContentData, "Default Content Data");

    if (this.ContentData != null) {
      let employee_data = this.ContentData.filter(
        (x) => x.Department == "MPO Office Staff" && x.IsActive === true
      );
      this.all_employee_data = employee_data;
      console.log(this.all_employee_data, "All Active Office Staff");
    }

    if (this.ContentData != null) {
      let all_teachers_data = this.ContentData.filter(
        (x) => x.Department == "MPO Office Staff" && x.IsActive === true
      );
      this.all_teachers_info = all_teachers_data;
      console.log(this.all_teachers_info, "All Active MPO Office Staff");

      this.length = this.all_teachers_info.length;
      this.generatePageNumbers();
      this.paginateData();
    }
  });
}


  onPageChange(pageIndex: number) {
      this.pageIndex = pageIndex;
      this.paginateData();
  }

  paginateData() {
      const startIndex = this.pageIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.paginated_teachers_info = this.all_teachers_info.slice(
          startIndex,
          endIndex
      );
  }

  generatePageNumbers() {
      const totalPageCount = Math.ceil(this.length / this.pageSize);
      this.totalPages = Array.from(
          { length: totalPageCount },
          (_, i) => i + 1
      );
  }

  GetFontName() {
      switch (this.selectedLanguage) {
          case "en":
              return "Congenial";
          case "bn":
              return "Kalpurush";
          case "ar":
              return "Jameel Noori Nastaleeq";
      }
  }
}
