import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.scss']
})
export class YearlyComponent implements OnInit {

  @Input() yearlyData: any;
  currentGradeData: any;
  currentGradeArray: any = [];
  selectedGrade: string = '';
  syllabusArray: any = [];

  constructor() { }

  ngOnInit() {
    this.selectedGrade = this.yearlyData[0].grade;
    this.onGradeChange(this.selectedGrade);
    this.syllabusArray = this.currentGradeArray[0].value.syllabus.split(' ! ');
  }

  onGradeChange(gradedata) {
    this.selectedGrade = gradedata;
    this.currentGradeData = this.yearlyData.filter(data => {
      return data.grade === gradedata;
    })
    this.currentGradeArray = [];
    Object.keys(this.currentGradeData[0].boards).forEach(key => this.currentGradeArray.push({
      name: key,
      value: this.currentGradeData[0].boards[key]
    }));
  }

  onTabChange(data) {
    this.syllabusArray = this.currentGradeArray[data.index].value.syllabus.split(' ! ');
  }

}
