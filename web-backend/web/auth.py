#This the authentication bluebrint of our app
from flask import Blueprint, render_template, request, jsonify, session
from web.models import User, db
# redirect user 
from flask import redirect, url_for
#secure password
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def Login():
    email = request.json['email']
    password = request.json['password']
    #query db for credentials
    user = User.query.filter_by(email=email).first()
    if user:
        if check_password_hash(user.password, password):
            session['user_id'] = user.id
            return jsonify({
                "id":user.id,
                "email":user.email,
                "first_name": user.first_name,
                "last_name":user.last_name
            })
            #return redirect(url_for('views.index'))
        else:
            return jsonify({
                "error":"Wrong password"
            }), 401
    
    else:
        return jsonify({
            "error":"Account does not exist"
        }), 401
        #return redirect(url_for('auth.SignUP'))

@auth.route('/logout', methods=['GET', 'POST'])
@login_required
def Logout():
    logout_user()
    return redirect(url_for('auth.index'))

@auth.route('/Sign', methods=['GET', 'POST'])
def SignUP():
    email =request.json['email']
    firstName = request.json['first_name']
    lastName = request.json['last_name']
    password = request.json['password']
    cpassword = request.json['cpassword']
    
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
    new_user = User(email=email, password=hashed_ps, first_name=firstName, last_name=lastName)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        'id': new_user.id,
        'email':new_user.email,
        'first_name':new_user.first_name,
        'last_name':new_user.last_name,
    })

#return curent login in user
@auth.route("/@me")
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({
            'error':'User not login'
        }), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        'id': user.id,
        'email':user.email,
        'first_name':user.first_name,
        'last_name':user.last_name,
    })
    


