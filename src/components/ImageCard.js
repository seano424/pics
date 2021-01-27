import React from 'react';

class imageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    this.imageRef.current.addEventListener('load', this.setSpan)
  }

  setSpan = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span: span })
  }
  
  render () {
    const {urls, alt_description} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description}/>
      </div>
    )
  }
}

export default imageCard;