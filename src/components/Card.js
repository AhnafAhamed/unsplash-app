function Card({src, alt, title, subtitle}) {
    return (
    <div className="card">
        <img src={src} alt={alt} className="Card-image" />
        <p className="card-title">{title}</p>
        <p className="card-subtitle">{subtitle}</p>
    </div>)
  }
  
  export default Card;
  