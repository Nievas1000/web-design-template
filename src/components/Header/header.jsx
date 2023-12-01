import img1 from '../../assets/project-1.png'
import img2 from '../../assets/project-2.png'
import img3 from '../../assets/project-5.png'
import img4 from '../../assets/project-6.png'
import { Image } from './Image';
import { useHeader } from '../../hooks/useHeader';

export const Header = (props) => {
  const {wordIndex, words} = useHeader()

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay" style={{display: 'flex'}}>
          <div className='img-container'>
            <div>
              <Image src={img1} alt="Left Top" from={{ opacity: 0, transform: 'translateX(-100%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(-15deg)' }} />
              <Image src={img2} alt="Left Bottom" from={{ opacity: 0, transform: 'translateX(-100%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(-15deg)' }} />
            </div>
          </div>
          <div className="container" style={{zIndex: '10'}}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                  <span className="header-title">
                    You deserve a stunning {words[wordIndex]}
                  </span>

                <p className="header-text">{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
            <div className='img-container' style={{right: '0'}}>
              <div>
                <Image src={img3} alt="Right Top" from={{ opacity: 0, transform: 'translateX(60%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(15deg)' }} />
                <Image src={img4} alt="Right Bottom" from={{ opacity: 0, transform: 'translateX(60%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(15deg)' }} />
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};