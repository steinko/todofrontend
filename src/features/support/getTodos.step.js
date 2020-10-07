import { Given,When ,Then } from 'cucumber';
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'

         Given('user {string}', function (string) {
           const { JSDOM } = require('jsdom')
           const jsdom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>')
           const { window } = jsdom
           global.window = window
		       global.document = window.document
         });

   

         When('I activate the get todos command', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

  

         Then('I get todo details  id: {int}', function (int) {
         // Then('I get todo details  id: {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   

         Then('description <description>', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   

         Then('target date <date>', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

  

         Then('if the task is done <isComplted>', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

