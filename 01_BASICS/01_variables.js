const accountId = 1;
let accountEmail = "amolsargar05@gmail.com";
var accountPassword = "12345";
accountCity = "Panvel";
let accountState;

//accountId = 1; --> not allowed to change const
console.log(accountId);


accountEmail = "amol.sargar@gmail.com"
accountPassword = "121212"
accountCity = "Navi Mumbai"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]) 