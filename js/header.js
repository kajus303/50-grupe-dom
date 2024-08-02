const data = [
    { href: '', text: 'Home' },
    { href: 'about-us', text: 'About' },
    { href: 'chat', text: 'Chat' },
    { href: 'contact', text: 'Contact' },
    { href: 'products', text: 'Products' },
    { href: 'sportas', text: 'Sparta' },
];

export function header() {
    const href = location.href.endsWith('/') ? location.href.slice(0, -1) : location.href;
    const isHomepage = href === location.origin;
    const dot = isHomepage ? '' : '.';
    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <img src="#" alt="Logo">
            <nav>${navHTML}</nav>
        </header>`);
}