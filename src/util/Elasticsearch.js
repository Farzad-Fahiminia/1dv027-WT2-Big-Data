/**
 * Module for the UsersService.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @version 1.0.0
 */

import { Client } from '@elastic/elasticsearch'
import fs from 'fs'

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
      node: 'https://localhost:9200',
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

    // const response = 'HELLO ELASTIC WORLD!'
    const response = await this.#client.search({ index: 'netflixdata', body: { size: 30 } })

    response.hits.hits.map(title => {
      console.log(title)
    })

    return response
  }
}
