// PARSING

// Parse first letter of each word to upper case
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

// Parse production time to d:hh:mm:ss
const toDDHHMMSS = hr => {
  const SEC_NUM = hr * 3600
  let days = Math.floor(SEC_NUM / 86400)
  let hours = Math.floor((SEC_NUM - days * 86400) / 3600)
  let minutes = Math.floor((SEC_NUM - days * 86400 - hours * 3600) / 60)
  let seconds = Math.floor(SEC_NUM - days * 86400 - hours * 3600 - minutes * 60)

  if (days > Math.pow(10, 6)) {
    return '+999999d'
  }

  if (days === 0) {
    days = ''
  } else {
    days += 'd:'
  }

  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return days + hours + ':' + minutes + ':' + seconds
}

// Parse units to millions (10^6 = 1M) and millards (10^9 = 1Mrd)
const toMrdM = cost => {
  if (cost >= Math.pow(10, 15)) {
    return '+999999Mrd'
  }

  if (cost >= Math.pow(10, 9)) {
    const MRD = cost / 1000000000
    return MRD.toFixed(3) + 'Mrd'
  }

  if (cost >= Math.pow(10, 6)) {
    const M = cost / 1000000
    return M.toFixed(3) + 'M'
  }

  return cost
}

// FUNCTIONS
// Handle min time
const minTime = (time) => {
  const HR_SEC = 1 / 3600
  if (time < HR_SEC) {
    time = HR_SEC
  }

  return time
}

// Production time of all buildings
const buildProductionTime = (metalCost, crystalCost) => {
  const UNI_SPEED = parseInt(document.querySelector('.config-parameter #universe-speed').value)
  const RF_LEVEL = parseInt(document.querySelector('.config-parameter #robotics-factory').value)
  const NR_LEVEL = parseInt(document.querySelector('.config-parameter #nanite-reactor').value)
  const TIME = (metalCost + crystalCost) / (2500 * (1 + RF_LEVEL) * UNI_SPEED * 2 ** NR_LEVEL)

  return minTime(TIME)
}

// Production time of all researchs
const researchProductionTime = (metalCost, crystalCost) => {
  const UNI_SPEED = parseInt(document.querySelector('.config-parameter #universe-speed').value)
  const RL_LEVEL = parseInt(document.querySelector('.config-parameter #research-lab').value)
  const TIME = (metalCost + crystalCost) / (1000 * (1 + RL_LEVEL * UNI_SPEED))

  return minTime(TIME)
}

// Production time of all ships
const shipDefProductionTime = (strucIntegrity, amount) => {
  const UNI_SPEED = parseInt(document.querySelector('.config-parameter #universe-speed').value)
  const SY_LEVEL = parseInt(document.querySelector('.config-parameter #shipyard').value)
  const NR_LEVEL = parseInt(document.querySelector('.config-parameter #nanite-reactor').value)
  const TIME = strucIntegrity / (2500 * (1 + SY_LEVEL) * UNI_SPEED * 2 ** NR_LEVEL)

  return minTime(TIME) * amount
}

// Costs of economy builds (Mines, Solar Plant and Fusion Reactor)
const ecoBuildCosts = (baseMetal, baseCrystal, baseDeuterium, baseEnergy, multiplier, level) => {
  const METAL_COST = Math.floor(baseMetal * multiplier ** (level - 1))
  const CRYSTAL_COST = Math.floor(baseCrystal * multiplier ** (level - 1))
  const DEUTERIUM_COST = Math.floor(baseDeuterium * multiplier ** (level - 1))
  const ENERGY_COST = Math.floor(baseEnergy * multiplier ** (level - 1))
  const POINTS = ((METAL_COST + CRYSTAL_COST + DEUTERIUM_COST) / 1000).toFixed(2)
  return [METAL_COST, CRYSTAL_COST, DEUTERIUM_COST, ENERGY_COST, POINTS]
}

// Costs for the rest of buildings and all researchs
const buildResCosts = (baseMetal, baseCrystal, baseDeuterium, baseEnergy, level) => {
  const METAL_COST = baseMetal * 2 ** (level - 1)
  const CRYSTAL_COST = baseCrystal * 2 ** (level - 1)
  const DEUTERIUM_COST = baseDeuterium * 2 ** (level - 1)
  const ENERGY_COST = baseEnergy * 2 ** (level - 1)
  const POINTS = ((METAL_COST + CRYSTAL_COST + DEUTERIUM_COST) / 1000).toFixed(2)
  return [METAL_COST, CRYSTAL_COST, DEUTERIUM_COST, ENERGY_COST, POINTS]
}

