from web import db
from flask_login import UserMixin
from datetime import datetime
from sqlalchemy.sql import func
from uuid import uuid4


def get_uuid():
    return uuid4().hex

class User(db.Model, UserMixin):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345), nullable=False,unique=True)
    password  = db.Column(db.String(150), nullable=False)
    #utype = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150), nullable=False)
    last_name = db.Column(db.String(150), nullable=False)
    stories = db.relationship('Userstory')
    appointments = db.relationship('Appointment')

class Userstory(db.Model):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    data = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.String(32), db.ForeignKey('user.id'), unique=True, nullable=False)

class Appointment(db.Model):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())
    scheduled_time = db.Column(db.DateTime, nullable=False)
    issue = db.Column(db.String(150), nullable=False)
    status = db.Column(db.Boolean, nullable=False,default=False)
    user_id = db.Column(db.String(32), db.ForeignKey('user.id'))
    co_id =db.Column(db.String(32), db.ForeignKey('counsilor.id'))

class Counsilor(db.Model):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid())
    Name = db.Column(db.String(32), nallable=False)
    email = db.Column(db.String(32), nullable=False)
    password = db.Column(db.String(32), nullable=False)





