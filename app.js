$(() => {
    const getData = (data) => {
        $.ajax({
            url:`https://www.dnd5eapi.co/api/2014/${data}`
        }).then(
            (data)=>{
                // console.log(data)
                for (let i = 0; i < data.count; i++) {
                    console.log(data.results[i])
                }
            },
            ()=>{
                console.log('Bad Request')
            }
        )
    }

    $('.info').on('click', (e)=>{
        const info = $(e.currentTarget).attr('value')
        getData(info)
    })
})