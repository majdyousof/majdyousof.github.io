type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
  value?: string;
};

const hasClass = (node: Node, className: string) => {
  const classes = node.properties?.className;
  return Array.isArray(classes)
    ? classes.includes(className)
    : classes === className;
};

const removeBacklinks = (nodes: Node[] = []): Node[] =>
  nodes
    .filter(
      (node) =>
        !(node.tagName === 'a' && hasClass(node, 'data-footnote-backref'))
    )
    .map((node) => ({
      ...node,
      children: node.children ? removeBacklinks(node.children) : undefined,
    }));

const footnoteContent = (note: Node): Node[] =>
  (note.children ?? []).flatMap((child) =>
    child.tagName === 'p'
      ? removeBacklinks(child.children)
      : removeBacklinks([child])
  );

const findFootnoteList = (node: Node): Node | undefined => {
  if (node.tagName === 'ol') return node;
  return node.children?.map(findFootnoteList).find(Boolean);
};

const isFootnoteSection = (node: Node) =>
  node.tagName === 'section' &&
  (hasClass(node, 'footnotes') || node.properties?.dataFootnotes !== undefined);

const collectFootnotes = (node: Node, notes: Map<string, Node[]>) => {
  if (!node.children) return;

  node.children.forEach((child) => {
    if (!isFootnoteSection(child)) {
      collectFootnotes(child, notes);
      return;
    }

    const list = findFootnoteList(child);
    list?.children?.forEach((item) => {
      const id = item.properties?.id;
      if (typeof id === 'string') notes.set(`#${id}`, footnoteContent(item));
    });
  });
};

const transformReferences = (node: Node, notes: Map<string, Node[]>) => {
  if (!node.children) return;

  node.children.forEach((child) => {
    if (child.tagName !== 'sup') {
      transformReferences(child, notes);
      return;
    }

    const reference = child.children?.find((item) => item.tagName === 'a');
    const href = reference?.properties?.href;
    if (!reference || typeof href !== 'string' || !notes.has(href)) return;

    const number = href.replace('#user-content-fn-', '');
    child.tagName = 'span';
    child.properties = { className: ['sidenote'] };
    child.children = [
      {
        type: 'element',
        tagName: 'a',
        properties: {
          ...reference.properties,
          className: ['sidenote-reference'],
          ariaLabel: `Read footnote ${number}`,
        },
        children: reference.children,
      },
      {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['sidenote-content'],
          role: 'note',
        },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['sidenote-number'] },
            children: [{ type: 'text', value: `${number}.` }],
          },
          ...(notes.get(href) ?? []),
        ],
      },
    ];
  });
};

const rehypeSidenotes = () => (tree: Node) => {
  const notes = new Map<string, Node[]>();
  collectFootnotes(tree, notes);
  transformReferences(tree, notes);
};

export default rehypeSidenotes;
