import { useState } from "react"
import { MdCleaningServices } from "react-icons/md"
import { utils,read } from "xlsx"

const ImportExcel=()=>{
    const [excelData,setExcelData]=useState([])
    const [excelError,setExcelError]=useState('')
    const file_type=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-excel']
    const handleChange=(e)=>{
const selected_file=e.target.files[0];
if(selected_file){
    if(selected_file && file_type.includes(selected_file.type)){
let reader=new FileReader();
reader.onload=(e)=>{
    const workbook=read(e.target.result);
    const sheet=workbook.SheetNames;
    if(sheet.length){
        const data=utils.sheet_to_json(workbook.Sheets[sheet[0]]);
        setExcelData(data);
    }
}
reader.readAsArrayBuffer(selected_file)
    }else{
        setExcelError('please upload only excel file')
        setExcelData([])
    }
  
}
    }
    return(
        <div className='justify-center item-center flex flex-col'>
<div>
    <input type='file' 
    onChange={handleChange}
    />
</div>
<div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {
excelData.length
?
excelData.map((info)=>(
    <tr>
        <td>{info.ID}</td>
        <td>{info.NAME}</td>
        <td>{info.EMAIL}</td>
    </tr>
))
:
excelError.length ? <tr>{excelError}</tr>:
    <tr>No User Data is present</tr>



            }
        </tbody>
    </table>
</div>
        </div>
    )
}
export default ImportExcel