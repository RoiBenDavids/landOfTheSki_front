// import { React } from "../common";
// import { TableContainer, Table as MUITable, TableBody } from "@mui/material";
// import TableHeader from "./TableHeader";

// const Table = ({ data }) => {
//   const rows = data;
//   return (
//     <MUITable aria-labelledby="tableTitle">
//       <TableHeader rows={rows} />
//       <TableBody>
//         {data.map((n) => {
//           const isSelected = this.isSelected(n.id);
//           return (
//             <TableRow
//               hover
//               onClick={(event) => this.handleClick(event, n.id)}
//               role="checkbox"
//               aria-checked={isSelected}
//               tabIndex={-1}
//               key={n.id}
//               selected={isSelected}
//             >
//               <TableCell padding="checkbox">
//                 <Checkbox checked={isSelected} />
//               </TableCell>
//               <TableCell component="th" scope="row" padding="none">
//                 {n.name}
//               </TableCell>
//               <TableCell align="right">{n.calories}</TableCell>
//               <TableCell align="right">{n.fat}</TableCell>
//               <TableCell align="right">{n.carbs}</TableCell>
//               <TableCell align="right">{n.protein}</TableCell>
//             </TableRow>
//           );
//         })}
//         {emptyRows > 0 && (
//           <TableRow style={{ height: 49 * emptyRows }}>
//             <TableCell colSpan={6} />
//           </TableRow>
//         )}
//       </TableBody>
//     </MUITable>
//   );
//   //   return (
//   //     <TableContainer>
//   //       <MUITable>
//   //         <TableBody></TableBody>
//   //       </MUITable>
//   //     </TableContainer>
//   //   );
// };
