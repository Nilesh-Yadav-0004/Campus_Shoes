const heroLogo = new URL('../Utils/Campus_logo.png', import.meta.url).href;

const footer_svg_logo = new URL (
    '../Utils/Github_icon.png',
    import.meta.url,
).href;

const facebook_logo = new URL(
    '../Utils/Facebook_icon.png',
).href;

const Github_icon = new URL(
    '../Utils/Google_icon.png',
).href;

const Google_icon = new URL(
    '../Utils/Youtube_icon.png',
).href;

const linkedin_icon = new URL(
    '../Utils/Linkedin_icon.png',
).href;

export const Navbar = () => {
    return `
        <section class="logo">
            <img src=${heroLogo} alt="">
        </section>

        <section class="page_route">
            <img src=${page_route} alt="">
        </section>
        <section class="page_route">
            <ul>
                <li><a name="home" href="#">home</a></li>
                <li><a name="about" href="#">about</a></li>
                <li><a name="contact" href="#">contact</a></li>
                <li><a name="help" href="#">help</a></li>
            </ul>
        </section>

        <section class="btn_sign_login">
            <button name="login" class="login">login</button>
            <button name="signup" class="signup">signup</button>
        </section>               

    `;
};

export const footer = () => {
    return `
        <section class="footer">
            <section class="footer_logos">
                <img src="${footer_svg_logo}" alt="footer-logo">
            </section>
            <section class="footer"_text">lorem ipsum dolar sit amet consectetur,    
    `
}
