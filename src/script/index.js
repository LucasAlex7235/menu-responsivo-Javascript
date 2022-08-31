
class Menu {
    static openMenuMobile() {
        const buttonMenuOpen = document.getElementById("menuOpen")
        const menuOpen = document.querySelector(".menu__body")
        const img = buttonMenuOpen.querySelector("img")

        img.src = "../../src/img/abrir.png"


        buttonMenuOpen.addEventListener("click", () => {
            if (buttonMenuOpen.classList == "fechado") {
                buttonMenuOpen.classList.remove("fechado")
                buttonMenuOpen.classList.add("aberto")
                img.src = "../../src/img/fechar.png"

                menuOpen.classList.add("animationOpen")

                setTimeout(() => {
                    menuOpen.classList.remove("close")?"": ""
                    menuOpen.classList.add("open")
                    menuOpen.classList.remove("animationOpen")
                }, "1100")
            }
            else if (buttonMenuOpen.classList == "aberto") {
                buttonMenuOpen.classList.remove("aberto")
                buttonMenuOpen.classList.add("fechado")

                img.src = "../../src/img/abrir.png"

                menuOpen.classList.add("animationClose")

                setTimeout(() => {
                    menuOpen.classList.remove("open")?console.log("sim"): console.log("removeu")
                    menuOpen.classList.add("close")
                    menuOpen.classList.remove("animationClose")
                }, "1100")
            }

        })

    }

}

Menu.openMenuMobile()
