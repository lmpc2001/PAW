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
  selector: 'app-shop-dash',
  templateUrl: './shop-dash.component.html',
  styleUrls: ['./shop-dash.component.css'],
})
export class ShopDashComponent implements OnInit {
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

  /**Informação estatistica para os graficos */
  private timestamp = [
    '2018-09-19T00:00:00.000Z',
    '2018-09-19T01:30:00.000Z',
    '2018-09-19T02:30:00.000Z',
    '2018-09-19T03:30:00.000Z',
    '2018-09-19T04:30:00.000Z',
    '2018-09-19T05:30:00.000Z',
    '2018-09-19T06:30:00.000Z',
  ]

  private vendidosData = {
    unidades: {
      titulo: 'Unidades',
      data: [0, 40, 10, 6, 2, 65, 52],
    },
    ganhos: {
      titulo: 'Ganhos',
      data: [0, 80, 24, 41, 3, 100, 60],
    },
    titulo: 'Vendidos',
  }

  private compradosData = {
    unidades: {
      titulo: 'Unidades',
      data: [0, 10, 8, 0, 71, 9, 42],
    },
    gasto: {
      titulo: 'Comprados',
      data: [0, 5, 12, 0, 5, 20, 80],
    },
    titulo: 'Comprados',
  }

  private pontosData = {
    ganhos: {
      titulo: 'Ganhos',
      data: [0, 40, 50, 51, 42, 109, 100],
    },
    gastos: {
      titulo: 'Gastos',
      data: [51, 15, 45, 32, 60, 52, 41],
    },
    titulo: 'Pontos',
  }

  private fidelizacoesData = {
    title: 'Fidelizacoes',
    data: [6, 74, 40, 51, 49, 77, 4],
  }

  private usersData = {
    title: 'Users',
    data: [10, 41, 35, 51, 49, 62, 69],
  }
  /**----------------------------------------*/

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
        categories: this.timestamp,
      },
      tooltip: {
        theme: 'black',
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    }

    this.vendidosGraph = {
      series: [
        {
          name: this.vendidosData.unidades.titulo,
          data: this.vendidosData.unidades.data,
        },
        {
          name: this.vendidosData.ganhos.titulo,
          data: this.vendidosData.ganhos.data,
        },
      ],
      title: {
        text: this.vendidosData.titulo,
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }

    this.compradosGraph = {
      series: [
        {
          name: this.compradosData.unidades.titulo,
          data: this.compradosData.unidades.data,
        },
        {
          name: this.compradosData.gasto.titulo,
          data: this.compradosData.gasto.data,
        },
      ],
      title: {
        text: this.compradosData.titulo,
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }

    this.pontosGraph = {
      series: [
        {
          name: this.pontosData.ganhos.titulo,
          data: this.pontosData.ganhos.data,
        },
        {
          name: this.pontosData.gastos.titulo,
          data: this.pontosData.gastos.data,
        },
      ],
      title: {
        text: this.pontosData.titulo,
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
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
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      tooltip: { theme: 'black' },
      xaxis: {
        type: 'datetime',
        categories: this.timestamp,
      },
    }

    this.fidelizacoes = {
      series: [
        {
          name: this.fidelizacoesData.title,
          data: this.fidelizacoesData.data,
        },
      ],
      title: {
        text: this.fidelizacoesData.title,
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
          name: this.vendidosData.titulo,
          data: this.vendidosData.unidades.data,
        },
      ],
      title: {
        text: this.vendidosData.titulo,
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
          name: this.compradosData.titulo,
          data: this.compradosData.unidades.data,
        },
      ],
      title: {
        text: this.compradosData.titulo,
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }

    this.users = {
      series: [
        {
          name: this.usersData.title,
          data: this.usersData.data,
        },
      ],
      title: {
        text: this.usersData.title,
        offsetX: 30,
        style: {
          fontSize: '30px',
          color: '#fff',
        },
      },
    }
  }

  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0
    var series = []
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

      series.push([x, y, z])
      baseval += 86400000
      i++
    }
    return series
  }

  ngOnInit(): void {}

  page = 'DashBoard'
}
