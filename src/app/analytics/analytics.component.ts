import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ChartComponent } from '../shared-module/chart/chart.component';
declare let google: any;

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  REQUESTS = [
    { type: 'Sam', name: 'sam50', amount: 1000, status: 'Draft', dateModified: 1111112211111 },
    { type: 'Jagan', name: 'Jagan100', amount: 5, status: 'Submitted', dateModified: 1111991111111 },
    { type: 'New Year', name: 'New20', amount: 200, status: 'Submitted', dateModified: 1111111441111 },
    { type: 'Diwali', name: 'Diwali50', amount: 200, status: 'Submitted', dateModified: 1111111441111 },
    { type: 'Pongal', name: 'Pongal20', amount: 200, status: 'Submitted', dateModified: 1111111441111 },

  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['name', 'amount', 'status', 'state'];
  dataSubject = new BehaviorSubject<Element[]>([]);
  @ViewChild('barChart') barChartRef: ChartComponent;

  totalCount = [
    { totalRecords: 89935, title: 'Sales', icon: 'point_of_sale', rate: 10, ratio: 1.2 },
    { totalRecords: 1250, title: 'Orders', icon: 'local_mall', rate: 3.1, ratio: 3.2 },
    { totalRecords: 8935, title: 'Visitor', icon: 'person', rate: 1, ratio: 1.5 },
    { totalRecords: 1235, title: 'Customers', icon: 'groups', rate: 13, ratio: 4.2 },

  ]
  piechartData = [
    {
      color: "#b23392",
      data: null,
      name: "Men",
      y: 90
    },
    {
      color: "#cc9fc1",
      data: null,
      name: "Women",
      y: 213
    }, {
      color: "#2F847C",
      data: null,
      name: "Both",
      y: 303
    }
  ]
  ColumnchartData = [
    ['Silver', 500, 400],
    ['Gold', 600, 460],
    ['Gold chain', 700, 120],
    ['Bracelet', 130, 50]
  ]
  tabId = '#tab1';
  tabIdcat = '#tab1';
  chartType: string;
  constructor(private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    let type = ['pie', 'bar']
    for (let i = 0; i < type.length; i++) {
      setTimeout(() => {
        this.getChartData(type[i])
      }, 2000)
    }
    this.drawbar();
    this.drawbar1();
  }
  onTabClickcat(tabId: string) {
    this.tabIdcat = tabId
    const activeElements = document.querySelectorAll('.activeCat');
    activeElements.forEach(element => {
      element.classList.remove('activeCat');
    });

    const clickedTab = document.querySelector(`a[href="${tabId}"]`);
    if (clickedTab) {
      clickedTab.classList.add('activeCat');
    }

    const tabContent = document.querySelector(tabId);
    if (tabContent) {
      tabContent.classList.add('activeCat');
    }
  }

  getChartData(type) {
    if (type === 'pie') {
      console.log(type)
      this.barChartRef.chartColumnsArray = [];
      this.barChartRef.chartDataArray = [];
      let chartData = [];
      let chartDataColumns = [];
      this.piechartData?.forEach((element) => {
        if (element.name) {
          chartData.push([element.name, element.y, element.color]);
        }
      });
      chartDataColumns = ['name', '', { role: 'style' }];
      this.barChartRef.chartOptionsg.height = '270';
      this.barChartRef.chartOptionsg.color=['#b23392','#cc9fc1','#2F847C'];

      // this.barChartRef.chartOptionsg.width = '';
      // this.barChartRef.chartOptionsg.legend.position = 'right';
      if (chartData?.length > 0) {
        console.log(chartData)
        this.barChartRef.chartDataArray.push(chartData);
        this.barChartRef.chartColumnsArray.push(chartDataColumns);
        this.barChartRef.refreshForLastLength();

      } else {
        this.barChartRef.isHide = true;
        // this.noData=true;
      }

    }
    //  else if (type === 'bar') {
    //   console.log(type)
    //   this.barChartRef.chartColumnsArray = [];
    //   this.barChartRef.chartDataArray = [];
    //   if (this.ColumnchartData.length) {
    //     const chartDataColumn = ['Galaxy', 'Distance', 'Brightness'];
    //     this.barChartRef.chartOptionsg.legend.position = 'right';
    //     this.barChartRef.chartColumnsArray.push(chartDataColumn);
    //     this.barChartRef.chartDataArray.push(this.ColumnchartData);
    //     this.barChartRef.refreshForLastLength();
    //   }
    //   else {
    //     this.barChartRef.isHide = true;
    //   }
    // }
  }
  drawbar() {
    let dataChart = []
    dataChart.push(this.ColumnchartData)
    let chartDatas = dataChart[dataChart.length - 1];
    const chartDataColumn = ['Year', 'Viewed', 'Sold'];
    let dataColumn = [];
    dataColumn.push(chartDataColumn)
    let chartColumns = dataColumn[dataColumn.length - 1]
    let chartOptionsg = {
      height: '',
      width: '',
      bar: { groupWidth: '30%',gap:"40%" },
      series: {
        0: {color: '#b23392' },
        1: { color: '#f0d4e6' },
      }, 
      legend: {
        position: 'none'
      },
     
      hAxis: {
        textStyle: { color: '#bfc7d0' }
      },
    
      vAxis: {
        textStyle: { color: '#bfc7d0' },
      
      },
     
    }
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(() => {
      const chartData = JSON.parse(JSON.stringify(chartDatas));
      chartData.unshift(chartColumns);
      console.log(chartData)
      const wrapper = new google.visualization.ChartWrapper({
        container: document.querySelector('#initial_chart_div1_'),
        chartType: 'ColumnChart',
        dataTable: chartData,
        options: chartOptionsg,
      });
      console.log(wrapper)
      wrapper.draw();
      google.visualization.events.addListener(wrapper.getChart(), 'select', () => {
        const selection = wrapper.getChart()?.getSelection();
        //  this.onSelect(selection);
      });  
    });
    
  }

  drawbar1() {
    let dataChart = []
    dataChart.push(this.ColumnchartData)
    let chartDatas = dataChart[dataChart.length - 1];
    const chartDataColumn = ['Year', 'Viewed', 'Sold'];
    let dataColumn = [];
    dataColumn.push(chartDataColumn)
    let chartColumns = dataColumn[dataColumn.length - 1]
    let chartOption = {
      height: '',
      width: '',
      bar: { groupWidth: '30%',gap:"40%" },
      legend: {
        position: 'none'
      },
      series: {
        0: { color: '#b23392' },
        1: { color: '#f0d4e6' },
      },
      hAxis: {
        textStyle: { color: '#bfc7d0' }
      },
      vAxis: {
        textStyle: { color: '#bfc7d0' }
      }
    }
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(() => {
      const chartData = JSON.parse(JSON.stringify(chartDatas));
      chartData.unshift(chartColumns);
      console.log(chartData)
      const wrapper = new google.visualization.ChartWrapper({
        container: document.querySelector('#initial_chart_div2_'),
        chartType: 'ColumnChart',
        dataTable: chartData,
        options: chartOption
      });
      console.log(wrapper)
      wrapper.draw();
      google.visualization.events.addListener(wrapper.getChart(), 'select', () => {

        const selection = wrapper.getChart()?.getSelection();
        //  this.onSelect(selection);
      });
    });

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getStyle();
    }, 3000)
  }
  getStyle() {
    this.barChartRef.chartOptionsg.width = '250px';
    this.barChartRef.chartOptionsg.color=['#b23392','#cc9fc1','#2F847C'];

    this.barChartRef.drawChart();
  }
  onTabClick(tabId: string) {
    this.tabId = tabId;
    const activeElements = document.querySelectorAll('.activeSal');
    activeElements.forEach(element => {
      element.classList.remove('activeSal');
    });

    const clickedTab = document.querySelector(`a[href="${tabId}"]`);
    if (clickedTab) {
      clickedTab.classList.add('activeSal');
    }

    const tabContent = document.querySelector(tabId);
    if (tabContent) {
      tabContent.classList.add('activeSal');
    }
  }


  getAmount(amount) {
    return (amount === 0 ? 'FREE' : amount + " €");
  }
}
