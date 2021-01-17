var particles = NaN;

window.onload = function() {
    particles = Particles.init({
        selector: '.background',
        connectParticles: true,
        color: '#999999',
        sizeVariations: 3,
        maxParticles: 100,

        responsive: [
            {
                breakpoint: 1000,
                options: {
                    maxParticles: 0
                }
            }
        ]
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('mode') && urlParams.get('mode') === 'dark') {
            changemode();
    } else {
        var button = document.getElementsByClassName("switch");
        button[0].checked = !button[0].checked;
    }
};


let current = true;
function changemode() {
    let root = document.documentElement;
    if (current) {
        root.style.setProperty('--bg', '#293438');
        root.style.setProperty('--fg', '#ffffff');
        root.style.setProperty('--shadow', '#cccccc');
        current = false;
    } else {
        root.style.setProperty('--fg', '#293438');
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--shadow', '#D3DED9');
        current = true;
    }
}
