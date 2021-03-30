(function scrollMagicInit() {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            reverse: true
        }
    });
    const scenes = document.querySelectorAll("section.pined");
    scenes.forEach(element => {
        let scene = new ScrollMagic.Scene({ triggerElement: element }).setPin(element);
        controller.addScene(scene);
    });
})();

(function aosInit() {
    AOS.init({
        duration: 1000,
        easing: 'Linear',
    });
})();

(function closeLoadingScreen(promise) {
    const scene = document.querySelector(".loadingScreen");
    let loading = function (ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    };

    window.addEventListener("load", () => {
        if (promise) {
            loading().then(() => {
                return loading(500);
            }).then(() => {
                scene.style.opacity = 0;
                return loading(1500);
            }).then(() => {
                scene.remove();
            });
        } else {
            loading().then(() => {
                scene.style.opacity = 0;
                return loading(1500);
            }).then(() => {
                scene.remove();
            });
        }
    });
})(false);

(function changeNavbarBgColor() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
            navbar.classList.add('navbar--scroll');
        } else {
            navbar.classList.remove('navbar--scroll');
        }
    })
})();

(function scrollToTop() {
    const button = document.querySelector(".scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
            button.classList.add('scrollToTop--active');
        } else {
            button.classList.remove('scrollToTop--active');
        }
    })

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})();

(function copyrightYear() {
    const fillTarget = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();

    if (currentYear === 2021) {
        return;
    } else {
        return fillTarget.innerText = '- ' + currentYear;
    }
})();