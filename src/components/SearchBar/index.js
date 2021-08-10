import React from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, }) => (
  <Segment>
      <Form onSubmit={onSearchSubmit}>
        <Input
          className="search"
          fluid
          icon="search"
          placeholder="Search crypto..."
          value={searchValue}
          onChange={(evt) => onSearchChange(evt.target.value)}
        />
      </Form>
    </Segment>
);

SearchBar.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;