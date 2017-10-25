var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors');

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
	console.log("Selecting all products...\n".red);
	connection.query("SELECT * FROM products", function(error, response) {

  	 var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
            , colWidths: [10, 20, 20, 20, 20]
        });

    if (error) throw error;
    	for (var i = 0; i < response.length; i++) {
 			table.push ([response[i].item_id, response[i].product_name, 
    		response[i].department_name, response[i].price, 
    		response[i].stock_quantity]);

		}
	
	console.log(table.toString());
		 

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
				console.log("Okay, thank you for your purchase! Buy again!");
				connection.query(
					"UPDATE products SET ? WHERE ?",
				[{
					stock_quantity: response[chosenItem].stock_quantity - howMany
				},
				{
					item_id: response[chosenItem].item_id
				}],
				)
				readProducts();
			}
			else {
				console.log("Sorry, insufficient quantity!".rainbow)
				readProducts();
			}
			// console.log(response[chosenItem].item_id)
		   	connection.end();
		
  		});
	});
}
		





