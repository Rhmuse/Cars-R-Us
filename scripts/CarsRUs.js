import { Builder } from './Builder.js'
import { Orders } from './Orders.js'

export const CarsRUs = async () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <section class="container builder">
        ${Builder()}
    </section>
    <section class="container orders">
        ${await Orders()}
    </section>`
}