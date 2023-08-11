function menu() {
    let seleccion = document.getElementById('opciones').value;

    //usamos switch de js para eligir las opciones deseadas
    //window.open() es un metodo al que se pasa una url para abrir en una nueva ventana
    //window.location.href = "http://www.youtube.com";

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Retrato",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
                //funcion flecha
            }).then(() => {
                window.location.href = "retrato.html";
            });
            return;
        case 'B':
            Swal.fire({
                icon: "success",
                title: "Bodas",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "boda.html";
            });
            return;
        case 'C':
            Swal.fire({
                icon: "success",
                title: "Paisajes",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "paisaje.html";
            });
            return;

    }
}