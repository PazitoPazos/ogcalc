import { useState } from 'react'
import './InputNum.css'
import { ids, allMaps } from '../data/data'
import { handleMinMax, updateAllTotal } from '../data/utils.js'

export default function InputNum({
  classN = '',
  desc = null,
  name,
  id,
  min = 0,
  max = 99,
}) {
  const [value, setValue] = useState(0)
  const update = (e) => {
    handleMinMax(e, min, max, setValue)
    updateAllTotal(ids, allMaps)
  }

  return (
    <>
      {desc !== null ? <label htmlFor={name}>{desc}</label> : <></>}
      <input
        className={classN}
        type='number'
        name={name}
        id={id}
        value={value}
        min={min}
        max={max}
        onChange={update}
      />
    </>
  )
}
