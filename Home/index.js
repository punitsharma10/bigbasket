var smartBasket = [
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40072464_15-bb-royal-organic-black-pepperkali-mirchi.jpg",
        name : "Organic Black Pepper/Kari Menasui",
        price : "100g - Rs 99.00",
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/40094998_10-bb-royal-organic-raw-peanuts.jpg",
        name : "Organic - Raw Peanuts/Kadalekayi",
        price : "1kg - Rs 183.00",
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/104808_9-amul-cheese-slices.jpg",
        name : "Cheese Slices - Rich In Protein, Wholesome, No Added Sugar",
        price : "200g(10 slice) - Rs 130.00",
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/104860_8-amul-butter-pasteurised.jpg",
        name : "Pasteurised Butter",
        price : "100g - Rs 99.00",
    },
    {
        image : "https://www.bigbasket.com/media/uploads/p/s/241600_7-tata-salt-iodized.jpg",
        name : "Vacuum Evaporated Iodised Salt - Helps Mental Development",
        price : "100g - Rs 54.50",
    }

]
function myBask() {
    smartBasket.forEach(e => {
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
        setlocal(e.image, e.name, e.price);
      });
  
      div.append(img, h3, p, btn);
      document.querySelector(".smartBasket").append(div);
    });
    console.log("yes");
  }
myBask()
function setlocal(img , name , price) {
    console.log(img , name , price);
}