    fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeDad => {
        const jokeText = jokeDad.attachments[0].text;
        document.getElementById('demo').innerHTML = jokeText;
    });