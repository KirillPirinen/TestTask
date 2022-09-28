import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DropDown, Wrapper, Highcharts } from './components'
import { fetchData, getError, getParsedData, isLoading } from './redux/slices/productsSlice'
import { useAppDispatch } from './redux/store'
import { withController } from './utils/withController'

const EnchancedHighcharts = withController(Highcharts)

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [cat, setCat] = useState<string>('')
  const loading = useSelector(isLoading)
  const error = useSelector(getError)
  const { parsedProducts, categories } = useSelector(getParsedData)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handleChange = useCallback((choosed: string) => {
    setCat(choosed)
  }, [])

  return (
    <Wrapper>
      <DropDown 
        categories={categories} 
        onChange={handleChange}
        choosed={cat}
      />
      <EnchancedHighcharts 
        data={parsedProducts}
        error={error}
        loading={loading}
        choosed={cat}
      />
    </Wrapper>
  )
}

export default App
