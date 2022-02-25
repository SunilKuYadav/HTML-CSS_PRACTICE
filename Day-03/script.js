function switchTheme(val) {
    let element = document.documentElement.style;
    if(val.checked) {
        element.setProperty('--bgColorDark1', '#000')
        element.setProperty('--bgColorDark2', '#FF4C29')
        element.setProperty('--bgColorDark3', '#334756')
        element.setProperty('--bgColorDark4', '#2C394B')
        element.setProperty('--bgColorDark5', '#2D2424')
    } else {
        element.setProperty('--bgColorDark1', '#333');
        element.setProperty('--bgColorDark2', '#b57474');
        element.setProperty('--bgColorDark3', '#d0cdcd');
        element.setProperty('--bgColorDark4', '#5e4343');
        element.setProperty('--bgColorDark5', '#000');
    }
}
