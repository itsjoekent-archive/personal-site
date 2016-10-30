class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  mapElementToMarkup(element, index) {
    switch (element.type) {
      case 'text': return <div className="column" key={index}>{element.content}</div>
      case 'header-secondary': return <h2 key={index}>{element.content}</h2>
      case 'image': return <img src={element.content} key={index}></img>
      default: return null;
    }
  }

  render() {
    return (
      <article className="container">
        <h1>{this.props.content.title}</h1>
        {this.props.content.elements.map(this.mapElementToMarkup)}
      </article>
    );
  }
}