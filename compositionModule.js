export function accelerate(currentSpeed, increment) {
    return currentSpeed + increment;
}

export function brake(currentSpeed, decrement) {
    return Math.max(0, currentSpeed - decrement);
}