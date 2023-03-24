import './Header.css'
import InputNum from './InputNum'
import { ids, allMaps } from '../data/data'
import { changeMethod, updateAllTotal } from '../data/utils'

export function Title() {
  return (
    <div className='title'>
      <h1>OGCalc</h1>
    </div>
  )
}

export function Select({ desc, name, id, options, values, onChange = null }) {
  const opts = values.map((val, index) => {
    return (
      <option key={val} value={val}>
        {options[index]}
      </option>
    )
  })

  return (
    <>
      <label htmlFor={name}>{desc}</label>
      <select
        name={name}
        id={id}
        onChange={onChange !== null ? onChange : null}
      >
        {opts}
      </select>
    </>
  )
}

export function ButtonReset() {
  const clearData = () => {
    document.querySelectorAll('input[type=number]').forEach((inp) => {
      inp.value = 0
    })

    document.getElementById('universe-speed').value = 1
    document.getElementById('calc-method').value = 'normal'
    changeMethod()

    updateAllTotal(ids, allMaps)
  }

  return (
    <button type='reset' id='clear-data' onClick={clearData}>
      Clear Data
    </button>
  )
}

export function Config() {
  const update = () => {
    updateAllTotal(ids, allMaps)
  }

  return (
    <div className='config'>
      <div className='row-one'>
        <div className='config-parameter'>
          <Select
            desc='Calculation Method:'
            name='calc-method'
            id='calc-method'
            options={['Normal', 'Acumulative']}
            values={['normal', 'acumulative']}
            onChange={update}
          />
        </div>
        <div className='config-parameter'>
          <Select
            desc='Universe Speed:'
            name='universe-speed'
            id='universe-speed'
            options={[
              'x1',
              'x2',
              'x3',
              'x4',
              'x5',
              'x6',
              'x7',
              'x8',
              'x9',
              'x10',
            ]}
            values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={update}
          />
        </div>
        <div className='config-parameter'>
          <p>Points = (Metal + Crystal + Deuterium) / 1000</p>
        </div>
      </div>

      <div className='row-two'>
        <div className='config-parameter'>
          <InputNum
            desc='Robotics Factory:'
            name='level-input'
            id='robotics-factory'
          />
        </div>
        <div className='config-parameter'>
          <InputNum
            desc='Nanite Reactor:'
            name='level-input'
            id='nanite-reactor'
          />
        </div>
        <div className='config-parameter'>
          <InputNum desc='Shipyard:' name='level-input' id='shipyard' />
        </div>
        <div className='config-parameter'>
          <InputNum
            desc='Research Lab:'
            name='level-input'
            id='research-lab'
            max={999}
          />
        </div>
      </div>

      <div className='row-three'>
        <div className='config-parameter'>
          <ButtonReset />
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <>
      <div className='page-title'>
        <Title />
      </div>
      <div className='config-container'>
        <Config />
      </div>
    </>
  )
}
