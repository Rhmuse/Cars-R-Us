import { Builder } from './Builder.js'
import { Orders } from './Orders.js'

export const CarsRUs = () => {
    return `
    <section class="container builder">
        <h1> Cars 'R Us: Personal Car Builder</h1>
        ${Builder()}
    </section>
    <section class="container orders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </section>`
}