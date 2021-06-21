import Img from '../preco.png'


export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Benefícios</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`}  style={{marginTop: 30}}>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
      <img src={Img} style={{width: '100%', marginTop: 40}} />
      <a
        href='https://api.whatsapp.com/send?phone=558587988723&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tenho%20interesse%20de%20ser%20um%20associado%20Priv%C3%AA%20Residence%20Club%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
        className='btn btn-custom btn-lg page-scroll'
        target='blank'
        style={{margin: 50}}
      >
        Mudar de vida agora!
      </a>
    </div>
  )
}
