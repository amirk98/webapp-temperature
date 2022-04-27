import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function DataParse() {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [combine, setCombine] = useState([]);
  // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const list = [];
    const list2 = [];
    const listCombine =[];

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

          // Get unix_s column data
          list2.push(parseInt(obj.unix / 1000));

          // Combine temperature column data into list2
          list2.push(parseFloat(obj.temp));
          console.log(list2);

          // Combine object unix and temp_c
          while(list2.length) listCombine.push(list2.splice(0,2));
    
          console.log(listCombine);
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
    setTemp(list2);
    setCombine(listCombine);
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
    data,
    temp,
    combine
  };

  const chartOpt = {
    title: {
      text: "Temperature vs Timestamp"
    },
    series: [
      {
        data: combine
      }
    ],
    xAxis: {
      type: 'datetime',
    },
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
      <br></br><br></br>
      <h4>Graph</h4>

      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options= {chartOpt}
        // {data.length > 0 ? chartOpt:null}
      />

      <br></br><br></br><br></br>
      <h4>Table Data</h4>
      {console.log(data)}
      <DataTableExtensions {...tableData}>
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
        defaultSortFieldID={1}
        selectableRows
      /></DataTableExtensions>

    </div>
  );
}

export default DataParse;