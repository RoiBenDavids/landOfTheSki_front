import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";

// const rows = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Dessert (100g serving)",
//   },
//   { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
//   { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
//   { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
//   { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
// ];
const TableHeader = ({ rows }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
          // checked={numSelected === rowCount}
          // onChange={onSelectAllClick}
          />
        </TableCell>
        {rows.map((row) => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            // sortDirection={orderBy === row.id ? order : false}
          >
            {/* <Tooltip
                title="Sort"
                placement={row.numeric ? "bottom-end" : "bottom-start"}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
