import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-montly',
  templateUrl: './montly.component.html',
  styleUrls: ['./montly.component.scss']
})
export class MontlyComponent implements OnInit {
  @Input() monthlyData: any
  selectedGrade: string = '';
  currentGradeData: any = [];
  currentGradeArray: any = [];

  constructor() { }

  ngOnInit() {
    this.monthlyData.forEach(element => {
      if (!element.boards.hasOwnProperty('general')) {
        element.boards.general= element.boards.CBSE;
      }    
    });
    console.log('monthhaha', this.monthlyData);
    this.selectedGrade = this.monthlyData[0].grade;
    this.onGradeChange(this.selectedGrade);
  }

  onGradeChange(gradedata) {
    this.selectedGrade = gradedata;
    this.currentGradeData = this.monthlyData.filter(data => {
      return data.grade === gradedata;
    });
    this.currentGradeArray = [];
    Object.keys(this.currentGradeData[0].boards.general).forEach(key => this.currentGradeArray.push({
      name: key,
      value: this.currentGradeData[0].boards.general[key]
    }));
    console.log('currentGradeArray', this.currentGradeArray);
  }

}
