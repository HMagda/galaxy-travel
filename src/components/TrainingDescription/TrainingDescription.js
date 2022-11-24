import React from 'react';
import Astronaut from '../../assets/astronaut_lines.jpg';
import Rocket from '../../assets/rocket.jpg';
import styles from './TrainingDescription.module.scss';

const TrainingDescription = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>You will meet veteran NASA astronauts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            risus leo, convallis sit amet tincidunt sed, consectetur sit amet
            augue. Donec lacinia mollis eleifend. Aliquam hendrerit ex urna,
            maximus mattis est imperdiet ultricies. Suspendisse eget accumsan
            metus. Proin ut suscipit sem. Duis tortor leo, vulputate ut maximus
            quis, auctor et lacus. Curabitur elementum ultrices feugiat. Sed
            lacinia viverra erat, et laoreet velit cursus id. Sed vitae gravida
            justo. Integer malesuada justo et dolor gravida elementum id ut
            nisl. In lobortis magna sapien, vel molestie nibh blandit sit amet.
            Mauris malesuada mi et ex semper, id fringilla arcu pharetra.
            <br />
            <br />
            Phasellus eget lorem fermentum, interdum enim ut, suscipit risus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Donec blandit eu magna sodales efficitur.
            Sed faucibus ligula vitae mauris molestie, ut ullamcorper elit
            lacinia. Quisque enim mauris, consectetur eget felis ultricies,
            euismod molestie lacus. Pellentesque at lectus non elit faucibus
            sagittis et ac nibh. Nulla sed neque ex. In vulputate felis id
            eleifend aliquam. Aenean nisl lorem, mattis id nibh quis, maximus
            malesuada turpis.
          </p>
        </div>
        <div className={styles.image}>
          <img src={Astronaut} alt='Astronaut' />
        </div>
      </div>
      <div className={styles.container + ' ' + styles.flex_reverse}>
        <div className={styles.text}>
          <h1>You will learn the technical basics</h1>
          <p>
            Nam neque purus, scelerisque nec faucibus at, congue vel turpis.
            Nullam varius venenatis arcu eget suscipit. Sed tempor fringilla
            dignissim. Maecenas nulla neque, luctus ut est at, consectetur
            pretium tellus. Proin pharetra purus non semper molestie. Nullam
            lobortis viverra mi, vel tempus lectus. Nulla consectetur tellus a
            tellus mollis, eu dictum massa sodales. Ut lacinia, arcu vitae
            porttitor feugiat, tellus justo aliquet ante, ut lacinia sem leo non
            lectus. Aliquam placerat mauris eu varius viverra. Integer pharetra,
            libero rhoncus condimentum lobortis, nulla eros dapibus nisl, sed
            accumsan sapien sapien id nisi. Nullam commodo augue sed tincidunt
            accumsan.
          </p>
        </div>
        <div className={styles.image}>
          <img src={Rocket} alt='Rocket' />
        </div>
      </div>
    </>
  );
};

export default TrainingDescription;
