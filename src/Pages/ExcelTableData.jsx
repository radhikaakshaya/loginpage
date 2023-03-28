import React from 'react'
import { useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'

const ExcelTableData = () => {
    const tableref=useRef(null)
    const data=[
        {
id:1,
name:'radhika',
email:'radhika@gmail.com'
        },
        {
            id:2,
            name:'akshaya',
            email:'akshaya@gmail.com'
                    },
                    {
                        id:3,
                        name:'akshu',
                        email:'akshu@gmail.com'
                                },
                                {
                                    id:4,
                                    name:'laxmi',
                                    email:'laxmi@gmail.com'
                                            },
                                            {
                                                id:5,
                                                name:'ram',
                                                email:'ram@gmail.com'
                                                        },
    ]
    const {onDownload}=useDownloadExcel({
        currentTableRef:tableref.current,
        filename:'user_info',
        sheet:'UserData'
    })
  return (
    <div className='justify-center flex flex-col gap-2 items-center'>
        <button className='bg-blue-400 p-2'
        onClick={onDownload}
        >Export Data</button>
        <table className='border-2 border-gray-400'
        ref={tableref}
        >
            <thead className='border-b-2 border-gray-400'>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
            </thead>
            <tbody>
                
                    {
                        data.map((dd)=>{
                            return(
                                <tr key={dd.id} className='border-b-2 border-gray-400'>
                                    <td>{dd.id}</td>
                                    <td>{dd.name}</td>
                                    <td>{dd.email}</td>
                                </tr>
                            )
                        })
                    }
            
            </tbody>
        </table>
    </div>
  )
}

export default ExcelTableData