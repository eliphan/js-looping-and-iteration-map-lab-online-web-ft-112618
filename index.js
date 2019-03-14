// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const FirstName = driver.split(' ')[0];
    const LastName = driver.split(' ')[1];

    return { firstName: driverFirstName, lastName: driverLast };
  })
}