#This the vies bluebrint of our app
from flask import Blueprint, render_template,session
from flask_login import login_required, current_user
views = Blueprint('views', __name__)

@views.route('/')
def index():
    return render_template('index.html', user =current_user)

@views.route('/@me/appoitment', methods=['GET','POST'])
def make_appoitment():
    user_id = session.get('user_id')
    
    return


