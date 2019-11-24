var app = new Vue({
    el: '#app',

    methods: {
        updateScroll: function() {
            this.scrollPosition = window.scrollY;
            if(this.scrollPosition > 370) {
                var nav_bar = document.getElementById('nav');
                nav_bar.classList.add('desk');
                nav_bar.classList.add('fixed');
            } else {
                var nav_bar = document.getElementById('nav');
                nav_bar.classList.remove('desk');
                nav_bar.classList.remove('fixed');
            }
        }
    },

    mounted: function() {
        window.addEventListener('scroll', this.updateScroll);
    },
});

var showActiveTab = () => {
    let headerPageLinks = document.getElementsByClassName('page-link');

    Array.from(headerPageLinks).forEach(element => {
        element.classList.remove('active');

        if (element.getAttribute('data-id') == window.location.hash) {
            element.classList.add('active');
        }

    });
}

var windowloaded = () => {
    alert("Hola! \nSorry for the interuption. This portfolio is not fully updated. Please contact me for updated details. \n \n Thanks!");
    console.log("%cHola!", "color: #2149f3; font-size:20px;");
}

window.addEventListener('load', windowloaded);
window.addEventListener('load', showActiveTab);
window.addEventListener('hashchange', showActiveTab);
