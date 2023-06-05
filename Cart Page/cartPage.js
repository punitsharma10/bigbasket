var cartList = JSON.parse(localStorage.getItem("myBasket")) || [];

    if(cartList.length == 0) {
        document.getElementById("basketContainer").textContent = "";
        var noItems = document.createElement("h1");
        noItems.textContent = "There are no items in your basket."
        var continueShoppingButton = document.createElement("button");
        continueShoppingButton.textContent = "CONTINUE SHOPPING";
        document.getElementById("basketContainer").append(noItems, continueShoppingButton);
    }
    else {
        displaycartlist(cartList);
        // calcart(cartList);
        // countitems(cartList);
    }
    var totalSavings = [];
    var quantity = JSON.parse(localStorage.getItem("productQuantity"));
    function displaycartlist(cartList) {
        cartList.map(function(product) {

            document.getElementById("countitems").textContent = cartList.length + " items";
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.textContent = product.name;

            var td2 = document.createElement("td");
            td2.textContent = "₹ " + product.offerPrice;

            var td3 = document.createElement("td");
            td3.textContent = JSON.parse(localStorage.getItem("productQuantity"));

            var td4 = document.createElement("td");
            td4.textContent = "₹ " + product.offerPrice * td3.textContent;

            var td5 = document.createElement("td");
            var value = product.originalPrice - product.offerPrice;
            td5.textContent = "₹ " + value.toFixed(2);
            
            // totalSavings.push(value)

            
            tr.append(td1, td2, td3, td4, td5);
            document.getElementById("tbody").append(tr);
        })
        
        var editItems = document.createElement("div");
        editItems.setAttribute("id", "editItems");

        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", "buttonDiv");

        var emptyBasketButton = document.createElement("button");
        emptyBasketButton.textContent = "EMPTY BASKET";
        emptyBasketButton.addEventListener("click", function() {
            localStorage.removeItem("myBasket");
            document.getElementById("basketContainer").textContent = "";
            var noItems = document.createElement("h1");
            noItems.textContent = "There are no items in your basket."
            var continueShoppingButton = document.createElement("button");
            continueShoppingButton.textContent = "CONTINUE SHOPPING";
            document.getElementById("basketContainer").append(noItems, continueShoppingButton);
        })
        emptyBasketButton.setAttribute("id", "emptyBasketButton");

        var continueShopping = document.createElement("button");
        continueShopping.textContent = "CONTINUE SHOPPING";
        continueShopping.setAttribute("id", "continueShopping");
        buttonDiv.append(emptyBasketButton, continueShopping);

        var checkoutDiv = document.createElement("div");
        checkoutDiv.setAttribute("id", "checkoutDiv");

        var checkoutDetailsDiv = document.createElement("div");
        checkoutDetailsDiv.setAttribute("id", "checkoutDetailsDiv");

        var subTotalDiv = document.createElement("div");
        subTotalDiv.setAttribute("id", "subTotalDiv");

        var subTotal = document.createElement("p");
        subTotal.setAttribute("id", "subTotal");
        var subTotalValue = findSubTotal(cartList);
        localStorage.setItem("TotalCartValue", subTotalValue.toFixed(2));
        console.log(subTotalValue);
        subTotal.textContent = "Subtotal : ₹ " + subTotalValue.toFixed(2);
        
        var deliveryCharges = document.createElement("p");
        deliveryCharges.setAttribute("id", "deliveryCharges");
        deliveryCharges.textContent = "Delivery Charges : **";

        var hr = document.createElement("HR");

        var total = document.createElement("p");
        total.setAttribute("id", "total");
        total.textContent = "TOTAL : ₹ " + subTotalValue.toFixed(2);

        

        subTotalDiv.append(subTotal, deliveryCharges, hr, total);

        var youSaved = document.createElement("p");
        youSaved.setAttribute("id", "youSaved");
        youSaved.textContent = "You Saved!";
        var saveValue = document.createElement("p");
        
        var dummy =  findSavings(cartList);
        localStorage.setItem("TotalSavings", dummy.toFixed(2));
        saveValue.textContent = "₹ " + dummy.toFixed(2);
        youSaved.appendChild(saveValue);

        var savingsDiv = document.createElement("div");
        savingsDiv.setAttribute("id", "savingsDiv");
        savingsDiv.appendChild(youSaved);

        var tempDiv = document.createElement("div");
        tempDiv.setAttribute("id", "tempDiv");
        tempDiv.append(subTotalDiv, savingsDiv)
        
        var checkOutButtonDiv = document.createElement("div");
        checkOutButtonDiv.setAttribute("id", "checkOutButtonDiv");

        var checkOutButton = document.createElement("button");
        checkOutButton.textContent = "CHECKOUT";
        checkOutButton.setAttribute("id", "checkOutButton");

        var hr2 = document.createElement("HR");
        checkOutButtonDiv.appendChild(checkOutButton);
        var deliveryChargesinfo = document.createElement("p");
        deliveryChargesinfo.textContent = "** Actual delivery charges computed at checkout time";
        checkoutDetailsDiv.append(tempDiv, hr2, checkOutButtonDiv);
        checkoutDiv.append(checkoutDetailsDiv, deliveryChargesinfo);


        editItems.append(buttonDiv, checkoutDiv);
        document.getElementById("basketContainer").append(editItems);
    }

    function findSubTotal(cartList) {
        var ans = cartList.reduce(function(accu, curr) {
            return accu + curr.offerPrice;
        }, 0);
        return ans;
    }

    function findSavings(cartList) {
        var ans = cartList.reduce(function(accu, curr) {
            return accu + curr.originalPrice - curr.offerPrice;
        }, 0);
        return ans;
    }

    function countitems(cartList) {
        document.getElementById("countitems").textContent = cartList.length;
    }

    var storedValue = localStorage.getItem("name1");
    var headingElement = document.getElementById("show_name");
    headingElement.textContent = storedValue;