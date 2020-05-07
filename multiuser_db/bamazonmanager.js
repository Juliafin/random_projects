var inquirer = require('inquirer')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazonManager'
});


connection.connect(function(err) {
  if (err) {
    console.log('There has been an error: ', err)
    return
  }
  console.log('Connected to database')
})



function menu() {
  var menuOptions = {
    type: "list",
    name: "bamazonMenu",
    message: "Welcome to the bamazon manager menu! Please select your option below: ",
    default: "Exit",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
  }
  
  inquirer.prompt(menuOptions)
    .then((answer) => {
      switch(answer.bamazonMenu) {
        case "Exit": 
          console.log('Exiting the program');
          process.exit()
          break;
        case "View Products for Sale":
          console.log('Viewing products');
          displayProducts(display=true);
          break;
        case "View Low Inventory":
          console.log('Viewing the low inventory');
          break;
        case "Add to Inventory":
          console.log('Adding to inventory');
          break;
        case "Add New Product":
          console.log('Adding new product')
          addInventory()
          break;
      }
      
    })

}


function productOptions(products) {
  var menuOptions = [
    {
      type: "list",
      name: "productMenu",
      message: "Select Product you wish you purchase: ",
      default: "Back",
      choices: products
    }
  ]
  // console.log('menu options', menuOptions)

  inquirer.prompt(menuOptions)
    .then(function(answer) {
      console.log(answer)
      var product = answer.productMenu.split('|')
      var productId = product[0].trim()
      var productName = product[1].trim()
      var quantity = product[2].trim()

      console.log(productId, productName, quantity)
    })
  
}




// var insertQuery = `
// INSERT INTO Products(product_name, quantity)
// Values(${product_name}, ${quantity})
// `

// connection.query(insertQuery, function () {})

function displayProducts(display = false) {
  findAllProducts()
    .then((products) => {
      if (display) {
        products.forEach(product => {
          console.log(product);
        });
        purchasePrompt()
          .then((answer) => {
            if (answer.purchase) {
              console.log('The answer was yes')
              productOptions(products)
            }
          })

      }

    })

  
}


function purchasePrompt() {
  let prompt = {
    name: 'purchase',
    message: 'Would you like to purchase a product?',
    type: 'confirm'
  }
  return inquirer.prompt(prompt)
}





function addInventory() {

  var inventoryPrompts = [
    {
      type: 'input',
      message: 'Enter a product name to add', 
      name: 'productName',
    },
    {
      type: 'input',
      message: 'Enter a quantity',
      name: 'quantity',
      validate: function(input) {
        if (parseInt(input) && input % 1 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]
  console.log(inventoryPrompts, 'prompts')

  inquirer.prompt(inventoryPrompts)
    .then(function(answer) {
      let {productName, quantity} = answer;
      var insertQuery = `
    INSERT INTO Products(product_name, quantity) Values('${productName}', ${quantity});
`
      console.log(insertQuery, 'query');
      connection.query(insertQuery, function(err, result) {
        if (err) {
          console.log('There was an error: ', err)
        }
        console.log('Here is the result', result)
        displayProducts(display=true)
      })

    })
    .catch(function(err) {
      console.log(err)
    })  

}


function findAllProducts() {
  return new Promise((res, rej) => {
    connection.query('SELECT * FROM Products', function(err, result) {
      if (err) {
        console.log('There was an error querying for the products!', err)
        rej(err)
      }
      // console.log(result)
      var productArr = []
      var tableHeader = `Product ID | Product Name | Quantity`;
      productArr.push(tableHeader)
      // console.log(tableHeader)
      var seperator_length = 20;
      for(let i = 0; i < result.length; i++) {
        var productId = result[i].product_id
        var productName = result[i].product_name
        var quantity = result[i].quantity
        var product = `${productId}${" ".repeat(seperator_length - productId.length)}| ${productName}${" ".repeat(seperator_length - productName.length)}| ${quantity}${" ".repeat(seperator_length - quantity.length)}|`

          // console.log(product)
        
        productArr.push(product)
  
      }
      res(productArr)

  
    })

  })
}




menu()