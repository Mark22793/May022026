import 'bootstrap/dist/css/bootstrap.css'

function Card({ header, title, description, buttontext, hastitle }) {
 
return (
    <>
    <div className="card">
  <div className="card-header">
    {header}
  </div>
  <div className="card-body">
    { hastitle===true &&
      <h5 className="card-title">{title}</h5>
    }
    
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">{buttontext}</a>
  </div>
</div>
   
    </>
);
}
export default Card