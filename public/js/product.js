// import timeConverter from './libs';


// product component
class Product extends React.Component {
    state = {
        addedToCart: false
    }


    // when user clicks on the 'add to cart' button
    addToCart = () => {
        this.setState({ addedToCart: true });
    }
    
    
    render(){    
        const { 
            product: { id, size, price, face, date } 
        } = this.props;

        const { addedToCart } = this.state;

    return (
    <div className="product-card col-xs-6 col-md-3 col-sm-4">
        <div className="inner-container">
            
            {/* display the ascii image */}
            <p className="image" style={{fontSize: `${size}px` }}>{face}</p>
            
            {/* display the info ascii image */}
            <div className="data">
                <h5 className="product-data">#<span>{id}</span></h5>
                <h5 className="product-data">Size: <span>{size}px</span></h5>
                <h5 className="product-data">Price: <span>${price/100}</span></h5>
                <h5 className="product-data">Date Added: <span>{timeConverter(date)}</span></h5>
                <button type="button" onClick={this.addToCart} 
                style={{
                    backgroundColor: `${addedToCart ? '#36525b' : '' }`,
                    border: `${addedToCart ? '1px solid #36525b' : '' }`,
                }}
                className={`btn btn-block go-button to-cart shadow-none 
                ${addedToCart ? 'disabled' : '' }`}
                >Add{addedToCart ? 'ed' : ''} to Cart</button>
            </div>
        </div>
    </div>);  
    }

}
