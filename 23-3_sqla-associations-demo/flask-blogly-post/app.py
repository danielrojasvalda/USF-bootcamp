"""Blogly application."""
from flask import Flask, request, render_template,  redirect, flash, url_for
#from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag

app = Flask(__name__)

app.app_context().push() # put this under app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']  =  False
app.config['SQLALCHEMY_ECHO'] =  True
app.config['SECRET_KEY'] = "soccer123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

DEFAULT_IMAGE_URL = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"

#toolbar = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

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

####### SECOND PART POST

# Handle add form; add post and redirect to the user detail page
@app.route('/users/<int:user_id>/posts/new', methods=['GET', 'POST'])
def new_post(user_id):
    # Handle form submission for creating a new post
    if request.method == 'POST':
        # Retrieve form data
        title = request.form.get('title')
        content = request.form.get('content')
        
        # Create a new post and associate it with the user
        user = User.query.get_or_404(user_id)
        post = Post(title=title, content=content, user=user)
        
        # Add the post to the database
        db.session.add(post)
        db.session.commit()
        
        # Redirect to the user's detail page, or wherever you want to go after creating a post
        return redirect(url_for('user_detail', user_id=user_id))
    
    # Render the form for creating a new post
    return render_template('new_post.html', user_id=user_id)

# Show a post and provide options to edit and delete
@app.route('/posts/<int:post_id>', methods=['GET'])
def post_detail(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('post_detail.html', post=post)

# Show form to edit a post
@app.route('/posts/<int:post_id>/edit', methods=['GET'])
def edit_post_form(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('edit_post.html', post=post)

# Handle editing of a post
@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    post.title = request.form['title']
    post.content = request.form['content']
    db.session.commit()
    flash('Post updated successfully', 'success')
    return redirect(url_for('post_detail', post_id=post_id))

# Delete a post
@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    # Retrieve the post using the same session
    post = db.session.query(Post).get(post_id)

    # Delete the post using the same session
    db.session.delete(post)
    db.session.commit()
    flash('Post deleted successfully', 'success')
    return redirect(f"/user/{post.user_id}")

####### End Part 2

####### Part 3
@app.route('/tags')
def list_tags():
    tags = Tag.query.all()
    return render_template('list_tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def tag_detail(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('tag_detail.html', tag=tag)

@app.route('/tags/new', methods=['GET', 'POST'])
def new_tag():
    if request.method == 'POST':
        name = request.form.get('name')
        tag = Tag(name=name)
        db.session.add(tag)
        db.session.commit()
        flash('Tag added successfully', 'success')
        return redirect(url_for('list_tags'))
    return render_template('new_tag.html')

@app.route('/tags/<int:tag_id>/edit', methods=['GET', 'POST'])
def edit_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    if request.method == 'POST':
        tag.name = request.form.get('name')
        db.session.commit()
        flash('Tag updated successfully', 'success')
        return redirect(url_for('list_tags'))
    return render_template('edit_tag.html', tag=tag)

@app.route('/tags/<int:tag_id>/delete', methods=['POST'])
def delete_tag(tag_id):
    #tag = Tag.query.get_or_404(tag_id)
    tag = db.session.query(Tag).get(tag_id)

    db.session.delete(tag)
    db.session.commit()
    flash('Tag deleted successfully', 'success')
    return redirect(url_for('list_tags'))


###### End Part 3
if __name__ == '__main__':
    app.run(debug=True)
