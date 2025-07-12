import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Using DummyJSON as Myntra alternative
    const response = await axios.get('https://dummyjson.com/products/category/mens-shirts');
    
    // Transform to Myntra-like data structure
    const myntraData = response.data.products.map(item => ({
      productId: `MYN${item.id}`,
      brand: item.brand || 'Fashion Brand',
      title: item.title,
      price: item.price,
      discount: Math.floor(Math.random() * 70), // Random discount
      rating: item.rating,
      platform: 'myntra',
      images: item.images,
      stock: item.stock,
      dailyOrders: Math.floor(Math.random() * 30) // Mock orders
    }));

    res.status(200).json({
      success: true,
      count: myntraData.length,
      data: myntraData
    });
  } catch (error) {
    console.error('Myntra mock API error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Myntra mock data',
      error: error.message
    });
  }
}