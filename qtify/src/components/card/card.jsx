import React from "react";
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./card.module.css";


export default function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { id, image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`} className={styles.link}/>
              <div className={styles.wrapper}>
                
                <div className={styles.card}>
                  <img src={image} alt="Album" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      className={styles.chip}
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
                </div>
              
            
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="Song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return getCard(type);
}
