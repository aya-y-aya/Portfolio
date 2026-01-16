// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    // Click event - Hamburger Icon
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Skills Section
    const skillSrcAlt = [
        ['../assets/images/Skills/HTML.png','HTML Logo','HTML'],
        ['../assets/images/Skills/CSS.png','CSS Logo','CSS'],
        ['../assets/images/Skills/Tailwind.png','Tailwind Logo','TailwindCSS'],
        ['../assets/images/Skills/Bootstrap.png','Bootstrap Logo','Bootstrap'],
        ['../assets/images/Skills/JavaScript.png','JavaScript Logo','JavaScript'],
        ['../assets/images/Skills/AndroidStudio.png','AndroidStudio Logo','Android Studio'],
        ['../assets/images/Skills/Java.png','Java Logo','Java'],
        ['../assets/images/Skills/CSharp.png','C# Logo','C#'],
        ['../assets/images/Skills/MySQL.png','MySQL Logo','MySQL'],
        ['../assets/images/Skills/PHP.png','PHP Logo','PHP'],
        ['../assets/images/Skills/ITNetworking.png','IT Networking Certification','IT Networking'],
        ['../assets/images/Skills/Cloud101Badge.png','Cloud Computing 101 Badge','Cloud Computing']
    ];

    const logoContainer = document.getElementById('skills-logo'); 
    logoContainer.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 place-items-center";
    skillSrcAlt.forEach(([src, alt, name]) => {
        // create a div element for the group hover effect
        const divElement = document.createElement('div');
        Object.assign(divElement,{
            className: 'group relative group-last:active:hidden'
        });
        logoContainer.appendChild(divElement);
        const imgElement = document.createElement('img'); 
        // create an img element from the skillsSrcAlt 2D array
        Object.assign(imgElement, {
            src, 
            alt, 
            // TO DO: Set the appropriate dimension for the logos based on the current Screen Width
            className: 'flex justify-center w-[100px] h-[100px] md:w-[130px] md:h-[130px] p-2 object-contain group-hover:opacity-30 object-cover'
        });
        divElement.appendChild(imgElement);
        // create another div
        const div2Element = document.createElement('div');
        Object.assign(div2Element, {
            className: 'w-auto h-auto absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        });
        divElement.appendChild(div2Element);
        // create a paragraph element for the skill
        const skillName = document.createElement('p');
        Object.assign(skillName, {
            className: 'text-rosy-copper-950 font-libre-baskerville font-bold text-[14px] text-center',
            textContent: name
        });
        div2Element.appendChild(skillName);
    });
});