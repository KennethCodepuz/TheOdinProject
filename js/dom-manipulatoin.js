const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para1 = document.createElement("p");
para1.classList.add('paragraph1');
para1.textContent = "Hey I'm red!";

container.appendChild(para1);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3";
heading3.style.color = 'blue';

container.appendChild(heading3);

const div = document.createElement('div');
div.setAttribute("style", "border: 1px solid black; background-color: pink;");

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
const divParagraph = document.createElement('p');
divParagraph.textContent = "ME TOO!";
div.appendChild(heading1);
div.appendChild(divParagraph);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.background = 'blue';
});