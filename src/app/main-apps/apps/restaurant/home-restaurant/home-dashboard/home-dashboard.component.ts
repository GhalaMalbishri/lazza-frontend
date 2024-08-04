import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    var option;

    // var chartDom1 = document.getElementById('main2')!;
    // var myChart1 = echarts.init(chartDom);
    // var option1: EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }



  // option1 = {
  //   title: {
  //     text: 'Referer of a Website',
  //     subtext: 'Fake Data',
  //     left: 'center'
  //   },
  //   tooltip: {
  //     trigger: 'item'
  //   },
  //   legend: {
  //     orient: 'vertical',
  //     left: 'left'
  //   },
  //   series: [
  //     {
  //       name: 'Access From',
  //       type: 'pie',
  //       radius: '50%',
  //       data: [
  //         { value: 1048, name: 'Search Engine' },
  //         { value: 735, name: 'Direct' },
  //         { value: 580, name: 'Email' },
  //         { value: 484, name: 'Union Ads' },
  //         { value: 300, name: 'Video Ads' }
  //       ],
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)'
  //         }
  //       }
  //     }
  //   ]
  // };

  // option1 && myChart1.setOption(option1);

}
