<!-- 
This component constructs the Table component. 
Elements in the default slot are wrapped into Table Cells and Cell borders are set when appropriate.
-->

<script>
import Molecular from '~/scripts/component'
import Table from './table/Table'
import Cell from './table/Cell'

export default new Molecular({
  name: 'DataTable',
  functional: true,
  props: {
    divideHorizontal: {
      type: Boolean,
      default: false,
    },
    divideVertical: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      required: false,
    },
  },
  render: (createElement, context) =>
    createElement(
      Table,
      { props: { columns: context.props.columns } },
      !context.children
        ? []
        : context.children
            .filter(e => e.tag !== undefined)
            .map((e, i, { length }) =>
              createElement(
                Cell,
                {
                  props: {
                    borderBottom:
                      context.props.divideHorizontal &&
                      i < length - context.props.columns.length,
                    borderRight:
                      context.props.divideVertical &&
                      i % context.props.columns.length !==
                        context.props.columns.length - 1,
                  },
                },
                [e]
              )
            )
    ),
  components: {
    Table,
    Cell,
  },
})
</script>

<style lang="scss" scoped></style>
