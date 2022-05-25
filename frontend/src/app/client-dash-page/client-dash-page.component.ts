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
  public users: Partial<ChartOptions>
  public fidelizacoes: Partial<ChartOptions>
  public vendidos: Partial<ChartOptions>
  public comprados: Partial<ChartOptions>
  public boxes: Partial<ChartOptions>
  public vendidosGraph: Partial<ChartOptions>
  public compradosGraph: Partial<ChartOptions>
  public pontosGraph: Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
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
        theme: "black",
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    }

    this.vendidosGraph = {
      series: [
        {
          name: 'Unidades',
          data: [0, 40, 10 , 6, 2, 65, 52],
        },
        {
          name: 'Ganhos',
          data: [0, 80, 24, 41, 3, 100, 60],
        }
      ],
      title: {
        text: 'Vendidos',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }

    this.compradosGraph = {
      series: [
        {
          name: 'Unidades',
          data: [0, 10, 8 , 0, 71, 9, 42],
        },
        {
          name: 'Comprados',
          data: [0, 5, 12, 0, 5, 20, 80],
        }
      ],
      title: {
        text: 'Comprados',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }

    this.pontosGraph = {
      series: [
        {
          name: 'Ganhos',
          data: [0, 40, 50 , 51, 42, 109, 100],
        },
        {
          name: 'Gastos',
          data: [51, 15, 45, 32, 60, 52, 41],
        }
      ],
      title: {
        text: 'Pontos',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }

    this.boxes = {
      chart: {
        height: 150,
        type: 'area',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      tooltip: {theme: "black"},
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
      }
    }

    this.users = {
      series: [
        {
          name: 'Users',
          data: [10, 41, 35, 51, 49, 62, 69],
        }
      ],
      title: {
        text: 'Users',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }      
    }

    this.fidelizacoes = {
      series: [
        {
          name: 'Fidelizacoes',
          data: [6, 74, 40, 51, 49, 77, 4],
        },
      ],
      title: {
        text: 'Fidelizações',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }

    this.vendidos = {
      series: [
        {
          name: 'Vendidos',
          data: [5, 69, 35, 32, 49, 62, 86],
        },
      ],
      title: {
        text: 'Vendidos',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }

    this.comprados = {
      series: [
        {
          name: 'Comprados',
          data: [10, 0, 12, 51, 35, 9, 63],
        },
      ],
      title: {
        text: 'Comprados',
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      }
    }
  }

  ngOnInit(): void {
  }

}
