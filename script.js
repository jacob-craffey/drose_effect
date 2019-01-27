document.getElementById('fileInput').addEventListener('change', imageLoader, false);
var canvas = document.getElementById('image-canvas');
var ctx = canvas.getContext('2d');
var imageHeight;
var imageWidth;
var image;

function imageLoader() {
    var reader = new FileReader();
    reader.onload = function (event) {
        image = new Image();
        image.onload = function () {
            var imageDimensionRatio = image.width / image.height;
            imageWidth = canvas.width;
            imageHeight = imageWidth / imageDimensionRatio;
            if (imageHeight > canvas.height) {
                imageHeight = canvas.height;
                imageWidth = imageHeight * imageDimensionRatio;
            }
            ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
        }
        image.src = reader.result;
    }
    reader.readAsDataURL(fileInput.files[0]);
}

function drosteEffect() {
    for (var i = .7; i < 300; i += .3) {
        var newWidth = imageWidth / i;
        var newHeight = imageHeight / i;

        var x = (imageWidth - newWidth) / 2;
        var y = (imageHeight - newHeight) / 2;

        if (i >= 1) {
            ctx.drawImage(image, x, y, newWidth, newHeight);
        }
    }
}
