import PageContentCard from "../../components/PageContentCard/PageContentCard";

const Cennik = () => {
  return (
    <PageContentCard>
      <h1>Cennik</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1 noc</th>
            <th>2-14 noce</th>
            <th>15-30 noce</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nocleg</td>
            <td>50,0zł</td>
            <td>40,00zł</td>
            <td>35,00zł</td>
          </tr>
          <tr>
            <td>pokój 2-osobowy</td>
            <td>100,0zł</td>
            <td>80,00zł</td>
            <td>70,00zł</td>
          </tr>
          <tr>
            <td>pokój 3-osobowy</td>
            <td>150,0zł</td>
            <td>120,00zł</td>
            <td>105,00zł</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>POBYT POW. 30 NOCY - 600 zł / MIESIĄC</h2>
    </PageContentCard>
  );
};

export default Cennik;
