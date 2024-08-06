from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

blogs = []

@app.route('/api/new_subject', methods=['POST'])
def new_subject():
    data = request.json
    blogs.append(data)
    print(data)
    return jsonify({"message": "Subject added successfully!"}), 200,

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    return jsonify(blogs), 200

@app.route('/api/blogs/<int:index>', methods=['DELETE'])
def delete_blog(index):
    if 0 <= index < len(blogs):
        removed_blog = blogs.pop(index)
        return jsonify({"message": "Blog deleted successfully!", "removed_blog": removed_blog}), 200
    return jsonify({"message": "Blog not found!"}), 404

@app.route('/api/blogs/<int:index>', methods=['PUT'])
def update_blog(index):
    if 0 <= index < len(blogs):
        data = request.json
        data.setdefault('tags', [])  # Ensure 'tags' is always present
        blogs[index] = data
        return jsonify({"message": "Blog updated successfully!"}), 200
    return jsonify({"message": "Blog not found!"}), 404

    
if __name__ == '__main__':
    app.run(debug=True)
