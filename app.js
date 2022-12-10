// const image = document.getElementById('uploader');

function loadFile(event) {
    var image = document.getElementById('image');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function set_progress_bar(value) {
    document.getElementById('progress_bar').value = value;
}

function convert_to_text(lang) {
    const image = document.getElementById('image');
    set_progress_bar(0);
    console.log('start');

    Tesseract.recognize(
        image,
        lang,
        { logger: m => set_progress_bar(m.progress * 100) })
        .then(result => {
            console.log(result.data);
            document.getElementById('result').innerText = result.data.text;
        });
}
