import harrow from "./Harrow.json";
import heathrow from "./Heathrow.json";
import stratford from "./Stratford.json";
import Row from "./TableRow";

const Table = (props) => {
  const cities = {
    "harrow": harrow,
    "heathrow": heathrow,
    "stratford": stratford,
  };
  let entryNumber = 0;
  // const categories = {};

  return (
    <table>
      <tr>
        <th className="number">#</th>
        <th className="name">Name</th>
        <th className="phone">Phone</th>
        <th className="address">Address</th>
        <th className="web">Website</th>
      </tr>
      {/* {cities[props.cityName].colleges.map((entry) => {
        entryNumber++;
        return <Row entry={entry} entryNumber={entryNumber} />;
      })} */}
    </table>
  );
};

export default Table;
