import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    //Bind this to SearchBar this
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value  });
  }

  render() {
    return (
      <form className="input-group">
          <input
            placeholder="Récuperer le temps sur 5 jours de votre ville"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Recherche</button>
          </span>
      </form>
    );
  }
}

export default SearchBar;
