var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    var width = document.getElementById('width').value
    var height = document.getElementById('height').value

    var url = `https://picsum.photos/${width}/${height}`
    
    var image = document.getElementById('img')

    image.src = url
})