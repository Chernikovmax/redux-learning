import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onBtnClick = e => {
        const year = parseInt(e.currentTarget.innerText, 10);        
        this.props.getPhotos(year);
    }
    render() {
        const {year, photos, isFetching} = this.props;
        return (
            <div className="page">
                <div className="btn-wrapper">
                    <button className="btn" onClick={this.onBtnClick}>2019</button>
                    <button className="btn" onClick={this.onBtnClick}>2017</button>
                    <button className="btn" onClick={this.onBtnClick}>2018</button>
                    <button className="btn" onClick={this.onBtnClick}>2016</button>
                    <button className="btn" onClick={this.onBtnClick}>2015</button>
                    <button className="btn" onClick={this.onBtnClick}>2014</button>
                </div>
                <h2>{year} year. {isFetching ? 'Downloading...' : `[${photos.length}]`}</h2>
                
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
}