import './Spreadsheet.css'
import InputNum from './InputNum.jsx'

export const ids = ['building', 'research', 'fleet', 'defense']
export const colsName = [
  'stuff',
  'level',
  'duration',
  'metal',
  'crystal',
  'deuterium',
  'energy',
  'points',
]
export const buildingsMap = [
  { id: 'metal-mine', costs: [60, 15, 0, 0, 1.5] },
  { id: 'crystal-mine', costs: [48, 24, 0, 0, 1.6] },
  { id: 'deuterium-synthesizer', costs: [225, 75, 0, 0, 1.5] },
  { id: 'solar-plant', costs: [75, 30, 0, 0, 1.5] },
  { id: 'fusion-reactor', costs: [900, 360, 180, 0, 1.8] },
  { id: 'robotics-factory', costs: [400, 120, 200, 0] },
  { id: 'nanite-reactor', costs: [1000000, 500000, 100000, 0] },
  { id: 'shipyard', costs: [400, 200, 100, 0] },
  { id: 'metal-storage', costs: [1000, 0, 0, 0] },
  { id: 'crystal-storage', costs: [1000, 500, 0, 0] },
  { id: 'deuterium-tank', costs: [1000, 1000, 0, 0] },
  { id: 'research-lab', costs: [200, 400, 200, 0] },
  { id: 'terraformer', costs: [0, 50000, 100000, 1000] },
  { id: 'alliance-depot', costs: [20000, 40000, 0, 0] },
  { id: 'missile-silo', costs: [20000, 20000, 1000, 0] },
  { id: 'lunar-base', costs: [20000, 40000, 20000, 0] },
  { id: 'sensor-phalanx', costs: [20000, 40000, 20000, 0] },
  { id: 'jump-gate', costs: [2000000, 4000000, 2000000, 0] },
]
export const researchsMap = [
  { id: 'espionage-technology', costs: [200, 1000, 200, 0] },
  { id: 'computer-technology', costs: [0, 400, 600, 0] },
  { id: 'weapons-technology', costs: [800, 200, 0, 0] },
  { id: 'shielding-technology', costs: [200, 600, 0, 0] },
  { id: 'armour-technology', costs: [1000, 0, 0, 0] },
  { id: 'energy-technology', costs: [0, 800, 400, 0] },
  { id: 'hyperspace-technology', costs: [0, 4000, 2000, 0] },
  { id: 'combustion-drive', costs: [400, 0, 600, 0] },
  { id: 'impulse-drive', costs: [2000, 4000, 600, 0] },
  { id: 'hyperspace-drive', costs: [10000, 20000, 6000, 0] },
  { id: 'laser-technology', costs: [200, 1000, 0, 0] },
  { id: 'ion-technology', costs: [1000, 300, 100, 0] },
  { id: 'plasma-technology', costs: [2000, 4000, 1000, 0] },
  { id: 'intergalactic-research-network', costs: [240000, 400000, 160000, 0] },
  { id: 'astrophysics', costs: [4000, 8000, 4000, 0] },
  { id: 'graviton-technology', costs: [0, 0, 0, 300000] },
]
export const shipsMap = [
  { id: 'small-cargo-ship', costs: [2000, 2000, 0, 0, 4000] },
  { id: 'large-cargo-ship', costs: [6000, 6000, 0, 0, 12000] },
  { id: 'light-fighter', costs: [3000, 1000, 0, 0, 4000] },
  { id: 'heavy-fighter', costs: [6000, 4000, 0, 0, 10000] },
  { id: 'cruiser', costs: [20000, 7000, 2000, 0, 27000] },
  { id: 'battleship', costs: [45000, 15000, 400, 0, 60000] },
  { id: 'battlecruiser', costs: [30000, 40000, 15000, 0, 70000] },
  { id: 'bomber', costs: [50000, 25000, 15000, 0, 75000] },
  { id: 'destroyer', costs: [60000, 50000, 15000, 0, 110000] },
  { id: 'deathstar', costs: [5000000, 4000000, 1000000, 0, 9000000] },
  { id: 'reaper', costs: [85000, 55000, 20000, 0, 140000] },
  { id: 'pathfinder', costs: [8000, 15000, 8000, 0, 23000] },
  { id: 'recycler', costs: [10000, 6000, 2000, 0, 16000] },
  { id: 'espionage-probe', costs: [0, 1000, 0, 0, 1000] },
  { id: 'solar-satellite', costs: [0, 2000, 500, 0, 2000] },
  { id: 'colony-ship', costs: [10000, 20000, 10000, 0, 30000] },
  { id: 'crawler', costs: [2000, 2000, 1000, 100, 4000] },
]
export const defensesMap = [
  { id: 'rocket-launcher', costs: [2000, 0, 0, 2000] },
  { id: 'light-laser', costs: [1500, 500, 0, 2000] },
  { id: 'heavy-laser', costs: [6000, 2000, 0, 8000] },
  { id: 'gauss-cannon', costs: [20000, 15000, 2000, 35000] },
  { id: 'ion-cannon', costs: [5000, 3000, 0, 8000] },
  { id: 'plasma-turret', costs: [50000, 50000, 30000, 100000] },
  { id: 'small-shield-dome', costs: [10000, 1000, 0, 20000] },
  { id: 'large-shield-dome', costs: [50000, 50000, 0, 100000] },
  { id: 'anti-ballistic-missiles', costs: [8000, 0, 2000, 8000] },
  { id: 'interplanetary-missiles', costs: [12000, 2500, 10000, 15000] },
]

