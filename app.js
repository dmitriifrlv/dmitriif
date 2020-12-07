//selectors
let rus = document.querySelector("#rus");
let eng = document.querySelector("#eng");
let fr = document.querySelector('#fr')
let about = document.querySelector("#about");
let work = document.querySelector("#myProjects");
let contacts = document.querySelector("#myContacts");
let h1 = document.querySelector("h1");
let hi = document.querySelector("#hi");
let work2 = document.querySelector("#work");
let a = document.querySelectorAll(".project-tile")[0];
let b = document.querySelectorAll(".project-tile")[1];
let c = document.querySelectorAll(".project-tile")[2];
let d = document.querySelectorAll(".project-tile")[3];
let git = document.querySelector("#git");
let aboutMe = document.querySelector("#aboutMe");

let string = 'Front-end Web Developer';
let str = string.split('')


eng.addEventListener('click', toEng);
rus.addEventListener('click', toRus);
fr.addEventListener('click', toFrench);

//functions

(function animate() {
    str.length > 0 ? h1.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();



function toRus(event) {
    h1.innerText = '';
    let string = 'Front-end разработчик';
    let str = string.split('');
    (function animate() {
        str.length > 0 ? h1.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })();
    about.innerText = "Обо мне";
    work.innerText = "Мои работы";
    contacts.innerText = "Контакты";
    // h1.innerText = "Frontend разработчик";
    hi.innerHTML = `Привет! Я самостоятельно изучаю frontend разработку вэб-приложений. Взгляни на <a href="#work" id="underline">мои работы</a>!`;
    work2.innerText = "Вот несколько моих проектов:";
    a.innerText = "Страница посвященная Стиву Джобсу";
    b.innerText = "Страница опроса";
    c.innerText = "Cтраница пиццерии";
    d.innerText = "Приложение составления списка дел";
    git.innerHTML = `Посмотреть все мои проекты можно на моей странице <a href="https://github.com/dmitriifrlv">GitHub</a>.`
    aboutMe.innerHTML = `      <div id="back">  <p> Примерно 15 лет назад я сделал свой первый вебсайт на платформе <a href="https://www.ucoz.com/">ucoz</a>. Тогда я увлекался велотриалом и хотел создать свой собственный ресурс на эту тему. Время проходит, наступает 2020 и я решил посмотреть как сегодня можно создать свой сайт. В этот раз, я захотел построить сайт полностью самостоятельно, с нуля, не исользуя никаких конструкторов сайтов. Так, я нашел отличное пошаговое <a href="https://www.youtube.com/playlist?list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc">руководство</a> на YouTube созданное Will Tern. Мне понравился этот процесс и я решил изучить эту тему поглубже. С тех пор я самостоятельно изучаю программирование по онлайн ресурсам на freeCodeCamp, Udemy, YouTube, читая документацию на MDN а также книги по программированию. Я закончил 2 программы на образовательной платформе freeCodeCamp - <a href="https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design">Responsive Web Design</a> и <a
        href="https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>. По ходу изучения программирования я нашел много потрясающих информационных образовательных ресурсов, доступных каждому и, однажды, решил создать свой собственный блог на <a href="https://dmitriifrolov.medium.com">medium</a>. Я собираюсь пополнять его контентом который, надеюсь, будет полезным для других людей и, возможно, сможет зажечь интерес к программированию также как это в свое время сделал канал Will-а для меня.</p>
<p>Мои текущие навыки веб-програмирования:</p>
<ul>
    <li>JavaScript (знание базовых структур данных и алгоритмов, DOM-манипуляции, ES6-синтакс)</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Знание принципов объектно-ориентированного и функционального програмирования</li>
    <li>Поиск и устранение багов</li>
    <li>Создание адаптивных и доступных веб-страниц</li>
</ul>
<p>В данный момент, я продолжаю развивать мои существующие навыки, и изучаю React и Bootstrap. Моя конечная цель - построить full-stack приложение.</p> </div>
<p id="farewell">Спасибо за внимание и отличного дня!</p>
`
};

function toEng(event) {
    h1.innerText = '';
    let string = 'Front-end Web Developer';
    let str = string.split('');
    (function animate() {
        str.length > 0 ? h1.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })();
    about.innerText = "About";
    work.innerText = "Work";
    contacts.innerText = "Contact";
    // h1.innerText = "Front-end Web Developer";
    hi.innerHTML = `Hi! I'm a self-taught front-end web developer. Take a look at <a href="#work" id="underline">some of my projects</a>!`;
    work2.innerText = "These are some of my projects:";
    a.innerText = "Tribute Page";
    b.innerText = "Survey Form";
    c.innerText = "Product Landing Page";
    d.innerText = "To Do List App";
    git.innerHTML = `To see all of my projects please visit my <a href="https://github.com/dmitriifrlv">GitHub</a> page.`
    aboutMe.innerHTML = `<div id="back"><p>It must have been about 15 years ago when I built my first website with constructor on <a href="https://www.ucoz.com/">ucoz</a>. Back then I was into bike trial and wanted to create my own web resource on this topic. Time went on and here
    we go - the year 2020, I decided to see what it looks like to build a website nowadays. This time I did not want to use any templates but built my own single page website from the scratch. So, I found a
    really amazing step by step <a href="https://www.youtube.com/playlist?list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc">tutorial</a> on YouTube by Will Tern. I enjoyed the process and decided to dive deeper into the topic. I have been teaching
    myself since that
    moment for a while using a number of online tutorials on freeCodeCamp, Udemy, YouTube, reading the documentation on MDN and programming books. I have finished 2 programs on
    online coding bootcamp freeCodeCamp - <a href="https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design">Responsive Web Design</a> and <a
        href="https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>. During my journey of studying web development, I found many amazing
    resources are available to everyone and one day I decided to create my own blog on <a href="https://dmitriifrolov.medium.com">medium</a>. I am going to fill it with some content which is hopefully will be helpful for
    someone or
    even
    spark the same interest for programming as it did Will's channel for me.</p>
<p>My current web-development skils:</p>
<ul>
    <li>JavaScript (knowledge of basic data structures and algorithm scripting, DOM-manipulation, ES6-syntax)</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Knowledge of principles of Object Oriented and Functional Programming</li>
    <li>Debugging</li>
    <li>Creating responsive and accessible web pages</li>
</ul>
<p>At the moment, I continue to develop my existing skills and I learn React and Bootstrap. My final goal is to be able to create full-stack applications.</p> </div>
<p id="farewell">Thank you for your attention and have a great day!</p>

`
};

function toFrench(event) {
    h1.innerText = '';
    let string = 'Développeur Front-End';
    let str = string.split('');
    (function animate() {
        str.length > 0 ? h1.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })();
    about.innerText = "À propos de moi";
    work.innerText = "Mes travaux";
    contacts.innerText = "Contact";
    // h1.innerText = "Développeur Front-End";
    hi.innerHTML = `Salut! Je suis un développeur front-end autodidacte. 
    Jetez un œil à certains de <a href="#work" id="underline">mes projets</a>!`;
    work2.innerText = "Voici quelques-uns de mes projets:";
    a.innerText = "Page hommage";
    b.innerText = "Page de formulaire d'enquête";
    c.innerText = "Page de destination du produit";
    d.innerText = "Liste de choses à faire";
    git.innerHTML = `
    Pour voir tous mes projets, veuillez visiter ma <a href="https://github.com/dmitriifrlv">GitHub page</a>.`
    aboutMe.innerHTML = `<div id="back"><p>Cela devait être il y a environ 15 ans lorsque j'ai construit mon premier site Web avec un constructeur sur <a href="https://www.ucoz.com/">ucoz</a>. À l'époque, j'étais dans le vélo trial et je voulais créer ma propre ressource Web sur ce sujet.  Le temps passait et nous y voilà - l 'année 2020, j'
    ai décidé de voir à quoi cela ressemblait de créer un site Web de nos jours. Cette fois, je ne voulais pas utiliser de modèles, mais j 'ai créé mon propre site Web d'
    une seule page à partir de zéro. Donc, j'ai trouvé <a href="https://www.youtube.com/playlist?list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc">un tutoriel</a> étape par étape vraiment incroyable sur YouTube par Will Tern.J '
    ai apprécié le processus et j 'ai décidé d'
    approfondir le sujet.Depuis ce moment, je m 'enseigne moi-même depuis un certain temps en utilisant un certain nombre de tutoriels en ligne sur freeCodeCamp, Udemy, YouTube, en lisant la documentation sur MDN et des livres de programmation. J'
    ai terminé 2 programmes sur le codage en ligne bootcamp freeCodeCamp - <a href="https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design">Responsive Web Design</a> et <a
        href="https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>. Au cours de mon parcours d'étude du développement Web, j'ai trouvé de nombreux
        les ressources sont accessibles à tous et un jour j'ai décidé de créer mon propre blog sur <a href="https://dmitriifrolov.medium.com">medium</a>. Je vais le remplir avec du contenu qui, espérons-le, sera utile à quelqu'
    un ou même suscitera le même intérêt pour la programmation que la chaîne de Will pour moi.</p>
<p>Mes compétences actuelles en développement:</p>
<ul>
    <li>JavaScript (
        connaissance des structures de données de base et des scripts d'algorithmes, DOM-manipulation, ES6-syntaxe)</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>
    Connaissance des principes de la programmation orientée objet et fonctionnelle</li>
    <li>Débogage</li>
    <li>
    Créer des pages Web réactives et accessibles</li>
</ul>
<p>
En ce moment, je continue à développer mes compétences existantes et j'apprends React et Bootstrap. Mon objectif final est de pouvoir créer des applications full-stack.</p> </div>
<p id="farewell">
Merci pour votre attention et bonne journée!</p>
`
};
