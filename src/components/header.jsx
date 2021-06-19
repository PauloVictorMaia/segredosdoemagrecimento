
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay' style={{background: 'url("https://images.unsplash.com/photo-1599552692549-e3ce4a23cac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHx3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text' style={{paddingTop: 200}}>
                <h1 style={{color: '#333', fontSize: 25,  backgroundColor: '#fff', borderRadius: 20, padding: 10, opacity: 0.8}}>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p style={{color: '#333', backgroundColor: '#fff', borderRadius: 20, padding: 10, opacity: 0.8}}>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://api.whatsapp.com/send?phone=558587988723&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tenho%20interesse%20de%20ser%20um%20associado%20Priv%C3%AA%20Residence%20Club%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
                  className='btn btn-custom btn-lg page-scroll'
                  target='blank'
                >
                  Mudar de vida agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
