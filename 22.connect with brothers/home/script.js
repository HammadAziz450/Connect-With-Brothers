
const text = document.querySelector(".sec-txt");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "HTML ";
            }, 0);
            setTimeout(() => {
                text.textContent = "CSS";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Bootstrap ";
            }, 8000);
            setTimeout(() => {
                text.textContent = "Wordpres  ";
            }, 12000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 16000);