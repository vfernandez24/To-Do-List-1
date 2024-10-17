const input = document.getElementById('input')
listContainer = document.getElementById('list-container')

let liNumber = 0,
checkNumber = 0,
uncheckNumber = 0;

console.log('Conectado')


// !! AÑADIR LI
function addTarea () {
    if (input.value === '') {
        alert('Debes introducir un nombre para la tarea')
    }
    else{
        console.log('Add '+input.value)
        let li = document.createElement('li')
        li.innerHTML = input.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveDatos()
    liNumber++
    uncheckNumber++
    saveData()
    autoSync()
}


// !! MARCAR / ELIMINAR LI
listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('checked')) {
            checkNumber--
            uncheckNumber++
            saveData()
            autoSync()
        } else {
            checkNumber++
            uncheckNumber--
            saveData()
            autoSync()
        }
        e.target.classList.toggle('checked')
        
        saveDatos()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveDatos()
        liNumber--
        if (e.target.parentElement.classList.contains('checked')) {
            checkNumber--
        } else {
            uncheckNumber--
        }
        saveData()
        autoSync()
    }
}, false);


// !! LOCALSTORAGE ELEMENTOS LI
function saveDatos() {
    localStorage.setItem('datos', listContainer.innerHTML) 
}

function showDatos() {
    listContainer.innerHTML = localStorage.getItem('datos')
    console.log(localStorage.getItem('datos'))
}

showDatos()


// !! BTN PARA CAMBIO DE TONO
function toggleDark() {
    const button = document.getElementById('buttonDark')
    button.classList.toggle('fa-sun')
    button.classList.toggle('fa-moon')
    document.getElementById('body').classList.toggle('dark')
}

toggleDark()


// !! MOSTRAR/OCULTAR PANEL DE PORCENTAJES
function showData() {
    document.getElementById('verMas').classList.toggle('show')
    if (document.getElementById('verMas').classList.contains('show')) {
        document.getElementById('verMasBtn').innerHTML = 'Ver menos'
    } else {
        document.getElementById('verMasBtn').innerHTML = 'Ver mas'
    }
}

showData()


// !! LOCALSTORAGE DE NUMEROS PORCENTAJES
function saveData() {
    localStorage.setItem('numberLi', liNumber)
    localStorage.setItem('numberChecked', checkNumber)
    localStorage.setItem('numberUnchecked', uncheckNumber)
}

liNumber = localStorage.getItem('numberLi')
checkNumber = localStorage.getItem('numberChecked')
uncheckNumber = localStorage.getItem('numberUnchecked')


// !! MOSTRAR LOS NUMEROS PORCENTAJES EN EL PANEL
function autoSync() {
    document.getElementById('totalNumber1').innerHTML = liNumber
    document.getElementById('totalNumber2').innerHTML = liNumber
    document.getElementById('completeNumber').innerHTML = checkNumber
    document.getElementById('incompleteNumber').innerHTML = uncheckNumber
    mostrarGrafica()
}



// !! MOSTRAR LOS PORCENTAJES Y LAS ANIMACIONES
const porcentajeComplete = document.getElementById('porcentajeComplete'),
porcentajeIncomplete = document.getElementById('porcentajeIncomplete'),
circuloComplete = document.getElementById('circle1'),
circuloIncomplete = document.getElementById('circle2')

let animacionComp = '',
animacionIncomp = '';

let porcientoPos1 = (checkNumber / liNumber) * 100
let porcientoPos = parseFloat(porcientoPos1.toFixed(1))

let porcientoNeg = 100 - porcientoPos

