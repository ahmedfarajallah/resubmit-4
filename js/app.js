// select all sections
const branches = document.querySelectorAll("section");

// get ul element
const ulElement = document.getElementById("navbar__list");

// creat new fragment
const fragment = new DocumentFragment();




// Make toggle menu
// // get menu_icon
// const menuIcon = document.querySelector('.menu__icon');

// // add open class to ul when clicked
// menuIcon.onclick = function (e) {
//   e.stopPropagation();
//   ulElement.classList.toggle('open');
// }

// // remove open class when click any where in the document except the menu__icon & the ul list
// document.addEventListener('click', (e)=>{

//   if(e.target !== menuIcon && e.target !== ulElement) {

//     if(ulElement.classList.contains("open")) {

//       ulElement.classList.toggle("open");

//     }

//   }
// })

// // stop propagation
// ulElement.onclick = function(e) {

//   e.stopPropagation();

// }





// make dynamically navigation
branches.forEach((branch) => {
  // creat li element
  const liElement = document.createElement("li");
  // creat anchor element
  const anchorElement = document.createElement("a");
  // add class name to li element
  anchorElement.className = "menu__link";
  // add href attribute to the anchor
  anchorElement.href = `#${branch.id}`;
  //add section title to anchor
  anchorElement.textContent = branch.dataset.acontent;
  // append a element to the li element
  liElement.appendChild(anchorElement);
  // append li to fragment
  fragment.appendChild(liElement);

  // smooth behavior
  anchorElement.onclick = function (e) {
    e.preventDefault();
    branch.scrollIntoView({ behavior: "smooth" });
  };
});
// append fragment to the ul
ulElement.appendChild(fragment);



// Make highlights on section link when the section view at the scroll area
window.onscroll = (_) => {
  branches.forEach((branch) => {
    let branchTop = branch.getBoundingClientRect().top;
    let connect = document.querySelector(`a[href="#${branch.id}"]`);
    if (branchTop >= -400 && branchTop <= 100) {
      connect.classList.add("active");
      connect.classList.add("your-active-class");
    } else {
      connect.classList.remove("active");
      connect.classList.remove("your-active-class");
    }
  });
};



// Another way to (Make highlights on section link when the section view at the scroll area) 
// window.onscroll = function () {
//   branches.forEach(branch =>{
//     const branchOffsetTop = branch.offsetTop;
//     const branchOuterHeight = branch.offsetHeight;
//     const windowHeight = window.innerHeight;
//     const windowScrollTop = window.pageYOffset;
//     const connect = document.querySelector(`a[href="#${branch.id}"]`);
//     if(windowScrollTop > (branchOffsetTop + branchOuterHeight - windowHeight  - 200) && windowScrollTop < (branchOffsetTop + branchOuterHeight - windowHeight + 713)) {
//       connect.classList.add("active");
//       connect.classList.add("your-active-class");
//     } else {
//       connect.classList.remove("active");
//       connect.classList.remove("your-active-class");
//     }
//   })
// }