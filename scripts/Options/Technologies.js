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

const techs = await getTechnologies();

export const Technologies = () => {

    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'


    const arrayOfOptions = techs.map((tech) => {
        // select should only display name of package.
        let splitPackage = tech.package.split("(")

        return `<option value="${tech.id}">${splitPackage[0]}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}