// Costs for ships and defenses
const shipDefCosts = (baseMetal, baseCrystal, baseDeuterium, baseEnergy, amount) => {
  const METAL_COST = baseMetal * amount
  const CRYSTAL_COST = baseCrystal * amount
  const DEUTERIUM_COST = baseDeuterium * amount
  const ENERGY_COST = baseEnergy * amount
  const POINTS = ((METAL_COST + CRYSTAL_COST + DEUTERIUM_COST) / 1000).toFixed(2)
  return [METAL_COST, CRYSTAL_COST, DEUTERIUM_COST, ENERGY_COST, POINTS]
}

// Set costs for any stuff
export const setCosts = (maps, stuff, numInput) => {
  let calcCosts = ['', '', '', '', '']
  let producTime = 0
  if (numInput === 0) {
    document.querySelector('#' + stuff + ' td:nth-child(' + 3 + ')').innerHTML = ''
    for (let col = 0; col < calcCosts.length; col++) {
      document.querySelector('#' + stuff + ' td:nth-child(' + (col + 4) + ')').innerHTML = ''
    }
    return [0, 0, 0, 0, 0, 0]
  }

  const checkStuff = (stuff) => {
    for (let i = 0; i < maps.length; i++) {
    if (maps[i].find(e => e.id === stuff) !== undefined) {
        return maps[i]
      }
    }
  }

  const mapAct = checkStuff(stuff)
  const rowAct = mapAct.find(e => e.id === stuff)
  const costs = rowAct.costs

  switch (mapAct) {
    case maps[0]:
      if (mapAct.slice(0,5).find(e => e.id === stuff)) {
        calcCosts = Object.values(ecoBuildCosts(costs[0], costs[1], costs[2], costs[3], costs[4], numInput))
      } else {
        calcCosts = Object.values(buildResCosts(costs[0], costs[1], costs[2], costs[3], numInput))
      }
      producTime = buildProductionTime(calcCosts[0], calcCosts[1])
      break;
  
    case maps[1]:
      calcCosts = Object.values(buildResCosts(costs[0], costs[1], costs[2], costs[3], numInput))
      producTime = researchProductionTime(calcCosts[0], calcCosts[1])
      break;
    
    case maps[2]:
      calcCosts = Object.values(shipDefCosts(costs[0], costs[1], costs[2], costs[3], numInput))
      producTime = shipDefProductionTime(costs[4], numInput)
      break;
    
    case maps[3]:
      calcCosts = Object.values(shipDefCosts(costs[0], costs[1], costs[2], 0, numInput))
      producTime = shipDefProductionTime(costs[3], numInput)
      break;
    
    default:
      break;
  }

  const FINAL_COSTS = [producTime, calcCosts[0], calcCosts[1], calcCosts[2], calcCosts[3], calcCosts[4]]
  updateRow(stuff, FINAL_COSTS)

  return FINAL_COSTS
}

// Set costs acumulative
export const setCostsAcumulative = (maps, stuff, from, to) => {
  const FINAL_COSTS = [0, 0, 0, 0, 0, 0]

  if (from === to || from > to) {
    updateRow(stuff, FINAL_COSTS)
    return FINAL_COSTS
  }

  for (let i = from + 1; i <= to; i++) {
    const ACTUAL_COST = setCosts(maps, stuff, i)
    ACTUAL_COST[ACTUAL_COST.length - 1] = parseFloat(ACTUAL_COST[ACTUAL_COST.length - 1])
    for (let j = 0; j < FINAL_COSTS.length; j++) {
      FINAL_COSTS[j] += ACTUAL_COST[j]
    }
  }

  FINAL_COSTS[FINAL_COSTS.length - 1] = FINAL_COSTS[FINAL_COSTS.length - 1].toFixed(2)
  updateRow(stuff, FINAL_COSTS)
  return FINAL_COSTS
}

// Handle mins and maxs for each input
export const handleMinMax = (e, min, max, set) => {
  let val = e.target.value !== '' ? parseInt(e.target.value) : 0
  if (val < min) {
    val = min
  } else if (val > max) {
    val = max
  }

  set(val)
}

// Select normal or acumulative method
export const changeMethod = () => {
  const METHOD = document.querySelector('#calc-method').value
  const TO_INPUTS = document.querySelectorAll('.to')
  if (METHOD === 'normal') {
    TO_INPUTS.forEach((inp) => {
      if (!inp.classList.contains('hidden')) {
        inp.classList.add('hidden')
      }
    })
    return false
  } else if (METHOD === 'acumulative') {
    TO_INPUTS.forEach((inp) => {
      if (inp.classList.contains('hidden')) {
        inp.classList.remove('hidden')
      }
    })
    return true
  }
}

