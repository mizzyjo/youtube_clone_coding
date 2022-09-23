import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: { snippet }}) => (
      // <h1>{ props.video.snippet.title }</h1>
      <li className={styles.container}>
        <div className={styles.video}>
          <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnaul" />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
        
      </li>
  );

export default VideoItem;