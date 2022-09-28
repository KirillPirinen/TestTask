import { ParsedProduct } from "./getParsedProduct"

export const getOptions = (data: Array<ParsedProduct>) => ({
  chart: {
      type: 'column'
  },
  title: {
      align: 'center',
      text: 'Device rating'
  },
  credits: {
    enabled: false
  },
  accessibility: {
      announceNewData: {
          enabled: true
      }
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Rating'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}'
          }
      }
  },
  series: [
      {
          name: "Devices",
          colorByPoint: true,
          data
      }
  ],
})
