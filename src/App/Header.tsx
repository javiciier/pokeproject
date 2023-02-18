import './styles/header.css';

interface HeaderLink {
  id: string,
  link: string
}

const Header = (): JSX.Element => {
  const PROJECT_NAME: string = process.env.REACT_APP_PROJECT_NAME as string;

  const headerLinks : HeaderLink[] = [
    {
      id: 'Inicio',
      link: '/'
    }
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <a href='/'>{PROJECT_NAME}</a>
        </div>

        <div className="navbar-items">
          <ul>
            {headerLinks.map(item =>
              <li key={item.id}>
                <a href={item.link}>
                  <b>{item.id}</b>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Header;
