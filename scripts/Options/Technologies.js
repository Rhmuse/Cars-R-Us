import { getTechnologies, setCurrentOrderTechnology } from '../database.js'

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            setCurrentOrderTechnology(parseInt(chosenOption));
        }
    }
)

export const Technologies = () => {
    const techs = getTechnologies();

    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map((tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}