/**
 * Copyright 2020
 * Idess Lee, Mitchell Massie for DubHacks 2020
 */
"use strict";

(function() {

  const BASE_URL = "http://localhost:8000";

  /**
   * Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the home page with yips and adds listener to the search term input and all buttons.
   */
  function init() {
    id("search-button").addEventListener("click", getQueryResult);
  }

  function getQueryResult() {
    let senateLine = id("senate-line");
    drawAnalysisLine(senateLine.children[0], senateLine.children[1], id("senate-percentages"), 0.7);

    let houseLine = id("house-line");
    drawAnalysisLine(houseLine.children[0], houseLine.children[1], id("house-percentages"), 0.65);

    let sections = qsa("main > section");
    sections.forEach((section) => {
      section.classList.toggle("hidden");
    });
  }

  function drawAnalysisLine(yesLine, noLine, percentages, percentYes) {
      yesLine.style.width = Math.round(percentYes * 500) + "px";
      noLine.style.width = Math.round((1 - percentYes) * 500) + "px";

      percentages.children[0].innerHTML = Math.round(percentYes * 100) + "%";
      percentages.children[1].innerHTML = Math.round((1 - percentYes) * 100) + "%";

      console.log(yesLine.style.width)
  }

  /**
   * Checks the status of a response. Throws an error if the response is not ok.
   * @param {object} response - The response returned from a fetch request.
   * @returns {object} The same response passed in if it is ok, throws an error if not.
   */
  function checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw Error("Error in request: " + response.statusText);
  }

  /**
   * Handles an error in the fetch call by displaying the error message and disabling all buttons.
   */
  function handleError() {
    console.log("error");
  }

  /** ------------------------- Helper Functions  ------------------------- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();