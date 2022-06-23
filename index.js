let headerContainerBanner = document.querySelector('#headerContainerBanner').getAttribute('data-store');

const a = document.createElement('a');
a.setAttribute("id", "linkSiteBanner");
a.setAttribute("target", "_blank");

const div = document.createElement('div'); 
div.setAttribute("id", "bannerSite");

a.appendChild(div);

document.querySelector('#headerContainerBanner').appendChild(a);

const response = await fetch('https://s3.us-west-2.amazonaws.com/www.claners.com/uploads/site/cintillo.json');
const data = await response.json();

const bannerSite = document.getElementById("bannerSite");
try 
{
    bannerSite.innerHTML = data[headerContainerBanner].title;
    bannerSite.style.background = data[headerContainerBanner].background;
    bannerSite.style.color = data[headerContainerBanner].color;
    bannerSite.style.minHeight = "32px";
    bannerSite.style.display = "grid";
    bannerSite.style.alignContent = "center";
    bannerSite.style.textAlign = "center";
    bannerSite.style.padding = "0.5rem";
    bannerSite.style.top = "0px";
    bannerSite.style.left = "0px";
    bannerSite.style.font = "normal normal bold 15px Roboto";

    const linkSiteBanner = document.getElementById("linkSiteBanner");
    linkSiteBanner.style.textDecoration = "none";
    linkSiteBanner.style.boxSizing = "border-box";

    const bodyBanner = document.getElementById("bodyBanner")
    bodyBanner.style.margin = "0";
    linkSiteBanner.setAttribute("href", `https://www.${headerContainerBanner}.com${data[headerContainerBanner].url}`);
} 
catch (error) 
{
    console.log(error.message)
}