function AnimateMenuBars(element) {
  element.classList.toggle("AnimateMenu");
  document.body.classList.toggle("MenuOpen"); // Toggles class to show/hide the sidebar and overlay
}

// Close sidebar when clicking on the overlay
document.getElementById('MNBSN_Overlay').addEventListener('click', function() {
  document.querySelector('#MNB_MenuButtonBox').classList.remove('AnimateMenu');
  document.body.classList.remove('MenuOpen');
});

const dropdownTogglers = document.querySelectorAll('.MNBSN_SubMenuBoxToggler');

dropdownTogglers.forEach((toggler) => {
  toggler.addEventListener('click', function () {
    // Close any other open submenus
    const allSubMenus = document.querySelectorAll('.MNBSN_SubMenuBox');
    allSubMenus.forEach((submenu) => {
      if (submenu !== this.nextElementSibling) {
        submenu.classList.remove('MNBSN_SubMenuBoxActive');
      }
    });

    // Toggle the current submenu
    this.nextElementSibling.classList.toggle('MNBSN_SubMenuBoxActive');
  });
});

// Only click behaviour for menu button
document.querySelectorAll('.MNB_Menu').forEach(menu => {
  const toggleElements = menu.querySelectorAll('span');
  const submenu = menu.querySelector('.MNB_SubMenuBox');

  toggleElements.forEach(el => {
    el.addEventListener('click', () => {
document.querySelectorAll('.MNB_SubMenuBox').forEach(d => {
        if (d !== submenu) {
          d.style.visibility = 'hidden';
        }
      });
      if (submenu.style.visibility === 'visible') {
        submenu.style.visibility = 'hidden'; 
      } else {
        submenu.style.visibility = 'visible'; 
      }
    });
  });
});

// Click + hover behaviour for menu button (test using computer)

// document.querySelectorAll('.MNB_Menu').forEach(menu => {
//   const toggleElements = menu.querySelectorAll('span');
//   const submenu = menu.querySelector('.MNB_SubMenuBox');
//   toggleElements.forEach(el => {
//     el.addEventListener('click', () => {
//       const isSubmenuOpen = submenu.style.display === 'flex';
// document.querySelectorAll('.MNB_SubMenuBox').forEach(d => {
//         d.style.display = 'none';
//       });
//       submenu.style.display = isSubmenuOpen ? 'none' : 'flex';
//     });
//     el.addEventListener('mouseenter', () => {
//       submenu.style.display = 'flex';
//     });

//     menu.addEventListener('mouseleave', () => {
//       submenu.style.display = 'none';
//     });
//   });
// });
