let color = undefined

/**
 * Listener
 */

$(document).on('click', function() {
    onClickMeClicked()
})

/**
 * Controller
 * Actions taken after 'Click Me' button, clicked
 */

function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI background
 */

function updateBg() {
    color = getRandomBgColor()
    showBgColor(color)
}

/**
 * Builds a random color in hex format
 * @returns the background color
 */
function getRandomBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2']

    const hex = [...letters, ...digits]

    color = '#'
    for (let i = 1; i <=6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    return color
}

/**
 * Fills the values of correspoding UI Elements.
 * @param {String} BgColor - given color
 */
function showBgColor(BgColor) {

    $('#hex').html(BgColor)
    $('body').css('backgroundColor', BgColor)
    
}