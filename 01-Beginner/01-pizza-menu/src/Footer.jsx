const Footer = () => {
  const hour = new Date().getHours();
  //   console.log(hour);

  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're Open Currently");
  //   else {
  //     alert("Sorry We're Closed");
  //   }
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently Open!</footer>
  );
};

export default Footer;
