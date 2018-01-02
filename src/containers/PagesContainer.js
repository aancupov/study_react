import { connect } from 'react-redux';

import Pages from 'components/ui/Pages';

const stateToProps = (state) => ({
  pages: state.pages.result,
  isFetching: state.pages.isFetching,
  error: state.pages.error
});

export default connect(stateToProps)(Pages);
