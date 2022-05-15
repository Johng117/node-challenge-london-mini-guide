import { useState, useEffect } from "react";
import Rows from "./TableRows";

const TableData = (props) => {
  const [districtData, setDistrictData] = useState({});

  async function showDistrictData() {
    let data = await fetch(`./server.js/district?place=${props.distName}`);

    let data2 = await data.json();
    setDistrictData(data2);
  }
  useEffect(() => {
    showDistrictData();
  }, [props.distName]);

  return (
    <div class="section pt-3 mx-6">
      <div class="table-container">
        {districtData ? (
          districtData[props.category] ? (
            <Rows disData={districtData} cat={props.category} />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default TableData;
