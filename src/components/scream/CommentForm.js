import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
// Mui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// redux
import { connect } from "react-redux";
import { submitComment } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spearedIt,
});

class CommentFrom extends Component {
  state = {
    body: "",
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.errors) {
      this.setState({ body: "" });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: {} });
    this.props.submitComment(this.props.screamId, { body: this.state.body });
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;
    const commentFromMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="body"
            type="text"
            label="Comment on this scream"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
        <hr className={classes.sLine} />
      </Grid>
    ) : null;

    return commentFromMarkup;
  }
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

CommentFrom.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { submitComment })(
  withStyles(styles)(CommentFrom)
);
