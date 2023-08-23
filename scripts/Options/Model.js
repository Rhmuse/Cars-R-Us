import { getModels, setCurrentOrderModel } from '../database.js'

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id.startsWith("model")) {
            setCurrentOrderModel(parseInt(e.target.value));
        }
    }
)

const models = await getModels();

export const Model = () => {

    let html = "";

    for (const model of models) {
        html += `<input type="radio" id="model--${model.id}" name="model_radio" value="${model.id}">\n<label>${model.name}</label>\n`
    }

    return html;
}