/**
 * Home controller.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @version 1.0.0
 */

import { HomeService } from '../services/HomeService.js'

/**
 * Encapsulates a controller.
 */
export class HomeController {
 /**
 * The service.
 *
 * @type {HomeService}
 */
  #service

  /**
   * Initializes a new instance.
   *
   * @param {HomeService} service - A service instantiated from a class with the same capabilities as HomeService.
   */
  constructor (service = new HomeService()) {
    this.#service = service
  }

  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  index (req, res, next) {
    const viewData = this.#service.elasticServiceCall()

    // console.log(viewData)

    res.render('home/index', { viewData } )
  }
}
