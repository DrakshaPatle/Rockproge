

import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { padding } from '@mui/system';

const columns = [
    { id: 'name', label: 'Name', maxWidth: 1, background: "black" },
    { id: 'name', label: 'Name', maxWidth: 1, background: "black" },
    { id: 'name', label: 'Name', maxWidth: 1, background: "black" },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 1,maxWidth:'25px' },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 1,maxWidth:'25px' },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 1,maxWidth:'25px' },

    {
        id: 'population',
        label: 'Population',
        minWidth: 17,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),

    },
    {
        id: 'population',
        label: 'Population',
        minWidth: 17,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),

    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 17,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 17,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    
    

];



function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}




const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];


export default function ColumnGroupingTable() {


    // const [value, setvalue] = useState('');
    // const [dataSource, setDatasource] = useState(columns)
    // const [tableFilter, setTableFilter] = useState([]);


    // const filterData = (e) => {

    //     if (e.target.value != " ") {
    //         setvalue(e.target.value);


    //         const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
    //             String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
    //         ));
    //         setTableFilter([...filterTable])
    //     }

    //     else {
    //         setvalue(e.target.value);
    //         setDatasource([...dataSource])
    //     }
    // }








    const data = { nodes: columns };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [search, setSearch] = React.useState('');

    // const handleSearch = (event) => {
    //     setSearch(event.target.value);
    // };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };





    return (
        <Paper sx={{ width: '100%', paddingLeft: "300px", paddingTop: "100px", paddingRight: "70px" }}>




            <label htmlFor="search" style={{marginLeft :'-50px', paddingBottom: "80px", paddingTop: "0px",marginTop:"-100px" }}>

                <input id="search" type="text" value="Search"  />

            </label>

            <Button style={{ maxWidth: '100px', maxHeight: '150px',marginLeft:"100px", minWidth: '30px',  marginTop:'100px',minHeight: '90px' }} variant="contained" color="success"   >
                                Open Order
                                </Button>
            <Button style={{ maxWidth: '100px', maxHeight: '150px',marginLeft :'100px', minWidth: '30px',  marginTop:'100px',minHeight: '90px' }} variant="contained" color="success"   >
                                Open Order
                                </Button>
            <Button style={{ maxWidth: '100px', maxHeight: '150px',marginLeft :'100px', minWidth: '30px',  marginTop:'100px',minHeight: '90px' }} variant="contained" color="success"   >
                                Open Order
                                </Button>
            <Button style={{ maxWidth: '100px', maxHeight: '150px',marginLeft :'100px', minWidth: '30px',  marginTop:'100px',minHeight: '90px' }} variant="contained" color="success"   >
                                Open Order
                                </Button>

            <TableContainer sx={{ maxHeight: 600, overflowY: 'auto' , columnSpacing:'xs: 100, sm: 20000, md: 30000'}} >
            
                <Table stickyHeader aria-label="sticky table" style={{ height:'540' }}>

                    <TableHead sx={{  borderRadius: "14px" }}>
                        <TableRow style={{ backgroundColor: "black" }}>

                            <TableCell align="center" colSpan={3}>

                                {/* <Button style={{ maxWidth: '100px', maxHeight: '250px', minWidth: '30px', minHeight: '90px' }} variant="contained" color="success">
                                   Open Jobs
                                </Button> */}

                            </TableCell >

                            <TableCell align="center" colSpan={3} style={{ paddingBottom: "20px" }}>


                                {/* <Button style={{ maxWidth: '100px', maxHeight: '250px', minWidth: '30px', minHeight: '90px' }} variant="contained" color="success"   >
                                Open Order
                                </Button> */}
                            </TableCell>


                            <TableCell align="center" colSpan={3}>

                                {/* <Button style={{ maxWidth: '100px', maxHeight: '250px', minWidth: '30px', minHeight: '90px' }} variant="contained" color="success">
                                    Schedule Order
                                </Button> */}
                            </TableCell>





                            <TableCell align="center" colSpan={2}>

                                {/* <Button style={{ maxWidth: '100px', maxHeight: '250px', minWidth: '30px', minHeight: '90px' }} variant="contained" color="success">
                                    Order History
                                </Button> */}
                            </TableCell>
                        </TableRow>






                        <TableRow   >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>


                    </TableHead>









                    <TableBody style={{ backgroundColor: "#E5E4E2" }}>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (


                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ backgroundColor: "#E5E4E2",height:"-112px"}}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>

                </Table>
            </TableContainer>


            <TablePagination
                rowsPerPageOptions={[25, 50, 150]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
