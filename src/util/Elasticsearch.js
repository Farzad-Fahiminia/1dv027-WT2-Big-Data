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
      node: process.env.ELASTIC_URL,
      auth: {
        username: process.env.ELASTIC_USERNAME,
        password: process.env.ELASTIC_PASSWORD
      }
    })
  }
  
  /**
   * Handles the fetchData.
   *
   * @returns {object} - Returns the response object.
   */
  async fetchData (req, res, next) {
    try {
      const movieCollection = []
      const response = await this.#client.search({ index: 'netflixdata', body: {
        size: 10,
        query: {
          match: { type: 'MOVIE' }
        },
        sort: [
          {
            imdb_score: {
              order: 'desc'
            }
          }
        ]
      } })
  
      response.body.hits.hits.forEach(title => {
        const movieObject = {
          title: title._source.title,
          type: title._source.type,
          releaseYear: title._source.release_year,
          imdbScore: title._source.imdb_score
        }
        movieCollection.push(movieObject)
      })
  
      return movieCollection
      
    } catch (error) {
      next(error)
    }
  }
}
