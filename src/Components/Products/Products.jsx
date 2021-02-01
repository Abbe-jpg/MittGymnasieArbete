import React from 'react';
import './Product.css';



const Products = props => {
  

  return (
    <section id="product">
     
     <main>
	<div class="responsive-container">
		<div class="grid">
			<div class="grid-column">
								<a class="product" href="#product">
					<div class="product-image">
						<img src="https://cdn.tutsplus.com/vector/uploads/2013/05/05-basic-shape.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Dam linne</h2>
							<p class="product-price">$ 10</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>

				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://i.pinimg.com/originals/3f/02/7c/3f027cce0f6f8f3c13856505d392fb02.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Herr skjorta</h2>
							<p class="product-price">$ 9</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
							<img src="https://i.pinimg.com/originals/de/91/45/de9145852fde2ba6d840dd230d2ae029.jpg" alt="" />
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Skjorta</h2>
							<p class="product-price">$ 9</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
			<a class="product" href="#product">
					<div class="product-image"> 
						<img src="https://i.pinimg.com/originals/e6/c6/4e/e6c64ef5e97a4006292f74863672930d.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Klänning</h2>
							<p class="product-price">$ 12</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image"> 
						<img src="https://i.pinimg.com/originals/76/7a/c0/767ac0032584522de3a26053ebb00f75.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Blus</h2>
							<p class="product-price">$ 12</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://i.pinimg.com/originals/8a/6b/7b/8a6b7bb14895dc5518df598cb68223b0.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Fluffig tröja</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://lh3.googleusercontent.com/proxy/hsxzoIaq-C_Bw50DnUpPbaBzRnqt0oJAEC_BUhl1kUcTiZLM3ZNdfkGqlMo7xO-ZMmmshI-H7pnPUyODfDaDtOyIoWi26pXFqjZxjXVkW_PB" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Poncho</h2>
							<p class="product-price">$ 15</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
				<a class="product" href="#product">
					<div class="product-image">
						<img src="https://i.pinimg.com/originals/51/38/01/513801061f425b9addcaa4ed3852de61.jpg" alt=""/>
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Dam tröja</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
        <a class="product" href="#product">
					<div class="product-image">
						<img src="https://i.pinimg.com/originals/f9/a1/d2/f9a1d207132d4e3d3ce6437cc3b25c53.jpg" alt="" />
					</div>
					<div class="product-content">
						<div class="product-info">
							<h2 class="product-title">Klänning</h2>
							<p class="product-price">$ 5</p>
						</div>
						<button class="product-action"><i class="material-icons-outlined">♥</i></button>
					</div>
				</a>
			</div>
      
		</div>
	</div>
</main>
        

<div class="form" id="upload-form">
    <div class="form-toggle"></div>
    <div class="form-panel one">
        <div class="form-header">
            <h1>Lägg ut en egen annons</h1>
        </div>
        <div class="form-content">
            <form>
                <div class="form-group"><label>Namn på plagg</label><input required="required" /></div>
                <div class="form-group"><label>Pris</label><input required="required" /></div>
                <div class="form-group"><button type="submit">Ladda upp</button></div>
            </form>
            <div class="form-group"><button onClick={props.toggleUpload}>Lägg till bild</button></div>
        </div>  
    </div>
    <div class="form-panel two">
    </div>    
</div>


<div className={props.showUpload === 'active' ? 'modal-active' : 'modal'}>
	<div class="modal-header">
		<div class="modal-logo">
			<span class="logo-circle">
          <i class="fa fa-folder-open"></i>
			</span>
		</div>
		<button class="btn-close" onClick={props.toggleUpload}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
		</button>
	</div>
	<div class="modal-body">
		<h2 class="modal-title">Upload a file</h2>
		<p class="modal-description">Attach the file below</p>
		<button class="upload-area">
			<span class="upload-area-icon">
			</span>
			<span class="upload-area-title">Drag file(s) here to upload.</span>
			<span class="upload-area-description">
				Alternatively, you can select a file by <br/><strong>clicking here</strong>
			</span>
		</button>
	</div>
	<div class="modal-footer">
		<button class="btn-secondary" onClick={props.toggleUpload}>Cancel</button>
		<button class="btn-primary">Upload File</button>
	</div>
</div>



    </section>


    
  );
};
export default Products;
