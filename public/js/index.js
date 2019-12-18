
// header component
const Header = () => {
    return (
    <header className="container header">
        <div className="row">

            {/* logo */}
            <h1 className="logo col-sm-12 col-md-4">
                <span className="first">Products</span>
                <span className="second">Grid</span>
            </h1>
            
            {/* select form for sorting products */}
            <form className="sort-form col-sm-12 col-md-8">
                <div className="form-row align-items-center sort-form-div">
                    <div className="col-auto my-1 select">
                        <select className="custom-select mr-sm-2 sort-select">
                            <option selected>Sort by </option>
                            <option value="size">Size</option>
                            <option value="price">Price</option>
                            <option value="id">ID</option>
                        </select>
                    </div>
                   <div className="">
                        <button type="button" className="btn go-button">Go</button>
                   </div>
                </div>
            </form>

        

        <hr className="header-line"/>

        {/* intro on the header */}
        <p className="header-intro col-xs-12">Here you're sure to find a bargain on some of the finest
         ascii available to purchase. Be sure to peruse our selection
          of ascii faces in an exciting range of sizes and prices.
        </p>
        </div>
    </header>
    ) ;
}


// product component
const Product = () => {
    return (
<div className="product-card col-xs-6 col-md-3 col-sm-4">
    
    <div className="inner-container">
        
  <div className="image"><p>`(ノ・∀・)ノ`</p></div>
  
  <div className="data">
    <h5 className="product-data">#1234e567y</h5>
    <h5 className="product-data">Size: <span>123px</span></h5>
    <h5 className="product-data">Price: <span>$3.51</span></h5>
    <h5 className="product-data">Date Added : <span>3 days ago</span></h5>
    <a href="#" className="btn btn-block go-button to-cart">Add to Cart</a>
  </div>
  </div>
</div>
    ) ;
}


const Products = () => {
    return (
        <div className="container">
            <div class="row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        
        </div>
    );
}


const Body = () => {
    return (
    <div>
        <Header />
        <Products />
    </div>
    );
}

ReactDOM.render(<Body />, document.querySelector('body'));