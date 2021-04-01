const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return fare => fare * integer;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverArray,func) => {
    return func(driverArray);
}