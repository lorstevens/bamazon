# bamazon


This is an interactive application using MySQL and Node.JS. 

The application allows users to view the items available, along with their department, price and stock quantity. 

![Alt text](./images/screenshot1.png?raw=true "Optional Title")

*Note the quantity for item ID 10 is 20*

The user is prompted to respond with the ID number of the item they wish to purchase, along with the quantity. 

Once the user inputs this information, the database will update with the new quantity. 

*As you can see below, item ID 10 now has a quantity of 10.* 

![Alt text](./images/screenshot2.png?raw=true "Optional Title")

If the user requests a quantity over the amount left in stock, then the database is not updated, but the user receives an insufficient quantity message and is prompted to shop again.