export const toUpperCaseFirstLetter = (string, sep) => {
  const splitted = string.split(sep)
  if (sep === null || splitted.length === 1) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  let upString = ''
  for (let i = 0; i < splitted.length; i++) {
    upString += splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1) + ' '
  }

  return upString
}
export const selectMap = (id) => {
  if (id === ids[0]) {
    return buildingsMap
  }

  if (id === ids[1]) {
    return researchsMap
  }

  if (id === ids[2]) {
    return shipsMap
  }

  if (id === ids[3]) {
    return defensesMap
  }
}

export function Tabs({ onClick }) {
  const tabs = ids.map((id) => (
    <div
      key={id}
      className={'tab' + (ids[0] === id ? ' tab-active' : '')}
      id={id + '-tab'}
      onClick={onClick}
    >
      <p>{toUpperCaseFirstLetter(id, null)}</p>
    </div>
  ))

  return tabs
}

export function HeaderTable({ id }) {
  const columns = () => {
    let lvlAm = 'Level'
    if (id === ids[2] || id === ids[3]) {
      lvlAm = 'Amount'
    }

    const header = colsName.map((col) => (
      <th key={col} className={col + '-col'}>
        {col === colsName[0]
          ? toUpperCaseFirstLetter(id, null)
          : col === colsName[1]
          ? lvlAm
          : toUpperCaseFirstLetter(col, null)}
      </th>
    ))

    return header
  }

  const header = columns()

  return <tr>{header}</tr>
}

export function BodyTable({ id }) {
  const idMap = selectMap(id)
  let lvlAm = 'level-input'
  let max
  if (id === ids[2] || id === ids[3]) {
    lvlAm = 'amount-input'
    max = 9999
  }

  const cells = idMap.map((stuff) => (
    <tr key={stuff.id} id={stuff.id}>
      <td>{toUpperCaseFirstLetter(stuff.id, '-')}</td>
      <td>
        <InputNum classN='from' name={lvlAm} max={max} />
        <InputNum classN='to hidden' name={lvlAm} />
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  ))

  cells.push(
    <tr key='total' id={id + '-total'}>
      <td colSpan={2}>Total</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )

  return cells
}

export function Table({ idName, active = false }) {
  return (
    <table
      className={'table-spreadsheet' + (!active ? ' hidden' : '')}
      id={idName + '-table'}
    >
      <thead>
        <HeaderTable id={idName} />
      </thead>
      <tbody>
        <BodyTable id={idName} />
      </tbody>
    </table>
  )
}

export function TotalTable() {
  const total = (
    <>
      <thead>
        <tr>
          <th></th>
          <th className='duration-col'>Duration</th>
          <th className='metal-col'>Metal</th>
          <th className='crystal-col'>Crystal</th>
          <th className='deuterium-col'>Deuterium</th>
          <th className='energy-col'>Energy</th>
          <th className='points-col'>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr id='all-total'>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </>
  )

  return total
}

export default function Spreadsheet() {
  const handleActive = (e) => {
    let el = e.target
    if (el.tagName.toLowerCase() === 'p') {
      el = el.parentNode
    }

    if (el.classList.contains('tab-active')) {
      return
    }

    const prev = document.querySelector('.tab-active')
    const prevId = prev.id.slice(0, prev.id.indexOf('-'))
    let table = document.getElementById(prevId + '-table')
    prev.classList.remove('tab-active')
    table.classList.add('hidden')

    const elId = el.id.slice(0, el.id.indexOf('-'))
    table = document.getElementById(elId + '-table')
    el.classList.add('tab-active')
    table.classList.remove('hidden')
  }

  return (
    <div className='spreadsheet'>
      <div className='tabs-spreadsheet'>
        <Tabs onClick={handleActive} />
      </div>
      <div className='table-spreadsheet-wrap'>
        <Table idName={ids[0]} active={true} />
        <Table idName={ids[1]} />
        <Table idName={ids[2]} />
        <Table idName={ids[3]} />
      </div>
      <div className='table-total-wrap'>
        <table id='total-table'>
          <TotalTable />
        </table>
      </div>
    </div>
  )
}
