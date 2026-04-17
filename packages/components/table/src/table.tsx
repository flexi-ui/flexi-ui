'use client'

import type { TableVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { tableVariants } from '@flexi-ui/styles'
import {
  Cell as CellPrimitive,
  Column as ColumnPrimitive,
  Row as RowPrimitive,
  Table as TablePrimitive,
  TableBody as TableBodyPrimitive,
  TableHeader as TableHeaderPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Table Root
 * -----------------------------------------------------------------------------------------------*/
interface TableRootProps extends ComponentPropsWithRef<typeof TablePrimitive>, TableVariants {}

const TableRoot = ({ className, size, ...rest }: TableRootProps) => {
  const styles = tableVariants({ size })

  return (
    <TablePrimitive
      className={cx(styles, className) ?? ''}
      data-slot="table"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Table Header
 * -----------------------------------------------------------------------------------------------*/
interface TableHeaderRootProps extends ComponentPropsWithRef<typeof TableHeaderPrimitive> {}

const TableHeaderRoot = ({ className, ...rest }: TableHeaderRootProps) => {
  return (
    <TableHeaderPrimitive
      className={cx('table__header', className) ?? ''}
      data-slot="table-header"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Table Column
 * -----------------------------------------------------------------------------------------------*/
interface TableColumnProps extends ComponentPropsWithRef<typeof ColumnPrimitive> {}

const TableColumn = ({ className, ...rest }: TableColumnProps) => {
  return (
    <ColumnPrimitive
      className={cx('table__column', className) ?? ''}
      data-slot="table-column"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Table Body
 * -----------------------------------------------------------------------------------------------*/
interface TableBodyRootProps extends ComponentPropsWithRef<typeof TableBodyPrimitive> {}

const TableBodyRoot = ({ className, ...rest }: TableBodyRootProps) => {
  return (
    <TableBodyPrimitive
      className={(renderProps) =>
        cx('table__body', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="table-body"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Table Row
 * -----------------------------------------------------------------------------------------------*/
interface TableRowProps extends ComponentPropsWithRef<typeof RowPrimitive> {}

const TableRow = ({ className, ...rest }: TableRowProps) => {
  return (
    <RowPrimitive
      className={(renderProps) =>
        cx('table__row', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="table-row"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Table Cell
 * -----------------------------------------------------------------------------------------------*/
interface TableCellProps extends ComponentPropsWithRef<typeof CellPrimitive> {}

const TableCell = ({ className, ...rest }: TableCellProps) => {
  return (
    <CellPrimitive
      className={(renderProps) =>
        cx('table__cell', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="table-cell"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TableRoot, TableHeaderRoot, TableColumn, TableBodyRoot, TableRow, TableCell }
export type { TableRootProps, TableHeaderRootProps, TableColumnProps, TableBodyRootProps, TableRowProps, TableCellProps }
