import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'

type HeaderProps = {
    darkMode: boolean
    onToggleTheme: () => void
}

const Header = ({ darkMode, onToggleTheme }: HeaderProps) => (
    <header className='header'>
        <div className='brand'>SVGMaps India</div>
        <div className='nav-actions'>
            <button
                className='theme-toggle'
                type='button'
                onClick={onToggleTheme}
                aria-label='Toggle dark mode'
            >
                {darkMode ? <FiSun aria-hidden='true' /> : <FiMoon aria-hidden='true' />}
            </button>
            <a
                className='nav-link'
                href='https://github.com/arav-ind/svgmaps-india'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub repository'
                title='GitHub'
            >
                <FiGithub aria-hidden='true' />
            </a>
        </div>
    </header>
)

export default Header
