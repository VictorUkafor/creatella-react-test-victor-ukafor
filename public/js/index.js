// import Header from './header';
// import Products from './products';


// top parent component
class Body extends React.Component {
    state = { sortingValue: 'id' };

    setSortingValue = (sortingValue) => {
        this.setState({ sortingValue });
    }

    render(){
        const { sortingValue } = this.state;

        return (
        <div>
            <Header 
            sortingValue={sortingValue} 
            setSortingValueFromHeader={this.setSortingValue} 
            />
            <Products sortingValue={sortingValue} />
        </div>
       );        
    }

}

ReactDOM.render(<Body />, document.querySelector('body'));