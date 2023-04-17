// const accordions = Array.from(document.querySelectorAll('.accordion'));

// accordions.forEach(accordion => {
//   const accordionHeader = accordion.querySelector('.aHeader');

//   accordionHeader.addEventListener('click', e => {
//     accordion.classList.toggle('isOpen');
//   })
// })





// tabs.addEventlistener('click', e => {
//   const tab = e.target.closest('.tab');

//   if(tab.classList.contains('selected')) {

//   }
// })

// tabs.forEach(tab => {
//   const tab = tabs.querySelector('.tab');

//   tab.addEventListener('click', e => {
//     tab.classList.toggle('selected');
//   })
// })

// const accordionContainer = document.querySelector('.aContainer');

// accordionContainer.addEventListener('click', e => {
//   const accordionHeader = e.target.closest('.aHeader');

//   if(accordionHeader) {
//     const accordion = accordionHeader.parentElement;
//     const accordionContent = accordionHeader.nextElementSibling;
//     const accordionInner = accordionContent.children[0];
//     let height;

//     if(accordion.classList.contains('isOpen')) {
//       height = 0;
//     } else {
//       height = accordionInner.getBoundingClientRect().height;
//     }
//     accordion.classList.toggle('isOpen');
//     accordionContent.style.height = height + 'px';
    
//     console.log(accordionInner);
//     console.log(accordionHeader);
//     console.log(accordionContent);
//     console.log(accordionContent.children[0]);
//     console.log(accordionContent.style.height);
//     console.log(height);
//     console.log(accordionInner.getBoundingClientRect());
//   }
// })


//MY TRY
// const content = document.querySelectorAll('.content');

// for(i=0; i < content.length; i++) {
//   content[i].style.display = "none";
// }

// const tabs = document.querySelectorAll('.tab');
// for (i=0; i < tabs.length; i++) {
//   tab[i].className = tab[i].className.add("selected");
// }


// EMILY CLASS
 const tContainer = document.querySelector('.tContainer');

 const tabs = Array.from(tContainer.querySelectorAll('.tab'));

 const tabContents = Array.from(tContainer.querySelectorAll('.content'));

 console.log(tContainer);
 console.log(tabs);
 console.log(tabContents);

 tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    console.log(tab);
    const target = tab.dataset.target;
    console.log(target);
    const tabContent = tContainer.querySelector('#' + target);
    console.log(tabContent);

    //remove/add selected class from buttons
    tabs.forEach(t => { 
    t.classList.remove('selected');
    tab.classList.add('selected');
    })

    //remove/add selected class from articles
    tabContents.forEach(c => c.classList.remove('selected'));
    tabContent.classList.add('selected');
  })
 })