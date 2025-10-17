import { registerButtonEvent } from './eventModule.js';
import { accelerate, brake } from './compositionModule.js';
import { VehicleModule } from './patternModule.js';
import { createVehicle } from './factoryModule.js';
import { EventEmitter } from './observerModule.js';

const display = document.getElementById('display');
const vehicle = createVehicle('car');
const eventBus = new EventEmitter();

eventBus.on('speedChange', (speed) => {
    display.textContent = `Current Speed: ${speed} km/h`;
});

registerButtonEvent('startEngine', () => {
    VehicleModule.start();
    display.textContent = `${vehicle.type} engine started.`;
});

registerButtonEvent('accelerate', () => {
    if (VehicleModule.isRunning()) {
        let newSpeed = accelerate(VehicleModule.getSpeed(), 10);
        if (newSpeed > vehicle.maxSpeed) newSpeed = vehicle.maxSpeed;
        VehicleModule.setSpeed(newSpeed);
        eventBus.emit('speedChange', newSpeed);
    }
    else {
        alert("Start the engine first!");
    }
});

registerButtonEvent('brake', () => {
    let newSpeed = brake(VehicleModule.getSpeed(), 10);
    VehicleModule.setSpeed(newSpeed);
    eventBus.emit('speedChange', newSpeed);
});

registerButtonEvent('stopEngine', () => {
    VehicleModule.stop();
    display.textContent = "Engine stopped.";
});