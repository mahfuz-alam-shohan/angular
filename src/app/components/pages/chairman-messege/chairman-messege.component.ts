import { Component } from "@angular/core";
import { Subscription, forkJoin } from "rxjs";
import { EmitterService } from "src/app/EmitterService";
import { AppService } from "src/app/app.service";

@Component({
  selector: 'app-chairman-messege',
  templateUrl: './chairman-messege.component.html',
  styleUrls: ['./chairman-messege.component.scss']
})
export class ChairmanMessegeComponent {
  subscription: Subscription;
  MainData: any;
  test: any;
  cheif_patron_data: any;
  GBMessages: any;

  constructor(
      private emitterService: EmitterService,
      private appService: AppService
  ) {}
  ngOnInit(): void {
      this.FetchData();
  }
  FetchData() {
      forkJoin([this.appService.getGBMessages()]).subscribe(
          (response: any) => {
              this.GBMessages = response[0].data;
              console.log(this.GBMessages, "Mcpsc Gb Messages");
              let targetArray = null;

              for (let i = 0; i < this.GBMessages.length; i++) {
                  if (this.GBMessages[i].GBDesignationName === "Chairman") {
                      targetArray = this.GBMessages[i];
                      break;
                  }
              }

              this.cheif_patron_data = targetArray;

              // Now targetArray contains the array that has GBDesignationId equal to 1
              if (targetArray) {
                  console.log(targetArray, "Chairmen");
              } else {
                  console.log(
                      "No array found with GBDesignationId equal to 1"
                  );
              }
          }
      );
  }
}
