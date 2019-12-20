// import Product from './product';


class Products extends React.Component {
    state = { 
        loading: false,
        products: [],
        adverts: [],
        page: 1,
        scrollLoading: false,
        catalogueEnd: false,
    }


    // run after dom has mounted:
    componentDidMount = () => {
        this.fetchProducts();
        this.generateRandom();
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
            const url = `http://localhost:3000/api/products?_sort=${sortingValue}&_page=${page}&_limit=20`
            const response = await fetch(url);
            const data = await response.json();

            this.setState({ products: data, loading: false })
        } catch(e){
            this.setState({ loading: true });
        } 
    }


    // runs when user scroll to the end of the page
    handleScroll = () => {  
        const windowHeight = "innerHeight" in window ? 
        window.innerHeight : document.documentElement.offsetHeight;

        const body = document.body;
        const html = document.documentElement;

        const docHeight = Math.max(body.scrollHeight, 
        body.offsetHeight, html.clientHeight,  
        html.scrollHeight, html.offsetHeight);
    
        const windowBottom = windowHeight + window.pageYOffset;
        
        if((windowBottom >= docHeight) && !this.state.catalogueEnd){
            this.updateProducts();
            this.generateRandom();
        }

    }

    // fetches products when user scroll to the end
    updateProducts = async () => {            
        const { sortingValue } = this.props;
        const { page } = this.state;  

        this.setState((prevState) => ({ 
            page: prevState.page + 1,
            scrollLoading: true 
        }));
        
        
        try{
            const url = `http://localhost:3000/api/products?_sort=${sortingValue}&_page=${page}&_limit=20`
            const response = await fetch(url);
            const data = await response.json();

            // update state with new fetched products
            // and sets catalogueEnd when no new products
            // is found
            this.setState((prevState) => ({
                products: [...prevState.products, ...data],
                scrollLoading: false,
                catalogueEnd: ([...prevState.products, ...data].length 
                    === prevState.products.length) ? true: false
            }))
                
        } catch(e){
            this.setState({ scrollLoading: false })
        } 
    }


    // generate unique random number
    // and add it state
    generateRandom = () => {
        const { adverts } = this.state;

        for (let i = 0; i < 1000; i++) {
            let random = Math.floor(Math.random () * 1000); 
            if (!adverts.includes(random)) {
                this.setState(() => ({ 
                    adverts: [...adverts, random],
                }));
                break;
            } 
            else 
            i--; 
        }
   
    } 


    // markup for advert
    advertFromSponsors = (index) => {
        const { adverts } = this.state;

        return (<div className="ad-box">
            <h5>Adverts: #{adverts[index]}</h5>
            <img className="ad" 
            src={`/ads/?r=${adverts[index]}`} />
            </div>)
    }


    render() {
        const { 
            loading, scrollLoading, products, catalogueEnd
        } = this.state;

        return (
        <div className="container">
            <div className="row">

                {/* shows loading spinner when AJAX is going on */}
                {loading ? (<div className="spinner-border loader"></div>) :
                products.map((product, index) => {

                    // places advert after 20 product card along 
                    // with loading spinner 
                    if(((index + 1) % 20) === 0){
                        return (<React.Fragment key={index}>
                        <Product product={product}/>
                        {this.advertFromSponsors(((index+1)/20)-1)}
                        {(scrollLoading && !catalogueEnd && !products[index + 1]) ? 
                        (<div className="scroll-loader">
                            <button className="btn btn-dark btn-scroll" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" 
                                role="status" aria-hidden="true"></span>  Loading...
                            </button>
                        </div>) : ''}
                    </React.Fragment>)
                    }

                    // displays product cards to page
                    return (<Product key={index} product={product}/>)
                })}

                {/*  show when all products from api has been fetched */}
                {(catalogueEnd && !scrollLoading) ? 
                (<div className="catalogue-end"> ~ end of catalogue ~ </div>) : ''}

            </div>
        </div>)
    };
}
