import React from 'react';


class TextStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSentences: "",
      numberOfWords: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.numberOfSentences(nextProps);
    this.numberOfWords(nextProps);
  }

  numberOfSentences(props) {
    let sentences = props.text.split(/\?|\.|!/).length;
    this.setState({
      numberOfSentences: sentences
    });
  }


  numberOfWords(props) {
    let words = props.text.split(' ').length;
    this.setState({
      numberOfWords: words
    });
  }


  render() {
    const statistics = this.state.numberOfSentences ? (<div><p id="sentences">Number of Sentences: {this.state.numberOfSentences}</p>
    <p id="words">Number of Words: {this.state.numberOfWords}</p></div>) : <p>No text entered.</p>

    return(
      <div>
        {statistics}
      </div>
    )
  }

}


export default TextStatistics;