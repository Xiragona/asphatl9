function showImage(imageId) {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.classList.add('hidden');
    });
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.remove('hidden');
}
