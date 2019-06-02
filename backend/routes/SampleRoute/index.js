/** 
 * routes/SampleRoute/index.js
 * 
 * What it does:
 *   Just an example of a route in koji with a corresponding koji.json
 *   file. The request preview window should show up to your right and
 *   send request should return 'Hello World!'
 * 
 * Things to Change:
 *   Make this route your own, create new routes with this as a base and
 *   edit this file to create any backend routes that you want
 */

import Koji from 'koji-tools';

export default async (req, res) => {
    // Create the Google Maps address
    let mapUrl = `https://www.google.com/maps/place/${Koji.config.strings.companyAddress},${Koji.config.strings.companyCity},${Koji.config.strings.companyState}+${Koji.config.strings.companyZip}`
    mapUrl.replace(/ /g, "+")
    res.status(200).json({ response: mapUrl});
}
