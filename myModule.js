function sayHello(){
  console.log("Computer : Hello human");
}

var greeting = function (){
                      console.log("           Welcome to my module");
                        }




module.exports = {
  printNameToConsole: function(name){
                      console.log("My name is " + name);
                      },
  sayHello          : sayHello,
  greeting          : greeting
};
