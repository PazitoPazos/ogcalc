// GENERAL
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

// CONSTANTS
// IDs
const IDS = ['building', 'research', 'fleet', 'defense']

// Buildings
// Economy buildings
const ECO_BUILDS = ['metal-mine', 'crystal-mine', 'deuterium-synthesizer', 'solar-plant', 'fusion-reactor']

// All buildings (Resources and facilities)
const BUILDINGS_MAP = new Map([
  ['metal-mine', [60, 15, 0, 0, 1.5]],
  ['crystal-mine', [48, 24, 0, 0, 1.6]],
  ['deuterium-synthesizer', [225, 75, 0, 0, 1.5]],
  ['solar-plant', [75, 30, 0, 0, 1.5]],
  ['fusion-reactor', [900, 360, 180, 0, 1.8]],
  ['robotics-factory', [400, 120, 200, 0]],
  ['nanite-reactor', [1000000, 500000, 100000, 0]],
  ['shipyard', [400, 200, 100, 0]],
  ['metal-storage', [1000, 0, 0, 0]],
  ['crystal-storage', [1000, 500, 0, 0]],
  ['deuterium-tank', [1000, 1000, 0, 0]],
  ['research-lab', [200, 400, 200, 0]],
  ['terraformer', [0, 50000, 100000, 1000]],
  ['alliance-depot', [20000, 40000, 0, 0]],
  ['missile-silo', [20000, 20000, 1000, 0]],
  ['lunar-base', [20000, 40000, 20000, 0]],
  ['sensor-phalanx', [20000, 40000, 20000, 0]],
  ['jump-gate', [2000000, 4000000, 2000000, 0]]
])

// Research
const RESEARCHS_MAP = new Map([
  ['espionage-technology', [200, 1000, 200, 0]],
  ['computer-technology', [0, 400, 600, 0]],
  ['weapons-technology', [800, 200, 0, 0]],
  ['shielding-technology', [200, 600, 0, 0]],
  ['armour-technology', [1000, 0, 0, 0]],
  ['energy-technology', [0, 800, 400, 0]],
  ['combustion-drive', [400, 0, 600, 0]],
  ['impulse-drive', [2000, 4000, 600, 0]],
  ['hyperspace-drive', [10000, 20000, 6000, 0]],
  ['hyperspace-technology', [0, 4000, 2000, 0]],
  ['laser-technology', [200, 1000, 0, 0]],
  ['ion-technology', [1000, 300, 100, 0]],
  ['plasma-technology', [2000, 4000, 1000, 0]],
  ['intergalactic-research-network', [240000, 400000, 160000, 0]],
  ['astrophysics', [4000, 8000, 4000, 0]],
  ['graviton-technology', [0, 0, 0, 300000]]
])

// Ships
const SHIPS_MAP = new Map([
  ['small-cargo-ship', [2000, 2000, 0, 0, 4000]],
  ['large-cargo-ship', [6000, 6000, 0, 0, 12000]],
  ['light-fighter', [3000, 1000, 0, 0, 4000]],
  ['heavy-fighter', [6000, 4000, 0, 0, 10000]],
  ['cruiser', [20000, 7000, 2000, 0, 27000]],
  ['battleship', [45000, 15000, 400, 0, 60000]],
  ['battlecruiser', [30000, 40000, 15000, 0, 70000]],
  ['bomber', [50000, 25000, 15000, 0, 75000]],
  ['destroyer', [60000, 50000, 15000, 0, 110000]],
  ['deathstar', [5000000, 4000000, 1000000, 0, 9000000]],
  ['reaper', [85000, 55000, 20000, 0, 140000]],
  ['pathfinder', [8000, 15000, 8000, 0, 23000]],
  ['recycler', [10000, 6000, 2000, 0, 16000]],
  ['espionage-probe', [0, 1000, 0, 0, 1000]],
  ['solar-satellite', [0, 2000, 500, 0, 2000]],
  ['colony-ship', [10000, 20000, 10000, 0, 30000]],
  ['crawler', [2000, 2000, 1000, 100, 4000]]
])

