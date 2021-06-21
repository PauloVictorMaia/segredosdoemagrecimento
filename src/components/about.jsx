import Logo from '../Segredosproduto.png'

export const About = (props) => {
  return (
    <div id='about' style={{paddingTop: 0, paddingBottom: 50}}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src={Logo} style={{width: '100%'}} alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Sobre o produto</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Porque vivendo zen?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href='https://api.whatsapp.com/send?phone=558587988723&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tenho%20interesse%20de%20ser%20um%20associado%20Priv%C3%AA%20Residence%20Club%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
        className='btn btn-custom btn-lg page-scroll'
        target='blank'
        style={{margin: 20}}
      >
        Mudar de vida agora!
      </a>
    </div>
    
  )
}
