import clsx from 'clsx'
import { Section } from '@lib/mdast-util-toc'
import { useTableOfContents } from 'contexts/table-of-contents'

function TableOfContentsList() {
  const tableOfContents = useTableOfContents()

  if (tableOfContents.isEmpty) return null

  return (
    <ul className="toc">
      {tableOfContents.value.map((section) => (
        <TableOfContentsListItem key={section.id} {...section} />
      ))}
    </ul>
  )
}

function TableOfContentsListItem(props: Section) {
  const tableOfContents = useTableOfContents()
  const isActive = props.id === tableOfContents.activeSectionId
  const isActiveAncestor =
    props.children &&
    tableOfContents.activeSectionAncestorIds.includes(props.id)

  return (
    <>
      <li
        className={clsx(
          isActive && 'active',
          isActiveAncestor && 'active-ancestor'
        )}
        key={props.id}
        style={{ paddingLeft: 15 * Math.max(props.level - 2, 0) }}
      >
        <a href={`#${props.id}`}>{props.title}</a>
      </li>
      {props.children.map((subsection) => (
        <TableOfContentsListItem key={subsection.id} {...subsection} />
      ))}
    </>
  )
}

export { TableOfContentsList }