import React,{ useCallback } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type DropDownProps = {
  categories: Array<string>
  onChange: (str: string) => void
  choosed: string
}

export const DropDown: React.FC<DropDownProps> = ({ categories, onChange, choosed }) => {

  const handleChange = useCallback((event: SelectChangeEvent) => {
    onChange(event.target.value as string)
  }, [onChange])

  return Boolean(categories?.length) ? (
    <Box sx={{ minWidth: 120, marginBottom: 4, padding: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="label">Category</InputLabel>
        <Select
          labelId="label"
          value={choosed}
          label="Category"
          onChange={handleChange}
        >
          {categories?.map(cat => (<MenuItem key={cat} value={cat}>{cat}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  ) : null
}
