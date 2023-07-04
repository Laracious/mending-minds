from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
import redis
from flask_session import Session
from flask_login import LoginManager
from dotenv import load_dotenv
from flask_cors import CORS


#databse environment variables
load_dotenv()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
    app.config['SQLALCMEY_TRACK_MODIFICATIONS'] = os.environ['SQLALCHEMY_TRACK_MODIFICATIONS']
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://'+os.environ['DB_USER']+':'+os.environ['USER_PWD']+ '@'+ os.environ['HOST']+'/'+ os.environ['DB_NAME']
    app.config['SQLALCHEMY_ECHO'] = os.environ['SQLALCHEMY_ECHO']
    #session variables
    app.config['SESSION_TYPE']="redis"
    app.config['SESSION_PERMANENT'] = False
    app.config['SESSION_USE_SIGNER'] = True
    app.config['SESSION_REDIS'] = redis.from_url("redis://127.0.0.1:6379")
    app.config['SESSION_SIGNER'] = True
    
    server_session = Session(app)
    
    db.init_app(app)
    
    
    #Register bluebrint
    from web.views import views
    from web.auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # define classes before db creation
    from web.models import User,Userstory,Appointment
    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.Login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(str(id))
    
    return app

#def create_db(app):
 #   if not path.exists('web/'+ DB_NAME):
  #      db.create_all(app=app)
   #     print('db created')

 