import React from 'react';
import classes from './GalleryInfo.css'

const galleryInfo = (props) => (
  <div className={classes.GalleryInfo}>
    <div className={classes.GalleryInfo.div}>
      <strong>Hospital <em>noun</em></strong>
      <p> {props.hospital} </p>
    </div>
    <div className={classes.GalleryInfo.div}>
      <strong>HD Data Source <em>noun</em></strong>
      <p> {props.dataSourceHd} </p>
    </div>
    <div className={classes.GalleryInfo.div}>
      <strong>Thumbnail Data Source <em>noun</em></strong>
      <p> {props.dataSourceThumb} </p>
    </div>
    <div className={classes.GalleryInfo.div}>
      <strong>Number of Studies <em>noun</em></strong>
      <p>{props.totalStudies} </p>
    </div>
    <div className={classes.GalleryInfo.div}>
      <strong>Number of Series <em>noun</em></strong>
      <p> {props.totalSeries} </p>
    </div>
    <div className={classes.GalleryInfo.div}>
      <strong>Number of Images <em>noun</em></strong>
      <p> {props.totalImages} </p>
    </div>
  </div>
);

export default galleryInfo;