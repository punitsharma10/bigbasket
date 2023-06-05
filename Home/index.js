var smartBasket = [
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40072464_15-bb-royal-organic-black-pepperkali-mirchi.jpg",
        name : "Organic Black Pepper/Kari Menasui",
        price : "100g - Rs "+ 99,
        type : "masala"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40094998_10-bb-royal-organic-raw-peanuts.jpg",
        name : "Organic - Raw Peanuts/Kadalekayi",
        price : "1kg - Rs "+183.00,
        type : "foodgrains"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/104808_9-amul-cheese-slices.jpg",
        name : "Cheese Slices - Rich In Protein, Wholesome, No Added Sugar",
        price : "200g(10 slice) - Rs "+130.00,
        type : "dairy"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/104860_8-amul-butter-pasteurised.jpg",
        name : "Pasteurised Butter",
        price : "100g - Rs "+99.00,
        type : "dairy"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/241600_7-tata-salt-iodized.jpg",
        name : "Vacuum Evaporated Iodised Salt - Helps Mental Development",
        price : "100g - Rs "+54.50,
        type : "foodgrains"
    }

]
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var fruit_veg = [
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/70000493_2-fresho-safeda-mango.jpg",
        name : "Safeda Mango",
        price : "1kg - Rs "+71.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40226802_5-fresho-baby-apple-shimla.jpg",
        name : "Apple Shimla",
        price : "1kg - Rs "+283.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000207_24-fresho-watermelon-small.jpg",
        name : "CWater Melon Kiran/Tarbooj Kiran",
        price : "2kg - Rs "+45.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40120006_5-fresho-pomegranate-small.jpg",
        name : "Fresho Pomegranate Regular",
        price : "1kg - Rs "+145.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000152_22-fresho-papaya-medium.jpg",
        name : "VPapaya Medium/Papita",
        price : "1kg - Rs "+64.00,
        type : "fruitveg"
    },
    // --------------------------------------------------------------------------------------------------
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
        name : "Onion - Medium/Pyaj",
        price : "5kg - Rs "+100.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
        name : "Tomato Local - Grade A/Tamatar deshi",
        price : "1kg - Rs "+23.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40288899_2-fresho-potato-good-supply-of-carbohydrates.jpg",
        name : "Potato New",
        price : "5kg - Rs "+100.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
        name : "Capsicum Hybrid Green/Shimla Mirch",
        price : "1kg - Rs "+60.00,
        type : "fruitveg"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/10000119_17-fresho-ginger.jpg",
        name : "Fresh Ginger - Grade A/Adrak",
        price : "500g - Rs "+124.00,
        type : "fruitveg"
    },

]
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
var bestSellers = [
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40191534_1-borges-extra-virgin-olive-oil.jpg",
        name : "Original Extra Virgin Olive Oil",
        price : "2L - Rs "+1850.00,
        type : "foodgrains"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40231848_3-happilo-100-natural-premium-californian-almonds-value-pack.jpg",
        name : "Californian Almonds - Value",
        price : "100g - Rs "+65.00,
        type : "foodgrains"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/281204_9-fresho-farm-eggs-regular-medium-antibiotic-residue-free.jpg",
        name : "Farm Eggs - Regular, Medium, Antibiotic Residue-Free",
        price : "6Pcs - Rs "+52.00,
        type : "foodgrains"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/1212930_1-borges-extra-virgin-olive-oil-1l-pet-bottle-durum-wheat-pasta-penne-rigate-500g-pouch.jpg",
        name : "Extra Virgin Olive Oil 1L Pet Bottle + Durum Wheat Pasta Penne Rigate 500g Pouch",
        price : "Combo 2 Items - Rs "+1124.00,
        type : "foodgrains"
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/306926_4-amul-homogenised-toned-milk.jpg",
        name : "Taaza Homogenised Toned Milk",
        price : "1L - Rs "+71.50,
        type : "dairy"
    }

]

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


var sb = document.querySelector(".smartBasket")
var fv = document.querySelector(".fruitVeg")
var bs = document.querySelector(".bestSellers")
function myBask(product1 , sb) {
    product1.forEach(e => {
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", e.image);
      var h3 = document.createElement("h3");
      h3.innerText = e.name;
      var p = document.createElement("p");
      p.innerText = e.price;
  
      var btn = document.createElement("input");
      btn.setAttribute("value", "Add");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btn");
  
      btn.addEventListener("click", () => {
        setlocal(e);
      });
  
      div.append(img, h3, p, btn);
      sb.append(div);
    });
    console.log("yes");
  }
myBask(smartBasket , sb)
myBask(fruit_veg , fv)
myBask(bestSellers , bs)
var basket_arr = []
function setlocal(e) {
    basket_arr.push(e)
    console.log(basket_arr);
    localStorage.setItem("myBasket" , JSON.stringify(basket_arr))
    
}