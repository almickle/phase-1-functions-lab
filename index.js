function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end)*264)
}

function calculatesFarePrice(start, end) {
    if (Math.abs((start - end)*264) <= 400){
        return 0
    } else if (Math.abs((start - end)*264) <= 2000) {
        return (Math.abs((start - end)*264) - 400) * 0.02
    } else if (Math.abs((start - end)*264) <= 2500) {
        return 25
    } else if (Math.abs((start - end)*264) > 2500) {
        return "cannot travel that far"
    }
}