function mostrarGrafica() {
porcientoPos1 = (checkNumber / liNumber) * 100
porcientoPos = parseFloat(porcientoPos1.toFixed(1))

porcientoNeg = 100 - porcientoPos

    if (liNumber == 0) {
        porcentajeComplete.innerHTML = '-'
        porcentajeIncomplete.innerHTML = '-'
        animacionComp = 'progress_0 2s ease forwards'
        animacionIncomp = animacionComp
    }

    porcentajeComplete.innerHTML = porcientoPos + '%'
    porcentajeIncomplete.innerHTML = porcientoNeg + '%'

    switch (true) {
        case (porcientoPos === 0) :
            animacionComp = 'progress_0 2s ease forwards'
            animacionIncomp = 'progress_100 2s ease forwards'
            break

        case (porcientoPos > 0 && porcientoPos <10) :
            animacionComp = 'progress_5 2s ease forwards'
            animacionIncomp = 'progress_95 2s ease forwards'
            break

        case (porcientoPos > 9 && porcientoPos <15) :
            animacionComp = 'progress_10 2s ease forwards'
            animacionIncomp = 'progress_90 2s ease forwards'
            break

        case (porcientoPos > 14 && porcientoPos <20) :
            animacionComp = 'progress_15 2s ease forwards'
            animacionIncomp = 'progress_85 2s ease forwards'
            break
        
        case (porcientoPos > 19 && porcientoPos <25) :
            animacionComp = 'progress_20 2s ease forwards'
            animacionIncomp = 'progress_80 2s ease forwards'
            break

        case (porcientoPos > 24 && porcientoPos <30) :
            animacionComp = 'progress_25 2s ease forwards'
            animacionIncomp = 'progress_75 2s ease forwards'
            break

        case (porcientoPos > 29 && porcientoPos <35) :
            animacionComp = 'progress_30 2s ease forwards'
            animacionIncomp = 'progress_70 2s ease forwards'
            break

        case (porcientoPos > 34 && porcientoPos <40) :
            animacionComp = 'progress_35 2s ease forwards'
            animacionIncomp = 'progress_65 2s ease forwards'
            break

        case (porcientoPos > 39 && porcientoPos <45) :
            animacionComp = 'progress_40 2s ease forwards'
            animacionIncomp = 'progress_60 2s ease forwards'
            break

        case (porcientoPos > 44 && porcientoPos <50) :
            animacionComp = 'progress_45 2s ease forwards'
            animacionIncomp = 'progress_55 2s ease forwards'
            break

        case (porcientoPos > 49 && porcientoPos <55) :
            animacionComp = 'progress_50 2s ease forwards'
            animacionIncomp = 'progress_50 2s ease forwards'
            break

        case (porcientoPos > 54 && porcientoPos <60) :
            animacionComp = 'progress_55 2s ease forwards'
            animacionIncomp = 'progress_45 2s ease forwards'
            break

        case (porcientoPos > 59 && porcientoPos <65) :
            animacionComp = 'progress_60 2s ease forwards'
            animacionIncomp = 'progress_40 2s ease forwards'
            break
    
        case (porcientoPos > 64 && porcientoPos <70) :
            animacionComp = 'progress_65 2s ease forwards'
            animacionIncomp = 'progress_35 2s ease forwards'
            break

        case (porcientoPos > 69 && porcientoPos <75) :
            animacionComp = 'progress_70 2s ease forwards'
            animacionIncomp = 'progress_30 2s ease forwards'
            break

        case (porcientoPos > 74 && porcientoPos <80) :
            animacionComp = 'progress_75 2s ease forwards'
            animacionIncomp = 'progress_25 2s ease forwards'
            break

        case (porcientoPos > 79 && porcientoPos <85) :
            animacionComp = 'progress_80 2s ease forwards'
            animacionIncomp = 'progress_20 2s ease forwards'
            break
                
        case (porcientoPos > 84 && porcientoPos <90) :
            animacionComp = 'progress_85 2s ease forwards'
            animacionIncomp = 'progress_15 2s ease forwards'
            break
                    
        case (porcientoPos > 89 && porcientoPos <95) :
            animacionComp = 'progress_90 2s ease forwards'
            animacionIncomp = 'progress_10 2s ease forwards'
            break
    
        case (porcientoPos > 94 && porcientoPos <100) :
            animacionComp = 'progress_95 2s ease forwards'
            animacionIncomp = 'progress_5 2s ease forwards'
            break
        
        case (porcientoPos === 100 ) :
            animacionComp = 'progress_100 2s ease forwards'
            animacionIncomp = 'progress_0 2s ease forwards'
            break
    }

    circuloComplete.style.animation = animacionComp
    circuloIncomplete.style.animation = animacionIncomp 
}



autoSync()