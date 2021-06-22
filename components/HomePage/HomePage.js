import Button from "../Button/Button";
import PageContentCard from "../PageContentCard/PageContentCard";

const HomePage = () => {
  return (
    <PageContentCard>
      <h1>Oferta</h1>
      <p>
        <span>Pokoje gościnne ARKADIA</span> oferuje pokoje we Wrześni, w
        odległości 800 m od dworca kolejowego i 1km od dworca autobusowego. Do
        najbliższego portu lotniczego Poznań-Ławica - 55 km. Do centrum miasta
        tylko 1,5 km.
        <br />
        <br />
        <span>
          Obiekt oferuje bezpłatny, bezprzewodowy dostęp do internetu
        </span>{" "}
        oraz ogród z tarasem. Na miejscu do dyspozycji Gości oddano 7 pokoi z Wi
        Fi , w pełni wyposażoną kuchnię z dwiema lodówkami i niezbędnymi
        przyborami kuchennymi oraz dwie łazienki z kabiną prysznicową. Na
        miejscu znajduje się również pralnia z suszarnią oraz deską do
        prasowania.
        <br />
        <br />
        Goście mogą korzystać również z ogólnodostępnego pokoju wypoczynkowego z
        TV, jaki i sprzętu do grillowania w prywatnym ogrodzie. Na miejscu
        znajduje się również bezpłatny prywatny parking.
        <br />
        <br />
        Najbliższy supermarket, apteka oraz restauracja znajduje się zaledwie
        200 m od obiektu.
      </p>
      <p>
        <span>Villa ARKADIA</span>
        <a href="mailto:malgorzata.sikorska@arkadiawrzesnia.pl">
          malgorzata.sikorska@arkadiawrzesnia.pl
        </a>
      </p>
      <div>
        <Button href="/galeria">GALERIA - Zobacz nasze pokoje!</Button>
        <Button>CENNIK</Button>
      </div>
    </PageContentCard>
  );
};

export default HomePage;
