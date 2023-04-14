/**
 * Module for the UsersService.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @version 1.0.0
 */

import fs from 'fs'
import { Client } from '@elastic/elasticsearch'

/**
 * Encapsulates a service.
 */
export class Elasticsearch {
/**
 * The service.
 *
 * @type {Client}
 */
  #client

  /**
   * Initializes a new instance.
   *
   * @param {Client} client - A service instantiated from a class with the same capabilities as HomeService.
   */
  constructor () {
    this.#client = new Client({
      node: 'http://localhost:9200',
      auth: {
        username: process.env.ELASTIC_USERNAME,
        password: process.env.ELASTIC_PASSWORD
      },
      tls: {
        ca: fs.readFileSync('/Users/farzad/elasticsearch-8.7.0/config/certs/http_ca.crt'),
        rejectUnauthorized: false
      }
    })
  }
  /**
   * Handles the fetchData.
   *
   * @returns {object} - Returns the response object.
   */
  async fetchData () {

    const response = 'HELLO ELASTIC WORLD!'

    return response
  }
}
