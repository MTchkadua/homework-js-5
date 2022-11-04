let products=[["Apple", 2.4],["Banana", 1.8], ["Cherry", 3],["Peach",1.2],["Watermelon", 0.7],["Melon", 1],["Plum", 3,2]]
let container = document.querySelector(".productContainer") 




   

let lowto = document.querySelector(".lowto");
console.log(lowto)

products.map(item =>{
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
}) 




lowto.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice = products.sort(function(a,b){
        return a[1]-b[1];
    })
    console.log(arrPrice)
    arrPrice.map(item =>{
        console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
})
console.log(products)


let highto = document.querySelector(".highto")

highto.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice = products.sort(function(a,b){
        return b[1]-a[1];
    })
    console.log(arrPrice)
    arrPrice.map(item =>{
        console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
    
})



let atoz = document.querySelector(".atoz")

atoz.addEventListener("click", function(){
    container.innerHTML = " ";
    let productname = products.sort(function(a,b){
        return (a[0]>b[0]) - (a[0]< b[0]);
    })

    console.log(productname)
    
    productname.map(item =>{
    console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
    
})

let ztoa = document.querySelector(".ztoa")

ztoa.addEventListener("click", function(){
    container.innerHTML = " ";

    let productname = products.sort(function(a,b){
        return (b[0]>a[0]) - (b[0]< a[0]);
    })

    console.log(productname)
    
    productname.map(item =>{
    console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
    
})


let min = document.querySelector(".minnumber")
let max = document.querySelector(".maxnumber")
let filter = document.querySelector(".filter")


 
let filt;


filter.addEventListener("click", function(){
    container.innerHTML = " ";
   let minnumb = parseInt(min.value)
   let maxnumb = parseInt(max.value)

   filt = products.filter(item =>{
     return (item[1]>=minnumb)&&(item[1]<=maxnumb)
    })
    

    


        filt.map(item =>{
        console.log(item)
        let box = document.createElement("div")
        container.appendChild(box)
        box.classList.add("box")
        let name = document.createElement("h5")
        name.innerHTML = "product name: " + item[0]
        box.appendChild(name)
        let price = document.createElement("h5")
        price.innerHTML = "product price: " + item[1]
        box.appendChild(price)
        })
})

    


    
    