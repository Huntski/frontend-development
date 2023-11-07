import roles from "./RolesData.js"

/**
 * Click event to make the role option active.
 * @type {NodeListOf<Element>}
 */
const roleOptions = document.querySelectorAll('.role-option')

/* Visual elements that change when */
const imageElement = document.querySelector('.selected-role__image')
const nameElement = document.querySelector('.selected-role__title strong')
const titleElement = document.querySelector('.selected-role__title span')
const videoElement = document.querySelector('.roles--desktop__video video')

roleOptions.forEach(roleOption => {
    roleOption.addEventListener('click', () => {
        selectRole(roleOption.dataset.role)
    })
})

function selectRole(key) {
    disableCurrentActive()
    const roleData = roles[key]

    document.querySelectorAll(`.role-option[data-role=${key}]`).forEach(element => {
        element.classList.add('is-active')
    })

    imageElement.src = `./img/champions/${roleData.src}`
    videoElement.src = `clips/roles/${roleData.video}`
    nameElement.innerHTML = roleData.name
    titleElement.innerHTML = roleData.title
}

function disableCurrentActive() {
    const activeElements = document.querySelectorAll('.role-option.is-active')

    activeElements.forEach(element => {
        element.classList.remove('is-active')
    })
}

selectRole('assassins')
