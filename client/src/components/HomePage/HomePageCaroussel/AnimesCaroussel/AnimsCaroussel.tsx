import Slider from "react-slick";
import { settingsCaroussels } from "../../../../services/SettingCaroussel/SettingsCaroussel";
import type { CineListProps } from "../../../../types/CineListProps";
export type AnimsProps = {
  anims: CineListProps[];
  AnimPath: string;
};
export default function AnimsCaroussel({ anims, AnimPath }: AnimsProps) {
  return (
    <section className="slider-container">
      <Slider {...settingsCaroussels}>
        {anims.map((anim) => (
          <article key={anim.id}>
            <img src={`${AnimPath}${anim.poster_path}`} alt={anim.name} />
          </article>
        ))}
      </Slider>
    </section>
  );
}
