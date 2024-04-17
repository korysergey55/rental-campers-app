import ReactPlayer from 'react-player';
import styles from './styles.module.scss';
import playStyleIcon from '../../sourses/images/playIcon.png';

const VideoContent = () => {
  return (
    <section className={styles.videoContent}>
      <div className={styles.container}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PyRBvoDIOhg&t=3s"
          width="100%"
          height="643px"
          playIcon={<img src={playStyleIcon} alt="playerIcon" />}
          controls={true}
        />
      </div>
    </section>
  );
};

export default VideoContent;
