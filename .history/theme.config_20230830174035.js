import { useRouter } from 'next/router';
import React from "react";
import {
  SignedIn,
  UserButton
} from "@clerk/nextjs";

export default {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - cunbm'
      }
    }
  },logo: (
    <>
      <img src="./public/inginerie-log.png">
      </img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        My Cool Project
      </span>
    </>
  ),
    head:(  <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Home" />
      <meta name="og:title" content="Home" />
    </>
    ),
    repository: 'https://github.com/shuding/nextra', // project repo
    docsRepository: 'https://github.com/shuding/nextra', // docs repo
    branch: 'master', // branch of docs
    path: './src/pages', // path of docs
    titleSuffix: ' – Docs',
    search:true,
    darkmode:true,
    footer:true,
    footerText: 'CUNBM 20222 © Balint',
    footerEditOnGitHubLink: true, // will link to the docs repo
    logo: <>
      <svg>...</svg>
      <span>Documentatie</span>
    </>,
  }