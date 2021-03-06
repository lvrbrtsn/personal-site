import React from "react";
import styled, { css, injectGlobal } from "react-emotion";
import Link from "gatsby-link";
import { Links } from "../styles/core.js";

const LinkContainer = styled.div`
  display: flex;
  min-width: 25%;
  justify-content: space-between;
`;

export default () => <LinkContainer />;
