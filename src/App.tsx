import React, { Component, } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PlusOne from '@material-ui/icons/PlusOneOutlined';
import { calculateSimple } from "./maths-parser/calculator";
import Zoom from '@material-ui/core/Zoom';

import {
  withStyles,
  createStyles,
  MuiThemeProvider,
  createMuiTheme,
  Theme } from '@material-ui/core/styles';

//import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface IAppClasses {
  main: string,
  avatar: string,
  paper: string,
  form: string,
  submit: string,
  result: string
}

interface IAppProps {
  classes: IAppClasses
}

interface IAppState {
  expression: string,
  input: string
  result?: number,
  error?: string
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

const styles = (theme: Theme) => createStyles({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  result: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    padding: `${theme.spacing.unit * 2}px`,
  }
});

class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      input: "",
      expression: ""
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = calculateSimple(this.state.input);

    this.setState({
      expression: this.state.input,
      result: result
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PlusOne />
            </Avatar>
            <Typography component="h1" variant="h5">
              Maths parser
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="expression">Expression</InputLabel>
                <Input id="expression" name="expression" autoFocus onChange={this.handleChange} />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Calculate
              </Button>
            </form>
          </Paper>
          {this.state.result &&
            <Zoom in={this.state.result != null}>
              <Paper className={classes.result}>
                <Typography component="h1" variant="h5">
                {this.state.expression} = <output htmlFor="expression">{this.state.result}</output>
                </Typography>
              </Paper>
            </Zoom>
          }
        </main>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
