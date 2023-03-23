import './Header.css'
import InputNum from './InputNum.jsx'

export function Title() {
  return (
    <div className='title'>
      <h1>OGCalc</h1>
    </div>
  )
}

export function Select({ desc, name, id, options, values }) {
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
      <select name={name} id={id}>
        {opts}
      </select>
    </>
  )
}

export function Config() {
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
          <button type='reset' id='clear-data'>
            Clear Data
          </button>
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
