const Main = {};

(() => {
  const clickStates = {
    hamburgerMenu: false,
    features: false,
    company: false
  }

  const ICON_MENU = '../assets/icon-menu.svg'
  const ICON_CLOSE_MENU = '../assets/icon-close-menu.svg'

  const ICON_ARROW_DOWN = '../assets/icon-arrow-down.svg'
  const ICON_ARROW_UP = '../assets/icon-arrow-up.svg'

  Main.hamburgerMenuOnClick = (e) => {
    const menu = document.querySelector('.nav-menu')
    const overlay = document.querySelector('.mobile-overlay')

    if (clickStates.hamburgerMenu) {
      e.style.setProperty('--hamburger-icon', `url(${ICON_MENU})`)
      menu.style.display = 'none'
      overlay.style.display = 'none'
      clickStates.hamburgerMenu = false

      return
    }

    e.style.setProperty('--hamburger-icon', `url(${ICON_CLOSE_MENU})`)
    menu.style.display = 'block'
    overlay.style.display = 'block'
    clickStates.hamburgerMenu = true
  }// - hamburgerMenuOnClick

  Main.dropdownOnClick = (e, dropdownName) => {
    // Do nothing on desktop, :hover CSS pseudo should be used instead
    if (!isMobile()) {
      return
    }

    const ddContent = e.querySelector('.dropdown .dropdown-content')
    const caretEl = e.querySelector('.caret')

    // Just some sanity check
    if (typeof clickStates[dropdownName] === 'undefined') {
      console.error(`Invalid click state [key='${dropdownName}]' on dropdownOnClick()`)
      
      return
    }

    if (clickStates[dropdownName]) {
      caretEl.style.setProperty('--caret-icon', `url(${ICON_ARROW_DOWN})`)
      ddContent.style.display = 'none'
      clickStates[dropdownName] = false

      return
    }

    caretEl.style.setProperty('--caret-icon', `url(${ICON_ARROW_UP})`)
    ddContent.style.display = 'block'
    clickStates[dropdownName] = true
  }// - dropdownOnClick


  // Private functions
  function isMobile() {// Workaround - check if we are in mobile view
    // We check if the hamburger menu is on the screen.
    // If found, return true. Otherwise, false.
    const elm = document.querySelector('.hamburger-menu')
    const style = window.getComputedStyle(elm)
    const val = style.getPropertyValue('display')

    if (val !== 'none') return true

    return false
  }// - isMobile
})();
