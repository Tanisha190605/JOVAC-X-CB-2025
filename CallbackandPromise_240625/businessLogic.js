const products = [
  { id: 1, name: "T-Shirt", price: 500, category: "Clothing", rating: 4.2, inStock: true },
  { id: 2, name: "Jeans", price: 1200, category: "Clothing", rating: 4.5, inStock: true },
  { id: 3, name: "Laptop", price: 55000, category: "Electronics", rating: 4.8, inStock: false },
  { id: 4, name: "Smartphone", price: 35000, category: "Electronics", rating: 4.6, inStock: true },
  { id: 5, name: "Headphones", price: 2000, category: "Electronics", rating: 4.3, inStock: true },
  { id: 6, name: "Shoes", price: 2500, category: "Footwear", rating: 4.0, inStock: false },
  { id: 7, name: "Sandals", price: 900, category: "Footwear", rating: 3.8, inStock: true },
  { id: 8, name: "Microwave", price: 8000, category: "Appliances", rating: 4.4, inStock: true },
  { id: 9, name: "Fridge", price: 30000, category: "Appliances", rating: 4.7, inStock: false },
  { id: 10, name: "Air Conditioner", price: 40000, category: "Appliances", rating: 4.5, inStock: true },
  { id: 11, name: "Watch", price: 1500, category: "Accessories", rating: 4.1, inStock: true },
  { id: 12, name: "Belt", price: 600, category: "Accessories", rating: 3.9, inStock: false },
  { id: 13, name: "Bag", price: 1800, category: "Accessories", rating: 4.3, inStock: true },
  { id: 14, name: "Sweater", price: 1200, category: "Clothing", rating: 4.4, inStock: true },
  { id: 15, name: "Television", price: 32000, category: "Electronics", rating: 4.6, inStock: true },
  { id: 16, name: "Keyboard", price: 1500, category: "Electronics", rating: 4.2, inStock: true },
  { id: 17, name: "Mouse", price: 700, category: "Electronics", rating: 4.1, inStock: false },
  { id: 18, name: "Tablet", price: 22000, category: "Electronics", rating: 4.3, inStock: true },
  { id: 19, name: "Jacket", price: 3500, category: "Clothing", rating: 4.5, inStock: true },
  { id: 20, name: "Slippers", price: 500, category: "Footwear", rating: 3.6, inStock: true },
];
const inStockElectronics = products.filter(
  (item) => item.category === "Electronics" && item.inStock
);
const productsWithGST = products.map((item) => ({
  ...item,
  gstPrice: item.price + item.price * 0.18
}));
const totalStockValue = products.reduce((acc, item) => {
  return item.inStock ? acc + item.price : acc;
}, 0);
const electronicsGSTTotal = inStockElectronics
  .map((p) => p.price + p.price * 0.18)
  .reduce((acc, priceWithGST) => acc + priceWithGST, 0);
console.log("In-Stock Electronics:", inStockElectronics);
console.log("All Products with GST:", productsWithGST);
console.log("Total value of in-stock items: ",totalStockValue);
console.log("Total GST price of in-stock Electronics: ",electronicsGSTTotal);
