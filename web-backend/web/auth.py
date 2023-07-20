#This the authentication bluebrint of our app
from flask import Blueprint, request, jsonify, redirect, url_for
from web.models import User, db, Appointment, Userstory, Counsilor

#jwt sessions libs
from flask_jwt_extended import (
    create_access_token,get_jwt_identity,jwt_required,
) 


#secure password
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def Login():
    email = request.json.get('email')
    password = request.json.get('password') 
    

    domain = "@mending_minds"
    if email.find(domain) != -1:
        counsilor = Counsilor.query.filter_by(email=email).first()
        #create the tokens we will be sending back to the concilor
        access_token = create_access_token(identity=counsilor.id)
        if counsilor is None:
            return jsonify({
                "error":"counsilor does nor exist"
            }), 401 
        if not check_password_hash(counsilor.password, password):
            return jsonify({
                "error":"Incorrect password"
        }), 409
        resp=jsonify({
            'access_token': access_token
            })
        return resp, 200
        

    if len(email) < 1:
        return jsonify(
            {
                "error":"email required"
                }
                )
    elif len(password)< 1:
        return jsonify({
            "error":"passsword Required"}
            )
    
    
    #query db for credentials
    
    user = User.query.filter_by(email=email).first()
    #create the tokens we will be sending back to the user
    access_token = create_access_token(identity=user.id)
    
    if user is None:
        return jsonify ({
                "error":"Unautorized"
        }), 401
    
    if not check_password_hash(user.password, password):
        return jsonify({
            "error":"Incorrect password"
        }), 409
   
    resp=jsonify({
        'access_token': access_token
    })

    return resp, 200

@auth.route('/Sign', methods=['GET', 'POST'])
def SignUP():
    email =request.json['email']
    firstName = request.json['first_name']
    lastName = request.json['last_name']
    password = request.json['password']
    cpassword = request.json['cpassword']
    #hash pasword
    hashed_ps = generate_password_hash(password)
    user_exists = User.query.filter_by(email=email).first() is not None
    if email == firstName+"@mending_minds.com":
        counsilor  = Counsilor.query.filter_by(email=email).first() is not None
        if counsilor:
            return jsonify({
                "error":"counsilor already exits"
            }), 409
        
        new_councilor = Counsilor(email=email, password=hashed_ps,first_name=firstName, last_name=lastName)
        db.session.add(new_councilor)
        db.session.commit()
        return jsonify({
            "c_email":new_councilor.email,
            "c_id":new_councilor.id,
            "first_name":new_councilor.first_name,
            "last_name":new_councilor.last_name
        })
    if user_exists:
        return jsonify({
            "error":"User already exists"
        }), 409
    
    if password != cpassword:
        return jsonify({
            "error":'Passwords do not match'
        }), 401
    
    new_user = User(email=email, password=hashed_ps, first_name=firstName, last_name=lastName)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        'email':new_user.email,
        'id': new_user.id,
        'first_name':new_user.first_name,
        'last_name':new_user.last_name,
    })


@auth.route("/@me",methods=['GET'])
@jwt_required()
def get_current_user():
    current_user_id = get_jwt_identity()
    
    if not current_user_id:
        return jsonify({
            'error':'User not logged in'
        }), 401
    user = User.query.filter_by(id=current_user_id).first()
    counsilor = Counsilor.query.filter_by(id=current_user_id).first()
    if user:
        return jsonify({
            'first_name':user.first_name
            })
    else:
        return jsonify({
            'first_name':counsilor.first_name
        })

auth.route("/Counsilor", methods=['GET'])
@jwt_required
def show_app_req():
    co_id = get_jwt_identity()

    
    if co_id is None:
        return jsonify({
            "error":"Concilor not logged in"
        })
    if request.method == 'GET':
        apointment_requests = Appointment.query.filter_by(co_id=co_id).first(5)
        for app_req in apointment_requests:
            return jsonify({
                "user_id":app_req.user_id,#translate into user name
                "issue":app_req.issue,
                "sheduled_time":app_req.scheduled_time,
                "status":app_req.status
            })
auth.route("/Counsilor/approve",methods=['POST'])
@jwt_required
def approve_req():
    co_id = get_jwt_identity()
    app_id = request.json.get("id")
    if co_id is None:
        return jsonify({
            "error":"Councilor not logged in"
        })
    apointment_requests = Appointment.query.filter_by(id=app_id)
    if apointment_requests.status == False:
        apointment_requests.status = True
    return jsonify({
        ""
    })
    
        
        

    


    