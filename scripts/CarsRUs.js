import { Builder } from './Builder.js'
import { Orders } from './Orders.js'

export const CarsRUs = () => {
    return `
    <section>
        <h1> Cars 'R Us: Personal Car Builder</h1>
        ${Builder()}
    </section>
    <section>
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </section>`
}