import React, { Component } from 'react';

export class Card extends Component {

  render () {
    
    return (
      <div className="col-xl-4 col-lg-4 animated fadeIn card-hover" key={this.props.id}>
        <div className="card box-shadow">
          <a href={this.props.githubLink} target="_blank" role="button">
            <img className="card-img-top" data-src={this.props.img} alt="Thumbnail [100%x225]"
                src={this.props.img} />
          </a>
          <div className="card-body">
            <p className="card-text text-center">{this.props.name.toUpperCase()} <span className="black">/ {this.props.appName.toUpperCase()}</span></p>
            <div className="container">
              <div className="row">
                <div className="btn-group btn-group-sm col-lg-12" >
                  <a href={this.props.githubRepo} className="btn btn-dark text-center col-lg-6" target="_blank" role="button">Repo</a>
                  <a href={this.props.publicURL} className="btn btn-success text-center col-lg-6" role="button" target="_blank" aria-pressed="true">Play</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}
