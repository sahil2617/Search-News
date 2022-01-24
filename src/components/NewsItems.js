import React, { Component } from 'react';

export default class NewsItems extends Component {
  render() {
    return (
        <>
            <div className="card my-3">
                <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href={this.props.url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </>
    );     
  }
}
