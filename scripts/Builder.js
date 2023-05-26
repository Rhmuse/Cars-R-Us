import { Interior } from './Options/Interior.js'
import { Paint } from './Options/Paint.js'
import { Technologies } from './Options/Technologies.js'
import { Wheels } from './Options/Wheels.js'
import { addCurrentOrder } from './database.js'

document.addEventListener(
    "click",
    e => {
        if (e.target.id === "orderButton") addCurrentOrder();
    }
)

export const Builder = () => {
    return `<section class="container options">
        <div id="paintsSelector" class="container selector">${Paint()}</div>
        <div id="interiorSelector" class="container selector">${Interior()}</div>
        <div id="wheelsSelector" class="container selector">${Wheels()}</div>
        <div id="technologiesSelector" class="container selector">${Technologies()}</div>
    </section>
    <button id="orderButton">Place Car Order</button>
    `
}
