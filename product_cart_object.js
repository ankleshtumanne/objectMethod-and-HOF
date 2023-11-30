function createProductList(names, quantities, prices) {
    const data = [];
  
    for (let i = 0; i < names.length; i++) {
      const product = {
        name: names[i],
        quantity: quantities[i],
        price: prices[i],
      };
      data.push(product);
    }
  
    function total() {
      let totalValue = 0;
      for (const product of data) {
        totalValue += product.quantity * product.price;
      }
      return totalValue;
    }
  
    return {
      data: data,
      total: total,
    };
  }
  
  // Example input
  const names = ["Rice", "Dal", "Salt"];
  const quantities = [2, 3, 1];
  const prices = [60, 50, 20];
  
  // Create product list object
  const productList = createProductList(names, quantities, prices);
  
  // Calculate total value
  const totalValue = productList.total();
  
  // Output total value
  console.log(totalValue); // Output: 290
  