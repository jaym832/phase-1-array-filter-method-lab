function findMatching(drivers,driverName){
    let newDriver=driverName.toLowerCase();
    return drivers.filter(function(driver){
    return newDriver===driver.toLowerCase()
  })  
  }

  function fuzzyMatch(drivers,driverLetter){
      let filteredName= drivers.filter(function(driver){
          return driver.startsWith(driverLetter);
      })
        return filteredName;
  }

  function matchName(drivers,driverName){
    return drivers.filter(function(driver){
        if(driverName===driver.name){
            return driver
        }

    })
}