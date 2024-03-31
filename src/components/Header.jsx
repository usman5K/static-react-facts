import reactLogo from "../assets/react.svg";

function Header() {
    return (
        <nav className='nav-bar'>
            <div className="branding-header">
                <img src={reactLogo} alt="React Logo" />
                <h1>ReactFacts</h1>
            </div>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}

export default Header
