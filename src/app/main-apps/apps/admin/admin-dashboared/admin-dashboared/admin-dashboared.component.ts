import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-admin-dashboared',
  templateUrl: './admin-dashboared.component.html',
  styleUrls: ['./admin-dashboared.component.scss']
})
export class AdminDashboaredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {

      title: {
        text: 'Referer of a Website',
        
        left: 'center'
      },

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


    // ----------------------
    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: 'Referer of a Website',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },

      legend: {
        orient: 'vertical',
        left: 'left'
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',

            }
          }
        }
      ]
    };

    option && myChart.setOption(option);

  }

}
