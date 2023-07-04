#This the vies bluebrint of our app
from flask import Blueprint,session, request, jsonify
from web.models import Appointment,db
from flask_login import login_required, current_user
views = Blueprint('views', __name__)

   

@views.route('/@me/appoitment', methods=['GET','POST'])
def make_appoitment():
    created_at= request.json['created_at']
    sheduled_time = request.json['sheduled_time']
    user_id = request.json['user_id']
    approved = request.json['approved']

    appoitments = Appointment.query.filter_by(user_id=user_id)

    if appoitments:
        for app in appoitments:
            if Appointment.approved == True:
                return jsonify ({
                "created_at":app.created_at,
                "scheduled_at":app.sheduled_time
                }), 200
            else:
                return jsonify({
                    "create_at":app.created_at,
                    "scheduled_at":app.sheduled_time
                }), 401
    new_appoitment = Appointment(sheduled_time= sheduled_time,approved=approved)
    db.session.add(new_appoitment)
    db.session.commit()
    return jsonify({
        "id": new_appoitment.id,
        "created_at":new_appoitment.created_at,
        "scheduled_time":new_appoitment.scheduled_time,
        "user_id":new_appoitment.user_id

    })