export function createVehicle(type) {
    if (type === 'car') {
        return { type: 'Car', maxSpeed: 180 };
    } 
    else if (type === 'motorcycle') {
        return { type: 'Motorcycle', maxSpeed: 120 };
    }
    return { type: 'Uknown', maxSpeed: 0 };
}