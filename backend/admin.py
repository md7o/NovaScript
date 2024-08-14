from flask import Blueprint, session, jsonify, request

admin = Blueprint('admin', __name__)

@admin.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['password'] == '123':
        session['logged_in'] = True
        return jsonify({"message": "Logged in successfully"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@admin.route('/logout', methods=['POST'])
def logout():
    session.pop('logged_in', None)
    return jsonify({"message": "Logged out successfully"}), 200

@admin.route('/check_login', methods=['GET'])
def check_login():
    logged_in = session.get('logged_in', False)
    return jsonify({"logged_in": logged_in})
