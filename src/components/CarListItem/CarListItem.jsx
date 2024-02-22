export const CarListItem = ({
  car: {
    id,
    year,
    make,
    model,
    type,
    img,

    accessories,

    rentalPrice,
    rentalCompany,
    address,

    mileage,
  },
}) => {
  const city = address ? address.split(",")[1].trim() : "";
  const country = address ? address.split(",")[2].trim() : "";

  return (
    <div>
      <img src={img} alt="car" />
      <div>
        <h3>
          {make} {model}
        </h3>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <ul>
          <li>
            <p>{city}</p>
          </li>
          <li>
            <p>{country}</p>
          </li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{mileage}</li>
          <li>{accessories[0]}</li>
        </ul>
      </div>
    </div>
  );
};
