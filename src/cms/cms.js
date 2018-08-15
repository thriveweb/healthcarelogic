import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { CaseChangePageTemplate } from '../templates/CaseChangePage'
import { BetterViewPageTemplate } from '../templates/BetterViewPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('casechange-page', ({ entry }) => (
  <CaseChangePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('betterview-page', ({ entry }) => (
  <BetterViewPageTemplate {...entry.toJS().data} />
))
