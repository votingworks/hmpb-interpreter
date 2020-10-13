import * as jsfeat from 'jsfeat'
import { BallotPageLayout, Point, Size } from './types'
import { rectCorners } from './utils/geometry'
import { zip } from './utils/iterators'
import matToImageData from './utils/jsfeat/matToImageData'
import readGrayscaleImage from './utils/jsfeat/readGrayscaleImage'

export function mapImageWithPoints(
  imageMat: jsfeat.matrix_t,
  mappedSize: Size,
  fromPoints: Point[],
  toPoints: Point[]
): jsfeat.matrix_t {
  const mappedImage = new jsfeat.matrix_t(
    mappedSize.width,
    mappedSize.height,
    jsfeat.U8C1_t
  )

  if (fromPoints.length === 0) {
    // Nothing to guide mapping, so all we actually want to do is resize.
    // Note also that jsfeat generates a blank image if we try to do a warp
    // perspective with a homography containing no points.
    jsfeat.imgproc.resample(
      imageMat,
      mappedImage,
      mappedSize.width,
      mappedSize.height
    )
  } else {
    const homography = new jsfeat.motion_model.homography2d()
    const transform = new jsfeat.matrix_t(3, 3, jsfeat.F32_t | jsfeat.C1_t)

    homography.run(toPoints, fromPoints, transform, toPoints.length)
    jsfeat.imgproc.warp_perspective(imageMat, mappedImage, transform, 255)
  }

  return mappedImage
}

export function mapScanToTemplate(
  ballot: BallotPageLayout,
  template: BallotPageLayout
): ImageData {
  const ballotMat = readGrayscaleImage(ballot.ballotImage.imageData)
  const templateSize = {
    width: template.ballotImage.imageData.width,
    height: template.ballotImage.imageData.height,
  }
  const ballotPoints: Point[] = []
  const templatePoints: Point[] = []

  for (const [
    { corners: ballotContestCorners },
    { bounds: templateContestBounds },
  ] of zip(ballot.contests, template.contests)) {
    const [ballotTopLeft, , ballotBottomLeft] = ballotContestCorners
    const [templateTopLeft, , templateBottomLeft] = rectCorners(
      templateContestBounds
    )
    ballotPoints.push(ballotTopLeft, ballotBottomLeft)
    templatePoints.push(templateTopLeft, templateBottomLeft)
  }

  return matToImageData(
    mapImageWithPoints(ballotMat, templateSize, ballotPoints, templatePoints)
  )
}
