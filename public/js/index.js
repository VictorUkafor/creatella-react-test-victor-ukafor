const Header = () => {
    return (
    <header>
        <h1>Products Grid</h1>

        <p>Here you're sure to find a bargain on some of the finest
         ascii available to purchase. Be sure to peruse our selection
          of ascii faces in an exciting range of sizes and prices.</p>
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

const body = document.querySelector('body');
ReactDOM.render(<Body />, body);