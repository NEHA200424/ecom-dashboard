import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Using FakeStoreAPI as Amazon alternative
    const response = await axios.get('https://fakestoreapi.com/products');
    
    // Transform to Amazon-like data structure
    const amazonData = response.data.map(product => ({
      productId: `AMZ${product.id}`,
      title: product.title,
      price: product.price,
      rating: product.rating.rate,
      platform: 'amazon',
      image: product.image,
      category: product.category,
      stock: Math.floor(Math.random() * 100), // Random stock
      dailySales: Math.floor(Math.random() * 50) // Mock sales data
    }));

    res.status(200).json({
      success: true,
      count: amazonData.length,
      data: amazonData
    });
  } catch (error) {
    console.error('Amazon mock API error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Amazon mock data',
      error: error.message
    });
  }
}