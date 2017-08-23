import mount from '../mount';
import Input from './Input';

export default {
  name: 'Select',
  type: 'select',
  style: (props) => ({
    ...mount(Input).style(props),
    width: '100%',
    height: '35px',
    backgroundColor: '#ffffff',
    backgroundImage: 'none',
  }),
};
