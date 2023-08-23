import { getInteriors, setCurrentOrderInterior } from '../database.js'

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            setCurrentOrderInterior(parseInt(chosenOption));
        }
    }
)
const interiors = await getInteriors();

export const Interior = () => {


    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior material</option>'

    const arrayOfOptions = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.material}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}