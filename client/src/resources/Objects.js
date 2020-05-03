export function Product(name, brand, unit, supplier) {
  this.name = name;
  this.brand = brand;
  this.unit = unit;
  this.supplier = supplier;
}

export function Supplier(companyName, contactName, email) {
  this.companyName = companyName;
  this.contactName = contactName;
  this.email = email;
}

export function Order(date, status) {
  this.date = date;
  this.status = status;
}

export function User(companyName, contactName, email) {
  this.companyName = companyName;
  this.contactName = contactName;
  this.email = email;
}

export function Photo(img) {
  this.img = img;
}

export function Option(name, value) {
  this.name = name;
  this.value = value;
}
