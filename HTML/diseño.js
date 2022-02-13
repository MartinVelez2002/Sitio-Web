Swal.fire({

    icon:"success",
    title: "¿Está seguro de su ingreso?",
    footer: "<a href=''> Cancelar </a>",
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
    
    preConfirm: () => {
            return new Promise((resolve) => {
                setTimeout(()=>{
                resolve()
                },100)
            })
        },

    }) 