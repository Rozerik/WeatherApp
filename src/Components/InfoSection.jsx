export default function InfoSection({imgSrc, imgAlt, measurementSrc, measurementDescription, measurementUnit}) {
  return (
    <div className="infoSection">
      <div className="subInfoSection">
        <img
          className="bottomImg"
          src={imgSrc}
          alt={imgAlt}
        />
        {/*Вывод в компонент величины и единицы измерения атмосферной характеристики (влажность воздуха, скорость ветра)*/}
        <h3>{measurementSrc} {measurementUnit}</h3>
      </div>
      {/*Вывод в компонент названия атмосферной характеристики (влажность воздуха, скорость ветра)*/}
      <h4>{measurementDescription}</h4>
    </div>
  );
}
