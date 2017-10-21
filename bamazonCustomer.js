var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  readProducts();
});


function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(error, response) {
    if (error) throw error;

    var strOut = "";

    for (var i = 0; i < response.length; i++) {
    	strOut = "";
    	strOut += "Item ID: " + response[i].item_id + "  //  ";
    	strOut += "Product Name: " + response[i].product_name + "  //  ";
    	strOut += "Department: " + response[i].department_name + "  //  ";
    	strOut += "Price: " + response[i].price + "  //  ";
    	strOut += "In Stock: " + response[i].stock_quantity + "  //  ";

    	console.log(strOut);
    }

inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item you wish to purchase?"
      },
      {
        name: "itemUnits",
        type: "input",
        message: "How many items do you want purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
	.then(function(answer) {

		var chosenItem = answer.item -1;
		var chosenProduct = response[chosenItem];
		var howMany = answer.itemUnits
		console.log(chosenItem)
		console.log(howMany)

		if (howMany <= response[chosenItem].stock_quantity){
			console.log("yes");
			connection.query(
				"UPDATE products SET ? WHERE ?",
				[{
					stock_quantity: response[chosenItem].stock_quantity - howMany
				},
				{
					item_id: response[chosenItem].item_id
				}],
				)
		}
		console.log(response[chosenItem].item_id)
		   connection.end();
		
  		});
	 });
}
		





