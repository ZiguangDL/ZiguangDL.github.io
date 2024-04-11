# app.py  
from flask import Flask, render_template  
  
app = Flask(__name__, static_url_path='/login_files', static_folder="D:\\Documents\\pian\\templates\\login_files") 
  
@app.route('/')  
def index():  
    return render_template("login.html")
  
if __name__ == '__main__':  
    app.run(debug=True, port=80)