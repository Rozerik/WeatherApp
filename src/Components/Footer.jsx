import InfoSection from "./InfoSection";

export default function Footer({ weather }) {
    
  {/*Объект, который хранит в себе информацию о компонента влажности и скорости ветра*/}
  const footerInfo = [
    {
      id: 1,
      imgSrc: "src\\assets\\humidity.svg",
      imgAlt: "humidity",
      value: weather.main.humidity,
      description: "Humidity",
      unit: "%",
    },
    {
      id: 2,
      imgSrc: "src\\assets\\wind.svg",
      imgAlt: "wind speed",
      value: weather.wind.speed,
      description: "Wind Speed",
      unit: "km/h",
    },
  ];

  return (
    <footer>
      {footerInfo.map((item) => (
        <InfoSection
          key={item.id}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          measurementSrc={item.value}
          measurementDescription={item.description}
          measurementUnit={item.unit}
        />
      ))}
    </footer>
  );
}
