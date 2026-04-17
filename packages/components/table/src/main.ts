import type { ComponentProps } from 'react'

import { TableBodyRoot, TableCell, TableColumn, TableHeaderRoot, TableRoot, TableRow } from './table'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Header: TableHeaderRoot,
  Column: TableColumn,
  Body: TableBodyRoot,
  Row: TableRow,
  Cell: TableCell,
})

export type Table = {
  Props: ComponentProps<typeof TableRoot>
  RootProps: ComponentProps<typeof TableRoot>
  HeaderProps: ComponentProps<typeof TableHeaderRoot>
  ColumnProps: ComponentProps<typeof TableColumn>
  BodyProps: ComponentProps<typeof TableBodyRoot>
  RowProps: ComponentProps<typeof TableRow>
  CellProps: ComponentProps<typeof TableCell>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TableRoot, TableHeaderRoot, TableColumn, TableBodyRoot, TableRow, TableCell }
export type {
  TableRootProps,
  TableRootProps as TableProps,
  TableHeaderRootProps,
  TableColumnProps,
  TableBodyRootProps,
  TableRowProps,
  TableCellProps,
} from './table'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { tableVariants } from '@flexi-ui/styles'
export type { TableVariants } from '@flexi-ui/styles'
