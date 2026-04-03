const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

// Proxy middleware
app.use('/api', createProxyMiddleware({
  target: 'http://172.16.79.109:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix when forwarding to target
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add any custom headers if needed
    proxyReq.setHeader('Access-Control-Allow-Origin', '*');
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error' });
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`CORS proxy server running on http://localhost:${PORT}`);
  console.log(`Proxying requests from /api/* to http://172.16.79.109:8080/*`);
});