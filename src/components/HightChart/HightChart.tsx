import React, { useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getOptions } from '../../utils/getOptions'
import { ParsedProduct } from '../../utils/getParsedProduct'

type HighchartsComponentProps = {
  data: Array<ParsedProduct>
  choosed: string
}

const HighchartsComponent: React.FC<HighchartsComponentProps> = ({ data, choosed }) => {
  const filtered = useMemo(() => {
    return getOptions(data.filter((el) => el._category === choosed))
  }, [data, choosed])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={filtered}
    />
  )
}

export default HighchartsComponent
