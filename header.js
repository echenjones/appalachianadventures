ocument.addEventListener("DOMContentLoaded", function() {
    var header = document.createElement('header');
    header.innerHTML = `
        <div class="top" id="top">
            <!-- Secondary navigation bar -->
            <div class="secondary-navigation">
                <div style="min-width: 10px;"></div>
                <div class="navbar">
                    <ul>
                        <li><a href='https://emcgov.github.io/cs20-midterm/contact.html'>Contact</a></li>
                        <li><strong><a href='https://emcgov.github.io/cs20-midterm/book.html'>Book a Tour</a></strong></li>
                    </ul>
                </div>
                <div style="min-width: 10px"></div>
            </div>
            <!-- Navigation bar -->
            <div class="header">
                <div style="min-width: 10px;"></div>
                <a href="https://emcgov.github.io/cs20-midterm/home.html"><img src="logo.jpg" alt="Logo"></a>
                <div></div>
                <div class="navbar">
                    <ul>
                        <li><a href='https://emcgov.github.io/cs20-midterm/about.html'>About</a></li>
                        <li><a href='https://emcgov.github.io/cs20-midterm/tours.html'>Tours</a></li>
                        <li><a href='https://emcgov.github.io/cs20-midterm/faqs.html'>FAQ</a></li>
                        <li><a href='https://emcgov.github.io/cs20-midterm/blog.html'>Blog</a></li>
                    </ul>
                </div>
                <div class="hamburger"> <!-- Hamburger menu -->
                    <a href="javascript:void(0);" class="icon" onclick="toggle()">
                            <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div style="min-width: 10px"></div>
            </div>
            
            <!-- Expandable menu -->
            <div class="menu" id="menu">
                <a href='https://emcgov.github.io/cs20-midterm/about.html'>About</a>
                <br>
                <a href='https://emcgov.github.io/cs20-midterm/tours.html'>Tours</a>
                <br>
                <a href='https://emcgov.github.io/cs20-midterm/faqs.html'>FAQ</a>
                <br>
                <a href='https://emcgov.github.io/cs20-midterm/blog.html'>Blog</a>
                <br>
                <a href='https://emcgov.github.io/cs20-midterm/contact.html'>Contact</a>
                <br>
                <a href='https://emcgov.github.io/cs20-midterm/book.html'>Book a Tour</a>
            </div>
        </div>

        <!-- Space under navigation bar -->
        <div class="blank-space"></div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});

// Expand or collapse hamburger menu
function toggle() {
    var menu = document.getElementById("menu");
    var top = document.getElementById("top");
    if (menu.className === "menu") {
        menu.className += " responsive";
        top.className += " responsive";
    }
    else {
        menu.className = "menu";
        top.className = "top";
    }
};
