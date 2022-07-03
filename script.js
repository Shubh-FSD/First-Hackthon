let thead = document.getElementById("thead");
let tr = document.createElement("tr");

let brand = document.createElement("th");
brand.textContent = "Brand Name";
brand.setAttribute("scope", "col");
tr.appendChild(brand);

let Name = document.createElement("th");
Name.textContent = "Product Name";
Name.setAttribute("scope", "col");
tr.appendChild(Name);

let price = document.createElement("th");
price.textContent = "Price";
price.setAttribute("scope", "col");
tr.appendChild(price);

let image = document.createElement("th");
image.textContent = "Image";
image.setAttribute("scope", "col");
tr.appendChild(image);

let link = document.createElement("th");
link.textContent = "Link";
link.setAttribute("scope", "col");
tr.appendChild(link);

let description = document.createElement("th");
description.textContent = "Description";
description.setAttribute("scope", "col");
tr.appendChild(description);

thead.appendChild(tr);

const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const getAllRecords = async () => {
  try {
    const data1 = await fetch(baseURL);
    const data = await data1.json();
    console.log(data);
    populateGridData(data);
  } catch (error) {
    console.log(error);
  }
};

const populateGridData = (data) => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  // let result = "";

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");

    let brand = document.createElement("td");
    brand.textContent = data[i].brand;
    tr.appendChild(brand);

    let name = document.createElement("td");
    name.textContent = data[i].name;
    tr.appendChild(name);

    let price = document.createElement("td");
    price.textContent = data[i].price;
    tr.appendChild(price);

    let image_link = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", data[i].image_link);
    img.classList.add("img-fluid", "shadow-lg", "rounded", "img-design");
    image_link.appendChild(img);
    tr.appendChild(image_link);

    let product_link = document.createElement("td");
    product_link.textContent = data[i].product_link;
    tr.appendChild(product_link);

    let description = document.createElement("td");
    description.textContent = data[i].description;
    tr.appendChild(description);

    tbody.appendChild(tr);
  }
  // tbody.innerHTML = result;
};

let searchValue = document.getElementById("search");
searchValue.addEventListener("keyup", () => {
  let searchValue1 = searchValue.value.toUpperCase();

  let table = document.getElementById("tbody");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      let textco = td.textContent || td.innerText || td.innerHTML;

      if (textco.toUpperCase().indexOf(searchValue1) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});

getAllRecords();
const errorHandler = (er) => console.error(er);
