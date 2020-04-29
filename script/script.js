let leftScore = 0;
let rightScore = 0;

window.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode
    switch (keyCode) {
        case 49:
            updateDom('leftCounter',leftScore+=1)
            break;
        case 50:
            updateDom('rightCounter',rightScore+=1)
            break;
        case 52:
            updateDom('leftCounter', leftScore-=1)
            break;
        case 53:
             updateDom('rightCounter', rightScore-=1)
            break;
        case 97:
            updateDom('leftCounter', leftScore += 1)
            break;
        case 98:
            updateDom('rightCounter', rightScore += 1)
            break;
        case 100:
            updateDom('leftCounter', leftScore -= 1)
            break;
        case 101:
            updateDom('rightCounter', rightScore -= 1)
            break;
        default:
            break;
    }
})

const updateDom = (id, newValue) => {
    const el = document.getElementById(id);
    el.innerHTML = newValue;
    el.classList.add('animate')
    const newone = el.cloneNode(true);
    el.parentNode.replaceChild(newone, el);
}
