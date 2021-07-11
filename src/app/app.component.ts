import { CompilerOptions, Component, OnInit } from '@angular/core';
import { CommonService } from '../app/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  monthlyData: any;
  yearlyData: any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getData().subscribe((data) => {
      this.data = data;
      console.log('this', this.data);
      this.monthlyData = data[0].monthly;
      this.yearlyData = data[1].yearly;
    });
  }

  onTabChange(tabName) {
    
  }
}
