/**
 * Module for the UsersService.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @version 1.0.0
 */

import { Elasticsearch } from "../util/Elasticsearch.js"

const elasticsearch = new Elasticsearch()

/**
 * Encapsulates a service.
 */
export class HomeService {
  /**
   * Handles the elasticServiceCall.
   *
   * @returns {object} - Returns the response object.
   */
  elasticServiceCall (req, res, next) {
    const response = elasticsearch.fetchData(req, res, next)

    return response
  }
}
