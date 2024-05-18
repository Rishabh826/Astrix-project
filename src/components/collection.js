import React from 'react';
import '../Collection.css';


const Collection = () => {
 
  return (
    <div className="collection-container">
      
      <div className="section large" style={{backgroundImage: 'url(https://i.pinimg.com/736x/1a/85/aa/1a85aac66c257cbb46fb716b300c0559.jpg)'}}>
        <div className="inner-section">
          <div className="card-container">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIiPnF_lBkWKCUk_10VMJo6FSVPS5Rf9joZ7xIHVfTA&s" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://i.pinimg.com/736x/46/eb/c3/46ebc3dd964136d88e53208d1663c634.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://qph.cf2.quoracdn.net/main-qimg-7e759e4b0be5c52120ff1f68e2621ef0" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://img.freepik.com/free-photo/stylidh-woman-hiding-face-big-green-leaf_7502-7420.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais" className="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <footer>
          <div className="btn-group" role="group" aria-label="Basic link button group" style={{borderRadius:'100px'}}> 
            <a href="/event" className="btn btn-outline-primary">Events</a>
            <a href="/" className="btn btn-outline-primary">Collections</a>
          </div>
        </footer>
      </div>

      <div className="section small" style={{backgroundColor: 'rgb(255,0,127)', color: 'white'}}>
  <div className="inner-section" style={{transform: 'rotate(-90deg)', transformOrigin: 'bottom left', position: 'absolute', bottom: 0, left: 0}}>
    <p style={{margin: '0'}}>Event: Thevga Kksabdsad Kjasn</p>
  </div>
</div>



<div className="section medium" style={{backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/361/494/385/artwork-minimalism-black-background-simple-background-wallpaper-preview.jpg)'}}>
  <div className="inner-section" style={{display: 'flex', flexDirection: 'column-reverse'}}>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight" style={{color:'white'}} ><h1>Explore your First Collectible</h1></div>
    
      <div class="p-2 bd-highlight" style={{color:'white'}}>
      <h1 style={{fontSize:'5rem'}}>Meta Live</h1>
      <p style={{fontSize:'2rem'}}>Live in Astrix</p>
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, quisquam perferendis cupiditate, alias sequi a unde tempore commodi ipsam, aliquam necessitatibus! Id sint maiores alias ab optio. Vitae, voluptates obcaecati.</p>
      <div class="p-2 bd-highlight">
  <h1>Collections</h1>

  <div class="row no-gutters">
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'9rem',height:'10rem'}}>
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej.png" class="card-img" alt="..."/>
        </div>
    </div>
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'15rem',height:'12rem'}}>
            <img src="https://assets.bizclikmedia.net/320/936356725b9d4aa5c02cec9f3dcb2b2c:9c8ae58487668c7fafa3c40a555796f8/gettyimages-1399581170.jpg" class="card-img" alt="..."/>
        </div>
    </div>
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'9rem',height:'10rem'}}>
            <img src="https://www.telefonica.com/en/wp-content/uploads/sites/5/2022/12/investing-in-metaverse.jpg?w=1200" class="card-img" alt="..."/>
        </div>
    </div>
</div>

</div>

      </div>
      <div class="p-2 bd-highlight">

      <div class="d-flex justify-content-evenly">

      <div class="row no-gutters">
      <div class="col">
     
        
      </div>
      <div class="col">
      <button type="button" class="btn btn-warning" style={{borderRadius:'50px',width:'10rem'}}> <i class="fa-solid fa-hourglass-start"></i>  Join Waitlist</button>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Collection;
