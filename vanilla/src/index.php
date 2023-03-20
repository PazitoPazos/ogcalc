<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <title>OGCalc</title>
</head>

<body>
  <div class="full-page">
    <div class="content-container">
      <div class="page-title">
        <div class="title">
          <h1>OGCalc</h1>
        </div>
      </div>
      <div class="calc-config-container">
        <div class="calc-config">
          <div class="row-one">
            <div class="config-parameter">
              <label for="calc-method">Calculation Method:</label>
              <select id="calc-method" name="calc-method">
                <option selected value="normal">Normal</option>
                <option value="acumulative">Acumulative</option>
              </select>
            </div>
            <div class="config-parameter">
              <label for="universe-speed">Universe speed:</label>
              <select name="universe-speed" id="universe-speed">
                <option selected value="1">x1</option>
                <option value="2">x2</option>
                <option value="3">x3</option>
                <option value="4">x4</option>
                <option value="5">x5</option>
                <option value="6">x6</option>
                <option value="7">x7</option>
                <option value="8">x8</option>
                <option value="9">x9</option>
                <option value="10">x10</option>
              </select>
            </div>
            <div class="config-parameter">
              <p>Points = (Metal + Crystal + Deuterium) / 1000</p>
            </div>
          </div>
          <div class="row-two">
            <div class="config-parameter">
              <label for="robotics-factory">Robotics Factory:</label>
              <input type="number" name="level-input" id="robotics-factory" value="0" min="0" max="99">
            </div>
            <div class="config-parameter">
              <label for="nanite-reactor">Nanite Reactor:</label>
              <input type="number" name="level-input" id="nanite-reactor" value="0" min="0" max="99">
            </div>
            <div class="config-parameter">
              <label for="shipyard">Shipyard:</label>
              <input type="number" name="level-input" id="shipyard" value="0" min="0" max="99">
            </div>
            <div class="config-parameter">
              <label for="research-lab">Research Lab:</label>
              <input type="number" name="level-input" id="research-lab" value="0" min="0" max="999">
            </div>
          </div>
          <div class="row-three">
            <div class="config-parameter">
              <button type="reset" id="clear-data">Clear Data</button>
            </div>
          </div>
        </div>
      </div>
      <div class="spreadsheet">
        <div class="tabs-spreadsheet">
          <div class="tab tab-active" id="building-tab">
            <p>Building</p>
          </div>
          <div class="tab" id="research-tab">
            <p>Research</p>
          </div>
          <div class="tab" id="fleet-tab">
            <p>Fleet</p>
          </div>
          <div class="tab" id="defense-tab">
            <p>Defense</p>
          </div>
        </div>
        <div class="table-spreadsheet-wrap">
          <table class="table-spreadsheet" id="building-table">
            <thead>
              <tr>
                <th class="buildings-col">Building</th>
                <th class="level-col">Level</th>
                <th class="duration-col">Duration</th>
                <th class="metal-col">Metal</th>
                <th class="crystal-col">Crystal</th>
                <th class="deuterium-col">Deuterium</th>
                <th class="energy-col">Energy</th>
                <th class="points-col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr id="metal-mine">
                <td>Metal Mine</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="crystal-mine">
                <td>Crystal Mine</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="deuterium-synthesizer">
                <td>Deuterium Synthesizer</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="solar-plant">
                <td>Solar Plant</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="fusion-reactor">
                <td>Fusion Reactor</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="robotics-factory">
                <td>Robotics Factory</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="nanite-reactor">
                <td>Nanite Reactor</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="shipyard">
                <td>Shipyard</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="metal-storage">
                <td>Metal Storage</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="crystal-storage">
                <td>Crystal Storage</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="deuterium-tank">
                <td>Deuterium Tank</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="research-lab">
                <td>Research Lab</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="terraformer">
                <td>Terraformer</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="alliance-depot">
                <td>Alliance Depot</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="missile-silo">
                <td>Missile Silo</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="lunar-base">
                <td>Lunar Base</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="sensor-phalanx">
                <td>Sensor Phalanx</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="jump-gate">
                <td>Jump Gate</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="building-total">
                <td colspan="2">Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table-spreadsheet hidden" id="research-table">
            <thead>
              <tr>
                <th class="buildings-col">Research</th>
                <th class="level-col">Level</th>
                <th class="duration-col">Duration</th>
                <th class="metal-col">Metal</th>
                <th class="crystal-col">Crystal</th>
                <th class="deuterium-col">Deuterium</th>
                <th class="energy-col">Energy</th>
                <th class="points-col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr id="espionage-technology">
                <td>Espionage Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="computer-technology">
                <td>Computer Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="weapons-technology">
                <td>Weapons Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="shielding-technology">
                <td>Shielding Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="armour-technology">
                <td>Armour Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="energy-technology">
                <td>Energy Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="hyperspace-technology">
                <td>Hyperspace Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="combustion-drive">
                <td>Combustion Drive</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="impulse-drive">
                <td>Impulse Drive</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="hyperspace-drive">
                <td>Hyperspace Drive</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="laser-technology">
                <td>Laser Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="ion-technology">
                <td>Ion Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="plasma-technology">
                <td>Plasma Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="intergalactic-research-network">
                <td>Intergalactic Research Network</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="astrophysics">
                <td>Astrophysics</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="graviton-technology">
                <td>Graviton Technology</td>
                <td>
                  <input type="number" name="level-input" value="0" min="0" max="99">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="research-total">
                <td colspan="2">Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table-spreadsheet hidden" id="fleet-table">
            <thead>
              <tr>
                <th class="buildings-col">Fleet</th>
                <th class="amount-col">Amount</th>
                <th class="duration-col">Duration</th>
                <th class="metal-col">Metal</th>
                <th class="crystal-col">Crystal</th>
                <th class="deuterium-col">Deuterium</th>
                <th class="energy-col">Energy</th>
                <th class="points-col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr id="small-cargo-ship">
                <td>Small Cargo</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="large-cargo-ship">
                <td>Large Cargo</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="light-fighter">
                <td>Light Fighter</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="heavy-fighter">
                <td>Heavy Fighter</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="cruiser">
                <td>Cruiser</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="battleship">
                <td>Battleship</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="colony-ship">
                <td>Colony Ship</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="recycler">
                <td>Recycler</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="espionage-probe">
                <td>Espionage Probe</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="bomber">
                <td>Bomber</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="solar-satellite">
                <td>Solar Satellite</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="destroyer">
                <td>Destroyer</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="deathstar">
                <td>Deathstar</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="battlecruiser">
                <td>Battlecruiser</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="fleet-total">
                <td colspan="2">Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table-spreadsheet hidden" id="defense-table">
            <thead>
              <tr>
                <th class="buildings-col">Defense</th>
                <th class="amount-col">Amount</th>
                <th class="duration-col">Duration</th>
                <th class="metal-col">Metal</th>
                <th class="crystal-col">Crystal</th>
                <th class="deuterium-col">Deuterium</th>
                <th class="energy-col">Energy</th>
                <th class="points-col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr id="rocket-launcher">
                <td>Rocket Launcher</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="light-laser">
                <td>Light Laser</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="heavy-laser">
                <td>Heavy Laser</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="gauss-cannon">
                <td>Gauss Cannon</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="ion-cannon">
                <td>Ion Cannon</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="plasma-turret">
                <td>Plasma Turret</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="small-shield-dome">
                <td>Small Shield Dome</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="large-shield-dome">
                <td>Large Shield Dome</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="anti-ballistic-missile">
                <td>Anti-Ballistic Missiles</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="interplanetary-missile">
                <td>Interplanetary Missiles</td>
                <td>
                  <input type="number" name="amount-input" value="0" min="0" max="99999">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="defense-total">
                <td colspan="2">Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-total-wrap">
          <table id="total-table">
            <thead>
              <tr>
                <th></th>
                <th class="duration-col">Duration</th>
                <th class="metal-col">Metal</th>
                <th class="crystal-col">Crystal</th>
                <th class="deuterium-col">Deuterium</th>
                <th class="energy-col">Energy</th>
                <th class="points-col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr id="all-total">
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
        </div>
      </div>
    </div>
  </div>

  <script src="calc.js"></script>
</body>

</html>