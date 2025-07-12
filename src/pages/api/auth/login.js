export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email === 'admin@test.com' && password === 'admin123') {
      return res.status(200).json({ 
        token: 'mock_jwt_token_123',
        user: { name: 'Admin', role: 'admin' }
      });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.status(405).end(); // Method not allowed
}