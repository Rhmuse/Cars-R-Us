import { getInteriors, getModels, getOrders, getPaints, getTechnologies, getWheels } from './database.js'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export const Orders = () => {
    const orders = getOrders();
    const paints = getPaints();
    const interiors = getInteriors();
    const technologies = getTechnologies();
    const wheels = getWheels();
    const models = getModels();

    let html = "<h2>Custom Car Orders</h2>\n";

    let ordersList = orders.map(order => {
        const foundPaint = paints.find(
            (paint) => {
                return paint.id === order.paintId;
            }
        )
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId;
            }
        )
        const foundTechnology = technologies.find(
            (technology) => {
                return technology.id === order.technologyId;
            }
        )
        // order should only display name of package.
        let splitPackage = foundTechnology.package.split("(");

        const foundWheels = wheels.find(
            (wheelChoice) => {
                return wheelChoice.id === order.wheelsId;
            }
        )

        const foundModel = models.find(
            (model) => {
                return model.id === order.modelId;
            }
        )

        let totalCost = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheels.price;
        totalCost = totalCost * foundModel.modifier;

        return `<div id="order--${order.id}" class="order">${foundPaint.color} car with ${foundWheels.style}, ${foundInterior.material}, and the ${splitPackage[0]} for a total cost of ${formatter.format(totalCost)}</div>\n`
    })

    html += ordersList.join("");

    return html;
}