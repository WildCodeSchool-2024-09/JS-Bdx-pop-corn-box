import Slider from "react-slick";

import { settingsCaroussels } from "../../../../services/SettingCaroussel/SettingsCaroussel";
import type { CineListProps } from "../../../../types/CineListProps";
interface SeriesProps {
  series: CineListProps[];
  SeriePath: string;
}

export default function SeriesCaroussel({ series, SeriePath }: SeriesProps) {
  return (
    <section className="slider-container">
      <Slider {...settingsCaroussels}>
        {series.map((serie) => (
          <article key={serie.id}>
            <img src={`${SeriePath}${serie.poster_path}`} alt={serie.name} />
          </article>
        ))}
      </Slider>
    </section>
  );
}
