#This the vies bluebrint of our app
from flask import Blueprint,request, jsonify
from web.models import Appointment,db, Userstory,Counsilor

views = Blueprint('views', __name__)
from flask_jwt_extended import (
    get_jwt_identity, jwt_required
) 



   # session[user_id] = user_story.user_id
    

@views.route("/",endpoint="approve_appointment", methods=["PUT"])
@jwt_required
def approve_appointment():
    current_user_id = get_jwt_identity()
    if current_user_id is None:
        return jsonify({
            "error":"User not logged in"
        })
    appointments = Appointment.query.filter_by(user_id=current_user_id)
    if appointments.id == id:
        appointments.status == True
    db.session.commit(appointments)
    return jsonify({
        {
            "updated": appoitment.id
        }

    })
#return curent logged in in user

@views.route("/views/story",methods=['GET', 'POST'])
@jwt_required()
def make_stories():
    current_user_id = get_jwt_identity()
    data = request.json['data']
    if not current_user_id:
        return jsonify({
            'error': 'User not logged in'
        }), 401
    user_story = Userstory.query.filter_by(user_id=current_user_id)
    if request.method == 'GET':
        return jsonify({
            "user_id":user_story.user_id,
            "data":user_story.data
            })
    new_story = Userstory(data=data)
    db.session.add(new_story)
    db.session.commit()
    return jsonify({
        "id": new_story.id,
        "data": new_story.data,
        "user_id":new_story.user_id
    })
@views.route("/registered_councilors", methods=["GET"])
@jwt_required
def registered_councilors():
    user_id = get_jwt_identity()
    if user_id is None:
        return ({
            "error":"User not logged in"
        })
    counsilor = Counsilor.query_all(Counsilor.id).limit(2)
    if counsilor:
        for c in counsilor:
            return jsonify({
                "first_name":c.first_name
                })


