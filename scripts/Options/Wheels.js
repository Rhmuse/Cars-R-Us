import { getWheels, setCurrentOrderWheels } from '../database.js'

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setCurrentOrderWheels(parseInt(chosenOption));
        }
    }
)

const wheels = await getWheels();

export const Wheels = () => {

    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel style</option>'

    const arrayOfOptions = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.style}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}