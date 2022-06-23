const root = document.querySelector('#root').getAttribute('data-store');

const a = document.createElement('a');
a.setAttribute("id", "link");
a.setAttribute("target", "_blank");
a.setAttribute("target", "_blank");

const div = document.createElement('div'); 
div.setAttribute("id", "container");

a.appendChild(div);

document.querySelector('#root').appendChild(a);

const response = await fetch('https://s3.us-west-2.amazonaws.com/www.claners.com/uploads/site/cintillo.json');
const data = await response.json();

Object.keys(data).map(function (key) {
    if (key === root)
    {
        const container = document.getElementById("container");
        container.innerHTML = data[key].title;
        container.style.background = data[key].background;
        container.style.color = data[key].color;
        container.style.minHeight = "32px";
        container.style.display = "grid";
        container.style.alignContent = "center";
        container.style.textAlign = "center";
        container.style.padding = "0.5rem";
        container.style.top = "0px";
        container.style.left = "0px";
        container.style.font = "normal normal bold 15px Roboto";


        const link = document.getElementById("link");
        link.style.textDecoration = "none";
        link.style.boxSizing = "border-box";

        const body = document.getElementById("body")
        body.style.margin = "0";
        link.setAttribute("href", `https://www.${root}.com${data[key].url}`);
    }
})