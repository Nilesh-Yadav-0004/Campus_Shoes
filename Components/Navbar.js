const heroLogo = new URL('../Utils/')

export const Navbar = () => {
    return `
    
        <section class="logo">
            <img src=${heroLogo} alt="">
        </section>
        <section class="page_route">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>help</li>
            </ul>
        </section>
        <section class="btn_sign_login">
            <button class="login">login</button>
            <button class="login">signup</button>
        </section>
        `;
};