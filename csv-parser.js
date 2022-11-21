import fs from 'fs';

let data;
try {
	 data = fs.readFileSync('./data/sample.csv', "utf8")
} catch (error) {
    console.log(error);	
}

let rows = data.split("\n") 
const getAttribute = () => {
    return rows[0].split(',')
  }

  const getRowData = () => {
    let rowData = []
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i].split(',')
      rowData.push(row)
    }
    return rowData;
  }

  const CSVToObject = () => {

    const attributes = getAttribute(data)
    const rowData = getRowData()
  
    let rowsObj = []
    for (let i = 0; i < rowData.length; i++) {
  
      let rowObj = {}
  
      for (let j = 0; j < rowData[i].length; j++) {
        rowObj[attributes[j]] = rowData[i][j]; 
      }
  
      rowsObj.push(rowObj)
    }
  
    return rowsObj
  }
  
  let newData = CSVToObject()
  
  console.log(newData);
