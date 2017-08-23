import mount from './mount';

const components = [
  'layout/Col', 'layout/Container', 'layout/ItemsRow', 'layout/Line',
  'layout/Row',
  'A', 'Alert', 'Badge', 'Brand', 'Breadcrumb', 'BreadcrumbItem',
  'Button', 'ButtonGroup', 'Card', 'Code', 'Cover', 'Fixed',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Heading', 'Img', 'Input',
  'InputGroup', 'InputHelp', 'Label', 'ListItem', 'ListGroup',
  'NavBadge', 'NavBar', 'Navigation', 'NavItem', 'P', 'PageItem',
  'Pagination', 'Progress', 'ProgressBar', 'Select', 'Small', 'Star',
  'SubHeader', 'Submit', 'Text', 'TextArea', 'Truncate', 'UserCard',
  'UserInfo',
  'Provider',
];

components.map((component) => {
  const { default: defaultComponent } = require('./components/' + component);
  const componentName = component.split('/').pop();
  let finalComponent = defaultComponent;

  if (component !== 'Provider') {
    finalComponent = mount(defaultComponent);
  }

  module.exports[componentName] = finalComponent;
});
