
// product component
const Product = (props) => {
    const { 
        product: { id, size, price, face, date } 
    } = props;
    
    
    return (
    <div className="product-card col-xs-6 col-md-3 col-sm-4">
        <div className="inner-container">
            
            {/* display the ascii image */}
            <p className="image" style={{fontSize: `${size}px` }}>{face}</p>
            
            {/* display the info ascii image */}
            <div className="data">
                <h5 className="product-data">#{id}</h5>
                <h5 className="product-data">Size: <span>{size}px</span></h5>
                <h5 className="product-data">Price: <span>${price/100}</span></h5>
                <h5 className="product-data">Date Added : <span>{date}</span></h5>
                <a href="#" className="btn btn-block go-button to-cart">Add to Cart</a>
            </div>
        </div>
    </div>);
}


class Products extends React.Component {
    state = { 
        loading: false,
        products: [],
    }

    // run after dom has mounted
    componentDidMount = () => {
        this.fetchProducts();
    }

    // run when there is a change in component
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.sortingValue !== prevProps.sortingValue) {
            this.fetchProducts();
        }
    }

    // fetches products from api
    fetchProducts = async() => {
        this.setState({ loading: true });
        const { sortingValue } = this.props;

        try{
            const response = await fetch(`http://localhost:3000/api/products?_sort=${sortingValue}&_page=1&_limit=20`);
            const data = await response.json();

            this.setState({ products: data, loading: false })
        } catch(e){
            this.setState({ loading: true });
        } 
    }

    render() {
        const { loading, products } = this.state;

        return (
        <div className="container">
            <div className="row">
                {loading ? (<div class="spinner-border loader"></div>) :
                products.map((product) => <Product product={product}/>)}
            </div>
        </div>)
    };
}
