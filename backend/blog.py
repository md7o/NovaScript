from flask import Blueprint, request, jsonify

blog = Blueprint('blog', __name__)

# List to store blogs
blogs = []
current_view = 0

@blog.route('/api/new_subject', methods=['POST'])
def new_subject():
    data = request.json
    blogs.append(data)  # Append new blog data
    print("Received data:", data)
    return jsonify({"message": "Subject added successfully!"}), 200

@blog.route('/api/blogs', methods=['GET'])
def get_blogs():
    return jsonify(blogs), 200

@blog.route('/api/blogs/<int:index>', methods=['DELETE'])
def delete_blog(index):
    if 0 <= index < len(blogs):
        removed_blog = blogs.pop(index)
        return jsonify({"message": "Blog deleted successfully!", "removed_blog": removed_blog}), 200
    return jsonify({"message": "Blog not found!"}), 404

@blog.route('/api/blogs/<int:index>', methods=['PUT'])
def update_blog(index):
    if 0 <= index < len(blogs):
        data = request.json
        data.setdefault('tags', [])  # Ensure 'tags' is always present
        blogs[index] = data
        return jsonify({"message": "Blog updated successfully!"}), 200
    return jsonify({"message": "Blog not found!"}), 404

@blog.route('/increment', methods=['POST'])
def increment_view():
    global current_view
    current_view += 1
    return jsonify({"number": current_view}), 200

@blog.route('/get_view', methods=['GET'])
def get_view():
    return jsonify({"number": current_view}), 200

   