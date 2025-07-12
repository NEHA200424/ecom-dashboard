// src/pages/api/platforms/all.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://dummyjson.com/products?limit=24');
    const products = response.data.products;

    const splitData = (products) => {
      const size = Math.ceil(products.length / 3);
      return [products.slice(0, size), products.slice(size, size * 2), products.slice(size * 2)];
    };

    const [amazonData, myntraData, flipkartData] = splitData(products);

    const formatProduct = (product, index, platformName) => ({
      productId: `${platformName}-${index + 1}`,
      title: `${platformName} - ${product.title}`,
      price: product.price,
      rating: product.rating,
      dailySales: Math.floor(Math.random() * 10000) + 1000,
      dailyOrders: Math.floor(Math.random() * 150) + 20,
    });

    const amazon = amazonData.map((p, i) => formatProduct(p, i, 'Amazon'));
    const myntra = myntraData.map((p, i) => formatProduct(p, i, 'Myntra'));
    const flipkart = flipkartData.map((p, i, arr) => formatProduct(p, i, 'Flipkart'));

    const combinedStats = {
      totalProducts: amazon.length + myntra.length + flipkart.length,
      averageRating: (
        [...amazon, ...myntra, ...flipkart].reduce((acc, cur) => acc + parseFloat(cur.rating), 0) /
        (amazon.length + myntra.length + flipkart.length)
      ).toFixed(2),
    };

    const responseData = {
      amazon: { platform: 'Amazon', data: amazon },
      myntra: { platform: 'Myntra', data: myntra },
      flipkart: { platform: 'Flipkart', data: flipkart },
      combinedStats
    };

    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error('Failed to fetch dummy products:', error);
    res.status(500).json({ error: 'Failed to fetch products from dummyjson' });
  }
}
