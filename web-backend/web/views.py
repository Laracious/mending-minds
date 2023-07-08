#This the vies bluebrint of our app
from flask import Blueprint,session, request, jsonify
from web.models import Appointment,db, Userstory
views = Blueprint('views', __name__)

   

@views.route('/appointment', methods=['GET','POST'])
def make_appoitment():
    user_id = session.get('user_id')
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

@views.route("/stories", methods=['GET', 'POST'])
def make_stories():
    
    user_id = session.get('user_id')
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
