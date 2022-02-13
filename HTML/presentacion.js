Swal.fire({
    icon:"success",
    title: "Gracias por registrarse.",
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
        preConfirm: () => {
            return new Promise((resolve) => {
                setTimeout(()=>{
                resolve()
                }, 500)
            })
        },
    })