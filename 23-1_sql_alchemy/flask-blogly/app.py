"""Blogly application."""
from flask import Flask, request, render_template,  redirect, flash, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)

app.app_context().push() # put this under app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']  =  False
app.config['SQLALCHEMY_ECHO'] =  True
app.config['SECRET_KEY'] = "soccer123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

DEFAULT_IMAGE_URL = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"

toolbar = DebugToolbarExtension(app)

connect_db(app)
#db.create_all()

@app.route('/')
def user_listing():
    users = User.query.all()
    return render_template('users.html', users=users)

@app.route('/new_user', methods=['GET', 'POST'])
def new_user():
    if request.method == 'POST':
        """ Handle form submission and add user to the database"""
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        image_url = request.form.get('image_url')
        image_url = request.form.get('image_url') or DEFAULT_IMAGE_URL  # Use default if not provided
        new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('user_listing'))
    """Show a form to create a new user"""
    return render_template('new_user.html')

@app.route('/user/<int:user_id>')
def user_detail(user_id):
    """Show a page with info on a specific user"""
    user = User.query.get(user_id)
    if user:
        return render_template('user_detail.html', user=user)
    return "User not found", 404


@app.route('/user/<int:user_id>/edit', methods=['GET', 'POST'])
def user_edit(user_id):
    user = User.query.get(user_id)
    if not user:
        return "User not found", 404

    if request.method == 'POST':
        """ Handle form submission and update user in the database"""
        user.first_name = request.form.get('first_name')
        user.last_name = request.form.get('last_name')
        user.image_url = request.form.get('image_url')
        db.session.commit()
        return redirect(url_for('user_detail', user_id=user.id))
    """Show a form to edit an existing user"""
    return render_template('user_edit.html', user=user)

@app.route('/user/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    """Handle form submission for deleting an existing user"""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    flash('User deleted successfully', 'success')
    return redirect(url_for('user_listing'))


if __name__ == '__main__':
    app.run(debug=True)
