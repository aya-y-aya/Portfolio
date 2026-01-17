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

    //Certificate & Courses Section
    const certificateDetails =[
        ['Introduction to Cloud 101','Jan 2026','A Foundational Course on AWS Educate.','Foundational Knowledge on Cloud Computing,  AWS Core Services, and Cloud Careers.','https://www.credly.com/badges/4cd8f78b-96ac-4d98-ae08-0dc88c8d56bc/linked_in_profile'],
        ['IT Specialist - IT Networking','May 2025','Information Technology Specialist: Networking Certification from Certiport.','Foundational Knowledge on Network Infrastructures, Hardware,  Protocol and Services, and Troubleshooting.','https://www.credly.com/badges/29fa585c-554e-4535-95a7-e8618a0beb0f/linked_in_profile'],
        ['Programming with JavaScript','July 2024','Course completion on JavaScript offered by META in Coursera.','Foundational knowledge on JavaScript concepts and syntax.','https://www.coursera.org/account/accomplishments/verify/7MX5FKEK849U'],
        ['Introduction to Front-End Development','June 2024','Course completion on Front-End Development offered by META in Coursera.','Foundational knowledge on HTML structure CSS, and General Networking.','https://www.coursera.org/account/accomplishments/verify/YSQWHXGGWT2L'],
        ['Introduction to Data Analysis using Microsoft Excel','June 2024','Course completion on Data Analysis using Microsoft Excel offered by Coursera.','Foundational knowledge on  Microsoft Excel Formulas and Data Manipulation.','https://www.coursera.org/account/accomplishments/verify/ZYXMXM4YEQGZ'],
        ['Infrastructure Camp Workshop','April 2024','A Infrastructure Camp: AWS CC - PUP Manila','Foundational Knowledge in AWS Identity and Access Management (IAM), Virtual Private Cloud (VPC), and Amazon Simple Storage Service (S3).','./view/Vargas_Infrastructure-Camp.png']
    ];

    const certiContainer = document.getElementById('certificate-container');

    certificateDetails.forEach(([title, date, desc1, desc2, url])=>{
        // create a div per certifications
        const certiDiv = document.createElement('div');
        certiDiv.className = 'bg-white rounded-lg p-4 w-auto h-auto drop-shadow-lg';
        certiContainer.appendChild(certiDiv);

        // create header div (title and date)
        const headerDiv = document.createElement('div');
        headerDiv.className = 'flex flex-row justify-between';
        certiDiv.appendChild(headerDiv);

        // create element for  title and date
        const titleDiv = document.createElement('h3');
        const dateDiv = document.createElement('h3');
        Object.assign(titleDiv, {
            textContent: title,
            className: 'font-libre-baskerville font-bold text-[16px]'
        });
        Object.assign(dateDiv, {
            textContent: date,
            className: 'font-libre-baskerville font-bold text-[14px]'
        });
        headerDiv.appendChild(titleDiv);
        headerDiv.appendChild(dateDiv);

        // create element for Description div
        const descDiv = document.createElement('div');
        descDiv.className = 'flex p-2';
        certiDiv.appendChild(descDiv);

        // create element for Unordered List
        const unorderedList = document.createElement('ul');
        unorderedList.className = 'list-disc font-figtree text-[14px] text-left space-y-2 pl-5';
        descDiv.appendChild(unorderedList);
        
        // create element for 2 list items
        const listDesc1 = document.createElement('li');
        listDesc1.textContent = desc1;
        unorderedList.appendChild(listDesc1);

        const listDesc2 = document.createElement('li');
        listDesc2.textContent = desc2;
        unorderedList.appendChild(listDesc2);
    
        // create element for link
        const link = document.createElement('a');
        Object.assign(link, {
            textContent: 'View Certification',
            className: 'font-figtree text-[14px] text-rose-600 underline visited:text-rose-950',
            href: url,
            target: '_blank'
        });
        certiDiv.appendChild(link);
    });

    // Projects Section
    const projectsDetails = [
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com'],
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com'],
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com'],
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com'],
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com'],
        ['/assets/images/projects/placeholder.jpg','project-picture', 'Front-End: TicTacToe', 'lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 'https://www.google.com']
    ];

    const projectContainer = document.getElementById('project-container');

    projectsDetails.forEach(([imgSrc, altImg, projectTitle, projectDescription, linkHref])=>{
        // div for individual project
        const projectDiv = document.createElement('div');
        projectDiv.className = 'rounded-lg w-75 h-auto overflow-hidden drop-shadow-lg';
        projectContainer.appendChild(projectDiv);

            // div for img placeholder
            const imgDiv = document.createElement('div');
            imgDiv.className = 'bg-rosy-copper-500 h-75';
            projectDiv.appendChild(imgDiv);

                // img
                const imgProject = document.createElement('img');
                Object.assign(imgProject, {
                    src: imgSrc,
                    alt: altImg,
                    className: 'h-full w-full object-cover'
                });
                imgDiv.appendChild(imgProject);

        // div for project body
        const projectBodyDiv = document.createElement('div');
        projectBodyDiv.className = 'grid col-3 bg-rosy-copper-100 h-auto p-4';
        projectDiv.appendChild(projectBodyDiv);

            // div for project title
            const projTitleDiv = document.createElement('div');
            projTitleDiv.className = 'grid col-span-3 font-libre-baskerville text-rosy-copper-950 text-[16px] font-bold p-1';
            projectBodyDiv.appendChild(projTitleDiv);

                // h3 for title
                const projTitleElement = document.createElement('h3');
                projTitleElement.textContent = projectTitle;
                projTitleDiv.appendChild(projTitleElement);

            // div for project description
            const projDescriptionDiv = document.createElement('div');
            Object.assign(projDescriptionDiv, {
                className: 'grid col-span-3 font-figtree text-rosy-copper-950 text-[12px] p-1',
                textContent: projectDescription
            });
            projectBodyDiv.appendChild(projDescriptionDiv);

                // p for project description content
                const projDescriptionContent = document.createElement('p');
                Object.assign(projDescriptionContent, {
                    textContent: projectDescription
                });
                projDescriptionDiv.appendChild(projDescriptionContent);

            // anchor element for more info
            const buttonMore = document.createElement('a');
            Object.assign(buttonMore, {
                href: linkHref,
                target: '_blank',
                className: 'grid col-span-1 col-start-3 place-content-center w-20 mt-2 p-1 rounded-[40px] bg-rosy-copper-600 hover:bg-rosy-copper-700 font-libre-baskerville text-rosy-copper-50 text-[12px] font-bold',
                textContent: 'MORE'
            });
            projectBodyDiv.appendChild(buttonMore);

    });
});