import { Component } from '@angular/core';

@Component({
  selector: "app-online-admisssion-pages",
  templateUrl: "./online-admisssion-pages.component.html",
  styleUrls: ["./online-admisssion-pages.component.scss"],
})
export class OnlineAdmisssionPagesComponent {
  dynamicTape = [
    {
      Id: 1,
      Text: "Ebtedayee Section Half Yearly Exam-2023 Routine",
      Link: "Ebtedayee Section Half Yearly Exam-2023 Routine.pdf",
    },
    {
      Id: 2,
      Text: "Dakhil Section Half Yearly Exam-2023 Routine",
      Link: "Dakhil Section Half Yearly Exam-2023 Routine.pdf",
    },
    {
      Id: 3,
      Text: "Kamil Post Graduate 1st year and 2nd year form fill-up",
      Link: "Kamil Post Graduate 1st year and 2nd year form fillup.pdf",
    },
    {
      Id: 4,
      Text: "Fazil (Honors) Student Admission Notice for Session 2022-23.",
      Link: "Fazil (Honors) Student Admission Notice for Session 2022-23.pdf",
    },
  ];
}
