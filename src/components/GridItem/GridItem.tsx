import { Level } from "@/helpers/imc";
import styles from './gridItem.module.css'; 
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';
import Image from "next/image";

type Props = {
  item: Level; 
};

export const GridItem = ({ item }: Props): JSX.Element => {
    return (
      <div className={styles.gridItem} style={{ backgroundColor: item.color }}>
        
        <div className={styles.gridIcon}>
          {item.icon === 'up' && <Image src={upImage} alt="up" width={30} height={30} />}
          {item.icon === 'down' && <Image src={downImage} alt="down" width={30} height={30} />}
        </div>

       
        <div className={styles.gridTitle}>
          {item.title}
        </div>

        {item.yourImc &&
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m2</div>
        }

       
        <div className={styles.gridInfo}>
        <>
        IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
        </div>
      </div>
    );
};
