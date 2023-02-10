// import React from 'react'
// import'./Navbar.css'
// const Table = () => {
//   return (
//     <div>



// <>
//   {/* About Us */}
//   <section id="about-us" className="section">
//     <div className="container">
//       <h1 className="display-1 text-center mt-3 pb-5">About Us</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta
//         dicta, consectetur aspernatur excepturi illum culpa ad maxime cumque
//         iste. Veniam a saepe repellat ullam, esse aliquid id fuga vel. Lorem
//         ipsum dolor sit amet consectetur adipisicing elit. In molestias
//         necessitatibus nam ullam dicta, ipsam id iste.
//       </p>
//       <div className="container mt-5 mb-5">
//         <h1>Our Satisfied Customers</h1>
//         {/* Table */}
//         <div className="table-container">
//           <table
//             className="table table-striped table-bordered table-hover"
//             id="table"
//           >
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Destination</th>
//                 <th>Rating</th>
//                 <th>Review</th>
//               </tr>
//             </thead>
//             <tbody id="tableBody">
//               <tr>
//                 <td>1</td>
//                 <td>Abhijeet Singh</td>
//                 <td>Shimla, India</td>
//                 <td>4</td>
//                 <td>
//                   We had a great time in Shimla. The hotels and tours were
//                   well-organized and the sights were beautiful. trip.
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Prajot Baloliya</td>
//                 <td>Jaisalmer, India</td>
//                 <td>5</td>
//                 <td>
//                   The trip to Jaisalmer was incredible! The hotels were
//                   top-notch and the tours were very informative.
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Anshika Paliwal</td>
//                 <td>Alleppey, India</td>
//                 <td>5</td>
//                 <td>We had a fantastic time in Alleppey.</td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Sagar Wagdare</td>
//                 <td>Shillong, India</td>
//                 <td>4</td>
//                 <td>The trip to Shillong was enjoyable overall.</td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>Raghav Sharma</td>
//                 <td>Shimla, India</td>
//                 <td>5</td>
//                 <td>The hotels were great.</td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>Shivam Panwar</td>
//                 <td>Shillong, India</td>
//                 <td>4</td>
//                 <td>Had amazing experience.</td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>Aashish Patel</td>
//                 <td>Shimla, India</td>
//                 <td>4</td>
//                 <td>The trip to Shillong was enjoyable.</td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>Shyam Mehra</td>
//                 <td>Jaisalmer, India</td>
//                 <td>4</td>
//                 <td>The tours were informative and great.</td>
//               </tr>
//               <tr>
//                 <td>9</td>
//                 <td>Raj Salvi</td>
//                 <td>Shillong, India</td>
//                 <td>5</td>
//                 <td>Had amazing experience and loads of fun.</td>
//               </tr>
//               <tr>
//                 <td>10</td>
//                 <td>Aidan Evans</td>
//                 <td>Alleppey, India</td>
//                 <td>4</td>
//                 <td>
//                   We had a great time in Shimla. The hotels and tours were
//                   well-organized and the sights were beautiful. trip.
//                 </td>
//               </tr>
//               <tr>
//                 <td>11</td>
//                 <td>Aaron Fletcher</td>
//                 <td>Jaisalmer, India</td>
//                 <td>4</td>
//                 <td>Enjoyed a lot, overall amazing experience.</td>
//               </tr>
//               <tr>
//                 <td>12</td>
//                 <td>Reece Morgan</td>
//                 <td>Shimla, India</td>
//                 <td>5</td>
//                 <td>
//                   The trip to Jaisalmer was incredible! The hotels were
//                   top-notch and the tours were very informative.
//                 </td>
//               </tr>
//               <tr>
//                 <td>13</td>
//                 <td>Moises Bray</td>
//                 <td>Alleppey, India</td>
//                 <td>5</td>
//                 <td>We had a fantastic time in Alleppey.</td>
//               </tr>
//               <tr>
//                 <td>14</td>
//                 <td>Gurdeep Borah</td>
//                 <td>Jaisalmer, India</td>
//                 <td>4</td>
//                 <td>The trip to Shillong was enjoyable overall.</td>
//               </tr>
//               <tr>
//                 <td>15</td>
//                 <td>Hari Arya</td>
//                 <td>Shimla, India</td>
//                 <td>5</td>
//                 <td>The hotels were great.</td>
//               </tr>
//               <tr>
//                 <td>16</td>
//                 <td>Jayesh Trivedi</td>
//                 <td>Shillong, India</td>
//                 <td>4</td>
//                 <td>Had amazing experience.</td>
//               </tr>
//               <tr>
//                 <td>17</td>
//                 <td>Pravin Goel</td>
//                 <td>Shimla, India</td>
//                 <td>4</td>
//                 <td>The trip to Shillong was enjoyable.</td>
//               </tr>
//               <tr>
//                 <td>18</td>
//                 <td>Vipin Borde</td>
//                 <td>Jaisalmer, India</td>
//                 <td>4</td>
//                 <td>The tours were informative and great.</td>
//               </tr>
//               <tr>
//                 <td>19</td>
//                 <td>Rashmi Grover</td>
//                 <td>Shillong, India</td>
//                 <td>5</td>
//                 <td>Had amazing experience and loads of fun.</td>
//               </tr>
//               <tr>
//                 <td>20</td>
//                 <td>Kanta Modi</td>
//                 <td>Alleppey, India</td>
//                 <td>4</td>
//                 <td>Enjoyed a lot, overall amazing experience.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   </section>
// </>

//     </div>
//   )
// }

// export default Table


import * as React from 'react';
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
  { id: 'name', label: 'Name', minWidth: 170 ,background: "black"  },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
     
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
     
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
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
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {


    const data = { nodes: columns };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };





  return (
    <Paper sx={{ width: '100%', paddingLeft:"340px" ,paddingTop:"100px" ,paddingRight:"20px"}  }>

<label htmlFor="search"   style={{paddingBottom:"40px"}}>
        
        <input id="search" type="text"value ="Search" onChange={handleSearch}   />
        
      </label>
      <TableContainer sx={{ maxHeight: 540}}   >
        <Table stickyHeader aria-label="sticky table" sx={{ height: '90%' }}>
          <TableHead   sx={{ background:"black",borderRadius:"14px"}}>
            <TableRow style={{backgroundColor:"black"}}>

              <TableCell align="center" colSpan={0}>
              <button style={{backgroundColor:"#3BB9FF",paddingBottom:"20px", paddingLeft:"30px",borderRadius:"12px", textAlign:"center"}}> Country</button>

                
              </TableCell >

              <TableCell align="center" colSpan={3} style={{paddingBottom:"20px"}}>
              <button style={{backgroundColor:"#3BB9FF",paddingBottom:"20px", paddingLeft:"30px",borderRadius:"12px", textAlign:"center"}}> Country</button>
              </TableCell>  

            
              <TableCell align="center" colSpan={3}>
              <button style={{backgroundColor:"#3BB9FF",paddingBottom:"20px", paddingLeft:"30px",borderRadius:"12px", textAlign:"center"}}> Country</button>
              </TableCell>

            
              <TableCell align="center" colSpan={2}>
              <button style={{backgroundColor:"#3BB9FF",paddingBottom:"20px", paddingLeft:"30px",borderRadius:"12px", textAlign:"center"}}> Country</button>
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





          <TableBody style ={{ backgroundColor:"green"}}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (

                    
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}   sx={{backgroundColor:"#E5E4E2"}}>
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
        rowsPerPageOptions={[10, 25, 100]}
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
