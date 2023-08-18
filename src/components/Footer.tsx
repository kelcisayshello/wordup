import "../scss/footer.scss"

export default function Footer() {
    const date = new Date();

    return(
        <>
        <footer>
            <p>Copyright @ {date.getFullYear()} • All rights reserved. Made by <a href="https://www.github.com/kelcisayshello">kelcisayshello</a></p>
        </footer>
        </>
    )
}