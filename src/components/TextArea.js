import mount from '../mount';
import Input from './Input';

export default {
  name: 'TextArea',
  type: 'textarea',
  style: (props) => ({
    ...mount(Input).style(props),
  }),
};
