// Node module imports
import { Route as NewRoute, Link as NewLink, Switch } from "react-router-dom";

// Global app variables
import { appName } from '../../../routes';


const scrollContentToTop = () => {
  const content = document.querySelector('#article') as HTMLElement;
  return content.scrollTop = 0;
}


export const setAppTitle = (title: string) => {
  return document.title = `${appName} | ${title}`;
}


export const dp = (path: string) => {
  if (window.location.host === "localhost:8000" ||
      window.location.host === "eastercompany.eu.pythonanywhere.com")
    return `/${appName}/` + path;
  return '/' + path;
}


export const Route = (props: any) => {
  if ("any" in props) return <NewRoute path={dp(props.path)} component={props.app} />
  return <NewRoute path={dp(props.path)} exact component={props.app} />
}


export const Link = (props: any) => {
  return <NewLink to={dp(props.to)} onClick={scrollContentToTop}>
    {props.name}
  </NewLink>
}


export { Switch, NewLink }
