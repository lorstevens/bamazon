# bamazon


This is an interactive application using MySQL and Node.JS. 

This application allows shoppers to view the items for purchase, along with their department, price and stock quantity. 

![Alt text](./images/screenshot1.png?raw=true "Optional Title")

*Note the quantity for item ID 10 is 20*

The shopper is prompted to respond with the ID number of the item they wish to purchase, along with the quantity. 

Once the shopper inputs this information, the database will update with the new quantity. 

*As you can see below, item ID 10 now has a quantity of 10.* 

![Alt text](./images/screenshot2.png?raw=true "Optional Title")

If the shopper requests a quantity over the amount left in stock, then the database is not updated, but the shopper receives an insufficient quantity message and is prompted to shop again.

![Alt text](./images/screenshot3.png?raw=true "Optional Title")