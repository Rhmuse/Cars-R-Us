import { getOrders, completeOrder } from './database.js'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        completeOrder(id);
    }
});

export const Orders = async () => {
    const orders = await getOrders()

    let html = "<h2>Custom Car Orders</h2>\n";

    let ordersList = orders.map(order => {
        return `<div id="order--${order.id}" class="order">${order.paintColor.color} ${order.model.name} with ${order.wheels.style} wheels, ${order.interior.material} interior, and the ${order.technology.package.split("(")[0]} for a total cost of ${formatter.format(order.totalCost)}<input type="button" name="complete" id="${order.id}" value="Complete"></div>\n`
    })

    html += ordersList.join("");

    return html;
}