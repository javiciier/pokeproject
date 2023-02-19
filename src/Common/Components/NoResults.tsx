import './styles/noResults.css';

const NoResults = (): JSX.Element => {
  return (
    <div className="alert">
      <div className="header" />
      <div className="content">
        <p>Sin resultados.</p>
      </div>
    </div>
  )

}

export default NoResults;
