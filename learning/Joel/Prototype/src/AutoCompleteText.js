import React, { Component } from 'react';
import './AutoCompleteText.css';

class AutoCompleteText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const {items} = this.props;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({ suggestions, text: value }));
    }

    //Takes the value of the suggestion list as an arguement
    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [], //wipe the suggestions list when the user selects an item
        }))
    }

    renderSuggestions() {
        const {suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    

    render() { 
        const {text} = this.state;
        return ( 
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
         );
    }
}
 
export default AutoCompleteText;