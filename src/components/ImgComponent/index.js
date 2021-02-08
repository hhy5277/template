import styles from "./index.less";

export default function ImgComponent(data) {
  const {style} = data;

  return <img className={styles.main} style={style} src={data.value} alt="" />;
}