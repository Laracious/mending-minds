from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
import os
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from flask_cors import CORS



#databse environment variables
load_dotenv()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config['SQLALCMEY_TRACK_MODIFICATIONS'] = os.environ['SQLALCHEMY_TRACK_MODIFICATIONS']
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://'+os.environ['DB_USER']+':'+os.environ['USER_PWD']+ '@'+ os.environ['HOST']+'/'+ os.environ['DB_NAME']
    app.config['SQLALCHEMY_ECHO'] = os.environ['SQLALCHEMY_ECHO']
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config["CONTENT_TYPE"] = "application/json"
    #session variables
    app.config["JWT_SECRET_KEY"] = os.environ['SECRET_KEY']
   # app.config['JWT_ACCESS_COOKIE_PATH'] = '/'
   # app.config['JWT_REFRESH_COOKIE_PATH'] = '/'
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False
    app.config["JWT_HEADER_TYPE"] = "JWT"
    #app.config['JWT_COOKIE_SECURE'] = False
   # app.config['JWT_TOKEN_LOCATION'] = ['cookies']
   # app.config['PROPAGATE_EXCEPTIONS'] = True

    jwt = JWTManager(app)
    db.init_app(app)

    # define classes before db creation
    #from web.models import User,Userstory,Appointment

    #load users,roles for a session
    #Register bluebrint
    from web.views import views
    from web.auth import auth

    app.register_blueprint(views, url_prfix='/')
    app.register_blueprint(auth, url_prefix='/')

    
    with app.app_context():
        db.create_all()
    
    return app
 