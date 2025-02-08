async function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    const response = await fetch('/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl })
    });

    const data = await response.json();
    const resultDiv = document.getElementById('result');
    if (response.ok) {
        resultDiv.innerHTML = `Short URL: <a href="/${data.shortUrl}" target="_blank">/${data.shortUrl}</a>`;
    } else {
        resultDiv.textContent = 'Error shortening URL';
    }
}