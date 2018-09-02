import React, { Component } from 'react';
// import classNames from 'classnames';

export class Card extends Component {
  
  render () {

    // var pcss = this.props.publicURL
    // console.log(pcss)

    // var cardClass = classNames({
    //   "card box-shadow": true,
    //   'publicCss': pcss
    // });
    
    return (
      <div className="col-xl-4 col-lg-4 animated fadeIn" key={this.props.id}>
        <div className="card box-shadow">
          <a href={this.props.githubLink} target="_blank" role="button">
            <img className="card-img-top" data-src={this.props.img} alt="Thumbnail [100%x225]"
                src={this.props.img} />
          </a>
          <div className="card-body">
            <p className="card-text text-center">{this.props.name.toUpperCase()} <span className="black">/ {this.props.appName.toUpperCase()}</span></p>
            <div className="container">
              <a href={this.props.githubRepo} className="btn btn-light btn-outline-primary text-center col-lg-12 btn-sm" target="_blank" role="button">GitHub Repo</a>
           </div>
          </div>
        </div>
      </div>
      )
  }
}
