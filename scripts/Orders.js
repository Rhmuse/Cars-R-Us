import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from './database.js'


export const Orders = () => {
    const orders = getOrders();
    const paints = getPaints();
    const interiors = getInteriors();
    const technologies = getTechnologies();
    const wheels = getWheels();

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
        const foundWheels = wheels.find(
            (wheelChoice) => {
                return wheelChoice.id === order.wheelsId;
            }
        )

        let totalCost = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheels.price;

        return `<div id="order--${order.id}" class="order">${foundPaint.color} car with ${foundWheels.style}, ${foundInterior.material}, and the ${foundTechnology.package} for a total cost of ${totalCost}.</div>\n`
    })

    html += ordersList.join("");

    return html;
}