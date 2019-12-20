// import Product from './product';


const generateRandom = (arr) => {
    for (let i = 0; i < 1000; i++) {
        const random = Math.floor (Math.random () * 1000); 
        if (!arr.includes(random)) {
            arr.push(random); 
        } 
        else 
        i--; 
    }

    return random;
} 
    



class Products extends React.Component {
    state = { 
        loading: false,
        products: [],
        adverts: [],
        page: 1,
        scrollLoading: false,
        catalogueEnd: false
    }

    // run after dom has mounted
    componentDidMount = () => {
        this.fetchProducts();
        window.addEventListener('scroll', this.handleScroll);
    }


    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }


    // run when there is a change in component
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.sortingValue !== prevProps.sortingValue) {
            this.setState({ page: 1, catalogueEnd: false });
            this.fetchProducts();
        }
    }

    // fetches products from api
    fetchProducts = async() => {
        this.setState({ loading: true });
        const { sortingValue } = this.props;
        const { page } = this.state;

        try{
            const response = await fetch(`http://localhost:3000/api/products?_sort=${sortingValue}&_page=${page}&_limit=20`);
            const data = await response.json();

            console.log('gggggg', data);

            this.setState({ products: data, loading: false })
        } catch(e){
            this.setState({ loading: true });
        } 
    }


    handleScroll = async () => {  
        const windowHeight = "innerHeight" in window ? 
        window.innerHeight : document.documentElement.offsetHeight;

        const body = document.body;
        const html = document.documentElement;

        const docHeight = Math.max(body.scrollHeight, 
        body.offsetHeight, html.clientHeight,  
        html.scrollHeight, html.offsetHeight);
    
        const windowBottom = windowHeight + window.pageYOffset;
        

        if((windowBottom >= docHeight) && !this.state.catalogueEnd){
            this.setState((prevState) => ({ 
                page: prevState.page + 1,
                scrollLoading: true 
            }));
            
            const { sortingValue } = this.props;
            const { page } = this.state;

            try{
                const response = await fetch(`http://localhost:3000/api/products?_sort=${sortingValue}&_page=${page}&_limit=20`);
                const data = await response.json();

                this.setState((prevState) => ({
                    products: [...prevState.products, ...data],
                    scrollLoading: false,
                    catalogueEnd: ([...prevState.products, ...data].length === prevState.products.length) ?
                    true: false
                }))
                
                console.log('products length', this.state.products.length);

            } catch(e){
                this.setState({ scrollLoading: false })
            } 
        }

    }


    // markup for advert
    advertFromSponsors = () => {
        const { adverts } = this.state;
        let randomNumber = Math.floor (Math.random () * 1000); 


        return (<div className="ad-box">
            <img className="ad" 
            src={`/ads/?r=${randomNumber}`} />
            </div>)
    }


    render() {
        const { 
            loading, scrollLoading, products, catalogueEnd
        } = this.state;

        return (
        <div className="container">
            <div className="row">
                {loading ? (<div className="spinner-border loader"></div>) :
                products.map((product, index) => {

                    if(((index + 1) % 20) === 0){
                        return (<React.Fragment key={product.id}>
                        <Product product={product}/>
                        {this.advertFromSponsors()}
                        {(scrollLoading && !catalogueEnd) ? (<div className="scroll-loader">
                            <button className="btn btn-dark btn-scroll" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" 
                                role="status" aria-hidden="true"></span>  Loading...
                            </button>
                        </div>) : ''}
                    </React.Fragment>)
                    }

                    return (<Product key={product.id} product={product}/>)
                })}

                {catalogueEnd ? (<div className="catalogue-end">~ end of catalogue ~ </div>) : ''}

            </div>
        </div>)
    };
}
