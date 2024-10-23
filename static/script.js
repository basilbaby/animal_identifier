document.addEventListener('DOMContentLoaded', () => {
    const animalSelector = document.querySelector('.animal-selector');
    const animalImage = document.getElementById('animal-image');
    const fileInput = document.getElementById('file-input');
    const fileInfo = document.getElementById('file-info');

    animalSelector.addEventListener('change', (event) => {
        if (event.target.type === 'radio') {
            const selectedAnimal = event.target.value;
            fetch('/get_animal_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `animal=${selectedAnimal}`,
            })
            .then(response => response.json())
            .then(data => {
                animalImage.src = data.image_path;
                animalImage.alt = selectedAnimal;
                animalImage.style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
        }
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload_file', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    fileInfo.textContent = data.error;
                } else {
                    fileInfo.innerHTML = `
                        <p><strong>Name:</strong> ${data.name}</p>
                        <p><strong>Size:</strong> ${data.size}</p>
                        <p><strong>Type:</strong> ${data.type}</p>
                    `;
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
