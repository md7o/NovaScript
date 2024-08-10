from flask import Blueprint

admin = Blueprint('admin', __name__)

@admin.route()
def login():
    print("Login completed successfully")