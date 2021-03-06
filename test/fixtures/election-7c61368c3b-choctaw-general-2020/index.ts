import { join } from 'path'
import { Fixture } from '../../fixtures'
import election from './election'

export const blankPage1 = new Fixture(join(__dirname, 'blank-p1.png'))
export const blankPage2 = new Fixture(join(__dirname, 'blank-p2.png'))
export const filledInPage1 = new Fixture(join(__dirname, 'filled-in-p1.png'))
export const filledInPage2 = new Fixture(join(__dirname, 'filled-in-p2.png'))
export { election }
