import './Spreadsheet.css'
import InputNum from './InputNum.jsx'
import {
  ids,
  colsName,
  buildingsMap,
  researchsMap,
  shipsMap,
  defensesMap,
} from '../data/data.js'
import * as utils from "../data/utils.js";


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
      <p>{utils.toUpperCaseFirstLetter(id, null)}</p>
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
          ? utils.toUpperCaseFirstLetter(id, null)
          : col === colsName[1]
          ? lvlAm
          : utils.toUpperCaseFirstLetter(col, null)}
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
      <td>{utils.toUpperCaseFirstLetter(stuff.id, '-')}</td>
      <td>
        <InputNum classN='from' name={lvlAm} max={max} />
        {(lvlAm === 'level-input') && <InputNum classN='to hidden' name={lvlAm} />}
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
    <table id='total-table'>
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
    </table>
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
        <TotalTable />
      </div>
    </div>
  )
}
