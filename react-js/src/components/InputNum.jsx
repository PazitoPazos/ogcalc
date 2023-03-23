import { useState } from 'react'
import './InputNum.css'

export default function InputNum({ classN='', desc=null, name, id, min=0, max=99 }) {
  const [value, setValue] = useState(0)
  const handleMinMax = (e) => {
    let val = e.target.value !== '' ? parseInt(e.target.value) : 0
    if (val < min) {
      val = min
    } else if (val > max) {
      val = max
    }

    setValue(val)
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
        onChange={(e) => handleMinMax(e)}
      />
    </>
  )
}
