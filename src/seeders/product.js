import { connectDB } from '../config/db.js';
import ProductModel from '../models/product.js';

const mockProducts = [
  {
    title: 'Wireless Bluetooth Headphones',
    description:
      'High-quality wireless headphones with noise cancellation, deep bass, and long battery life. Perfect for travel and daily use.',
    images: [
      { url: 'https://m.media-amazon.com/images/I/31cj2FqwwqL._SX300_SY300_QL70_FMwebp_.jpg' },
      { url: 'https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg' },
      { url: 'https://m.media-amazon.com/images/I/31nh0udpAKL._SX300_SY300_QL70_FMwebp_.jpg' },
    ],
  },
  {
    title: 'Portable Bluetooth Speaker',
    description:
      'Compact and powerful speaker with crystal-clear sound and waterproof design, ideal for outdoor parties and travel.',
    images: [
      { url: 'https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg' },
      { url: 'https://m.media-amazon.com/images/I/31nh0udpAKL._SX300_SY300_QL70_FMwebp_.jpg' },
    ],
  },
  {
    title: 'Ergonomic Wireless Mouse',
    description:
      'Smooth and responsive wireless mouse designed to reduce wrist strain, with adjustable DPI and long-lasting battery.',
    images: [{ url: 'https://m.media-amazon.com/images/I/31cj2FqwwqL._SX300_SY300_QL70_FMwebp_.jpg' }],
  },
];

await connectDB();

async function saveProducts() {
  try {
    const results = await ProductModel.insertMany(mockProducts);
    console.log('Products saved successfully:', results.length);
  } catch (error) {
    console.log('Error saving products:', error);
  }
}

await saveProducts();
