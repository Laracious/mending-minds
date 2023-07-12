#This the vies bluebrint of our app
from flask import Blueprint,request, jsonify

from web.models import Appointment,db, Userstory, User
views = Blueprint('views', __name__)
from flask_jwt_extended import (
    get_jwt_identity
) 

   

@views.route('/',endpoint="appointment", methods=['GET','POST'])

def make_appoitment():
    user_id = get_jwt_identity()
    if not user_id:
        return jsonify({
            'error': 'User not logged in'
        }), 401
    
    sheduled_time = request.json['sheduled_time']
    approved = request.json['approved']

    appoitments = Appointment.query.filter_by(user_id=user_id)

    if appoitments is None:
        return jsonify({
            "error": "User has no appoitments"
            }), 401

    new_appoitment = Appointment(sheduled_time=sheduled_time,approved=approved)
    db.session.add(new_appoitment)
    db.session.commit()
    return jsonify({
        "id": new_appoitment.id,
        "created_at":new_appoitment.created_at,
        "scheduled_time":new_appoitment.scheduled_time,
        "user_id":new_appoitment.user_id

    })

@views.route("/stories", endpoint="stories",methods=['GET', 'POST'])

def make_stories():
    user_id = get_jwt_identity()
    data = request.json['data']
    if not user_id:
        return jsonify({
            'error': 'User not logged in'
        }), 401
    user_story = Userstory.query.filter_by(user_id=user_id)
    if request.method == 'GET':
        return jsonify({
            "user_id":user_story.user_id,
            "data":user_story.data
        })
   # session[user_id] = user_story.user_id
    new_story = Userstory(data=data, user_id=user_id)
    db.session.add(new_story)
    db.session.commit()
    return jsonify({
        "id": new_story.id,
        "data": new_story.data,
        "user_id":new_story.user_id
    })
#return curent logged in in user
@views.route("/", endpoint="@me",methods=['GET'])
def get_current_user():
    user_id = get_jwt_identity()
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
    