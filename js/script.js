var button1 = document.querySelector(".studentId");
var button2 = document.querySelector(".studentName");
var order = document.querySelector("#orderplaced");

var para1 = document.querySelector(".p1");
var para2 = document.querySelector(".p2");
var valid = document.querySelector(".validation");
var des = document.querySelector(".description");

button1.addEventListener("click", function () {
  para1.textContent = "200544640";
});

button2.addEventListener("click", function () {
  para2.textContent = "Navneet kaur";
});

/* 
order.addEventListener("click", validation);
function validation() {
  if (v1.value.trim() === "") {
    valid.textContent = "Please enter your name.";
  } else {
    if (v2.value.trim() === "") {
      valid.textContent = "Please enter your email.";
    } else {
      valid.textContent = "";
    }
  }
}
*/
class Pizza {
  constructor(name, email, pizzaType, size, quantity) {
    this.name = name;
    this.email = email;
    this.pizzaType = pizzaType;

    this.size = size;
    this.quantity = quantity;
  }
}

// Move capturing values inside the event listener
order.addEventListener("click", function () {
  console.log("Button clicked");
  var v1 = document.querySelector("#name");
  var v2 = document.querySelector("#email");

  const customername = v1.value.trim();
  const email = v2.value.trim();
  const pizzaType = document.getElementById("pizzaType").value;
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;

  // Check if the name and email are not empty
  if (customername === "") {
    valid.textContent = "Please enter your name.";
  } else if (email === "") {
    valid.textContent = "Please enter your email.";
  } else {
    valid.textContent = "";

    // Create a Pizza object
    const pizzaOrder = new Pizza(
      customername,
      email,
      pizzaType,
      size,
      quantity
    );

    // Update the description
    des.textContent = `Order details: Order is placed for ${pizzaOrder.name} which contains ${pizzaOrder.quantity} ${pizzaOrder.size} size ${pizzaOrder.pizzaType} pizza.`;
  }
});
