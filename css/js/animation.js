function summarizeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copyBtn');

    output.innerHTML = "⏳ Summarizing...";
    copyBtn.style.display = "none";

    axios.post('https://text-summarizer-backend-8h7i.onrender.com', { text })
        .then(res => {
            output.innerHTML = res.data.summary;
            copyBtn.style.display = "block";
        })
        .catch(err => {
            console.error(err);
            output.innerHTML = "❌ Error summarizing text.";
            copyBtn.style.display = "none";
        });
}

function copySummary() {
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.innerText).then(() => {
        alert("Summary copied!");
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}
