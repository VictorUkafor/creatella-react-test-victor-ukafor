
// header component
const Header = () => {
    return (
    <header className="header">
        <div>

            {/* logo */}
            <h1 className="logo">
                <span className="first">Products</span>
                <span className="second">Grid</span>
            </h1>
            
            {/* select form for sorting products */}
            <form className="sort-form">
                <div className="form-row align-items-center">
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

        </div>

        <hr className="header-line"/>

        {/* intro on the header */}
        <p className="header-intro">Here you're sure to find a bargain on some of the finest
         ascii available to purchase. Be sure to peruse our selection
          of ascii faces in an exciting range of sizes and prices.
        </p>
    </header>
    ) ;
}

const Products = () => {
    return (
        <section className="products">
        ... products go here ...
        </section>
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