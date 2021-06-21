export const Services = (props) => {
  return (
    <div id='services' className='text-center' style={{background: '#258e25'}}>
      <div className='container'>
        <div className='section-title'>
          <h2>Vantagens</h2>
          <p>
            Além de um produto que vai mudar sua vida oferecemos diversas vantagens
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' >
                  {' '}
                  <i style={{background: '#1f7a1f'}} className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
