var app = new Vue({
    el: '#app',

    data: function () {
        return {}
    },

    computed: {
        'hash': function () {
            debugger
            return window.location.hash;
        }
    },

    watch: {
        'window.location.hash': function (old, newjk) {
            debugger
        }
    },

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

window.addEventListener('hashchange', () => {
    let headerPageLinks = document.getElementsByClassName('page-link');

    Array.from(headerPageLinks).forEach(element => {
        element.classList.remove('active');

        if (element.getAttribute('data-id') == window.location.hash) {
            element.classList.add('active');
        }

    });
});