import React from 'react';
import '../Collection.css';

const Event = () => {
  return (
    <div className="collection-container">
      
      <div className="section large" style={{backgroundImage: 'url(https://i.pinimg.com/736x/1a/85/aa/1a85aac66c257cbb46fb716b300c0559.jpg)'}}>
        <div className="inner-section">
          <div className="card-container">
            <div className="card">
              <img src="https://www.masala.com/cloud/2021/07/27/BljIr9ZR-IMG_0114.JPG-1200x1800.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701290170.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://wallpapercave.com/wp/wp10575939.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card">
              <img src="https://images.wallpaperscraft.com/image/single/concert_stage_fire_147969_800x1420.jpg" className="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <footer>
          <div className="btn-group" role="group" aria-label="Basic link button group" style={{borderRadius:'100px'}}> 
            <a href="/" className="btn btn-outline-primary">Events</a>
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
      <div class="p-2 bd-highlight" style={{color:'white'}} ><h1>Explore your First Event</h1></div>
    
      <div class="p-2 bd-highlight" style={{color:'white'}}>
      <h1>Event Name</h1>
      <p><i class="fa-solid fa-location-dot" style={{marginRight:'10px'}}></i>  Venue       <i class="fa-solid fa-bell" style={{marginLeft:'10px'}}></i>      04/05/2024</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, quisquam perferendis cupiditate, alias sequi a unde tempore commodi ipsam, aliquam necessitatibus! Id sint maiores alias ab optio. Vitae, voluptates obcaecati.</p>
      <div class="p-2 bd-highlight">
  <h1>Artist Lineup</h1>

  <div class="row no-gutters">
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'9rem',height:'10rem'}}>
            <img src="https://theinfoera.com/wp-content/uploads/2022/07/HD-wallpaper-astronomical-astro-world-cactus-jack-travis-scott.jpg?x61812" class="card-img" alt="..."/>
        </div>
    </div>
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'15rem',height:'12rem'}}>
            <img src="https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2023/04/gettyimages-1478868674-594x594-1.jpg?w=594" class="card-img" alt="..."/>
        </div>
    </div>
    <div class="col">
        <div class="card bg-dark text-white" style={{width:'9rem',height:'10rem'}}>
            <img src="https://e1.pxfuel.com/desktop-wallpaper/216/614/desktop-wallpaper-caktuz-gives-j-cole-drakes-hit-it-in-the-morning-new-meaning-j-cole.jpg" class="card-img" alt="..."/>
        </div>
    </div>
</div>

</div>

      </div>
      <div class="p-2 bd-highlight">

      <div class="d-flex justify-content-evenly">

      <div class="row no-gutters">
      <div class="col">
      <div class="card bg-dark text-white" style={{width:'9rem',height:'10rem'}}>
            <img src="https://developers.google.com/static/ml-kit/vision/barcode-scanning/images/qrcode.png" class="card-img" alt="..."/>
        </div>
        
      </div>
      <div class="col">
      <button type="button" class="btn btn-warning" style={{borderRadius:'100px'}}> <i class="fa-solid fa-hourglass-start"></i>  Join Waitlist</button>
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

export default Event;