// Updates input row
export const updateRow = (stuff, costs) => {
  document.querySelector('#' + stuff + ' td:nth-child(' + 3 + ')').innerHTML = toDDHHMMSS(costs[0])

  for (let col = 1; col < costs.length; col++) {
    document.querySelector('#' + stuff + ' td:nth-child(' + (col + 3) + ')').innerHTML = toMrdM(costs[col])
  }
}

// Updates costs of a table giving a id
export const updateTableTotal = (id, maps) => {
  let durationTotal = 0
  let metalTotal = 0
  let crystalTotal = 0
  let deuteriumTotal = 0
  let energyTotal = 0
  let pointsTotal = 0

  document.querySelectorAll('#' + id + '-table tr[id]:not(:last-child)').forEach((row) => {
    const ACUMULATIVE = changeMethod()
    const STUFF = row.id
    const FROM = row.querySelector('td:nth-child(2) input').value - 0 // ? Es mejor parseInt o -0?
    let TO = 0
    let TOTAL = [0, 0, 0, 0, 0, 0]
    if ((id === 'building' || id === 'research') && ACUMULATIVE) {
      TO = row.querySelector('td:nth-child(2) input.to').value - 0
      TOTAL = setCostsAcumulative(maps, STUFF, FROM, TO)
    } else {
      TOTAL = setCosts(maps, STUFF, FROM)
    }

    durationTotal = durationTotal === 0 ? TOTAL[0] : (durationTotal += TOTAL[0])
    metalTotal = metalTotal === 0 ? TOTAL[1] : (metalTotal += TOTAL[1])
    crystalTotal = crystalTotal === 0 ? TOTAL[2] : (crystalTotal += TOTAL[2])
    deuteriumTotal = deuteriumTotal === 0 ? TOTAL[3] : (deuteriumTotal += TOTAL[3])
    energyTotal = energyTotal === 0 ? TOTAL[4] : (energyTotal += TOTAL[4])
    pointsTotal = pointsTotal === 0 ? parseFloat(TOTAL[5]) : (pointsTotal += parseFloat(TOTAL[5]))
  })

  document.querySelector('#' + id + '-total td:nth-child(2)').innerHTML = toDDHHMMSS(durationTotal)
  document.querySelector('#' + id + '-total td:nth-child(3)').innerHTML = toMrdM(metalTotal)
  document.querySelector('#' + id + '-total td:nth-child(4)').innerHTML = toMrdM(crystalTotal)
  document.querySelector('#' + id + '-total td:nth-child(5)').innerHTML = toMrdM(deuteriumTotal)
  document.querySelector('#' + id + '-total td:nth-child(6)').innerHTML = toMrdM(energyTotal)
  document.querySelector('#' + id + '-total td:nth-child(7)').innerHTML = toMrdM(pointsTotal.toFixed(2))

  return [durationTotal, metalTotal, crystalTotal, deuteriumTotal, energyTotal, pointsTotal]
}

// Set costs everytime any input/select changes
export const updateAllTotal = (ids, maps) => {
  let durationTotal = 0
  let metalTotal = 0
  let crystalTotal = 0
  let deuteriumTotal = 0
  let energyTotal = 0
  let pointsTotal = 0

  ids.forEach((id) => {
    const TOTALS = updateTableTotal(id, maps)
    durationTotal += TOTALS[0]
    metalTotal += TOTALS[1]
    crystalTotal += TOTALS[2]
    deuteriumTotal += TOTALS[3]
    energyTotal += TOTALS[4]
    pointsTotal += TOTALS[5]
  })

  document.querySelector('#all-total td:nth-child(2)').innerHTML = toDDHHMMSS(durationTotal)
  document.querySelector('#all-total td:nth-child(3)').innerHTML = toMrdM(metalTotal)
  document.querySelector('#all-total td:nth-child(4)').innerHTML = toMrdM(crystalTotal)
  document.querySelector('#all-total td:nth-child(5)').innerHTML = toMrdM(deuteriumTotal)
  document.querySelector('#all-total td:nth-child(6)').innerHTML = toMrdM(energyTotal)
  document.querySelector('#all-total td:nth-child(7)').innerHTML = toMrdM(pointsTotal.toFixed(2))
}