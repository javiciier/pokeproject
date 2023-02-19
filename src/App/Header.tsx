import './styles/header.css';
import brand from 'assets/brand.png';

interface HeaderLink {
  id: string,
  link: string
}

const Header = (): JSX.Element => {

  const headerLinks : HeaderLink[] = [
    {
      id: 'Inicio',
      link: '/'
    }
  ]

  return (
    <nav className="navbar">
      <div className='container'>
        <div className='brand'>
          <a href='/'>
            <img src={brand} alt='PokeProject' />
          </a>
        </div>

        <div className='navbar-items'>
          <ul>
            {headerLinks.map(item =>
              <li key={item.id}>
                <a href={item.link}>
                  <b>{item.id}</b>
                </a>
              </li>,
            )}
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Header;
