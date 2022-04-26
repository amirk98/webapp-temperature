import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { Line } from 'react-chartjs-2';

function DataParse() {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  

  // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
      sortable: true
    }
    ));

    setData(list);
    setColumns(columns);
  }

  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  }

  const tableData = {
    columns,
    data
  };

  const chartOpt = {
    title: {
      text: "Temperature vs Timestamp"
    },
    series: [
      {
        data: [1,9,5,6,3,5,7,2,1,4,2,7,4,6,8]
      }
    ]
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <Button color="inherit" href ="http://localhost:8080/logout">Logout</Button>
              </Toolbar>
            </AppBar>
        </Box>
        <br></br>
      <h2>Temperature Dashboard</h2>
      <br></br>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <DataTableExtensions {...tableData}>
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
        defaultSortFieldID={1}
        selectableRows
      /></DataTableExtensions>
      <br></br>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={chartOpt}
      />

    </div>
  );
}

export default DataParse;