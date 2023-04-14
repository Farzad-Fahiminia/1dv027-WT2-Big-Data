/**
 * Module for bootstrapping.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @version 1.0.0
 */

import { IoCContainer } from '../util/IoCContainer.js'
import { HomeController } from '../controllers/homeController.js'

const iocContainer = new IoCContainer()

iocContainer.register('HomeController', HomeController, {
  singleton: true
})

export const container = Object.freeze(iocContainer)
