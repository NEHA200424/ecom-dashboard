// Local mock data for Flipkart alternative
const flipkartMockData = [
  {
    productId: `FLP${Math.floor(1000 + Math.random() * 9000)}`,
    title: "Smartphone X",
    price: Math.floor(10000 + Math.random() * 40000),
    rating: (3 + Math.random() * 2).toFixed(1),
    platform: 'flipkart',
    specifications: {
      ram: "8GB",
      storage: "128GB",
      color: "Black"
    },
    dailyVisitors: Math.floor(Math.random() * 500),
    conversionRate: (5 + Math.random() * 10).toFixed(1) + '%'
  },
  {
    productId: `FLP${Math.floor(1000 + Math.random() * 9000)}`,
    title: "Laptop Pro",
    price: Math.floor(30000 + Math.random() * 70000),
    rating: (4 + Math.random() * 1).toFixed(1),
    platform: 'flipkart',
    specifications: {
      ram: "16GB",
      storage: "512GB SSD",
      processor: "Intel i7"
    },
    dailyVisitors: Math.floor(Math.random() * 300),
    conversionRate: (8 + Math.random() * 7).toFixed(1) + '%'
  },
  // Add more mock products as needed
];

export default async function handler(req, res) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    res.status(200).json({
      success: true,
      count: flipkartMockData.length,
      data: flipkartMockData
    });
  } catch (error) {
    console.error('Flipkart mock API error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Flipkart mock data',
      error: error.message
    });
  }
}