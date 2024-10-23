from flask import Flask, render_template, request, jsonify, send_from_directory
import os

# Get the absolute path of the project root directory
project_root = os.path.abspath(os.path.dirname(__file__))
# Set the static folder to an absolute path
static_folder = os.path.join(project_root, 'static')

app = Flask(__name__, static_folder=static_folder, template_folder=os.path.join(project_root, 'templates'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_animal_image', methods=['POST'])
def get_animal_image():
    animal = request.form.get('animal')
    image_path = f'/static/images/{animal}.jpg'
    return jsonify({'image_path': image_path})

@app.route('/upload_file', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        file_info = {
            'name': file.filename,
            'size': f'{len(file.read())} bytes',
            'type': file.content_type
        }
        return jsonify(file_info)

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True)
