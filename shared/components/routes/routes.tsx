// Node module imports
import { Route as NewRoute, Link as NewLink } from "react-router-dom";

// Global app variables
import { appName } from '../../../routes';


export const dp = (path: string) => {
  if (window.location.host === "localhost:8000" ||
      window.location.host === "eastercompany.eu.pythonanywhere.com")
    return `/${appName}/` + path;
  return '/' + path;
}


export const Route = (props: any) => {
  return <NewRoute path={dp(props.path)} exact component={props.app} />
}


export const Link = (props: any) => {
  return <NewLink to={dp(props.link)}>
    {props.name}
  </NewLink>
}