// Defense
const DEFENSES_MAP = new Map([
  ['rocket-launcher', [2000, 0, 0, 2000]],
  ['light-laser', [1500, 500, 0, 2000]],
  ['heavy-laser', [6000, 2000, 0, 8000]],
  ['ion-cannon', [5000, 3000, 0, 8000]],
  ['gauss-cannon', [20000, 15000, 2000, 35000]],
  ['plasma-turret', [50000, 50000, 30000, 100000]],
  ['small-shield-dome', [10000, 1000, 0, 20000]],
  ['large-shield-dome', [50000, 50000, 0, 100000]],
  ['anti-ballistic-missile', [8000, 0, 2000, 8000]],
  ['interplanetary-missile', [12000, 2500, 10000, 15000]]
])

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
  const RF_LEVEL = parseInt(document.querySelector('.config-parameter #robotics-factory').value) // ? Gets robotics factory as a text??
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
const setCosts = (stuff, numInput) => {
  let costs
  let calcCosts = ['', '', '', '', '']
  let producTime = 0
  if (numInput === 0) {
    document.querySelector('#' + stuff + ' td:nth-child(' + 3 + ')').innerHTML = ''
    for (let col = 0; col < calcCosts.length; col++) {
      document.querySelector('#' + stuff + ' td:nth-child(' + (col + 4) + ')').innerHTML = ''
    }
    return [0, 0, 0, 0, 0, 0]
  }

  if (BUILDINGS_MAP.has(stuff)) {
    costs = BUILDINGS_MAP.get(stuff)

    if (ECO_BUILDS.includes(stuff)) {
      calcCosts = Object.values(ecoBuildCosts(costs[0], costs[1], costs[2], costs[3], costs[4], numInput))
    } else {
      calcCosts = Object.values(buildResCosts(costs[0], costs[1], costs[2], costs[3], numInput))
    }
    producTime = buildProductionTime(calcCosts[0], calcCosts[1])
  } else if (RESEARCHS_MAP.has(stuff)) {
    costs = RESEARCHS_MAP.get(stuff)
    calcCosts = Object.values(buildResCosts(costs[0], costs[1], costs[2], costs[3], numInput))
    producTime = researchProductionTime(calcCosts[0], calcCosts[1])
  } else if (SHIPS_MAP.has(stuff)) {
    costs = SHIPS_MAP.get(stuff)
    calcCosts = Object.values(shipDefCosts(costs[0], costs[1], costs[2], costs[3], numInput))
    producTime = shipDefProductionTime(costs[4], numInput)
  } else if (DEFENSES_MAP.has(stuff)) {
    costs = DEFENSES_MAP.get(stuff)
    calcCosts = Object.values(shipDefCosts(costs[0], costs[1], costs[2], 0, numInput))
    producTime = shipDefProductionTime(costs[3], numInput)
  }

  document.querySelector('#' + stuff + ' td:nth-child(' + 3 + ')').innerHTML = toDDHHMMSS(producTime)

  for (let col = 0; col < calcCosts.length; col++) {
    document.querySelector('#' + stuff + ' td:nth-child(' + (col + 4) + ')').innerHTML = toMrdM(calcCosts[col])
  }

  return [calcCosts[0], calcCosts[1], calcCosts[2], calcCosts[3], calcCosts[4], producTime]
}

// Handle mins and maxs for each input
const handleMinMax = () => {
  document.querySelectorAll('input[type=number]').forEach((inp) => {
    let lvl = inp.value !== '' ? parseInt(inp.value) : 0
    const MIN = +inp.getAttribute('min')
    const MAX = +inp.getAttribute('max')

    if (lvl < MIN) {
      lvl = MIN
    } else if (lvl > MAX) {
      lvl = MAX
    }

    inp.value = lvl
  })
}

// Updates costs of a table giving a id
const updateTable = id => {
  let durationTotal = 0
  let metalTotal = 0
  let crystalTotal = 0
  let deuteriumTotal = 0
  let energyTotal = 0
  let pointsTotal = 0

  document.querySelectorAll('#' + id + '-table tr[id]:not(:last-child)').forEach((row) => {
    const STUFF = row.id
    const LVL = row.querySelector('td:nth-child(2) > input').value - 0 // ? Es mejor parseInt o -0?
    const TOTAL = setCosts(STUFF, LVL)

    durationTotal = durationTotal === 0 ? TOTAL[5] : (durationTotal += TOTAL[5])
    metalTotal = metalTotal === 0 ? TOTAL[0] : (metalTotal += TOTAL[0])
    crystalTotal = crystalTotal === 0 ? TOTAL[1] : (crystalTotal += TOTAL[1])
    deuteriumTotal = deuteriumTotal === 0 ? TOTAL[2] : (deuteriumTotal += TOTAL[2])
    energyTotal = energyTotal === 0 ? TOTAL[3] : (energyTotal += TOTAL[3])
    pointsTotal = pointsTotal === 0 ? parseFloat(TOTAL[4]) : (pointsTotal += parseFloat(TOTAL[4]))
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
const updateAllTotal = () => {
  let durationTotal = 0
  let metalTotal = 0
  let crystalTotal = 0
  let deuteriumTotal = 0
  let energyTotal = 0
  let pointsTotal = 0

  IDS.forEach((id) => {
    const TOTALS = updateTable(id)
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

document.addEventListener('DOMContentLoaded', () => {
  // Tab/table selector
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      let element
      if (e.target.tagName.toLowerCase() === 'p') {
        element = e.target.parentNode
      } else {
        element = e.target
      }

      if (!element.classList.contains('tab-active')) {
        const PREV_TAB = document.querySelector('.tab-active')
        let commonName = PREV_TAB.id.match(/[a-z]*-/)[0].slice(0, -1)
        document.getElementById(commonName + '-table').classList.add('hidden')
        PREV_TAB.classList.remove('tab-active')
        commonName = element.id.match(/[a-z]*-/)[0].slice(0, -1)
        document.getElementById(commonName + '-table').classList.remove('hidden')
        element.classList.add('tab-active')
      }
    })
  })

  // Clear data
  document.getElementById('clear-data').addEventListener('click', () => {
    document.querySelectorAll('input[type=number]').forEach((inp) => {
      inp.value = 0
    })

    updateAllTotal()
    document.getElementById('universe-speed').value = 1
  })

  // Set costs for each row
  document.querySelectorAll('input[type=number], select').forEach((elem) => {
    elem.addEventListener('input', () => {
      handleMinMax() // Handle mins and maxs for each input
      updateAllTotal() // Set costs everytime any input/select changes
    })
  })
})
