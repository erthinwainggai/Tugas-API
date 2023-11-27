const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

// GET: Mendapatkan semua produk dari API Python di server Flask
app.get("/express-products", (req, res) => {
  axios
    .get("http://localhost:5000/products")
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// POST: Menambahkan produk baru ke API Python di server Flask
app.post("/express-products", (req, res) => {
  axios
    .post("http://localhost:5000/products", req.body)
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// PUT: Memperbarui produk berdasarkan ID di API Python di server Flask
app.put("/express-products/:id", (req, res) => {
  const productId = req.params.id;
  axios
    .put(`http://localhost:5000/products/${productId}`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// DELETE: Menghapus produk berdasarkan ID di API Python di server Flask
app.delete("/express-products/:id", (req, res) => {
  const productId = req.params.id;
  axios
    .delete(`http://localhost:5000/products/${productId}`)
    .then(() => {
      res.json({ message: "Product deleted" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// PATCH: Memperbarui sebagian produk berdasarkan ID di API Python di server Flask
app.patch("/express-products/:id", (req, res) => {
  const productId = req.params.id;
  axios
    .patch(`http://localhost:5000/products/${productId}`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
