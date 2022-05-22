import { Component, ViewChild, OnInit } from '@angular/core'

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexTitleSubtitle,
  ApexGrid,
  ApexFill,
} from 'ng-apexcharts'

export type ChartOptions = {
  series?: ApexAxisChartSeries
  chart?: ApexChart
  xaxis?: ApexXAxis
  stroke?: ApexStroke
  tooltip?: ApexTooltip
  dataLabels?: ApexDataLabels
  title?: ApexTitleSubtitle
  fill?: ApexFill
}
@Component({
  selector: 'app-client-dash-page',
  templateUrl: './client-dash-page.component.html',
  styleUrls: ['./client-dash-page.component.css']
})
export class ClientDashPageComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined
  public chartOptions: Partial<ChartOptions>
  public pontos: Partial<ChartOptions>
  public vendidos: Partial<ChartOptions>
  public comprados: Partial<ChartOptions>

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: 'Pontos',
          data: [0, 40, 50 , 51, 42, 109, 100],
        },
        {
          name: 'Vendidos',
          data: [51, 15, 45, 32, 60, 52, 41],
        }
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      }
    }

    this.pontos = {
      series: [
        {
          name: 'Users',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 150,
        type: 'line',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Pontos',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }

    this.vendidos = {
      series: [
        {
          name: 'Users',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 150,
        type: 'line',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Livros vendidos',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }

    this.comprados = {
      series: [
        {
          name: 'Users',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 150,
        type: 'line',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Livros comprados',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }
  }

  ngOnInit(): void {
  }

}
