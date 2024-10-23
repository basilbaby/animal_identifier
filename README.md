# AnimalID.ai - Animal Identifier and File Uploader

A Flask-based web application that allows users to select an animal and view its image, as well as upload a file and see its details.

## Features

- Select an animal (cat, dog, or elephant) and view its image
- Upload any file and see its name, size, and type
- Responsive design for various screen sizes

## Setup

1. Ensure you have Python 3.7+ installed on your system.
2. Clone this repository:   ```
   git clone <repository-url>
   cd animal_identifier   ```
3. Create a virtual environment (optional but recommended):   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`   ```
4. Install required packages:   ```
   pip install flask   ```
5. Add animal images (cat.jpg, dog.jpg, elephant.jpg) to `static/images/` directory.

## Running the app

1. Run the Flask application:   ```
   python app.py   ```
2. Open a web browser and navigate to `http://127.0.0.1:5000/`

## Project Structure

- `app.py`: Flask backend
- `templates/index.html`: HTML template
- `static/styles.css`: CSS styles
- `static/script.js`: Frontend JavaScript
- `static/images/`: Directory for animal images
- `.gitignore`: Git ignore file

## Technologies

- Backend: Flask (Python)
- Frontend: HTML, CSS, JavaScript

## Contributing

Feel free to fork this project and submit pull requests with any improvements or bug fixes.

## License

This project is open-source and available under the MIT License.
