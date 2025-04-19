$(() => {
    $.ajax({
        url:'https://www.dnd5eapi.co/api/2014/spells/acid-arrow'
    }).then(
        (data)=>{
            console.log(data)
        },
        ()=>{
            console.log('Bad Request')
        }
    )
})