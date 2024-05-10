
import Home from './page';
import './Gone.css'; 
import RootLayout from './layout';
import Client from './components/page'


export function vv() {
  var doc = document.querySelector('.image-container')
  if(typeof vv.i === 'undefined') {
    vv.i = 50
  } 


  vv.i+= 150;

  if(vv.i >= 1750) {
    vv.i = 0
  }
  doc.scrollTo({
    top: 100,
    left: vv.i,
    behavior: "smooth",
  })
  



}



export default async function Gone(props) {

  const items = props.image
  const finish = props.code
  const title = props.titles
  const overviews = props.summa


  return (
    <div className="gone-container">
      <div className='con-cov'>
        <div className='ann-cov'>
        <image className='img-cov loaded' src={items[0]} />
        <p className='img-text'>{overviews[0]}</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
   
      <br/>
      <div className="image-container">
        {items.map((user, index) => <div key={index} className="image-wrapper">
          <image className='try' id={'' +index} src={user} alt={""} />
          <p className="image-title"><br/></p>
         </div>)}
      </div>
      <Client sums={overviews} tooth={title}/>
    </div>
    
  );
 
}

