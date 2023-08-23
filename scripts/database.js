let database = {
    paints: [
        {
            id: 1,
            color: "Silver",
            price: 100
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 120
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 110
        },
        {
            id: 4,
            color: "Spring Green",
            price: 105
        }
    ],
    interiors: [
        {
            id: 1,
            material: "Beige Fabric",
            price: 200
        },
        {
            id: 2,
            material: "Charcoal Fabric",
            price: 210
        },
        {
            id: 3,
            material: "White Leather",
            price: 250
        },
        {
            id: 4,
            material: "Black Leather",
            price: 230
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 300
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 350
        },
        {
            id: 3,
            package: "Visibility Package (includes side and rear cameras)",
            price: 400
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 500
        }
    ],
    wheels: [
        {
            id: 1,
            style: "17-inch Pair Radial",
            price: 150
        },
        {
            id: 2,
            style: "17-inch Pair Radial Black",
            price: 160
        },
        {
            id: 3,
            style: "18-inch Pair Spoke Silver",
            price: 180
        },
        {
            id: 4,
            style: "18-inch Pair Spoke Black",
            price: 190
        }
    ],
    models: [
        {
            id: 1,
            name: "Car",
            modifier: 1,
        },
        {
            id: 2,
            name: "SUV",
            modifier: 1.5,
        },
        {
            id: 3,
            name: "Truck",
            modifier: 2.25,
        },
    ],
    orders: [
        {
            id: 1,
            wheelsId: 3,
            technologyId: 2,
            interiorId: 4,
            paintId: 1,
            modelId: 1,
            timestamp: 1654273865
        },
        {
            id: 2,
            wheelsId: 2,
            technologyId: 3,
            interiorId: 1,
            paintId: 3,
            modelId: 3,
            timestamp: 1654321278
        },
        {
            id: 3,
            wheelsId: 4,
            technologyId: 4,
            interiorId: 3,
            paintId: 2,
            modelId: 2,
            timestamp: 1654387642
        },
        {
            id: 4,
            wheelsId: 1,
            technologyId: 1,
            interiorId: 2,
            paintId: 4,
            modelId: 2,
            timestamp: 1654452971
        },
        {
            id: 5,
            wheelsId: 3,
            technologyId: 2,
            interiorId: 1,
            paintId: 3,
            modelId: 3,
            timestamp: 1654506385
        }
    ],
    currentOrder: {}
}

export const getPaints = async () => {
    const res = await fetch("http://localhost:5150/paintcolors");
    const data = await res.json();
    return data;
}

export const getInteriors = async () => {
    const res = await fetch("http://localhost:5150/interiors");
    const data = await res.json();
    return data;
}

export const getTechnologies = async () => {
    const res = await fetch("http://localhost:5150/technologies");
    const data = await res.json();
    return data;
}

export const getWheels = async () => {
    const res = await fetch("http://localhost:5150/wheels");
    const data = await res.json();
    return data;
}

export const getModels = async () => {
    const res = await fetch("http://localhost:5150/models");
    const data = await res.json();
    return data;
}

export const getOrders = async () => {
    const res = await fetch("http://localhost:5150/orders");
    const data = await res.json();
    return data;
}

export const getCurrentOrder = () => {
    return database.currentOrder;
}

export const setCurrentOrderPaint = (id) => {
    database.currentOrder.paintColorId = id;
}
export const setCurrentOrderInterior = (id) => {
    database.currentOrder.interiorId = id;
}
export const setCurrentOrderTechnology = (id) => {
    database.currentOrder.technologyId = id;
}
export const setCurrentOrderWheels = (id) => {
    database.currentOrder.wheelsId = id;
}

export const setCurrentOrderModel = (id) => {
    database.currentOrder.modelId = id;
}

export const addCurrentOrder = async () => {
    const newOrder = { ...database.currentOrder };

    const orderOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
    }

    await fetch("http://localhost:5150/orders", orderOptions);

    database.currentOrder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const completeOrder = async (orderId) => {
    await fetch(`http://localhost:5150/orders/${orderId}/fulfill`, {
        method: "POST",
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
};