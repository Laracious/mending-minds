#This the authentication bluebrint of our app
from flask import Blueprint, request, jsonify, session
from web.models import User, db
#jwt sessions libs
from flask_jwt_extended import (
    create_access_token
) 

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
    #create the tokens we will be sending back to the user
    access_token = create_access_token(identity=email)
    #refresh_token = create_refresh_token(identity=User.id)
    resp=jsonify({
        'access_token': access_token 
    })
    #set jwt cookies in response
    #set_access_cookies(resp, access_token)
    #set_refresh_cookies(resp,refresh_token)
    return resp, 200

#@auth.route('/refresh', methods=['POST'])
#def Refresh():
    #create the new access token
    
 #   access_token  = create_access_token(identity=current_user)
    # set jwt in response
  #  rep = jsonify({
    #    "login":True
   #     })
   # set_access_cookies(rep, access_token)
    #return rep, 200

######nset_jwt_cookies(resp)
    #return resp, 200

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




