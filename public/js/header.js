
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
