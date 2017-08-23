import mount from '../mount';
import Small from './Small';

export default {
  name: 'InputHelp',
  type: 'small',
  style: (props) => ({
    ...mount(Small).style(props),
    marginTop: '.25rem',
  }),
};
