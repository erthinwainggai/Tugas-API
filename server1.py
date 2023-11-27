from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Menambahkan CORS ke seluruh rute

# Data produk sementara
products = [
    {"id": 1, "name": "Product 1", "price": 100},
    {"id": 2, "name": "Product 2", "price": 150}
]

# Rute untuk mendapatkan semua produk
@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

# Rute untuk menambahkan produk baru
@app.route('/products', methods=['POST'])
def add_product():
    new_product = request.json
    products.append(new_product)
    return jsonify({"message": "Product added successfully", "product": new_product}), 201

# Rute untuk memperbarui produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    for product in products:
        if product['id'] == product_id:
            updated_product = request.json
            product.update(updated_product)
            return jsonify({"message": "Product updated successfully", "product": product})
    return jsonify({"message": "Product not found"}), 404

# Rute untuk menghapus produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    for index, product in enumerate(products):
        if product['id'] == product_id:
            del products[index]
            return jsonify({"message": "Product deleted successfully"})
    return jsonify({"message": "Product not found"}), 404

# Rute untuk memperbarui sebagian produk berdasarkan ID
@app.route('/products/<int:product_id>', methods=['PATCH'])
def partially_update_product(product_id):
    for product in products:
        if product['id'] == product_id:
            updated_fields = request.json
            for key, value in updated_fields.items():
                product[key] = value
            return jsonify({"message": "Product partially updated successfully", "product": product})
    return jsonify({"message": "Product not found"}), 404

if __name__ == '__main__':   
    app.run(debug=True)
