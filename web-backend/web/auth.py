#This the authentication bluebrint of our app
from flask import Blueprint, request, jsonify, session
from web.models import User, db
#jwt sessions libs
from flask_jwt_extended import create_access_token
#from flask_jwt_extended import get_jwt_identity
# flask_jwt_extended import jwt_required

#secure password
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def Login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    
    #query db for credentials
    
    user = User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify ({
                "error":"Un autorized"
        }), 401
    
    if not check_password_hash(user.password, password):
        return jsonify({
            "error":"Un auth"
        }), 409
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@auth.route('/logout', methods=['POST'])
def Logout():
    session.pop('user_id')
    return "200"

@auth.route('/Sign', methods=['GET', 'POST'])
def SignUP():
    email =request.json['email']
    firstName = request.json['fname']
    lastName = request.json['lname']
    password = request.json['password']
    cpassword = request.json['cpassword']
    utype = request.json['utype']
    
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({
            "error":"User already exists"
        }), 409
    
    if password != cpassword:
        return jsonify({
            "error":'Passwords do not match'
        }), 401
    hashed_ps = generate_password_hash(password)
    new_user = User(email=email, password=hashed_ps, first_name=firstName, last_name=lastName, utype=utype)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        'id': new_user.id,
        'email':new_user.email,
        'first_name':new_user.first_name,
        'last_name':new_user.last_name,
        'utype':new_user.utype
    })

#return curent logged in in user
@auth.route("/@me")
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({
            'error':'User not logged in'
        }), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        'id': user.id,
        'email':user.email,
        'first_name':user.first_name,
        'last_name':user.last_name,
    })
    


