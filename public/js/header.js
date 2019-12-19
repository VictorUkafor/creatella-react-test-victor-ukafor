// data for select field options
const options = [
    {
        name: 'Sort by ID',
        value: 'id'
    },
    {
        name: 'Sort by Size',
        value: 'size'
    },
    {
        name: 'Sort by Price',
        value: 'price'
    },
];


// header component
class Header extends React.Component {
    state = { sort: '' };

    // for sending state sort to parent component
    selectSortingValue = () => {
        const { sort } = this.state;
        this.props.setSortingValueFromHeader(sort);
    }

    // for updating state with sorting value
    // from the sort option field
    handleChange = (e) => {
        this.setState({sort: e.target.value});
      }
    
    // for handling onsubmit of the sort form 
    handleSubmit = (e) => {
        e.preventDefault();
        this.selectSortingValue();  
    }

    render(){
        const { 
            props: { sortingValue },
            state: { sort }
        } = this;    

    return (
    <header className="container header">
        <div className="row">

            {/* logo */}
            <h1 className="logo col-sm-12 col-md-4">
                <span className="first">Products</span>
                <span className="second">Grid</span>
            </h1>
            
            {/* select form for sorting products */}
            <form onSubmit={this.handleSubmit} 
            className="sort-form col-sm-12 col-md-8">
                <div className="form-row align-items-center sort-form-div">
                    <div className="col-auto my-1 select">
                        <select value={sort} onChange={this.handleChange} 
                        className="custom-select mr-sm-2 sort-select">
                            {options.map((option) => 
                            <option {...option.value === sortingValue ? 'selected' : ''} 
                            value={option.value}>{option.name}</option>)}
                        </select>
                    </div>
                   <div className="">
                        <button type="submit" className="btn go-button">Go</button>
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
    </header>);        
    }


}
