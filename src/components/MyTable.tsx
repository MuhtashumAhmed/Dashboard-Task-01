import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Column definition

export type Column<T> = {
  label: string;
  key: string; //address.city
  render?: (row: T) => React.ReactNode;
};

interface MyTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

function getNestedValue(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export default function MyTable<T>({ data, columns }: MyTableProps<T>) {
  return (
    <Table>
      <TableHeader className="bg-primary  pointer-events-none">
        <TableRow >
          {columns.map((col) => (
            <TableHead className="text-white" key={col.key}>
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col) => (
              <TableCell key={col.key}>
                {col.render
                  ? col.render(row)
                  : String(getNestedValue(row, col.key) ?? "-")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
