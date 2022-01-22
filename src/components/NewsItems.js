import React, { Component } from 'react';

export default class NewsItems extends Component {
  render() {
    return (
        <>
            <div className="card my-3" style={{width: '18rem'}}>
                <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title.slice(0,30)}...</h5>
                    <p className="card-text">{this.props.description.slice(0,100)}...</p>
                    <a href={this.props.url}  className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </>
    );     
  }
}
