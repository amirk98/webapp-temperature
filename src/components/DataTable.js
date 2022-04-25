import MUIDataTable from "mui-datatables";
import React, { useState, CSSProperties } from "react";
// import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useCSVReader } from 'react-papaparse';


// theme CSS for React CSV Importer
import "react-csv-importer/dist/index.css";

// basic styling and font for sandbox window
import "./index.css";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function DataTable() {
  const { CSVReader } = useCSVReader();
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "uuid", options: { filterOptions: { fullWidth: true } } },
    { name: "nine", options: { filterOptions: { fullWidth: true } } },
    { name: "unix", options: { filterOptions: { fullWidth: true } } },
    { name: "unix_s", options: { filterOptions: { fullWidth: true } } },
    { name: "time", options: { filterOptions: { fullWidth: true } } },
    { name: "temp_c", options: { filterOptions: { fullWidth: true } } },
    // { name: "Name", options: { filterOptions: { fullWidth: true } } },
    // { name: "Title", options: { filterOptions: { fullWidth: true } } },
    // { name: "Location", options: { filterOptions: { fullWidth: true } } }
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = 
  CSVReader.results;
  // [
  //   ["Gabby George", "Business Analyst", "Minneapolis"],
  //   [
  //     "Aiden Lloyd",
  //     "Business Consultant for an International Company and CEO of Tony's Burger Palace",
  //     "Dallas"
  //   ],
  //   ["Jaden Collins", "Attorney", "Santa Ana"],
  //   ["Franky Rees", "Business Analyst", "St. Petersburg"],
  //   ["Aaren Rose", null, "Toledo"],
  //   ["Johnny Jones", "Business Analyst", "St. Petersburg"],
  //   ["Jimmy Johns", "Business Analyst", "Baltimore"],
  //   ["Jack Jackson", "Business Analyst", "El Paso"],
  //   ["Joe Jones", "Computer Programmer", "El Paso"],
  //   ["Jacky Jackson", "Business Consultant", "Baltimore"],
  //   ["Jo Jo", "Software Developer", "Washington DC"],
  //   ["Donna Marie", "Business Manager", "Annapolis"]
  // ];

  // useEffect(() => {
  //   const dataArr = Array.from(CSVData).map((data) => {
  //     // Make sure values are truth before returning:
  //     if (data.data.name && data.data.city) {
  //       return {
  //         name: data.data.name,
  //         company: data.data.company,
  //         city: data.data.city,
  //         state: data.data.state
  //       };
  //     }
  //   });
  //   setDataForTable(dataArr);
  // }, [CSVData, setDataForTable])

  return (
      <>
    <h1>Temperature Prediction WebApp</h1>

    <CSVReader
      onUploadAccepted={(results: any) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div>
            <button type='button' {...getRootProps()}>
              Browse file
            </button>
            <div>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()}>
              Remove
            </button>
          </div>
          <ProgressBar/>
        </>
      )}
    </CSVReader>

    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Temperature Predicition"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default DataTable;