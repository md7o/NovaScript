from flask import Flask
from flask_cors import CORS
from blog import blog
from admin import admin

app = Flask(__name__)
CORS(app)

app.register_blueprint(blog, url_prefix='/blog')
app.register_blueprint(admin, url_prefix='/admin')

if __name__ == '__main__':
    app.run(port=5000)
