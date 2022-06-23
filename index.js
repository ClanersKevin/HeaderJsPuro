const store = document.querySelector('.root').getAttribute('data-store');

const response = await fetch('https://s3.us-west-2.amazonaws.com/www.claners.com/uploads/site/cintillo.json');
const data = await response.json();

Object.keys(data).map(function (key) {
    if (key === store)
    {
        const container = document.getElementById("container");
        container.innerHTML = data[key].title;
        container.style.background = data[key].background;
        container.style.color = data[key].color;

        const link = document.getElementById("link");
        link.setAttribute("href", `https://www.${store}.com${data[key].url}`);
    }
})