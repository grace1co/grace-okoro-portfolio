// Tech stack assets module - consolidates all tech stack icons
import NextJS from './next_js.png';
import FastAPI from './fastapi.svg';
import Python from './python_logo.png';
import PostgreSQL from './PostgreSQL.png';
import Qdrant from './qdrant_logo.png';
import CSS from './CSS.svg';
import Firebase from './firebase_icon.png';
import Docker from './Docker.svg';
import Oracle from './oracle_logo.png';
import ExpressJSLight from './ExpressJS-Light.svg';
import PowerShell from './powershell_logo.jpg';
import GithubLight from './Github-Light.svg';
import Firestore from './firestore_logo.png';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import ServiceNow from './servicenow_logo.png';
import ClerkAuth from './clerk_auth.png';
import VercelLogo from './vercel_logo.png';
import NodeJSLight from './NodeJS-Light.svg';
import Postman from './Postman.svg';
import ReactLight from './React-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TypeScript from './TypeScript.svg';
import UnityLight from './Unity-Light.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';

export const techStackIcons = {
  NextJS,
  FastAPI,
  Python,
  PostgreSQL,
  Qdrant,
  CSS,
  Firebase,
  Docker,
  Oracle,
  ExpressJSLight,
  PowerShell,
  GithubLight,
  Firestore,
  HTML,
  JavaLight,
  JavaScript,
  ServiceNow,
  ClerkAuth,
  VercelLogo,
  NodeJSLight,
  Postman,
  ReactLight,
  TailwindCSSLight,
  TypeScript,
  UnityLight,
  VercelLight,
  ViteLight,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;
