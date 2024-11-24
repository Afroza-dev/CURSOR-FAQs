let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector('.cursorSm');

function cursorMove(event){
  let left = event.pageX;
  let top = event.pageY;
  cursor.style.top = `${top}px`;
  cursor.style.left = `${left}px`;
  cursorSm.style.top = `${top}px`;
 cursorSm.style.left = `${left}px`;

  
}

window.addEventListener('mouseover',cursorMove);



const faqs = document.querySelectorAll('.faq');

// forEach loop

//   faqs.forEach(faq => {
//       faq.addEventListener('click', () => {
//       faqs.forEach((subcontent) => {
//         subcontent.classList.remove('active')
//       })
//       faq.classList.toggle('active')
//      })
//   });

//   forof loop

 function toggleFAQ(event){
    for(faq of faqs)
        {faq.classList.remove('active');}     
    event.currentTarget.classList.add('active'); }

for(faq of faqs)
    {faq.addEventListener('click', toggleFAQ)}